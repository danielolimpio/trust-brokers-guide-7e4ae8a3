import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";
import { Badge } from "@/components/ui/badge";
import { Network, Zap, TrendingDown, Shield } from "lucide-react";

export default function ECNBrokers() {
  const ecnBrokers = [...brokers]
    .filter((b) => b.features.includes("ECN") || b.features.includes("Raw Spreads") || b.name.toLowerCase().includes("ecn"))
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Best ECN Forex Brokers 2026 – Direct Market Access & Raw Spreads"
        description="Top ECN forex brokers with direct market access, raw spreads, and no dealing desk. Trade with true interbank pricing and transparent execution."
        canonical="https://brokertrusted.com/ecn-brokers"
        keywords={["ECN brokers","ECN forex","direct market access","raw spreads","no dealing desk","interbank pricing"]}
      />
      <Header />
      <main>
        {/* Technical Hero */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Badge variant="outline" className="mb-6">Electronic Communication Network</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                ECN Forex Brokers
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                Electronic Communication Network (ECN) brokers connect traders directly to the interbank market 
                with no dealing desk interference, offering true market pricing and anonymous execution.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-lg">
                  <Network className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Direct Access</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Raw Spreads</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-lg">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Fast Execution</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-lg">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">No Conflicts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How ECN Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                How ECN Trading Works
              </h2>
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h3 className="font-semibold mb-2">Direct Market Connection</h3>
                      <p className="text-sm text-muted-foreground">
                        Your orders are sent directly to a liquidity pool where banks, financial institutions, and other traders provide bid/ask prices.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h3 className="font-semibold mb-2">Anonymous Execution</h3>
                      <p className="text-sm text-muted-foreground">
                        Orders are matched anonymously with the best available prices from multiple liquidity providers without broker intervention.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h3 className="font-semibold mb-2">Commission-Based Pricing</h3>
                      <p className="text-sm text-muted-foreground">
                        ECN brokers charge a small commission per trade instead of marking up spreads, ensuring transparent pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-6 bg-background">
                  <h3 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">ECN Advantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                      <span>True interbank pricing with tight spreads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                      <span>No conflict of interest with broker</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                      <span>Faster execution with less slippage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                      <span>Market depth visibility (Level II pricing)</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-border rounded-lg p-6 bg-background">
                  <h3 className="font-semibold text-lg mb-3 text-orange-600 dark:text-orange-400">ECN Considerations</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400 mt-0.5">!</span>
                      <span>Commission fees on each trade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400 mt-0.5">!</span>
                      <span>Variable spreads (can widen during volatility)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400 mt-0.5">!</span>
                      <span>Higher minimum deposit requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400 mt-0.5">!</span>
                      <span>More suitable for active/professional traders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Broker List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
                Top ECN Forex Brokers
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                These brokers offer true ECN execution with direct market access and transparent pricing
              </p>
            </div>
            <div className="space-y-4 max-w-5xl mx-auto">
              {ecnBrokers.length > 0 ? (
                ecnBrokers.map((broker) => (
                  <BrokerCard key={broker.id} {...broker} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">More ECN brokers coming soon. Check back regularly for updates.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ECN vs STP Comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                ECN vs STP: What's the Difference?
              </h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Network className="w-5 h-5 text-primary" />
                      ECN Execution
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Orders go to a liquidity pool where they're matched with other participants' orders. You can see market depth and place orders within the spread.
                    </p>
                    <p className="text-sm font-medium">Best for: Scalpers, high-frequency traders, professionals</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      STP Execution
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Orders are sent directly to liquidity providers who execute at their quoted prices. No market depth visibility, but still no dealing desk.
                    </p>
                    <p className="text-sm font-medium">Best for: Most retail traders, swing traders</p>
                  </div>
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
