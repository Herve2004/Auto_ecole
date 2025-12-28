import { Layout } from "@/components/layout/Layout";

const Galerie = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground"><span className="text-primary">Galerie</span> photos</h1>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">Photo {i + 1}</div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">Galerie en cours de construction</p>
      </div>
    </section>
  </Layout>
);

export default Galerie;
