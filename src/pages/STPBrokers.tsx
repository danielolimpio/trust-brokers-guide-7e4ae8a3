import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";
import { ArrowRightLeft, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function STPBrokers() {
  const stpBrokers = [...brokers]
    .filter((b) => b.features.includes("STP") || b.features.includes("No Dealing Desk") || b.name.toLowerCase().includes("stp"))
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Best STP Forex Brokers 2025 – Straight Through Processing"
        description="Top STP forex brokers with straight-through processing and no dealing desk. Get direct access to liquidity providers with transparent execution."
        canonical="https://brokertrusted.com/stp-brokers"
        keywords={["STP brokers","straight through processing","NDD brokers","no dealing desk","STP forex"]}
      />
      <Header />
      <main>
        {/* Clean Hero */}
        <section className="py-16 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
                <ArrowRightLeft className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Straight Through Processing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                STP Forex Brokers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Straight Through Processing (STP) brokers route your orders directly to liquidity providers 
                without a dealing desk, ensuring transparent and conflict-free execution.
              </p>
            </div>
          </div>
        </section>

        {/* STP Benefits */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Why Choose STP Execution?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">No Conflicts</h3>
                <p className="text-sm text-muted-foreground">
                  Broker doesn't trade against you - they earn from spreads/commissions only
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Orders sent directly to liquidity providers for immediate execution
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Access to multiple liquidity sources ensures tight spreads
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRightLeft className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Transparent</h3>
                <p className="text-sm text-muted-foreground">
                  Clear pricing model with no hidden markups or requotes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How STP Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                How STP Processing Works
              </h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">You Place an Order</h3>
                      <p className="text-muted-foreground">
                        When you execute a trade on your platform, the order is immediately sent to the broker's system.
                      </p>
                    </div>
                  </div>
                  <div className="border-l-2 border-primary/20 ml-6 h-8"></div>
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Direct Routing to Liquidity Providers</h3>
                      <p className="text-muted-foreground">
                        The broker automatically routes your order straight through to their network of liquidity providers (banks, institutions).
                      </p>
                    </div>
                  </div>
                  <div className="border-l-2 border-primary/20 ml-6 h-8"></div>
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Best Price Selection</h3>
                      <p className="text-muted-foreground">
                        The broker's system selects the best available price from multiple liquidity providers and executes your order.
                      </p>
                    </div>
                  </div>
                  <div className="border-l-2 border-primary/20 ml-6 h-8"></div>
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Confirmation & Execution</h3>
                      <p className="text-muted-foreground">
                        You receive instant confirmation and your trade is executed at the quoted price with minimal slippage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Broker List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Best STP Forex Brokers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Regulated STP brokers offering no dealing desk execution and direct access to liquidity providers
              </p>
            </div>
            <div className="space-y-4 max-w-5xl mx-auto">
              {stpBrokers.length > 0 ? (
                stpBrokers.map((broker) => (
                  <BrokerCard key={broker.id} {...broker} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">More STP brokers coming soon. Check back regularly for updates.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* STP vs Market Maker */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                STP vs Market Maker Brokers
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-primary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">STP Brokers</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Orders sent to external liquidity providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>No conflict of interest with clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Variable spreads based on market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Better for scalping and EA trading</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Market Maker Brokers</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">•</span>
                      <span>Broker takes the opposite side of your trade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">•</span>
                      <span>Potential conflict of interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">•</span>
                      <span>Fixed spreads common</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">•</span>
                      <span>May have trading restrictions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
