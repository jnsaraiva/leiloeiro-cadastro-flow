import { ShoppingCart, User } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#">
              <Logo />
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
