import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Car, Bike, Truck, Bus, Shield, Award, Users, Clock, 
  CheckCircle, ArrowRight, Star, BookOpen, Video, Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-driving.jpg";

const permitCategories = [
  { id: "AM", name: "Permis AM", icon: Bike, desc: "Cyclomoteur dès 14 ans", color: "bg-blue-500" },
  { id: "A1", name: "Permis A1", icon: Bike, desc: "Moto légère 125cc", color: "bg-blue-600" },
  { id: "A2", name: "Permis A2", icon: Bike, desc: "Moto intermédiaire", color: "bg-blue-700" },
  { id: "A", name: "Permis A", icon: Bike, desc: "Toutes motos", color: "bg-indigo-600" },
  { id: "B1", name: "Permis B1", icon: Car, desc: "Quadricycle lourd", color: "bg-primary" },
  { id: "B", name: "Permis B", icon: Car, desc: "Voiture", color: "bg-primary", featured: true },
  { id: "C1", name: "Permis C1", icon: Truck, desc: "Poids lourd 3.5-7.5t", color: "bg-amber-600" },
  { id: "C", name: "Permis C", icon: Truck, desc: "Poids lourd +7.5t", color: "bg-amber-700" },
  { id: "D1", name: "Permis D1", icon: Bus, desc: "Minibus 17 places", color: "bg-emerald-600" },
  { id: "D", name: "Permis D", icon: Bus, desc: "Autobus", color: "bg-emerald-700" },
];

const stats = [
  { value: "95%", label: "Taux de réussite" },
  { value: "5000+", label: "Élèves formés" },
  { value: "25", label: "Années d'expérience" },
  { value: "15", label: "Moniteurs diplômés" },
];

const features = [
  { 
    icon: Video, 
    title: "Cours en ligne 24h/24", 
    desc: "Révisez le code de la route quand vous voulez, où vous voulez." 
  },
  { 
    icon: BookOpen, 
    title: "Formation complète", 
    desc: "Théorie et pratique avec des moniteurs expérimentés." 
  },
  { 
    icon: Calendar, 
    title: "Planning flexible", 
    desc: "Réservez vos heures de conduite selon vos disponibilités." 
  },
  { 
    icon: Shield, 
    title: "Accompagnement personnalisé", 
    desc: "Suivi individuel pour garantir votre réussite." 
  },
];

const testimonials = [
  {
    name: "Marie L.",
    permit: "Permis B",
    text: "Grâce à Auto-École Excellence, j'ai obtenu mon permis du premier coup ! Les moniteurs sont patients et les cours en ligne m'ont permis de réviser à mon rythme.",
    rating: 5,
  },
  {
    name: "Thomas D.",
    permit: "Permis A2",
    text: "Formation moto au top ! L'équipe est vraiment professionnelle et les cours sont bien structurés. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    permit: "Permis B",
    text: "Excellente auto-école avec un suivi personnalisé. Le planning en ligne est très pratique pour réserver ses heures.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Formation à la conduite" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Award className="w-4 h-4" />
              N°1 des auto-écoles à Paris
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Votre permis, <br />
              <span className="text-secondary">notre expertise</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Formation de qualité pour tous les types de permis. 
              Cours en ligne accessibles 24h/24 pour apprendre sans vous déplacer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/inscription">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Je m'inscris maintenant
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/tarifs">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Voir les tarifs
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Permit Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Toutes les catégories de <span className="text-primary">permis</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Du deux-roues au poids lourd, nous vous formons pour tous les types de véhicules avec des programmes adaptés.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {permitCategories.map((permit, index) => {
              const Icon = permit.icon;
              return (
                <Link
                  key={permit.id}
                  to={`/permis/${permit.id.toLowerCase()}`}
                  className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                    permit.featured ? "ring-2 ring-secondary shadow-orange-glow" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {permit.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Populaire
                    </div>
                  )}
                  <div className={`w-12 h-12 ${permit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {permit.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {permit.desc}
                  </p>
                  <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link to="/permis/b">
              <Button variant="outline">
                Voir toutes les catégories
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Apprenez à conduire <br />
                <span className="text-primary">sans vous déplacer</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Notre plateforme de cours en ligne vous permet de réviser le code de la route et de suivre des modules théoriques depuis chez vous, 24 heures sur 24.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link to="/cours-en-ligne" className="inline-block mt-8">
                <Button size="lg">
                  Découvrir les cours en ligne
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-primary-foreground">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">95%</div>
                    <div className="text-primary-foreground/70 text-sm">de réussite au code</div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Accès illimité aux cours",
                    "Tests d'entraînement",
                    "Examens blancs",
                    "Suivi de progression",
                    "Support pédagogique",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-lg p-4 border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">+250</div>
                    <div className="text-xs text-muted-foreground">élèves ce mois</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ce que disent nos <span className="text-primary">élèves</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Des milliers d'élèves satisfaits nous font confiance chaque année.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.permit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/temoignages">
              <Button variant="outline">
                Voir tous les témoignages
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Prêt à prendre le volant ?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Inscrivez-vous dès maintenant et bénéficiez d'une évaluation gratuite avec l'un de nos moniteurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscription">
              <Button variant="hero" size="xl">
                Inscription en ligne
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
