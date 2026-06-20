import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { brokers } from "@/data/brokers";
import { BrokerCard } from "@/components/BrokerCard";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Shield, TrendingUp } from "lucide-react";

export default function BestForBeginners() {
  const beginnerBrokers = [...brokers]
    .filter((b) => parseInt(b.minDeposit.replace(/\D/g, '')) <= 100)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      <SEO
        title="Best Forex Brokers for Beginners 2026 – Low Deposit & Easy to Use"
        description="Start forex trading with beginner-friendly brokers. Low minimum deposits, educational resources, demo accounts, and easy-to-use platforms for new traders."
        canonical="https://brokertrusted.com/best-for-beginners"
        keywords={["forex for beginners","beginner brokers","low deposit brokers","easy forex trading","demo accounts"]}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Perfect for New Traders</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Best Forex Brokers for Beginners
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Start your trading journey with confidence. These brokers offer low minimum deposits, 
                educational resources, and user-friendly platforms designed specifically for beginners.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose These Brokers */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Why These Brokers Are Perfect for Beginners
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Regulated & Safe</h3>
                <p className="text-sm text-muted-foreground">All brokers are regulated by top-tier authorities</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Free Education</h3>
                <p className="text-sm text-muted-foreground">Comprehensive learning resources and tutorials</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Low Deposits</h3>
                <p className="text-sm text-muted-foreground">Start with as little as $10-$100</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Demo Accounts</h3>
                <p className="text-sm text-muted-foreground">Practice risk-free before trading real money</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Broker List */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
              Top Brokers for Beginners
            </h2>
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Each broker below offers low minimum deposits and beginner-friendly features
            </p>
            <div className="space-y-4 max-w-5xl mx-auto">
              {beginnerBrokers.map((broker) => (
                <BrokerCard key={broker.id} {...broker} />
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Tips for Beginner Traders
              </h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">1. Start with a Demo Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Practice trading with virtual money before risking real capital. Most brokers offer free demo accounts.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">2. Learn Risk Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Never risk more than 1-2% of your account on a single trade. Use stop-loss orders to protect your capital.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">3. Use Educational Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Take advantage of free courses, webinars, and tutorials offered by your broker.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
