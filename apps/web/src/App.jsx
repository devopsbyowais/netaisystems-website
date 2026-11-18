import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Home from '@/pages/Home.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import ServiceDetailPage from '@/pages/ServiceDetailPage.jsx';
import IndustriesPage from '@/pages/IndustriesPage.jsx';
import WorkPage from '@/pages/WorkPage.jsx';
import ProductsPage from '@/pages/ProductsPage.jsx';
import ZodAgentPage from '@/pages/ZodAgentPage.jsx';
import StartProjectPage from '@/pages/StartProjectPage.jsx';
import DemoPage from '@/pages/DemoPage.jsx';
import RagChatbotDemoPage from '@/pages/RagChatbotDemoPage.jsx';
import { Toaster } from 'sonner';

/** Reset scroll position when navigating to a new page. */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[#00d4ff] focus:px-4 focus:py-2 focus:font-semibold focus:text-[#0a0e27]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/zodagent" element={<ZodAgentPage />} />
          <Route path="/start-project" element={<StartProjectPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/rag-chatbot-demo" element={<RagChatbotDemoPage />} />

          {/* Legacy routes retired in favour of the project enquiry page */}
          <Route path="/custom-ai-automation" element={<Navigate to="/start-project" replace />} />
          <Route path="/consultation" element={<Navigate to="/start-project" replace />} />
          <Route path="/automation-request" element={<Navigate to="/start-project" replace />} />
          <Route path="/contact" element={<Navigate to="/start-project" replace />} />

          {/* Alternate labels for the work section */}
          <Route path="/projects" element={<Navigate to="/work" replace />} />
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {/* Sonner Toaster component mounted globally to handle toast notifications */}
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
