import { ContactFormBasic } from "@/components/contact/ContactFormBasic";

const ContactBasic = () => {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Plan de base</h1>
          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Ce plan inclut :</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Design personnalisé</li>
              <li>• Création de 5 pages</li>
              <li>• Optimisation SEO de base</li>
              <li>• Formation à la gestion du site</li>
            </ul>
          </div>
          <ContactFormBasic />
        </div>
      </div>
    </div>
  );
};

export default ContactBasic;