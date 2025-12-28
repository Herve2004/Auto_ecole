import { Layout } from "@/components/layout/Layout";
import { Calendar } from "lucide-react";

const news = [
  { date: "15 Dec 2024", title: "Nouveaux horaires pour les fêtes", desc: "L'auto-école sera fermée du 24 au 26 décembre." },
  { date: "1 Dec 2024", title: "Formation accélérée disponible", desc: "Nouveau stage intensif code + conduite en 2 semaines." },
  { date: "15 Nov 2024", title: "Taux de réussite record", desc: "95% de réussite au code ce trimestre !" },
];

const Actualites = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground"><span className="text-primary">Actualités</span></h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl space-y-6">
        {news.map((n, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><Calendar className="w-4 h-4" />{n.date}</div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{n.title}</h3>
            <p className="text-muted-foreground">{n.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Actualites;
