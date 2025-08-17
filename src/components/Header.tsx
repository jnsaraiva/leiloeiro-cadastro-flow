import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-4">
              <img
                src="https://res.cloudinary.com/dcd81ymqx/image/upload/v1755466311/leilaolovers_preta_ok6axy.png"
                alt="Leilão Lovers Logo"
                className="h-[60px] w-auto"
              />
              <span className="text-2xl font-bold text-gray-800">
                leilaolovers.com.br
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">
              <User className="h-4 w-4" />
              Acessar minha conta
            </a>
            <a href="#" className="form-button !w-auto">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrinho
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
