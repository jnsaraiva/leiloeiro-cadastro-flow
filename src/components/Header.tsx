import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="https://res.cloudinary.com/dcd81ymqx/image/upload/v1755458883/LLLogo_zogkst.png" alt="LeilãoLovers" />
          </div>
          <div className="hidden md:block">
            <Button variant="outline">
              Acessar minha conta
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
