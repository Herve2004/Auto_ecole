import { Layout } from "@/components/layout/Layout";

const ReglementInterieur = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Règlement intérieur</h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
          <div><h2 className="font-display text-xl font-bold text-foreground">Article 1 - Inscription</h2><p className="text-muted-foreground">L'inscription est effective après signature du contrat et versement de l'acompte.</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Article 2 - Assiduité</h2><p className="text-muted-foreground">L'élève s'engage à respecter les horaires des cours et leçons de conduite.</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Article 3 - Annulation</h2><p className="text-muted-foreground">Toute annulation doit être effectuée au moins 48h à l'avance.</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Article 4 - Comportement</h2><p className="text-muted-foreground">Un comportement respectueux est exigé envers l'ensemble du personnel et des autres élèves.</p></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ReglementInterieur;
