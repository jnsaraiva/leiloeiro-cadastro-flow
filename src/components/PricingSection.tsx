import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Escolha o melhor plano para você
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Créditos Avulsos */}
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-xl font-bold text-foreground">
                Créditos Avulsos
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Compre créditos e use quando quiser
              </p>
              <p className="text-sm text-muted-foreground">
                Pacote inicial com 10 anúncios
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">R$ 49</span>
              </div>
              <Button className="w-full" variant="outline">
                Comprar créditos
              </Button>
            </CardContent>
          </Card>

          {/* Plano Pro */}
          <Card className="bg-card border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Recomendado
              </span>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-xl font-bold text-foreground">
                Plano Pro
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Para leiloeiros ativos
              </p>
              <p className="text-sm text-muted-foreground">
                Até 30 anúncios por mês
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">R$ 199</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <div className="mb-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Check className="w-4 h-4 mr-2 text-success" />
                  Inclui IA e edição de imagens
                </div>
              </div>
              <Button className="w-full">
                Assinar Pro
              </Button>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-xl font-bold text-foreground">
                Plano Premium
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Para grandes acervos
              </p>
              <p className="text-sm text-muted-foreground">
                Anúncios ilimitados
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">R$ 399</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Suporte prioritário + relatórios avançados
                </p>
              </div>
              <Button className="w-full" size="lg">
                Assinar Premium
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;