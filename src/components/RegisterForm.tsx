import { useState } from "react";
import { Building2, Mail, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  nome_empresa: string;
  email: string;
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
    senha: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const validateForm = (): boolean => {
    if (!formData.nome_empresa.trim()) {
      setMessage({ type: "error", text: "Nome da empresa é obrigatório" });
      return false;
    }

    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "E-mail é obrigatório" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: "error", text: "E-mail deve ter um formato válido" });
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
      // Replace with actual webhook URL
      const webhookUrl = "https://SEU_DOMINIO_DO_N8N/webhook/leiloeiro/cadastro";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (data.status === "sucesso") {
        setMessage({ type: "success", text: "Cadastro realizado com sucesso!" });
        setFormData({ nome_empresa: "", email: "", senha: "" });
        toast.success("Cadastro realizado com sucesso!");
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

  return (
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
          />
        </div>

        {/* Password hint */}
        <div className="text-sm text-muted-foreground">
          A senha deve conter pelo menos 8 caracteres para maior segurança.
        </div>
      </div>

      {/* Submit Button */}
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

      {/* Message Display */}
      {message && (
        <div className={message.type === "success" ? "message-success" : "message-error"}>
          {message.text}
        </div>
      )}
    </form>
  );
};

export default RegisterForm;