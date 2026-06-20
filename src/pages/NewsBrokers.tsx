import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";

export default function NewsBrokers() {
  const currentYear = new Date().getFullYear();
  const filtered = brokers
    .filter((b) => b.foundedYear >= 2020 || currentYear - b.foundedYear <= 5)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="New Forex Brokers (Since 2020) – Trusted & Regulated"
        description="Discover newly established forex brokers (since 2020). See which new brokers are regulated and trusted with verified safety checks."
        canonical="https://brokertrusted.com/news"
        keywords={["new forex brokers","recent brokers","regulated brokers 2026","safe forex brokers"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              New Forex Brokers – Established Since 2020
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              We list only newly established brokers (up to 5 years old) and verify their regulation and safety. Younger brokers can be innovative but always review risks carefully.
            </p>

            {filtered.length === 0 ? (
              <p className="text-muted-foreground">No new brokers match this filter yet. Check back soon.</p>
            ) : (
              <div className="space-y-4">
                {filtered.map((b) => (
                  <BrokerCard key={b.id} {...b} />
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
