import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous avez un projet en tête ? Discutons-en !
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est là pour répondre à vos questions et vous accompagner dans la création d'un site web qui correspond à vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Formulaire de contact rapide</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <Input id="name" required placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <Input id="email" type="email" required placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Numéro de téléphone
                    </label>
                    <Input id="phone" type="tel" placeholder="Votre numéro (facultatif)" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Objet de votre demande *
                    </label>
                    <Input 
                      id="subject" 
                      required 
                      placeholder="Ex: création de site, SEO, design graphique..." 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message détaillé *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Décrivez votre projet ou posez vos questions"
                      className="min-h-[150px]"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Envoyer ma demande
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Prendre rendez-vous</h3>
              <p className="text-muted-foreground mb-4">
                Planifiez un appel ou une rencontre en visioconférence avec l'un de nos experts.
              </p>
              <Button className="w-full" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Réserver un créneau
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact direct</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:contact@webeure.com" className="hover:text-primary transition-colors">
                    contact@webeure.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Disponible du lundi au vendredi de 9h à 18h</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Paris, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Chat en ligne disponible</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Combien coûte la création d'un site web chez Webeure ?</h4>
                  <p className="text-sm text-muted-foreground">Nos tarifs varient selon vos besoins spécifiques. Contactez-nous pour un devis personnalisé.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Proposez-vous des services de maintenance ?</h4>
                  <p className="text-sm text-muted-foreground">Oui, nous proposons des services de maintenance et de support continu pour votre site.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Combien de temps pour développer un site sur mesure ?</h4>
                  <p className="text-sm text-muted-foreground">Le délai varie selon la complexité du projet, généralement entre 4 et 12 semaines.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};