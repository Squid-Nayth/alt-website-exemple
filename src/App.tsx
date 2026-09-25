import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientOverlay from "@/components/layout/GradientOverlay";
import Loader from "@/components/layout/Loader";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CookieBanner from "@/components/layout/CookieBanner";
import { useState, useEffect } from "react";

// Import pages (assuming they are in src/app/folder/page.tsx or similar)
import HomePage from "@/app/page";
import ContactPage from "@/app/contact/page";
import ExpertisesPage from "@/app/expertises/detail";
import RealisationsPage from "@/app/realisations/page";
import RealisationDetail from "@/app/realisations/detail";
import SidebarPage from "@/app/sidebar/page";
import LegalPage from "@/app/legal/page";

import EquipePage from "@/app/a-propos/equipe";
import PartenairesPage from "@/app/a-propos/partenaires";
import ActualitesPage from "@/app/ressources/actualites";
import NotFoundPage from "@/app/not-found";

function AppLayout({ children, loading }: { children?: React.ReactNode, loading: boolean }) {
  const location = useLocation();
  return (
    <div className="bg-alt-light dark:bg-[#0F172A] text-alt-slate dark:text-white transition-colors duration-300 font-sans antialiased">
      <Navbar />
      <main className="w-full min-h-screen overflow-hidden pt-20 relative z-10">
        <GradientOverlay />
        <AnimatedRoutes loading={loading} />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
      
      {/* Afficher la bannière de cookies uniquement sur la page d'accueil et seulement quand le loader est terminé */}
      {location.pathname === "/" && !loading && <CookieBanner />}
    </div>
  );
}

function AnimatedRoutes({ loading }: { loading: boolean }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30, clipPath: "circle(0% at 50% 50%)" }}
        animate={loading ? { opacity: 0, y: 30, clipPath: "circle(0% at 50% 50%)" } : { opacity: 1, y: 0, clipPath: "circle(150% at 50% 50%)" }}
        exit={{ opacity: 0, y: -30, clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/expertises/:id" element={<ExpertisesPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/realisations/:id" element={<RealisationDetail />} />
          <Route path="/a-propos/equipe" element={<EquipePage />} />
          <Route path="/a-propos/partenaires" element={<PartenairesPage />} />
          <Route path="/ressources/actualites" element={<ActualitesPage />} />
          <Route path="/sidebar" element={<SidebarPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/politique-de-confidentialite" element={<LegalPage />} />
          <Route path="/politique-de-cookies" element={<LegalPage />} />
          <Route path="/cgu" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling during loader and force scroll to top
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
    
    // Cleanup on unmount just in case
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="relative">
        <AppLayout loading={loading} />
      </div>
    </BrowserRouter>
  );
}

export default App;
