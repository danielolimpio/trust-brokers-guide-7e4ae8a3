import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function BestBonuses() {
  const topRankedBrokers = [...brokers]
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Best Forex Broker Bonuses & Promotions 2026"
        description="Discover forex brokers offering the best welcome bonuses, deposit bonuses, and promotions. Maximize your trading capital with verified broker offers."
        canonical="https://brokertrusted.com/best-bonuses"
        keywords={["forex bonuses","welcome bonus","deposit bonus","broker promotions","trading bonuses"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Best Forex Broker Bonuses
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Many brokers offer welcome bonuses, deposit bonuses, and promotions to new clients. Here are trusted brokers with competitive bonus offers. Always read terms and conditions carefully.
            </p>
            <div className="space-y-4">
              {topRankedBrokers.map((broker) => (
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
