import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dcd81ymqx/image/upload/v1755466311/leilaolovers_preta_ok6axy.png"
                alt="Leilão Lovers Logo"
                className="h-10 w-auto" // Adjusted logo size
              />
              <span className="text-xl font-bold text-gray-800">
                leilaolovers.com.br
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
            >
              <User className="h-4 w-4" />
              Acessar minha conta
            </a>
            <a href="#" className="form-button !w-auto">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrinho
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 border-t">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Acessar minha conta
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Carrinho
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
