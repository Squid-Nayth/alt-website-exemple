import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientOverlay from "@/components/layout/GradientOverlay";
import Loader from "@/components/layout/Loader";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { useState, useEffect } from "react";

// Import pages (assuming they are in src/app/folder/page.tsx or similar)
import HomePage from "@/app/page";
import AProposPage from "@/app/a-propos/page";
import ContactPage from "@/app/contact/page";
import ExpertisesPage from "@/app/expertises/detail";
import ProjetsFilterPage from "@/app/projets/page";
import RealisationDetail from "@/app/realisations/detail";
import RessourcesPage from "@/app/ressources/page";
import SidebarPage from "@/app/sidebar/page";
import LegalPage from "@/app/legal/page";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-alt-light dark:bg-[#0F172A] text-alt-slate dark:text-white transition-colors duration-300 font-sans antialiased">
      <Navbar />
      <main className="w-full min-h-screen overflow-hidden pt-32 relative z-10">
        <GradientOverlay />
        {children}
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
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
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <AppLayout>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/a-propos/*" element={<AProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/expertises/:id" element={<ExpertisesPage />} />
          <Route path="/projets" element={<ProjetsFilterPage />} />
          <Route path="/realisations/:id" element={<RealisationDetail />} />
          <Route path="/ressources" element={<RessourcesPage />} />
          <Route path="/ressources/*" element={<RessourcesPage />} />
          <Route path="/sidebar" element={<SidebarPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/politique-de-confidentialite" element={<LegalPage />} />
          <Route path="/politique-de-cookies" element={<LegalPage />} />
          <Route path="/cgu" element={<LegalPage />} />
        </Routes>
      </AppLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
