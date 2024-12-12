import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = ({ scrollToServices }: { scrollToServices: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 hero-pattern opacity-[0.03]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Agence Web Premium
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Créez votre site web sur mesure avec{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Le Concept Webeure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Design élégant, solutions personnalisées et tarifs adaptés. Parce que
            chaque entreprise mérite un site web qui reflète son identité.
          </p>
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
            onClick={scrollToServices}
          >
            Découvrir nos services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};