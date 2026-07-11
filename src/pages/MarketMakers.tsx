import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";
import { Card } from "@/components/ui/card";
import { Lock, DollarSign, Users, BarChart2 } from "lucide-react";

export default function MarketMakers() {
  const marketMakerBrokers = [...brokers]
    .filter((b) => b.features.includes("Fixed Spreads") || parseInt(b.minDeposit.replace(/\D/g, '')) <= 50)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Market Maker Forex Brokers 2026 – Fixed Spreads & Guaranteed Execution"
        description="Market maker forex brokers with fixed spreads, guaranteed liquidity, and instant execution. Perfect for beginners with predictable trading costs."
        canonical="https://brokertrusted.com/market-makers"
        keywords={["market maker brokers","fixed spreads","dealing desk brokers","guaranteed execution","forex market makers"]}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Market Maker Forex Brokers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Market maker brokers create their own market by taking the opposite side of your trades. 
                They offer fixed spreads, guaranteed execution, and are ideal for beginners who value predictability.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-sm">Fixed Spreads</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-sm">No Commission</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">Beginner Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Market Makers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Understanding Market Maker Brokers
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&w=800&q=80"
                      alt="Forex dealing desk with live currency quotes on multiple monitors"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <BarChart2 className="w-6 h-6 text-primary" />
                      How They Work
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Market makers provide liquidity by acting as the counterparty to your trades. When you buy, they sell to you, and vice versa.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      They profit from the spread and by managing their overall risk exposure across all client positions.
                      This model allows them to offer fixed spreads and instant execution.
                    </p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                      alt="Stack of US dollar bills next to a pricing chart on paper"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-primary" />
                      Pricing Model
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Market makers typically offer fixed spreads and don't charge commissions. Your trading cost is built into the spread.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Fixed spreads remain constant regardless of market volatility, making costs predictable - great for beginners
                      learning to trade.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Advantages & Disadvantages */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border border-border rounded-xl overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
                      alt="Rising green candlestick chart showing trading advantages"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-green-600 dark:text-green-400">
                      Advantages
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <div>
                          <strong>Fixed Spreads:</strong> Predictable costs that don't widen during volatility
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <div>
                          <strong>No Commission:</strong> Simpler pricing - all costs in the spread
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <div>
                          <strong>Guaranteed Execution:</strong> Orders always filled at quoted price
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <div>
                          <strong>Lower Minimum Deposits:</strong> Often more accessible for beginners
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <div>
                          <strong>Instant Execution:</strong> No waiting for liquidity provider matching
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-xl overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=800&q=80"
                      alt="Warning sign with trader reviewing risk considerations on screen"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-orange-600 dark:text-orange-400">
                      Considerations
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">!</span>
                        <div>
                          <strong>Wider Spreads:</strong> Fixed spreads are typically wider than raw ECN spreads
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">!</span>
                        <div>
                          <strong>Conflict of Interest:</strong> Broker profits when you lose (though regulated brokers manage this ethically)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">!</span>
                        <div>
                          <strong>Scalping Restrictions:</strong> Some brokers limit very short-term trading
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">!</span>
                        <div>
                          <strong>Requotes Possible:</strong> May experience requotes during fast-moving markets
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">!</span>
                        <div>
                          <strong>Less Transparency:</strong> You don't see the underlying market depth
                        </div>
                      </li>
                    </ul>
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
                Trusted Market Maker Brokers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Regulated market maker brokers offering fixed spreads and guaranteed execution
              </p>
            </div>
            <div className="space-y-4 max-w-5xl mx-auto">
              {marketMakerBrokers.map((broker) => (
                <BrokerCard key={broker.id} {...broker} />
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Use Market Makers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Is a Market Maker Broker Right for You?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Beginners</h3>
                  <p className="text-sm text-muted-foreground">
                    Fixed spreads and no commissions make it easy to calculate costs. Perfect for learning without complicated fee structures.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Small Accounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Lower minimum deposits and smaller trade sizes make market makers accessible for traders with limited capital.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Swing Traders</h3>
                  <p className="text-sm text-muted-foreground">
                    If you hold positions for days or weeks, fixed spreads work well. Short-term scalpers may prefer ECN/STP execution.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Note */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 border-primary/20 bg-primary/5">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Always Choose Regulated Market Makers
                </h3>
                <p className="text-sm text-muted-foreground">
                  While the market maker model has potential conflicts of interest, regulated brokers are required to act ethically 
                  and maintain proper risk management. Always verify that your broker is licensed by top-tier regulators like FCA, 
                  ASIC, or CySEC before opening an account.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
