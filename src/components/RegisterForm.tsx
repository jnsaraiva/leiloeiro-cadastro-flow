import { useState } from "react";
import { Building2, Mail, Lock, Loader2, Phone, RefreshCw, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface FormData {
  nome_empresa: string;
  email: string;
  whatsapp: string;
  senha: string;
}

interface ApiResponse {
  status: string;
  message?: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome_empresa: "",
    email: "",
    whatsapp: "",
    senha: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  
  // OTP verification states
  const [verificationStep, setVerificationStep] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [verificationMethod, setVerificationMethod] = useState<"email" | "whatsapp" | null>(null);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpMessage, setOtpMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const disposableDomains = [
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'yopmail.com',
    'sharklasers.com'
  ];

  const validateForm = (): boolean => {
    if (!formData.nome_empresa.trim()) {
      setMessage({ type: "error", text: "Nome da empresa é obrigatório" });
      return false;
    }

    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "E-mail é obrigatório" });
      return false;
    }

    const emailDomain = formData.email.split('@')[1].toLowerCase();
    if (disposableDomains.includes(emailDomain)) {
      setMessage({ type: "error", text: "E-mails temporários não são permitidos!" });
      return false;
    }
  

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: "error", text: "E-mail deve ter um formato válido" });
      return false;
    }

    if (!formData.whatsapp.trim()) {
      setMessage({ type: "error", text: "WhatsApp é obrigatório" });
      return false;
    }

    const whatsappRegex = /^(\+?55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;
    if (!whatsappRegex.test(formData.whatsapp.replace(/\s/g, ''))) {
      setMessage({ type: "error", text: "WhatsApp deve ter um formato válido (ex: 11999999999)" });
      return false;
    }

    if (!formData.senha) {
      setMessage({ type: "error", text: "Senha é obrigatória" });
      return false;
    }

    if (formData.senha.length < 8) {
      setMessage({ type: "error", text: "Senha deve ter pelo menos 8 caracteres" });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // ✅ URL do webhook de cadastro inicial
      const webhookUrl = "https://n8n.leilaolovers.com.br/webhook-test/leiloeiro/cadastro2";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();
      
      // ✅ A resposta agora é "aguardando_verificacao"
      if (data.status === "aguardando_verificacao") {
        setMessage({ type: "success", text: "Dados validados! Agora confirme sua conta." });
        setVerificationStep(true);
        toast.success("Cadastro validado! Escolha o método de verificação.");
      } else {
        const errorMessage = data.message || "Erro ao realizar cadastro";
        setMessage({ type: "error", text: errorMessage });
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage = "Erro de conexão. Tente novamente.";
      setMessage({ type: "error", text: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setMessage(null);
  };
  
  // ✅ Nova função para enviar o código após o usuário escolher o método
  const handleSendOtp = async (method: "email" | "whatsapp" | null) => {
    if (!method) {
      setOtpMessage({ type: "error", text: "Selecione um método de verificação" });
      return;
    }

    setVerificationMethod(method);
    setIsResending(true);
    setOtpMessage(null);

    try {
      // ✅ URL do webhook para envio/reenvio do código
      const webhookUrl = "https://n8n.leilaolovers.com.br/webhook/leiloeiro/send-otp";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          whatsapp: formData.whatsapp,
          verification_method: method
        }),
      });

      const data: ApiResponse = await response.json();
      
      if (data.status === "aguardando_verificacao") {
        setOtpMessage({ type: "success", text: `Código enviado para o ${method}!` });
        toast.success(`Código enviado!`);
      } else {
        const errorMessage = data.message || "Erro ao enviar código";
        setOtpMessage({ type: "error", text: errorMessage });
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage = "Erro de conexão. Tente novamente.";
      setOtpMessage({ type: "error", text: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsResending(false);
    }
  };
  
  const handleVerifyOtp = async () => {
    if (!otpCode || otpCode.length !== 6) {
      setOtpMessage({ type: "error", text: "Digite o código de 6 dígitos" });
      return;
    }

    setIsVerifying(true);
    setOtpMessage(null);

    try {
      // ✅ URL do webhook para verificação do código
      const verifyUrl = "https://n8n.leilaolovers.com.br/webhook/leiloeiro/verify-otp";
      
      const response = await fetch(verifyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp_code: otpCode,
        }),
      });

      const data: ApiResponse = await response.json();
      
      if (data.status === "sucesso") {
        setOtpMessage({ type: "success", text: "✅ Conta verificada com sucesso!" });
        toast.success("Conta verificada com sucesso!");
        // Reset form after successful verification
        setTimeout(() => {
          setFormData({ nome_empresa: "", email: "", whatsapp: "", senha: "" });
          setVerificationStep(false);
          setOtpCode("");
          setVerificationMethod(null);
        }, 2000);
      } else {
        setOtpMessage({ type: "error", text: "❌ Código inválido. Tente novamente ou reenvie o código." });
        toast.error("Código inválido");
      }
    } catch (error) {
      const errorMessage = "❌ Erro de conexão. Tente novamente.";
      setOtpMessage({ type: "error", text: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="form-container p-8 space-y-6">
        <div className="space-y-4">
          {/* Nome da Empresa */}
          <div className="relative">
            <Building2 className="input-icon" />
            <input
              type="text"
              name="nome_empresa"
              value={formData.nome_empresa}
              onChange={handleInputChange}
              placeholder="Nome da Empresa"
              className="form-input"
              required
              disabled={verificationStep}
            />
          </div>

          {/* E-mail */}
          <div className="relative">
            <Mail className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-mail corporativo"
              className="form-input"
              required
              disabled={verificationStep}
            />
          </div>

          {/* WhatsApp */}
          <div className="relative">
            <Phone className="input-icon" />
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="WhatsApp (ex: 11999999999)"
              className="form-input"
              required
              disabled={verificationStep}
            />
          </div>

          {/* Senha */}
          <div className="relative">
            <Lock className="input-icon" />
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              placeholder="Senha (mínimo 8 caracteres)"
              className="form-input"
              required
              minLength={8}
              disabled={verificationStep}
            />
          </div>

          {/* Password hint */}
          {!verificationStep && (
            <div className="text-sm text-muted-foreground">
              A senha deve conter pelo menos 8 caracteres para maior segurança.
            </div>
          )}
        </div>

        {/* Submit Button */}
        {!verificationStep && (
          <button
            type="submit"
            disabled={isLoading}
            className="form-button"
          >
            {isLoading ? (
              <>
                <Loader2 className="spinner" />
                Cadastrando...
              </>
            ) : (
              "Cadastrar"
            )}
          </button>
        )}

        {/* Message Display */}
        {message && (
          <div className={message.type === "success" ? "message-success" : "message-error"}>
            {message.text}
          </div>
        )}
      </form>

      {/* OTP Verification Section */}
      {verificationStep && (
        <div className="form-container p-8 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Obrigado pelo seu cadastro! 🎉</h2>
            <p className="text-muted-foreground">
              Escolha como deseja confirmar sua conta: pelo e-mail cadastrado ou pelo WhatsApp.<br />
              Você receberá um código de 6 dígitos, insira-o abaixo para validar sua conta.
            </p>
          </div>

          {/* Verification Method Selection */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">Método de verificação:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                // ✅ Atualizado para a nova função
                onClick={() => handleSendOtp("email")}
                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                  verificationMethod === "email"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-input hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Mail className="w-4 h-4 mx-auto mb-1" />
                Confirmar via E-mail
              </button>
              <button
                type="button"
                // ✅ Atualizado para a nova função
                onClick={() => handleSendOtp("whatsapp")}
                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                  verificationMethod === "whatsapp"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-input hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Phone className="w-4 h-4 mx-auto mb-1" />
                Confirmar via WhatsApp
              </button>
            </div>
          </div>

          {/* Resend Code Button */}
          <button
            type="button"
            // ✅ Atualizado para a nova função
            onClick={() => handleSendOtp(verificationMethod)}
            disabled={isResending || !verificationMethod}
            className="form-button bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            {isResending ? (
              <>
                <Loader2 className="spinner" />
                Reenviando...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                📨 Reenviar código
              </>
            )}
          </button>

          {/* OTP Input */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">Código de verificação:</label>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otpCode}
                onChange={(value) => setOtpCode(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {/* Verify Button */}
          <button
            type="button"
            onClick={handleVerifyOtp}
            disabled={isVerifying || otpCode.length !== 6}
            className="form-button"
          >
            {isVerifying ? (
              <>
                <Loader2 className="spinner" />
                Verificando...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Validar Código
              </>
            )}
          </button>

          {/* OTP Message Display */}
          {otpMessage && (
            <div className={otpMessage.type === "success" ? "message-success" : "message-error"}>
              {otpMessage.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
