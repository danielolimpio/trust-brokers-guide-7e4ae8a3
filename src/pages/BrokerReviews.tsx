import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Star, TrendingUp, CheckCircle, Award, Users, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import bgBrokerReviews from "@/assets/bg-broker-reviews.jpg";
import icmarketsLogo from "@/assets/brokers/ic-markets.jpeg";
import exnessLogo from "@/assets/brokers/exness.jpeg";
import pepperstoneLogo from "@/assets/brokers/pepperstone.jpeg";

const reviewCategories = [
  {
    icon: Shield,
    title: "Regulation & Safety",
    description: "In-depth analysis of broker licensing, regulatory compliance, and investor protection",
    count: "250+ Reviews",
    gradient: "from-success to-success/70"
  },
  {
    icon: Star,
    title: "Trading Conditions",
    description: "Comprehensive evaluation of spreads, commissions, leverage, and execution quality",
    count: "500+ Analyses",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: TrendingUp,
    title: "Platform Performance",
    description: "Detailed testing of trading platforms, tools, charts, and mobile applications",
    count: "300+ Tests",
    gradient: "from-success/80 to-primary/80"
  },
  {
    icon: Users,
    title: "Customer Service",
    description: "Real-world testing of support quality, response times, and problem resolution",
    count: "1000+ Tests",
    gradient: "from-primary/70 to-success/60"
  },
];

const latestReviews = [
  {
    broker: "IC Markets",
    logo: icmarketsLogo,
    rating: 4.9,
    highlight: "Best for ECN Trading",
    summary: "IC Markets continues to excel with tight spreads, excellent execution, and comprehensive trading tools.",
    date: "May 2026",
    badge: "Editor's Choice"
  },
  {
    broker: "Exness",
    logo: exnessLogo,
    rating: 4.8,
    highlight: "Best Overall Broker",
    summary: "Exness maintains its position as a top-tier broker with robust regulation and competitive conditions.",
    date: "May 2026",
    badge: "Recommended"
  },
  {
    broker: "Pepperstone",
    logo: pepperstoneLogo,
    rating: 4.8,
    highlight: "Best Trading Technology",
    summary: "Pepperstone offers cutting-edge technology with MT4, MT5, cTrader, and proprietary platforms.",
    date: "April 2026",
    badge: "Featured"
  },
];

const methodology = [
  {
    step: "01",
    title: "Account Creation",
    description: "We open live accounts with real money to experience the actual trading environment"
  },
  {
    step: "02",
    title: "Platform Testing",
    description: "Extensive testing of all trading platforms, tools, and mobile applications for 30+ days"
  },
  {
    step: "03",
    title: "Trade Execution",
    description: "Analysis of execution speed, slippage, requotes, and order fill quality"
  },
  {
    step: "04",
    title: "Support Evaluation",
    description: "Multiple contact tests via live chat, email, and phone at different times"
  },
  {
    step: "05",
    title: "Withdrawal Testing",
    description: "Real withdrawal requests to verify processing times and procedures"
  },
  {
    step: "06",
    title: "Final Review",
    description: "Comprehensive scoring based on 50+ criteria and expert panel evaluation"
  },
];

export default function BrokerReviews() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen">
      <SEO
        title="Professional Forex Broker Reviews"
        description="Independent in-depth forex broker reviews. Real account testing and expert analysis of regulation, trading conditions and platforms."
        keywords={["broker reviews", "forex broker analysis", "broker comparison", "trading platform reviews"]}
        canonical="https://brokertrusted.com/broker-reviews"
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-slate-900">
          <img
            src={bgBrokerReviews}
            alt="Professional forex broker review workstation"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-primary/70" />
          <div className="absolute inset-0 bg-black/55" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-lg px-6 py-2">
                <Award className="h-4 w-4 mr-2 inline" />
                500+ Professional Reviews
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Independent Broker Reviews You Can Trust
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Real account testing, expert analysis, and comprehensive evaluations. We trade with real money 
                to give you honest, unbiased reviews of forex brokers.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search broker reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium">Real Account Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Independent Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-success" />
                  <span className="font-medium">Expert Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Review Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What We Review
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive review process covers every aspect of a broker's service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviewCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-success/30 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Badge variant="outline" className="text-success border-success/30">
                      {category.count}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Reviews */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Latest Broker Reviews
              </h2>
              <p className="text-lg text-muted-foreground">
                Recently updated comprehensive broker analyses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {latestReviews.map((review, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-success text-success-foreground">
                        {review.badge}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-success text-success" />
                        <span className="text-lg font-bold text-foreground">{review.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-16 w-16 rounded-lg overflow-hidden bg-white border border-border flex items-center justify-center flex-shrink-0">
                        <img
                          src={review.logo}
                          alt={`${review.broker} logo`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <CardTitle className="text-2xl">{review.broker}</CardTitle>
                    </div>
                    <p className="text-success font-semibold">{review.highlight}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{review.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{review.date}</span>
                      </div>
                      <Link to={`/broker/${review.broker.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" size="sm" className="group-hover:bg-success group-hover:text-success-foreground transition-colors">
                          Read Review
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/brokers">
                <Button size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
                  View All Broker Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Our Process
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                How We Review Brokers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A transparent, comprehensive 6-step review process backed by real trading experience
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {methodology.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 mb-8 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl border-2 border-success/20 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Why Our Reviews Stand Out
                  </h3>
                  <p className="text-muted-foreground">
                    Unlike many review sites, we don't just aggregate data. Our team opens real accounts, 
                    deposits actual funds, and trades for weeks to experience what you will. This hands-on 
                    approach ensures our reviews reflect real-world performance, not marketing claims.
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