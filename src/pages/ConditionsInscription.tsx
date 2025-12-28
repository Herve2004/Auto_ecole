import { Layout } from "@/components/layout/Layout";
import { FileText, CheckCircle } from "lucide-react";

const documents = [
  "Pièce d'identité en cours de validité",
  "Justificatif de domicile de moins de 6 mois",
  "4 photos d'identité format numérique",
  "ASSR 2 ou ASR (si né après le 01/01/1988)",
  "Certificat d'hébergement si nécessaire",
];

const ConditionsInscription = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Conditions d'<span className="text-primary">inscription</span>
        </h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" /> Documents requis
          </h2>
          <ul className="space-y-4">
            {documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-foreground">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default ConditionsInscription;
