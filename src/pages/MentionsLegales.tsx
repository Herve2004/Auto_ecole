import { Layout } from "@/components/layout/Layout";

const MentionsLegales = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Mentions légales</h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
        <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
          <div><h2 className="font-display text-xl font-bold text-foreground">Éditeur du site</h2><p className="text-muted-foreground">Auto-École Excellence<br/>123 Avenue de la Conduite<br/>75001 Paris, France<br/>SIRET : 123 456 789 00012</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Directeur de publication</h2><p className="text-muted-foreground">Jean Dupont</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Hébergement</h2><p className="text-muted-foreground">Ce site est hébergé par Lovable.</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Propriété intellectuelle</h2><p className="text-muted-foreground">L'ensemble du contenu de ce site est protégé par le droit d'auteur.</p></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default MentionsLegales;
