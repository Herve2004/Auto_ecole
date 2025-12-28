import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const Inscription = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inscription envoyée !", description: "Nous vous contacterons sous 24h." });
  };

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Inscription</span> en ligne
          </h1>
          <p className="text-lg text-muted-foreground">Inscrivez-vous facilement depuis chez vous</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {step > s ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-6">
            {step === 1 && (
              <>
                <h2 className="font-display text-xl font-bold mb-4">Informations personnelles</h2>
                <input type="text" required placeholder="Nom complet" className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
                <input type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
                <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
                <Button type="button" onClick={() => setStep(2)} className="w-full">Continuer</Button>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="font-display text-xl font-bold mb-4">Choix de la formation</h2>
                <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background">
                  <option value="">Sélectionnez un permis</option>
                  <option value="b">Permis B - Voiture</option>
                  <option value="a2">Permis A2 - Moto</option>
                  <option value="am">Permis AM</option>
                </select>
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">Retour</Button>
                  <Button type="button" onClick={() => setStep(3)} className="flex-1">Continuer</Button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="font-display text-xl font-bold mb-4">Confirmation</h2>
                <p className="text-muted-foreground mb-4">Vérifiez vos informations et validez votre inscription.</p>
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">Retour</Button>
                  <Button type="submit" variant="secondary" className="flex-1">Valider l'inscription</Button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Inscription;
