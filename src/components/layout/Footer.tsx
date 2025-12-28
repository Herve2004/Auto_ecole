import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const permitLinks = [
  { id: "AM", name: "Permis AM" },
  { id: "A1", name: "Permis A1" },
  { id: "A2", name: "Permis A2" },
  { id: "A", name: "Permis A" },
  { id: "B", name: "Permis B" },
  { id: "C", name: "Permis C" },
  { id: "D", name: "Permis D" },
];

const quickLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/tarifs", label: "Nos tarifs" },
  { href: "/planning", label: "Planning" },
  { href: "/inscription", label: "Inscription" },
  { href: "/faq", label: "FAQ" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/actualites", label: "Actualités" },
  { href: "/galerie", label: "Galerie" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/reglement-interieur", label: "Règlement intérieur" },
  { href: "/conditions-inscription", label: "Conditions d'inscription" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Car className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-background">
                  Auto-École
                </span>
                <span className="font-display text-xl font-bold text-secondary ml-1">
                  Excellence
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Votre réussite est notre priorité. Formation de qualité pour tous les types de permis avec des moniteurs expérimentés et des cours en ligne accessibles 24h/24.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Permits Column */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Nos Permis</h4>
            <ul className="space-y-3">
              {permitLinks.map((permit) => (
                <li key={permit.id}>
                  <Link
                    to={`/permis/${permit.id.toLowerCase()}`}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {permit.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/permis/b"
                  className="text-secondary font-medium text-sm hover:underline"
                >
                  Voir tous les permis →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  123 Avenue de la Conduite<br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:0123456789" className="text-background/70 hover:text-secondary transition-colors text-sm">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:contact@autoecole-excellence.fr" className="text-background/70 hover:text-secondary transition-colors text-sm">
                  contact@autoecole-excellence.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Lun - Ven : 9h - 19h<br />
                  Samedi : 9h - 17h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © 2024 Auto-École Excellence. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-background/50 hover:text-secondary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
