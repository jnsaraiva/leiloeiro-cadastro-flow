import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import Banner from "@/components/Banner";
import RegisterForm from "@/components/RegisterForm"; // Import the RegisterForm component

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Banner />
      <div className="flex flex-col items-center mb-8">
        <img src="/logo-placeholder.svg" alt="Leiloeiro Logo" className="h-24 w-24 mb-4" />
        <h1 className="text-4xl font-bold text-foreground">Leiloeiro Cadastro Flow</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Gerencie seus leilões e cadastros com facilidade.
        </p>
      </div>

      {/* Use the RegisterForm component directly */}
      <RegisterForm />

      <div className="flex space-x-4 mt-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default Index;
