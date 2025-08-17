import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          A Plataforma Definitiva para
          <span className="block text-primary">Colecionadores Apaixonados</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Descubra, negocie e adquira itens raros em um ambiente seguro e
          confiável. Junte-se à nossa comunidade e eleve sua coleção a um novo
          patamar.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="form-button !w-auto">Comece a Explorar</Button>
          <Button size="lg" variant="outline" className="!w-auto">Saiba Mais</Button>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Destaques da Semana
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for featured items */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Item Raro #{item}</h3>
                <p className="mt-2 text-gray-600">Uma breve descrição sobre este item incrível que está em leilão.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">R$ 1.200,00</span>
                  <Button size="sm">Dar Lance</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
