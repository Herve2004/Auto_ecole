import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock } from "lucide-react";

const schedule = [
  { day: "Lundi", code: "9h-12h / 14h-17h", conduite: "8h-20h" },
  { day: "Mardi", code: "9h-12h / 14h-17h", conduite: "8h-20h" },
  { day: "Mercredi", code: "9h-12h / 14h-17h", conduite: "8h-20h" },
  { day: "Jeudi", code: "9h-12h / 14h-17h", conduite: "8h-20h" },
  { day: "Vendredi", code: "9h-12h / 14h-17h", conduite: "8h-20h" },
  { day: "Samedi", code: "9h-13h", conduite: "9h-17h" },
  { day: "Dimanche", code: "Fermé", conduite: "Fermé" },
];

const Planning = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          <span className="text-primary">Planning</span> & Horaires
        </h1>
        <p className="text-lg text-muted-foreground">Nos horaires d'ouverture et de cours</p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-primary text-primary-foreground p-4 font-semibold">
            <div>Jour</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Cours code</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Conduite</div>
          </div>
          {schedule.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
              <div className="font-medium text-foreground">{row.day}</div>
              <div className="text-muted-foreground">{row.code}</div>
              <div className="text-muted-foreground">{row.conduite}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">Les cours en ligne sont disponibles 24h/24, 7j/7.</p>
      </div>
    </section>
  </Layout>
);

export default Planning;
