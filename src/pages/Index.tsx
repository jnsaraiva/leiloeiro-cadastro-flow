import RegisterForm from "@/components/RegisterForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          {/* Logo Frame */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-20 bg-card border-2 border-dashed border-muted rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Logo Leilão Lovers</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Cadastro de Leiloeiros
          </h1>
          <p className="text-muted-foreground">
            Registre sua empresa para acessar nossa plataforma
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Index;