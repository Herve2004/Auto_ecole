import { Layout } from "@/components/layout/Layout";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marie L.", permit: "Permis B", text: "Excellente formation, moniteurs patients et pédagogues. J'ai eu mon permis du premier coup !", rating: 5 },
  { name: "Thomas D.", permit: "Permis A2", text: "Formation moto au top ! Équipe professionnelle et cours bien structurés.", rating: 5 },
  { name: "Sophie M.", permit: "Permis B", text: "Les cours en ligne m'ont vraiment aidée. Je recommande vivement.", rating: 5 },
  { name: "Lucas P.", permit: "Permis B", text: "Très bonne auto-école avec un suivi personnalisé. Merci à toute l'équipe !", rating: 5 },
  { name: "Emma R.", permit: "Permis AM", text: "Formation rapide et efficace pour le permis AM. Parfait pour débuter.", rating: 4 },
  { name: "Hugo B.", permit: "Permis A2", text: "Moniteurs sympas et compétents. J'ai adoré les cours moto.", rating: 5 },
];

const Temoignages = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          <span className="text-primary">Témoignages</span> de nos élèves
        </h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />)}</div>
              <p className="text-foreground mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">{t.name.charAt(0)}</div>
                <div><div className="font-semibold text-foreground">{t.name}</div><div className="text-sm text-muted-foreground">{t.permit}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Temoignages;
