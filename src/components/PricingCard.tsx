import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

const PricingCard = ({ title, description, price, features, ctaText, highlighted = false }: PricingCardProps) => {
  return (
    <div className={`rounded-lg shadow-sm p-8 border ${highlighted ? 'border-primary bg-white' : 'bg-white'}`}>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground mt-2">{description}</p>
      <div className="mt-6">
        <span className="text-4xl font-extrabold text-foreground">{price}</span>
        {title !== "Créditos Avulsos" && <span className="text-base font-medium text-muted-foreground">/mês</span>}
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full mt-8 ${highlighted ? '' : 'bg-primary/90 hover:bg-primary'}`}
        variant={highlighted ? 'default' : 'secondary'}
        size={highlighted ? 'lg' : 'default'}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;
