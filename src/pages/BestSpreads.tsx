import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function BestSpreads() {
  const lowSpreadBrokers = [...brokers]
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Best Spreads Forex Brokers – Lowest Trading Costs 2025"
        description="Compare forex brokers with the lowest spreads. Find brokers offering tight spreads and minimal trading costs for maximum profitability."
        canonical="https://brokertrusted.com/best-spreads"
        keywords={["low spread brokers","tight spreads","best spreads forex","lowest trading costs"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Forex Brokers with Best Spreads
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Lower spreads mean lower trading costs and higher profitability. These brokers offer the tightest spreads in the industry, perfect for active traders and scalpers.
            </p>
            <div className="space-y-4">
              {lowSpreadBrokers.map((broker) => (
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
