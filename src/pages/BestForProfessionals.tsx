import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, Cpu, TrendingUp } from "lucide-react";

export default function BestForProfessionals() {
  const professionalBrokers = [...brokers]
    .filter((b) => parseInt(b.maxLeverage.replace(/\D/g, '')) >= 200 || b.features.includes("Advanced") || b.features.includes("Professional"))
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Best Forex Brokers for Professional Traders 2025"
        description="Professional-grade forex brokers with advanced trading tools, high leverage, institutional execution, and premium features for experienced traders."
        canonical="https://brokertrusted.com/best-for-professionals"
        keywords={["professional forex brokers","advanced trading","institutional brokers","high leverage","professional trading platforms"]}
      />
      <Header />
      <main>
        {/* Premium Hero */}
        <section className="relative py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-sm">Professional Grade</Badge>
                <Badge variant="outline" className="text-sm">Institutional Quality</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Brokers Built for Professional Traders
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Advanced execution technology, institutional liquidity, sophisticated tools, 
                and premium features designed for high-volume professional traders.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Ultra-Fast Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Advanced Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <span>API Trading</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Lightning Execution</h3>
                <p className="text-muted-foreground">
                  Microsecond-level execution speeds with tier-1 liquidity providers and minimal slippage.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Professional Tools</h3>
                <p className="text-muted-foreground">
                  Advanced charting, algorithmic trading, market depth, and comprehensive technical analysis.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">High Leverage</h3>
                <p className="text-muted-foreground">
                  Access to higher leverage ratios for experienced traders who understand risk management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Broker List */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Elite Professional Brokers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Handpicked brokers offering institutional-grade infrastructure and advanced trading capabilities
              </p>
            </div>
            <div className="space-y-4 max-w-5xl mx-auto">
              {professionalBrokers.map((broker) => (
                <BrokerCard key={broker.id} {...broker} />
              ))}
            </div>
          </div>
        </section>

        {/* Professional Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                What Professional Traders Need
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-3">Direct Market Access (DMA)</h3>
                  <p className="text-sm text-muted-foreground">
                    Trade directly with liquidity providers without dealer intervention for transparent pricing and faster execution.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-3">API & Algorithmic Trading</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect trading bots and automated strategies via FIX API or REST API for algorithmic execution.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-3">Deep Liquidity</h3>
                  <p className="text-sm text-muted-foreground">
                    Access multiple tier-1 liquidity pools ensuring tight spreads and large order execution without slippage.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-3">Advanced Risk Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Sophisticated position sizing, portfolio analysis, VaR calculations, and multi-account management tools.
                  </p>
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
