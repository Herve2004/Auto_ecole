import { Layout } from "@/components/layout/Layout";

const PolitiqueConfidentialite = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Politique de confidentialité</h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
          <div><h2 className="font-display text-xl font-bold text-foreground">Collecte des données</h2><p className="text-muted-foreground">Nous collectons uniquement les données nécessaires à votre inscription et formation.</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Utilisation des données</h2><p className="text-muted-foreground">Vos données sont utilisées exclusivement pour la gestion de votre dossier et ne sont jamais vendues à des tiers.</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Vos droits</h2><p className="text-muted-foreground">Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p></div>
          <div><h2 className="font-display text-xl font-bold text-foreground">Contact</h2><p className="text-muted-foreground">Pour toute question : contact@autoecole-excellence.fr</p></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PolitiqueConfidentialite;
