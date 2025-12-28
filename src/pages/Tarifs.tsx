import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight, Phone } from "lucide-react";

const pricingPlans = [
  {
    id: "am",
    name: "Permis AM",
    subtitle: "Cyclomoteur / Voiturette",
    price: "299",
    features: [
      "Formation 8 heures",
      "2h hors circulation",
      "4h en circulation",
      "2h sensibilisation",
      "Livret d'apprentissage",
    ],
    popular: false,
  },
  {
    id: "a1",
    name: "Permis A1",
    subtitle: "Moto 125cc",
    price: "799",
    features: [
      "Code moto inclus",
      "8h de plateau",
      "12h de circulation",
      "Équipement fourni",
      "Examens inclus",
    ],
    popular: false,
  },
  {
    id: "a2",
    name: "Permis A2",
    subtitle: "Moto intermédiaire",
    price: "899",
    features: [
      "Code ETM inclus",
      "8h de plateau",
      "12h de circulation",
      "Équipement complet",
      "Préparation examen",
    ],
    popular: false,
  },
  {
    id: "b",
    name: "Permis B",
    subtitle: "Voiture",
    price: "1199",
    features: [
      "Code en ligne illimité",
      "20h de conduite minimum",
      "Simulateur de conduite",
      "Accompagnement examen",
      "Cours de conduite flexible",
      "Évaluation offerte",
    ],
    popular: true,
  },
  {
    id: "be",
    name: "Permis BE",
    subtitle: "Voiture + Remorque",
    price: "599",
    features: [
      "Formation 7h",
      "Pratique remorque",
      "Manœuvres spécifiques",
      "Examen pratique",
      "Véhicule fourni",
    ],
    popular: false,
  },
  {
    id: "passerelle",
    name: "Passerelle A",
    subtitle: "De A2 vers A",
    price: "299",
    features: [
      "Formation 7h",
      "2h théorie",
      "2h hors circulation",
      "3h en circulation",
      "Sans examen",
    ],
    popular: false,
  },
];

const additionalOptions = [
  { name: "Heure de conduite supplémentaire", price: "55€" },
  { name: "Accompagnement examen (conduite)", price: "120€" },
  { name: "Frais de dossier", price: "Inclus" },
  { name: "Accès plateforme code en ligne", price: "Inclus" },
  { name: "Évaluation de départ", price: "Offerte" },
  { name: "Stage code accéléré (3 jours)", price: "199€" },
];

const Tarifs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos <span className="text-primary">tarifs</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des formules adaptées à chaque besoin. Tous nos forfaits incluent l'accès aux cours en ligne et un accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-card rounded-2xl border ${
                  plan.popular
                    ? "border-secondary shadow-orange-glow ring-2 ring-secondary"
                    : "border-border hover:border-primary/30"
                } p-6 transition-all hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Le plus populaire
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {plan.price}€
                  </span>
                  {plan.price !== "Sur devis" && (
                    <span className="text-muted-foreground ml-2">TTC</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/permis/${plan.id}`}>
                  <Button
                    variant={plan.popular ? "secondary" : "outline"}
                    className="w-full"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Licenses */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Permis <span className="text-primary">professionnels</span>
            </h2>
            <p className="text-muted-foreground">
              Pour les permis C, C1, D, D1, CE, DE : contactez-nous pour un devis personnalisé
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Nos formations professionnelles
                </h3>
                <ul className="space-y-3">
                  {[
                    "Permis C1 / C (Poids lourds)",
                    "Permis D1 / D (Transport de personnes)",
                    "Permis CE / DE (Ensembles)",
                    "FIMO / FCO Marchandises",
                    "FIMO / FCO Voyageurs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-muted-foreground mb-6">
                  Chaque formation professionnelle est personnalisée selon votre profil et vos objectifs. Contactez-nous pour obtenir un devis adapté.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="w-full">
                    <Phone className="w-4 h-4" />
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Options <span className="text-primary">supplémentaires</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {additionalOptions.map((option, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-4 ${
                    index !== additionalOptions.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-foreground">{option.name}</span>
                  <span className={`font-bold ${
                    option.price === "Inclus" || option.price === "Offerte" 
                      ? "text-success" 
                      : "text-foreground"
                  }`}>
                    {option.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Facilités de paiement
            </h2>
            <p className="text-muted-foreground mb-8">
              Nous proposons des facilités de paiement pour toutes nos formations. 
              Paiement en 2, 3 ou 4 fois sans frais possible.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Paiement comptant", desc: "Carte bancaire, espèces" },
                { title: "Paiement en 3x", desc: "Sans frais supplémentaires" },
                { title: "CPF éligible", desc: "Pour certaines formations" },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Des questions sur nos tarifs ?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Notre équipe est disponible pour vous conseiller et vous aider à choisir la formule adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscription">
              <Button variant="hero" size="lg">
                S'inscrire maintenant
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarifs;
