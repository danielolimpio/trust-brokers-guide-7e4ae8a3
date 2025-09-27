import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { BrokerRanking } from "@/components/BrokerRanking";
import { BlogSection } from "@/components/BlogSection";
import { TopCategoriesSection } from "@/components/TopCategoriesSection";
import { ForexRatesWidget } from "@/components/ForexRatesWidget";
import { TeamSection } from "@/components/TeamSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FAQSection } from "@/components/FAQSection";
import { InternalLinks } from "@/components/InternalLinks";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { i18n } = useTranslation();
  
  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BrokerTrusted",
    "url": "https://brokertrusted.com",
    "logo": "https://brokertrusted.com/logo.png",
    "description": "Independent reviews and rankings of the most trusted, regulated forex brokers. Expert analysis to help you choose safe trading partners.",
    "sameAs": [
      "https://facebook.com/brokertrusted",
      "https://twitter.com/brokertrusted",
      "https://linkedin.com/company/brokertrusted"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@brokertrusted.com"
    }
  };

  // SEO configuration by language
  const seoConfig = {
    en: {
      title: "BrokerTrusted – Verified & Regulated Forex Brokers You Can Trust",
      description: "Find the safest, most trusted forex brokers in 2025. Independent reviews of regulated brokers with FCA, CySEC & ASIC licenses. Compare spreads, fees & safety.",
      keywords: ["trusted forex brokers", "regulated forex brokers", "safe forex brokers", "best forex brokers 2025", "FCA regulated brokers", "forex broker reviews"]
    },
    pt: {
      title: "BrokerTrusted – Corretoras Forex Verificadas e Regulamentadas",
      description: "Encontre as corretoras forex mais seguras e confiáveis em 2025. Análises independentes de corretoras regulamentadas com licenças FCA, CySEC e ASIC.",
      keywords: ["corretoras forex confiáveis", "corretoras regulamentadas", "melhores corretoras forex 2025", "corretoras seguras", "análises de corretoras"]
    },
    es: {
      title: "BrokerTrusted – Brókers Forex Verificados y Regulados",
      description: "Encuentra los brókers forex más seguros y confiables en 2025. Reseñas independientes de brókers regulados con licencias FCA, CySEC y ASIC.",
      keywords: ["brókers forex confiables", "brókers regulados", "mejores brókers forex 2025", "brókers seguros", "reseñas de brókers"]
    }
  };

  const currentSEO = seoConfig[i18n.language as keyof typeof seoConfig] || seoConfig.en;
  return (
    <div className="min-h-screen">
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
        keywords={currentSEO.keywords}
        canonical="https://brokertrusted.com/"
        structuredData={organizationSchema}
      />
      
      <Header />
      <main>
        <HeroBanner />
        <BrokerRanking />
        <InternalLinks />
        <TopCategoriesSection />
        <BlogSection />
        <ForexRatesWidget />
        <FAQSection />
        <TeamSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
