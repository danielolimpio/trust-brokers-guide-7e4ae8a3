import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AnalyticsSetup } from "./components/AnalyticsSetup";
import { AdminProvider } from "./contexts/AdminContext";
import Index from "./pages/Index";
import About from "./pages/About";
import BrokerReview from "./pages/BrokerReview";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import SEOSettings from "./pages/admin/SEOSettings";
import PostManagement from "./pages/admin/PostManagement";
import Categories from "./pages/admin/Categories";
import Brokers from "./pages/Brokers";
import NewsBrokers from "./pages/NewsBrokers";


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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/broker/:brokerId" element={<BrokerReview />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="seo" element={<SEOSettings />} />
              <Route path="posts" element={<PostManagement />} />
              <Route path="categories" element={<Categories />} />
            </Route>
            
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
