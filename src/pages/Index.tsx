import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code,
  Palette,
  Search,
  Shield,
  Smartphone,
  Users,
  Check,
} from "lucide-react";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ContactSection } from "@/components/contact/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Agence Web Premium
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Créez votre site web sur mesure avec{" "}
              <span className="text-gradient">Webeure</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Design élégant, solutions personnalisées et tarifs adaptés. Parce que
              chaque entreprise mérite un site web qui reflète son identité.
            </p>
            <Button size="lg" className="rounded-full">
              Découvrir nos services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Services
            </h2>
            <p className="text-muted-foreground">
              Nous faisons bien plus que créer des sites web !
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer votre présence en ligne avec nos solutions sur mesure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <card.icon className="w-12 h-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  <ul className="space-y-2">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
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

const services = [
  {
    icon: Palette,
    title: "Design UX/UI sur mesure",
    description:
      "Une expérience utilisateur optimisée et un design esthétique pour votre site.",
  },
  {
    icon: Search,
    title: "Marketing digital & SEO",
    description:
      "Attirez plus de clients avec des stratégies de référencement sur mesure.",
  },
  {
    icon: Code,
    title: "Développement web",
    description: "Des sites performants et fiables pour tous vos besoins.",
  },
  {
    icon: Smartphone,
    title: "Sites responsifs",
    description:
      "Votre site s'adapte parfaitement à tous les appareils mobiles.",
  },
  {
    icon: Shield,
    title: "Sécurité garantie",
    description:
      "Protection optimale de votre site et des données de vos clients.",
  },
  {
    icon: Users,
    title: "Support client",
    description:
      "Une équipe dédiée pour vous accompagner à chaque étape de votre projet.",
  },
];

const features = [
  {
    icon: Users,
    title: "Expertise dédiée PME",
    description: "Nous comprenons vos besoins spécifiques.",
  },
  {
    icon: Shield,
    title: "Solutions flexibles",
    description: "Des tarifs adaptés à votre budget.",
  },
  {
    icon: Code,
    title: "Support continu",
    description: "Nous sommes à vos côtés à chaque étape.",
  },
];

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

export default Index;
