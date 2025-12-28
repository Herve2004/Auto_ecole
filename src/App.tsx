import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import APropos from "./pages/APropos";
import PermisPage from "./pages/PermisPage";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Planning from "./pages/Planning";
import Inscription from "./pages/Inscription";
import CoursEnLigne from "./pages/CoursEnLigne";
import FAQ from "./pages/FAQ";
import Temoignages from "./pages/Temoignages";
import ConditionsInscription from "./pages/ConditionsInscription";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ReglementInterieur from "./pages/ReglementInterieur";
import Actualites from "./pages/Actualites";
import Galerie from "./pages/Galerie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/permis/:category" element={<PermisPage />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/cours-en-ligne" element={<CoursEnLigne />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/conditions-inscription" element={<ConditionsInscription />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/reglement-interieur" element={<ReglementInterieur />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
