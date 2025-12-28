import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, Users, Shield, Clock, Target, Heart, 
  CheckCircle, Car, MapPin, Calendar
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "La sécurité routière est notre priorité absolue. Nous formons des conducteurs responsables et conscients des risques.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Nos moniteurs accompagnent chaque élève avec patience et encouragement, dans un climat de confiance.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans toutes nos formations avec des méthodes pédagogiques éprouvées.",
  },
  {
    icon: Users,
    title: "Accessibilité",
    description: "Formation accessible à tous avec des horaires flexibles et des cours en ligne disponibles 24h/24.",
  },
];

const team = [
  { name: "Jean Dupont", role: "Directeur", experience: "30 ans" },
  { name: "Marie Martin", role: "Responsable pédagogique", experience: "20 ans" },
  { name: "Pierre Bernard", role: "Moniteur senior", experience: "15 ans" },
  { name: "Sophie Petit", role: "Monitrice moto", experience: "12 ans" },
];

const milestones = [
  { year: "1999", event: "Création de l'auto-école" },
  { year: "2005", event: "Agrément pour les permis poids lourds" },
  { year: "2012", event: "Lancement des cours en ligne" },
  { year: "2018", event: "5000ème élève formé" },
  { year: "2023", event: "Certification Qualité Service" },
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Depuis 1999
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              À propos de notre <span className="text-primary">auto-école</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis plus de 25 ans, Auto-École Excellence forme des conducteurs responsables et confiants. Notre mission : vous accompagner vers la réussite avec bienveillance et professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25+", label: "Années d'expérience" },
              { value: "5000+", label: "Élèves formés" },
              { value: "95%", label: "Taux de réussite" },
              { value: "15", label: "Moniteurs diplômés" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Notre <span className="text-primary">histoire</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 1999 par Jean Dupont, passionné de conduite et de pédagogie, Auto-École Excellence est née d'une vision simple : rendre l'apprentissage de la conduite accessible, agréable et efficace.
                </p>
                <p>
                  Au fil des années, nous avons développé une approche pédagogique unique, alliant cours en présentiel de qualité et outils numériques innovants. Cette combinaison nous permet aujourd'hui d'afficher un taux de réussite de 95%.
                </p>
                <p>
                  Notre équipe de 15 moniteurs diplômés partage les mêmes valeurs : patience, bienveillance et exigence. Chaque élève bénéficie d'un suivi personnalisé pour atteindre ses objectifs.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Notre parcours
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-16 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="font-bold text-primary text-sm">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Nos <span className="text-primary">valeurs</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ces valeurs guident notre action au quotidien et définissent notre approche pédagogique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Notre <span className="text-primary">équipe</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Des professionnels passionnés à votre service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.experience} d'expérience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Pourquoi nous <span className="text-primary">choisir</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Car, title: "Véhicules récents", desc: "Flotte moderne et bien entretenue" },
              { icon: MapPin, title: "Localisation idéale", desc: "En plein centre de Paris" },
              { icon: Calendar, title: "Horaires flexibles", desc: "7j/7 de 8h à 20h" },
              { icon: Clock, title: "Cours en ligne", desc: "Révisez 24h/24" },
              { icon: Users, title: "Petits groupes", desc: "Attention personnalisée" },
              { icon: Award, title: "Certifié qualité", desc: "Label Qualité Service" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Rejoignez-nous !
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Prenez rendez-vous pour une évaluation gratuite et découvrez nos formations.
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

export default APropos;
