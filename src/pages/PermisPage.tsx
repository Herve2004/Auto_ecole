import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { 
  Car, Bike, Truck, Bus, CheckCircle, Clock, Euro, 
  FileText, ArrowRight, BookOpen, Video, Calendar
} from "lucide-react";

interface PermitInfo {
  id: string;
  name: string;
  fullName: string;
  icon: typeof Car;
  description: string;
  ageRequired: string;
  duration: string;
  price: string;
  color: string;
  vehicleType: string;
  features: string[];
  courseContent: string[];
  documents: string[];
}

const permitData: Record<string, PermitInfo> = {
  am: {
    id: "AM",
    name: "Permis AM",
    fullName: "Brevet de Sécurité Routière (BSR)",
    icon: Bike,
    description: "Le permis AM permet de conduire des cyclomoteurs de 50 cm³ maximum ou des voiturettes dès l'âge de 14 ans. Formation idéale pour les jeunes souhaitant acquérir leur première autonomie sur la route.",
    ageRequired: "14 ans",
    duration: "8 heures",
    price: "299€",
    color: "bg-blue-500",
    vehicleType: "Cyclomoteur 50cc / Voiturette",
    features: [
      "Formation de 8 heures",
      "Pas d'examen du code requis (formation ASR/ASSR)",
      "2 heures hors circulation",
      "4 heures en circulation",
      "2 heures de sensibilisation",
    ],
    courseContent: [
      "Règles de circulation",
      "Maîtrise du véhicule",
      "Sensibilisation aux risques",
      "Conduite en agglomération",
      "Premiers secours",
    ],
    documents: [
      "Pièce d'identité",
      "Justificatif de domicile",
      "ASSR 1 ou 2 ou ASR",
      "4 photos d'identité",
      "Autorisation parentale (si mineur)",
    ],
  },
  a1: {
    id: "A1",
    name: "Permis A1",
    fullName: "Permis Moto Légère",
    icon: Bike,
    description: "Le permis A1 permet de conduire des motos légères jusqu'à 125 cm³ et 11 kW dès 16 ans. Idéal pour débuter en moto avec une formation complète théorique et pratique.",
    ageRequired: "16 ans",
    duration: "20 heures minimum",
    price: "799€",
    color: "bg-blue-600",
    vehicleType: "Moto 125cc (11 kW max)",
    features: [
      "Formation théorique code moto",
      "8 heures de plateau",
      "12 heures de circulation",
      "Équipement fourni",
      "Examens inclus",
    ],
    courseContent: [
      "Code de la route moto",
      "Maniabilité à basse vitesse",
      "Techniques de freinage",
      "Conduite en circulation",
      "Conduite de nuit",
    ],
    documents: [
      "Pièce d'identité",
      "Justificatif de domicile",
      "4 photos d'identité",
      "ASSR 2 ou ASR (si né après 1988)",
      "Certificat médical (si nécessaire)",
    ],
  },
  a2: {
    id: "A2",
    name: "Permis A2",
    fullName: "Permis Moto Intermédiaire",
    icon: Bike,
    description: "Le permis A2 permet de conduire des motos de puissance intermédiaire (35 kW max) dès 18 ans. Après 2 ans, une formation complémentaire permet d'accéder au permis A.",
    ageRequired: "18 ans",
    duration: "20 heures minimum",
    price: "899€",
    color: "bg-blue-700",
    vehicleType: "Moto (35 kW max)",
    features: [
      "Code moto ETM",
      "8 heures de plateau",
      "12 heures de circulation",
      "Équipement complet fourni",
      "Préparation examen",
    ],
    courseContent: [
      "Théorie moto spécifique",
      "Exercices de maniabilité",
      "Techniques avancées",
      "Conduite en groupe",
      "Anticipation des dangers",
    ],
    documents: [
      "Pièce d'identité",
      "Justificatif de domicile",
      "4 photos d'identité",
      "ASSR 2 ou ASR",
    ],
  },
  a: {
    id: "A",
    name: "Permis A",
    fullName: "Permis Toutes Motos",
    icon: Bike,
    description: "Le permis A permet de conduire toutes les motos sans limitation de puissance. Accessible après 2 ans de permis A2 via une formation passerelle de 7 heures.",
    ageRequired: "20 ans (avec 2 ans de A2)",
    duration: "7 heures",
    price: "299€",
    color: "bg-indigo-600",
    vehicleType: "Toutes motos",
    features: [
      "Formation passerelle 7h",
      "Pas d'examen",
      "2h théorique",
      "2h hors circulation",
      "3h en circulation",
    ],
    courseContent: [
      "Rappels théoriques",
      "Prise en main grosse cylindrée",
      "Perfectionnement technique",
      "Conduite sur route",
      "Trajectoire de sécurité",
    ],
    documents: [
      "Permis A2 depuis 2 ans",
      "Pièce d'identité",
      "Justificatif de domicile",
      "4 photos d'identité",
    ],
  },
  b1: {
    id: "B1",
    name: "Permis B1",
    fullName: "Permis Quadricycle Lourd",
    icon: Car,
    description: "Le permis B1 permet de conduire des quadricycles lourds à moteur (quads, voiturettes puissantes) dès 16 ans. Alternative intéressante avant le permis B.",
    ageRequired: "16 ans",
    duration: "20 heures minimum",
    price: "699€",
    color: "bg-primary",
    vehicleType: "Quadricycle lourd",
    features: [
      "Formation code de la route",
      "Formation pratique complète",
      "Véhicule adapté",
      "Moniteur dédié",
      "Examens inclus",
    ],
    courseContent: [
      "Code de la route",
      "Maîtrise du véhicule",
      "Circulation urbaine",
      "Manœuvres",
      "Éco-conduite",
    ],
    documents: [
      "Pièce d'identité",
      "Justificatif de domicile",
      "ASSR 2 ou ASR",
      "4 photos d'identité",
    ],
  },
  b: {
    id: "B",
    name: "Permis B",
    fullName: "Permis Voiture",
    icon: Car,
    description: "Le permis B est le permis de conduire classique pour les voitures. Il permet de conduire des véhicules jusqu'à 3,5 tonnes et de tracter des remorques légères.",
    ageRequired: "18 ans (17 en conduite accompagnée)",
    duration: "20 heures minimum",
    price: "1199€",
    color: "bg-primary",
    vehicleType: "Voiture (jusqu'à 3,5t)",
    features: [
      "Formation théorique complète",
      "Minimum 20h de conduite",
      "Simulateur de conduite",
      "Cours en ligne illimités",
      "Examens inclus",
    ],
    courseContent: [
      "Code de la route",
      "Maîtrise du véhicule",
      "Circulation en ville",
      "Conduite sur autoroute",
      "Conduite de nuit",
      "Éco-conduite",
    ],
    documents: [
      "Pièce d'identité",
      "Justificatif de domicile",
      "ASSR 2 ou ASR (si né après 1988)",
      "4 photos d'identité",
      "Certificat d'hébergement (si nécessaire)",
    ],
  },
  c1: {
    id: "C1",
    name: "Permis C1",
    fullName: "Permis Poids Lourd Léger",
    icon: Truck,
    description: "Le permis C1 permet de conduire des poids lourds de 3,5 à 7,5 tonnes. Idéal pour les métiers de la livraison et du transport léger.",
    ageRequired: "18 ans",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-amber-600",
    vehicleType: "Poids lourd 3,5-7,5t",
    features: [
      "Permis B requis",
      "Visite médicale obligatoire",
      "Formation théorique",
      "Formation pratique",
      "FIMO possible",
    ],
    courseContent: [
      "Réglementation PL",
      "Mécanique de base",
      "Chargement/déchargement",
      "Conduite professionnelle",
      "Sécurité routière",
    ],
    documents: [
      "Permis B valide",
      "Visite médicale PL",
      "Pièce d'identité",
      "Justificatif de domicile",
      "4 photos d'identité",
    ],
  },
  c: {
    id: "C",
    name: "Permis C",
    fullName: "Permis Poids Lourd",
    icon: Truck,
    description: "Le permis C permet de conduire des poids lourds de plus de 7,5 tonnes. Indispensable pour les métiers du transport routier de marchandises.",
    ageRequired: "21 ans (18 avec FIMO)",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-amber-700",
    vehicleType: "Poids lourd +7,5t",
    features: [
      "Permis B obligatoire",
      "Formation intensive possible",
      "Préparation FIMO/FCO",
      "Véhicules professionnels",
      "Suivi personnalisé",
    ],
    courseContent: [
      "Réglementation transport",
      "Conduite PL",
      "Arrimage des charges",
      "Temps de conduite",
      "Chronotachygraphe",
    ],
    documents: [
      "Permis B",
      "Visite médicale groupe lourd",
      "Pièce d'identité",
      "Justificatif de domicile",
      "4 photos d'identité",
    ],
  },
  d1: {
    id: "D1",
    name: "Permis D1",
    fullName: "Permis Minibus",
    icon: Bus,
    description: "Le permis D1 permet de conduire des véhicules de transport en commun jusqu'à 17 places. Idéal pour le transport scolaire ou de groupe.",
    ageRequired: "21 ans",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-emerald-600",
    vehicleType: "Minibus (17 places max)",
    features: [
      "Permis B requis",
      "Formation spécifique",
      "Transport de personnes",
      "Sécurité passagers",
      "Réglementation TC",
    ],
    courseContent: [
      "Réglementation TC",
      "Sécurité des passagers",
      "Conduite préventive",
      "Gestion du stress",
      "Premiers secours",
    ],
    documents: [
      "Permis B",
      "Visite médicale TC",
      "Casier judiciaire",
      "Pièce d'identité",
      "4 photos d'identité",
    ],
  },
  d: {
    id: "D",
    name: "Permis D",
    fullName: "Permis Autobus",
    icon: Bus,
    description: "Le permis D permet de conduire des véhicules de transport en commun de plus de 17 places. Essentiel pour les conducteurs de bus et autocars.",
    ageRequired: "24 ans (21 avec FIMO)",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-emerald-700",
    vehicleType: "Autobus (+17 places)",
    features: [
      "Formation complète",
      "Véhicules professionnels",
      "Préparation FIMO voyageurs",
      "Stages intensifs",
      "Accompagnement emploi",
    ],
    courseContent: [
      "Conduite d'autobus",
      "Réglementation voyageurs",
      "Accessibilité PMR",
      "Gestion des conflits",
      "Éco-conduite TC",
    ],
    documents: [
      "Permis B",
      "Visite médicale",
      "Casier judiciaire vierge",
      "Pièce d'identité",
      "4 photos d'identité",
    ],
  },
  be: {
    id: "BE",
    name: "Permis BE",
    fullName: "Permis Voiture + Remorque",
    icon: Car,
    description: "Le permis BE permet de tracter des remorques de plus de 750 kg avec une voiture. Indispensable pour les caravanes, vans et remorques lourdes.",
    ageRequired: "18 ans",
    duration: "7 heures minimum",
    price: "599€",
    color: "bg-primary",
    vehicleType: "Voiture + remorque lourde",
    features: [
      "Permis B obligatoire",
      "Formation courte",
      "Pratique sur remorque",
      "Manœuvres spécifiques",
      "Examen pratique",
    ],
    courseContent: [
      "Attelage/dételage",
      "Conduite avec remorque",
      "Marche arrière",
      "Mise à quai",
      "Réglementation remorque",
    ],
    documents: [
      "Permis B valide",
      "Pièce d'identité",
      "Justificatif de domicile",
      "4 photos d'identité",
    ],
  },
  ce1: {
    id: "CE1",
    name: "Permis CE1",
    fullName: "Permis PL + Remorque Légère",
    icon: Truck,
    description: "Extension du permis C pour tracter des remorques avec des poids lourds.",
    ageRequired: "18 ans",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-amber-600",
    vehicleType: "PL + remorque légère",
    features: [
      "Permis C requis",
      "Formation remorque",
      "Manœuvres ensemble",
      "Réglementation",
      "Examen pratique",
    ],
    courseContent: [
      "Attelage PL",
      "Conduite ensemble articulé",
      "Manœuvres complexes",
      "Sécurité arrimage",
      "Réglementation transport",
    ],
    documents: [
      "Permis C valide",
      "Visite médicale",
      "Pièce d'identité",
      "4 photos d'identité",
    ],
  },
  ce: {
    id: "CE",
    name: "Permis CE",
    fullName: "Permis Super Lourd",
    icon: Truck,
    description: "Le permis CE permet de conduire des ensembles articulés (tracteur + semi-remorque). Le permis roi du transport routier.",
    ageRequired: "21 ans",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-amber-700",
    vehicleType: "Ensemble articulé",
    features: [
      "Permis C obligatoire",
      "Formation intensive",
      "Véhicules professionnels",
      "FIMO marchandises",
      "Insertion emploi",
    ],
    courseContent: [
      "Conduite semi-remorque",
      "Attelage 5ème roue",
      "Manœuvres professionnelles",
      "Transport international",
      "ADR possible",
    ],
    documents: [
      "Permis C",
      "Visite médicale",
      "Pièce d'identité",
      "Justificatif de domicile",
      "4 photos d'identité",
    ],
  },
  de1: {
    id: "DE1",
    name: "Permis DE1",
    fullName: "Permis Bus + Remorque Légère",
    icon: Bus,
    description: "Extension du permis D pour tracter des remorques légères avec un autobus.",
    ageRequired: "21 ans",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-emerald-600",
    vehicleType: "Bus + remorque légère",
    features: [
      "Permis D requis",
      "Formation spécifique",
      "Pratique remorque",
      "Sécurité passagers",
      "Réglementation",
    ],
    courseContent: [
      "Attelage bus",
      "Conduite avec remorque",
      "Manœuvres sécurisées",
      "Gestion passagers",
      "Réglementation TC",
    ],
    documents: [
      "Permis D valide",
      "Visite médicale",
      "Pièce d'identité",
      "4 photos d'identité",
    ],
  },
  de: {
    id: "DE",
    name: "Permis DE",
    fullName: "Permis Bus + Remorque",
    icon: Bus,
    description: "Le permis DE permet de conduire un autobus avec une remorque de plus de 750 kg. Formation spécialisée pour le transport de voyageurs.",
    ageRequired: "24 ans",
    duration: "Selon profil",
    price: "Sur devis",
    color: "bg-emerald-700",
    vehicleType: "Bus + remorque lourde",
    features: [
      "Permis D obligatoire",
      "Formation complète",
      "Pratique professionnelle",
      "Accompagnement",
      "FIMO possible",
    ],
    courseContent: [
      "Ensemble articulé bus",
      "Sécurité maximale",
      "Conduite professionnelle",
      "Réglementation européenne",
      "Gestion incidents",
    ],
    documents: [
      "Permis D",
      "Visite médicale groupe lourd",
      "Casier judiciaire",
      "Pièce d'identité",
      "4 photos d'identité",
    ],
  },
};

