import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { BrokerRanking } from "@/components/BrokerRanking";
import { BlogSection } from "@/components/BlogSection";
import { TopCategoriesSection } from "@/components/TopCategoriesSection";
import { ForexRatesWidget } from "@/components/ForexRatesWidget";
import { TeamSection } from "@/components/TeamSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <BrokerRanking />
        <BlogSection />
        <TopCategoriesSection />
        <ForexRatesWidget />
        <TeamSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
