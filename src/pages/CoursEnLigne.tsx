import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, BookOpen, CheckCircle, Play } from "lucide-react";

const modules = [
  { title: "Signalisation routière", lessons: 12, duration: "2h30" },
  { title: "Règles de priorité", lessons: 8, duration: "1h45" },
  { title: "Circulation et croisements", lessons: 10, duration: "2h" },
  { title: "Stationnement et arrêts", lessons: 6, duration: "1h15" },
  { title: "Conduite en ville", lessons: 9, duration: "1h50" },
  { title: "Autoroute et voies rapides", lessons: 7, duration: "1h30" },
];

const CoursEnLigne = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Cours <span className="text-primary">en ligne</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Révisez le code de la route 24h/24 depuis chez vous avec notre plateforme interactive.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{mod.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{mod.lessons} leçons • {mod.duration}</p>
              <Button variant="outline" size="sm" className="w-full">
                <Play className="w-4 h-4" /> Commencer
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Prêt à commencer ?</h2>
        <p className="text-primary-foreground/80 mb-8">Inscrivez-vous pour accéder à tous les cours.</p>
        <Link to="/inscription"><Button variant="hero" size="lg">S'inscrire</Button></Link>
      </div>
    </section>
  </Layout>
);

export default CoursEnLigne;
