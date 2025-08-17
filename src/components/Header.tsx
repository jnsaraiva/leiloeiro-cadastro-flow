import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-[140px] w-[140px]" src="https://res.cloudinary.com/dcd81ymqx/image/upload/v1755458883/LLLogo_zogkst.png" alt="LeilãoLovers" />
          </div>

          {/* Banner Placeholder */}
          <div className="w-full bg-gray-700 text-white flex items-center justify-center h-32 my-4 rounded-md">
            <span className="text-lg font-medium">Banner (e.g., 970px x 120px)</span>
          </div>

          {/* Bottom Bar */}
          <div className="w-full flex items-center justify-between">
            <div className="text-sm font-semibold text-primary">
              <span>Cadastre-se e ganhe 3 créditos!</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                Acessar minha conta
              </Button>
              <Button variant="default">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Carrinho
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
