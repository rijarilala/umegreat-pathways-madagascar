import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Eligibility from "./pages/Eligibility";
import CanadaImmigration from "./pages/CanadaImmigration";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FormationsIndex from "./pages/formations/index";
import CVImpactant from "./pages/formations/CVImpactant";
import LettreMotivation from "./pages/formations/LettreMotivation";
import RechercheEmploi from "./pages/formations/RechercheEmploi";
import TransitionVieActive from "./pages/formations/TransitionVieActive";
import LinkedIn from "./pages/formations/LinkedIn";
import GRH from "./pages/formations/GRH";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/canada-immigration" element={<CanadaImmigration />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/formations" element={<FormationsIndex />} />
            <Route path="/formations/cv-impactant" element={<CVImpactant />} />
            <Route path="/formations/lettre-motivation" element={<LettreMotivation />} />
            <Route path="/formations/recherche-emploi" element={<RechercheEmploi />} />
            <Route path="/formations/transition-vie-active" element={<TransitionVieActive />} />
            <Route path="/formations/linkedin" element={<LinkedIn />} />
            <Route path="/formations/grh" element={<GRH />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
