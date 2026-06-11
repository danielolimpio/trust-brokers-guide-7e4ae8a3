import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AnalyticsSetup } from "./components/AnalyticsSetup";
import { ScrollToTop } from "./components/ScrollToTop";
import { AdminProvider } from "./contexts/AdminContext";
import Index from "./pages/Index";
import About from "./pages/About";
import BrokerReview from "./pages/BrokerReview";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import UnifiedAdmin from "./pages/admin/UnifiedAdmin";
import Brokers from "./pages/Brokers";
import NewsBrokers from "./pages/NewsBrokers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BestForexBrokers from "./pages/BestForexBrokers";
import TopRegulatedBrokers from "./pages/TopRegulatedBrokers";
import BestSpreads from "./pages/BestSpreads";
import HighestLeverage from "./pages/HighestLeverage";
import BestBonuses from "./pages/BestBonuses";
import NewBrokers from "./pages/NewBrokers";
import BestForBeginners from "./pages/BestForBeginners";
import BestForProfessionals from "./pages/BestForProfessionals";
import BestMobileApps from "./pages/BestMobileApps";
import ECNBrokers from "./pages/ECNBrokers";
import STPBrokers from "./pages/STPBrokers";
import MarketMakers from "./pages/MarketMakers";
import BrokerReviews from "./pages/BrokerReviews";
import TradingGuides from "./pages/TradingGuides";
import MarketAnalysis from "./pages/MarketAnalysis";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnalyticsSetup />
            <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/broker/:brokerId" element={<BrokerReview />} />
            <Route path="/brokers" element={<Brokers />} />
            <Route path="/news" element={<NewsBrokers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Broker Category Pages */}
            <Route path="/best-forex-brokers" element={<BestForexBrokers />} />
            <Route path="/top-regulated-brokers" element={<TopRegulatedBrokers />} />
            <Route path="/best-spreads" element={<BestSpreads />} />
            <Route path="/highest-leverage" element={<HighestLeverage />} />
            <Route path="/best-bonuses" element={<BestBonuses />} />
            <Route path="/new-brokers" element={<NewBrokers />} />
            <Route path="/best-for-beginners" element={<BestForBeginners />} />
            <Route path="/best-for-professionals" element={<BestForProfessionals />} />
            <Route path="/best-mobile-apps" element={<BestMobileApps />} />
            <Route path="/ecn-brokers" element={<ECNBrokers />} />
            <Route path="/stp-brokers" element={<STPBrokers />} />
            <Route path="/market-makers" element={<MarketMakers />} />
            
            {/* Content Pages */}
            <Route path="/broker-reviews" element={<BrokerReviews />} />
            <Route path="/trading-guides" element={<TradingGuides />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<UnifiedAdmin />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AdminProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
