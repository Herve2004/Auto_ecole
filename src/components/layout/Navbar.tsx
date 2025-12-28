import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Car, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const permitCategories = [
  { id: "AM", name: "Permis AM", desc: "Cyclomoteur" },
  { id: "A1", name: "Permis A1", desc: "Moto légère" },
  { id: "A2", name: "Permis A2", desc: "Moto intermédiaire" },
  { id: "A", name: "Permis A", desc: "Toutes motos" },
  { id: "B1", name: "Permis B1", desc: "Quadricycle" },
  { id: "B", name: "Permis B", desc: "Voiture" },
  { id: "C1", name: "Permis C1", desc: "Poids lourd léger" },
  { id: "C", name: "Permis C", desc: "Poids lourd" },
  { id: "D1", name: "Permis D1", desc: "Minibus" },
  { id: "D", name: "Permis D", desc: "Autobus" },
  { id: "BE", name: "Permis BE", desc: "Voiture + remorque" },
  { id: "CE1", name: "Permis CE1", desc: "PL + remorque légère" },
  { id: "CE", name: "Permis CE", desc: "PL + remorque" },
  { id: "DE1", name: "Permis DE1", desc: "Bus + remorque légère" },
  { id: "DE", name: "Permis DE", desc: "Bus + remorque" },
];

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/planning", label: "Planning" },
  { href: "/cours-en-ligne", label: "Cours en ligne" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
              <Car className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold text-foreground">
                Auto-École
              </span>
              <span className="font-display text-xl font-bold text-secondary ml-1">
                Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="nav"
                  className={location.pathname === link.href ? "text-primary bg-primary/5" : ""}
                >
                  {link.label}
                </Button>
              </Link>
            ))}

            {/* Permits Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="nav" className="gap-1">
                  Permis <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2 grid grid-cols-2 gap-1">
                {permitCategories.map((permit) => (
                  <DropdownMenuItem key={permit.id} asChild>
                    <Link
                      to={`/permis/${permit.id.toLowerCase()}`}
                      className="flex flex-col items-start p-2 cursor-pointer"
                    >
                      <span className="font-semibold text-foreground">{permit.name}</span>
                      <span className="text-xs text-muted-foreground">{permit.desc}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="nav"
                  className={location.pathname === link.href ? "text-primary bg-primary/5" : ""}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                01 23 45 67 89
              </Button>
            </Link>
            <Link to="/inscription">
              <Button variant="secondary" size="sm">
                S'inscrire
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="nav"
                    className="w-full justify-start"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <p className="text-sm font-semibold text-muted-foreground px-4 py-2">
                  Catégories de Permis
                </p>
                <div className="grid grid-cols-3 gap-1">
                  {permitCategories.map((permit) => (
                    <Link
                      key={permit.id}
                      to={`/permis/${permit.id.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="ghost" size="sm" className="w-full text-xs">
                        {permit.id}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border mt-2">
                <Link to="/contact" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
                </Link>
                <Link to="/inscription" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="secondary" className="w-full">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
