import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({
  title,
  price,
  originalPrice,
  features,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <Card className={cn(
      "relative p-6 transition-all duration-300 hover:shadow-lg",
      isPopular ? "border-primary shadow-md" : ""
    )}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 text-sm text-white rounded-full">
          Recommandé
        </span>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-1">
          <span className="text-muted-foreground line-through text-sm">
            {originalPrice}€ TTC
          </span>
          <p className="text-4xl font-bold">{price}€</p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className="w-full" variant={isPopular ? "default" : "outline"}>
        Contactez-moi pour votre projet
      </Button>
    </Card>
  );
};