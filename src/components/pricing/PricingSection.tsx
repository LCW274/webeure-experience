import { motion } from "framer-motion";
import { PricingCard } from "./PricingCard";

const plans = [
  {
    title: "Plan de base",
    price: "1700",
    originalPrice: "2500",
    features: [
      "Design personnalisé",
      "Création de 5 pages",
      "Optimisation SEO de base",
      "Site responsive",
      "Intégration des réseaux sociaux",
      "Formation à la gestion du site",
    ],
  },
  {
    title: "Plan standard",
    price: "2700",
    originalPrice: "3500",
    features: [
      "Design personnalisé",
      "Création de 5 à 10 pages",
      "Optimisation SEO avancée",
      "Site responsive",
      "Intégration des réseaux sociaux",
      "Formation à la gestion du site",
    ],
    isPopular: true,
  },
  {
    title: "Plan Premium",
    price: "3700",
    originalPrice: "4500",
    features: [
      "Design personnalisé",
      "Création de 10 à 15 pages",
      "Optimisation SEO complète",
      "Site responsive",
      "Assistance technique 6 mois",
      "Formation à la gestion du site",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Tarifs
          </h2>
          <p className="text-muted-foreground">
            Des solutions adaptées à tous les budgets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};