const PermisPage = () => {
  const { category } = useParams<{ category: string }>();
  const permit = category ? permitData[category.toLowerCase()] : null;

  if (!permit) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Catégorie non trouvée
          </h1>
          <p className="text-muted-foreground mb-8">
            Cette catégorie de permis n'existe pas.
          </p>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = permit.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 ${permit.color} text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                <Icon className="w-4 h-4" />
                {permit.vehicleType}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {permit.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {permit.fullName}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {permit.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Durée</div>
                  <div className="font-bold text-foreground">{permit.duration}</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Euro className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">À partir de</div>
                  <div className="font-bold text-foreground">{permit.price}</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Âge requis</div>
                  <div className="font-bold text-foreground">{permit.ageRequired}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/inscription">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Je m'inscris
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/tarifs">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Voir les tarifs
                  </Button>
                </Link>
              </div>
            </div>

            <div className={`${permit.color} rounded-3xl p-8 text-primary-foreground`}>
              <h3 className="font-display text-xl font-bold mb-6">
                Ce qui est inclus
              </h3>
              <ul className="space-y-4">
                {permit.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Contenu de la formation
              </h2>
              <ul className="space-y-3">
                {permit.courseContent.map((content, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{content}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                Documents requis
              </h2>
              <ul className="space-y-3">
                {permit.documents.map((doc, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>

              <Link to="/conditions-inscription" className="inline-block mt-6">
                <Button variant="link" className="p-0">
                  Voir toutes les conditions d'inscription →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-primary-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Révisez en ligne 24h/24
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Accédez à notre plateforme de cours en ligne pour réviser le code et les modules théoriques depuis chez vous.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Cours vidéo interactifs",
                    "Tests d'entraînement illimités",
                    "Examens blancs",
                    "Suivi de progression",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/cours-en-ligne">
                  <Button variant="hero" size="lg">
                    Accéder aux cours
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-primary-foreground/10 rounded-full">
                  <Video className="w-16 h-16 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Découvrez nos autres formations
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(permitData)
              .filter((p) => p.id !== permit.id)
              .slice(0, 8)
              .map((p) => (
                <Link key={p.id} to={`/permis/${p.id.toLowerCase()}`}>
                  <Button variant="outline" size="sm">
                    {p.name}
                  </Button>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Prêt à passer votre {permit.name} ?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Inscrivez-vous dès maintenant et commencez votre formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscription">
              <Button variant="hero" size="lg">
                S'inscrire maintenant
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                Poser une question
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PermisPage;
