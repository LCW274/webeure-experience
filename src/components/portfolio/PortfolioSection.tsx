import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "CarConnect",
    description: "Application de location de voitures moderne et intuitive",
    image: "/lovable-uploads/9bcd42dd-14c3-4f0e-b0c2-ffcfe805cf46.png",
    link: "https://carconnectfr.netlify.app/",
    features: ["Interface moderne", "Système de réservation", "Design responsive"]
  },
  {
    title: "Estate Estimator Pro",
    description: "Plateforme d'estimation immobilière professionnelle",
    image: "/lovable-uploads/2f1a5009-5162-41ea-b9e0-840c00113057.png",
    link: "https://preview--estate-estimator-pro.lovable.app/",
    features: ["Estimations précises", "Interface intuitive", "Analyses détaillées"]
  }
];

export const PortfolioSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Réalisations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents et comment nous aidons nos clients à réussir en ligne
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden bg-secondary/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="ghost"
                    className="group/button hover:text-primary transition-colors"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Voir le projet
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};