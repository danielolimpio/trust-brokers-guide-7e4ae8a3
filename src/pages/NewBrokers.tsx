import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function NewBrokers() {
  const currentYear = new Date().getFullYear();
  const newBrokers = brokers
    .filter((b) => b.foundedYear >= 2020 || currentYear - b.foundedYear <= 5)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="New Forex Brokers 2026 – Recently Established & Regulated"
        description="Explore new forex brokers established since 2020. Discover innovative, regulated brokers with modern platforms and competitive trading conditions."
        canonical="https://brokertrusted.com/new-brokers"
        keywords={["new forex brokers","recent brokers 2026","new trading platforms","emerging brokers"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              New Forex Brokers – Since 2020
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              These brokers have been established within the last 5 years. New brokers often bring innovation and competitive offers, but always verify regulation and safety before trading.
            </p>
            {newBrokers.length === 0 ? (
              <p className="text-muted-foreground">No new brokers found matching these criteria.</p>
            ) : (
              <div className="space-y-4">
                {newBrokers.map((broker) => (
                  <BrokerCard key={broker.id} {...broker} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
