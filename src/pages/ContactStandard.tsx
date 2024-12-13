import { ContactFormStandard } from "@/components/contact/ContactFormStandard";
import { MapPin } from "lucide-react";

const ContactStandard = () => {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Plan standard
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-5 h-5" />
              <p>Evreux, Eure (27)</p>
            </div>
            <a 
              href="https://optimise-ton-site-web.leconceptwebeure.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Découvrir notre hébergement Hostinger
            </a>
          </div>
          <div className="bg-primary/10 p-6 rounded-lg mb-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4">Ce plan inclut :</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Design personnalisé
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Création de 5 à 10 pages
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Optimisation SEO avancée
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Formation à la gestion du site
              </li>
            </ul>
          </div>
          <ContactFormStandard />
        </div>
      </div>
    </div>
  );
};

export default ContactStandard;