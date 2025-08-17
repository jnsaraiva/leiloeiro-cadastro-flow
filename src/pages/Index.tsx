import RegisterForm from "@/components/RegisterForm";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import ReviewCard from "@/components/ReviewCard";
import { Check } from "lucide-react";

const Index = () => {
  const benefits = [
    "Automatize seus anúncios com inteligência artificial",
    "Remova fundo de imagens em 1 clique",
    "Publique direto nas redes sociais oficiais da LeilãoLovers",
  ];

  const pricingPlans = [
    {
      title: "Créditos Avulsos",
      description: "Compre créditos e use quando quiser.",
      price: "R$ 49",
      features: ["Pacote inicial com 10 anúncios", "Validade de 1 ano", "Suporte via e-mail"],
      ctaText: "Comprar créditos",
    },
    {
      title: "Plano Pro",
      description: "Para leiloeiros com fluxo constante de peças.",
      price: "R$ 199",
      features: ["Até 30 anúncios por mês", "Inclui IA e edição de imagens", "Relatórios básicos de desempenho"],
      ctaText: "Assinar Pro",
      highlighted: true,
    },
    {
      title: "Plano Premium",
      description: "Para grandes acervos e leiloeiras.",
      price: "R$ 399",
      features: ["Anúncios ilimitados", "Suporte prioritário 24/7", "Relatórios avançados e insights"],
      ctaText: "Assinar Premium",
    },
  ];

  const reviews = [
    {
      name: "Roberto Almeida",
      title: "Leiloeiro, Arte &amp; Antiguidades",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      reviewText: "A plataforma transformou a forma como divulgamos nossas peças. A automação com IA para criar anúncios é simplesmente fantástica e nos poupa horas de trabalho.",
    },
    {
      name: "Cláudia Martins",
      title: "Gerente de Acervo, Leilões Clássicos",
      avatarUrl: "https://i.pravatar.cc/150?img=35",
      rating: 5,
      reviewText: "O alcance que ganhamos nas redes sociais da LeilãoLovers é incomparável. Nossas peças raras agora são vistas por colecionadores que antes não conseguíamos alcançar.",
    },
    {
      name: "Fernando Costa",
      title: "Proprietário, Costa Leilões",
      avatarUrl: "https://i.pravatar.cc/150?img=68",
      rating: 4,
      reviewText: "A ferramenta de remoção de fundo é um divisor de águas. As fotos dos nossos lotes ficaram muito mais profissionais, o que aumentou o interesse e os lances.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Header />

      <main className="pt-[340px]">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Coluna Esquerda: Formulário */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Comece a anunciar agora mesmo
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                  Cadastre-se grátis e valide sua conta em segundos.
                </p>
              </div>
              <RegisterForm />
            </div>

            {/* Coluna Direita: Conteúdo Publicitário */}
            <div className="mt-12 lg:mt-0">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                A vitrine digital perfeita para seus leilões.
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Com a LeilãoLovers, você foca no leilão e nós cuidamos da divulgação.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-lg text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-md text-gray-500 italic">
                "Colecionadores de todo o Brasil já estão conectados. Seja parte da nova forma de promover suas peças exclusivas."
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                O que nossos clientes dizem
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Veja como a LeilãoLovers está ajudando leiloeiros a alcançarem mais colecionadores.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Escolha o melhor plano para você
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Planos flexíveis que crescem com o seu negócio. Cancele quando quiser.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.title} {...plan} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
