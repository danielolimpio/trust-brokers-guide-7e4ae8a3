import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function BestForexBrokers() {
  const topBrokers = [...brokers]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 10);

  return (
    <div className="min-h-screen">
      <SEO
        title="Best Forex Brokers 2026 – Top Rated & Most Trusted"
        description="Discover the best forex brokers in 2026. Compare top-rated, regulated brokers with verified safety checks, competitive spreads, and excellent trading conditions."
        canonical="https://brokertrusted.com/best-forex-brokers"
        keywords={["best forex brokers","top forex brokers 2026","most trusted brokers","forex broker rankings"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Best Forex Brokers 2026
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Our top-ranked forex brokers have been carefully evaluated based on regulation, safety, trading conditions, platforms, and overall reputation. These are the most trusted brokers in the industry.
            </p>
            <div className="space-y-4">
              {topBrokers.map((broker) => (
                <BrokerCard key={broker.id} {...broker} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
