import { Check } from "lucide-react";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            
            {/* Left Column - Registration Form */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Comece a anunciar agora mesmo
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Cadastre-se grátis e valide sua conta em segundos
                </p>
              </div>
              <RegisterForm />
            </div>

            {/* Right Column - Marketing Content */}
            <div className="space-y-8 lg:pl-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  A vitrine digital perfeita para seus leilões.
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Com a LeilãoLovers, você foca no leilão e nós cuidamos da divulgação.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">
                    Automatize seus anúncios com inteligência artificial
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">
                    Remova fundo de imagens em 1 clique
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">
                    Publique direto nas redes sociais oficiais da LeilãoLovers
                  </p>
                </div>
              </div>

              {/* Trust Text */}
              <div className="bg-accent rounded-lg p-6 border border-border">
                <p className="text-foreground text-lg leading-relaxed">
                  "Colecionadores de todo o Brasil já estão conectados. Seja parte da nova forma de promover suas peças exclusivas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
};

export default Index;
