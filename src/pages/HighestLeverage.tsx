import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function HighestLeverage() {
  const highLeverageBrokers = [...brokers]
    .sort((a, b) => {
      const levA = a.maxLeverage.includes("Unlimited") ? 999999 : parseInt(a.maxLeverage.replace("1:", "").replace("+", ""));
      const levB = b.maxLeverage.includes("Unlimited") ? 999999 : parseInt(b.maxLeverage.replace("1:", "").replace("+", ""));
      return levB - levA;
    });

  return (
    <div className="min-h-screen">
      <SEO
        title="Highest Leverage Forex Brokers – Up to 1:500+ in 2026"
        description="Find forex brokers offering the highest leverage ratios. Compare brokers with leverage up to 1:500 and beyond for experienced traders."
        canonical="https://brokertrusted.com/highest-leverage"
        keywords={["high leverage brokers","1:500 leverage","maximum leverage forex","leverage trading"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Forex Brokers with Highest Leverage
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              High leverage allows you to control larger positions with less capital. These brokers offer the highest leverage ratios available. Remember: higher leverage means higher risk.
            </p>
            <div className="space-y-4">
              {highLeverageBrokers.map((broker) => (
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
