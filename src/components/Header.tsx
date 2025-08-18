import { ShoppingCart, User, Menu } from "lucide-react";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#">
              <Logo />
            </a>
          </div>
          {isMobile ? (
            <Drawer>
              <DrawerTrigger asChild>
                <button aria-label="Abrir menu" className="p-2">
                  <Menu className="h-8 w-8" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-4 mt-4 flex flex-col gap-4">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-800 hover:text-gray-900 flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors"
                  >
                    <User className="h-5 w-5 text-gray-600" />
                    Acessar minha conta
                  </a>
                  <a href="#" className="form-button !w-full text-base">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Carrinho
                  </a>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <div className="flex items-center space-x-6">
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
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
