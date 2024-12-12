import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "lucide-react";

export const ContactFormPremium = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="p-8">
        <h3 className="text-2xl font-semibold mb-6">Formulaire de contact - Plan premium</h3>
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
                Numéro de téléphone *
              </label>
              <Input id="phone" type="tel" required placeholder="Votre numéro" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Nom de l'entreprise *
              </label>
              <Input id="company" required placeholder="Nom de votre entreprise" />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-2">
                Site web actuel (si existant)
              </label>
              <Input id="website" type="url" placeholder="https://votresite.com" />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget estimé *
              </label>
              <Input id="budget" required placeholder="Votre budget approximatif" />
            </div>
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium mb-2">
                Date souhaitée de mise en ligne *
              </label>
              <Input id="deadline" type="date" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Description détaillée du projet *
              </label>
              <Textarea
                id="message"
                required
                placeholder="Décrivez en détail vos besoins, objectifs, fonctionnalités souhaitées et toute autre information pertinente"
                className="min-h-[200px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-4">
                Disponibilités pour un rendez-vous
              </label>
              <Button type="button" className="w-full" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Planifier un rendez-vous
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Envoyer ma demande
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};