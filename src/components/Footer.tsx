const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} leilaolovers.com.br. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
