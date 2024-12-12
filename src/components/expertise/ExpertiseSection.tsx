import { motion } from "framer-motion";
import { ExpertiseCard } from "./ExpertiseCard";
import { Palette, Search, Code } from "lucide-react";

const expertiseCards = [
  {
    icon: Palette,
    title: "Design UX/UI Personnalisé",
    description: "Créez une expérience utilisateur unique et mémorable pour vos visiteurs",
    features: [
      "Maquettes et prototypes interactifs",
      "Design responsive pour tous les appareils",
      "Identité visuelle cohérente",
      "Interfaces intuitives et modernes"
    ]
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description: "Optimisez votre visibilité en ligne et attirez plus de clients qualifiés",
    features: [
      "Audit SEO complet",
      "Optimisation technique",
      "Stratégie de mots-clés",
      "Suivi des performances"
    ]
  },
  {
    icon: Code,
    title: "Développement Web",
    description: "Des solutions techniques robustes et évolutives pour votre entreprise",
    features: [
      "Technologies modernes",
      "Performance optimisée",
      "Sécurité renforcée",
      "Maintenance régulière"
    ]
  }
];

export const ExpertiseSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-[0.03]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Notre Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous pouvons transformer votre présence en ligne avec nos solutions sur mesure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertiseCards.map((card, index) => (
            <ExpertiseCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};