import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Quel est l'âge minimum pour passer le permis B ?", a: "Vous pouvez commencer la formation dès 17 ans en conduite accompagnée (AAC) et passer l'examen à 18 ans." },
  { q: "Combien d'heures de conduite sont nécessaires ?", a: "Le minimum légal est de 20 heures, mais la moyenne nationale est d'environ 35 heures pour être prêt à l'examen." },
  { q: "Puis-je réviser le code en ligne ?", a: "Oui, notre plateforme de cours en ligne est accessible 24h/24 et incluse dans tous nos forfaits." },
  { q: "Quels documents fournir pour l'inscription ?", a: "Pièce d'identité, justificatif de domicile, 4 photos d'identité et ASSR2 ou ASR si vous êtes né après 1988." },
  { q: "Proposez-vous des facilités de paiement ?", a: "Oui, nous proposons le paiement en 2, 3 ou 4 fois sans frais pour toutes nos formations." },
  { q: "Combien de temps est valable le code ?", a: "L'examen du code est valable 5 ans ou pour 5 tentatives à l'examen pratique." },
];

const FAQ = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Questions <span className="text-primary">fréquentes</span>
        </h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6">
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
