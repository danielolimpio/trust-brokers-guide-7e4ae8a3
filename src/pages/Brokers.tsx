import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function Brokers() {
  const sorted = [...brokers].sort((a, b) => a.rank - b.rank);
  return (
    <div className="min-h-screen">
      <SEO
        title="All Trusted & Regulated Forex Brokers 2025"
        description="Complete list of trusted, regulated forex brokers with expert reviews. Compare spreads, fees, platforms and safety to choose the best broker."
        canonical="https://brokertrusted.com/brokers"
        keywords={["trusted forex brokers","regulated brokers","best forex brokers 2025","broker list"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Trusted & Regulated Forex Brokers
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Explore every broker in our database. Each broker is independently reviewed with regulation checks, trading conditions, platforms, fees, and safety verification.
            </p>
            <div className="space-y-4">
              {sorted.map((b) => (
                <BrokerCard key={b.id} {...b} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
