import { useRef } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ExpertiseSection } from "@/components/expertise/ExpertiseSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ContactSection } from "@/components/contact/ContactSection";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection scrollToServices={scrollToServices} />
      <ExpertiseSection />
      <div ref={servicesRef}>
        <PortfolioSection />
      </div>
      <PricingSection />
      <ContactSection />
      
      <footer className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Webeure. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;