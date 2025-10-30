import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";
import { Card } from "@/components/ui/card";
import { Smartphone, Zap, Bell, BarChart } from "lucide-react";

export default function BestMobileApps() {
  const mobileBrokers = [...brokers]
    .filter((b) => b.tradingPlatforms.includes("Mobile") || b.tradingPlatforms.includes("MT4") || b.tradingPlatforms.includes("MT5"))
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Best Forex Mobile Trading Apps 2025 – iOS & Android"
        description="Top-rated forex mobile trading apps for iOS and Android. Trade on-the-go with powerful mobile platforms, real-time charts, and instant execution."
        canonical="https://brokertrusted.com/best-mobile-apps"
        keywords={["forex mobile app","mobile trading","iOS forex app","Android forex app","trading on mobile"]}
      />
      <Header />
      <main>
        {/* Mobile-First Hero */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Trade Anywhere, Anytime</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Best Forex Mobile Trading Apps
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Trade on-the-go with powerful mobile apps. Real-time charts, instant order execution, 
                    price alerts, and full account management from your smartphone or tablet.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-96 bg-gradient-to-b from-primary/20 to-primary/5 rounded-3xl border border-primary/20 shadow-2xl flex flex-col p-6">
                      <div className="h-2 w-24 bg-foreground/10 rounded-full mx-auto mb-6"></div>
                      <div className="flex-1 space-y-4">
                        <div className="h-32 bg-foreground/5 rounded-lg"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-20 bg-foreground/5 rounded-lg"></div>
                          <div className="h-20 bg-foreground/5 rounded-lg"></div>
                        </div>
                        <div className="h-24 bg-foreground/5 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Features */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Mobile Trading Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Instant Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Execute trades instantly with one-tap trading and quick order placement
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Advanced Charts</h3>
                <p className="text-sm text-muted-foreground">
                  Full charting tools with technical indicators and drawing tools on mobile
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Price Alerts</h3>
                <p className="text-sm text-muted-foreground">
                  Set custom price alerts and receive push notifications instantly
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Touch-Optimized</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive interface designed specifically for touchscreen devices
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Broker List with Mobile Focus */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Top Mobile Trading Apps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These brokers offer award-winning mobile apps for iOS and Android with full trading functionality
              </p>
            </div>
            <div className="space-y-4 max-w-5xl mx-auto">
              {mobileBrokers.map((broker) => (
                <BrokerCard key={broker.id} {...broker} />
              ))}
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                What to Look for in a Mobile Trading App
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">✓</span> User Interface
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Clean, intuitive design optimized for small screens with easy navigation and touch-friendly buttons.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">✓</span> Full Functionality
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All features from desktop version including charting, order types, and account management.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">✓</span> Performance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fast loading times, smooth scrolling, and reliable execution even on slower connections.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">✓</span> Security
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Biometric login, encryption, and secure connection to protect your trading account.
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
