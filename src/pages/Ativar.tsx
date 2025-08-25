import { useEffect, useState } from "react";
import { toast } from "sonner"; // Importa a função do Sonner
import { Loader2 } from "lucide-react"; // Importa um ícone de carregamento

const Ativar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleActivation = async () => {
      const params = new URLSearchParams(window.location.search);
      const email = params.get("email");
      const otp_code = params.get("otp_code");

      if (!email || !otp_code) {
        setIsLoading(false);
        toast.error("Link de ativação inválido.");
        return;
      }

      try {
        // ✅ Envia a requisição para o seu webhook do n8n
        const response = await fetch(
          "https://n8n.leilaolovers.com.br/webhook/leiloeiro/verify-otp",
          {
            method: "POST", // Use POST como o seu webhook está configurado
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, otp_code }),
          }
        );

        const data = await response.json();

        if (data.status === "sucesso") {
          toast.success("✅ Sua conta foi ativada com sucesso!");
        } else {
          // ✅ AQUI É ONDE A MENSAGEM DO N8N VAI PARA O POP-UP
          const errorMessage = data.message || "Ocorreu um erro desconhecido.";
          toast.error(errorMessage);
        }
      } catch (error) {
        console.error("Erro na comunicação com o backend:", error);
        toast.error("❌ Erro de conexão. Tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    handleActivation();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
        <p className="mt-4 text-lg text-muted-foreground">Verificando seu link de ativação...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-2xl font-bold">Verificação Completa</h1>
      <p className="mt-4">
        A verificação da sua conta foi processada.
      </p>
      <a href="/login" className="mt-6 text-primary hover:underline">
        Clique aqui para fazer login
      </a>
    </div>
  );
};

export default Ativar;
