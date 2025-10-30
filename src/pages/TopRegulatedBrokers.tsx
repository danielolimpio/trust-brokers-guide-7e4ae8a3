import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function TopRegulatedBrokers() {
  const regulatedBrokers = [...brokers]
    .filter((b) => b.regulation.includes("FCA") || b.regulation.includes("ASIC") || b.regulation.includes("CySEC"))
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Top Regulated Forex Brokers – FCA, ASIC & CySEC Licensed"
        description="Find the top regulated forex brokers with FCA, ASIC, and CySEC licenses. Trade safely with verified, government-regulated forex brokers."
        canonical="https://brokertrusted.com/top-regulated-brokers"
        keywords={["regulated forex brokers","FCA brokers","ASIC brokers","CySEC brokers","licensed brokers"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Top Regulated Forex Brokers
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              These brokers are regulated by tier-1 authorities including FCA (UK), ASIC (Australia), and CySEC (Cyprus). Regulation ensures your funds are protected and brokers operate transparently.
            </p>
            <div className="space-y-4">
              {regulatedBrokers.map((broker) => (
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
