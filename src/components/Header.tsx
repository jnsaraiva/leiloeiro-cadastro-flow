import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo-placeholder.svg" 
            alt="LeilãoLovers Logo" 
            className="h-8 w-8 mr-2" 
          />
          <span className="font-bold text-xl text-foreground">LeilãoLovers</span>
        </div>
        
        {/* CTA Button */}
        <Button variant="outline" className="text-foreground border-border hover:bg-accent">
          Acessar minha conta
        </Button>
      </div>
    </header>
  );
};

export default Header;