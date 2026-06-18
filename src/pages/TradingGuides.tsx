import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Target, Shield, Zap, Users, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgTradingGuides from "@/assets/bg-trading-guides.jpg";
import guideForex2026 from "@/assets/guide-forex-2026.jpg";
import guideRiskManagement from "@/assets/guide-risk-management.jpg";
import guideTechnicalAnalysis from "@/assets/guide-technical-analysis.jpg";


const guideLevels = [
  {
    level: "Beginner",
    icon: BookOpen,
    color: "from-success to-success/70",
    guides: [
      "What is Forex Trading? Complete Introduction",
      "How to Choose Your First Broker",
      "Understanding Currency Pairs",
      "Basic Trading Terminology Explained",
      "Setting Up Your First Trading Account"
    ]
  },
  {
    level: "Intermediate",
    icon: TrendingUp,
    color: "from-primary to-primary/70",
    guides: [
      "Technical Analysis Fundamentals",
      "Risk Management Strategies",
      "Trading Psychology Essentials",
      "Chart Patterns and Indicators",
      "Developing a Trading Plan"
    ]
  },
  {
    level: "Advanced",
    icon: Target,
    color: "from-success/80 to-primary/80",
    guides: [
      "Advanced Trading Strategies",
      "Algorithmic Trading Introduction",
      "Multi-Timeframe Analysis",
      "Professional Money Management",
      "Advanced Order Types and Execution"
    ]
  },
];

const featuredGuides = [
  {
    title: "Complete Guide to Forex Trading in 2026",
    description: "The definitive 2026 roadmap to forex trading: master market structure, modern platforms, AI-assisted analysis, regulation updates, and proven strategies to trade confidently this year.",
    category: "Comprehensive",
    readTime: "45 min",
    level: "All Levels",
    image: guideForex2026,
  },
  {
    title: "Risk Management: Protect Your Capital",
    description: "Learn professional risk management techniques used by successful traders worldwide.",
    category: "Essential",
    readTime: "30 min",
    level: "Beginner-Intermediate",
    image: guideRiskManagement,
  },
  {
    title: "Technical Analysis Masterclass",
    description: "Master chart patterns, indicators, and technical analysis tools for better trading decisions.",
    category: "Technical",
    readTime: "60 min",
    level: "Intermediate-Advanced",
    image: guideTechnicalAnalysis,
  },
];

const topicCategories = [
  {
    icon: Shield,
    title: "Broker Selection",
    count: "25+ Guides",
    topics: ["Regulation & Safety", "Platform Comparison", "Account Types", "Fee Structures"]
  },
  {
    icon: TrendingUp,
    title: "Trading Strategies",
    count: "40+ Guides",
    topics: ["Day Trading", "Swing Trading", "Scalping", "Position Trading"]
  },
  {
    icon: Zap,
    title: "Technical Analysis",
    count: "35+ Guides",
    topics: ["Chart Patterns", "Indicators", "Price Action", "Multi-Timeframe"]
  },
  {
    icon: Users,
    title: "Trading Psychology",
    count: "20+ Guides",
    topics: ["Emotional Control", "Discipline", "Patience", "Mindset"]
  },
];

const learningPath = [
  {
    phase: "Foundation",
    duration: "2-4 Weeks",
    description: "Build your trading knowledge base with fundamental concepts",
    topics: ["Market basics", "Trading terminology", "Broker selection", "Account setup"]
  },
  {
    phase: "Development",
    duration: "2-3 Months",
    description: "Learn analysis techniques and develop your trading strategy",
    topics: ["Technical analysis", "Risk management", "Trading plan", "Demo trading"]
  },
  {
    phase: "Practice",
    duration: "3-6 Months",
    description: "Refine your skills with simulated trading and backtesting",
    topics: ["Strategy testing", "Journal keeping", "Performance analysis", "Adjustments"]
  },
  {
    phase: "Implementation",
    duration: "Ongoing",
    description: "Start live trading with proper risk management",
    topics: ["Live trading", "Continuous learning", "Strategy refinement", "Growth"]
  },
];

export default function TradingGuides() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Forex Trading Guides & Education - BrokerTrusted"
        description="Comprehensive forex trading guides for all levels. Learn strategies, technical analysis, risk management, and trading psychology from expert traders."
        keywords={["forex trading guides", "trading education", "forex strategies", "trading tutorials"]}
        canonical="https://brokertrusted.com/trading-guides"
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <img
            src={bgTradingGuides}
            alt="Forex trading charts background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/70" />
          <div className="absolute inset-0 bg-black/50" />
          
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-lg px-6 py-2">
                <BookOpen className="h-4 w-4 mr-2 inline" />
                120+ Expert Guides
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Master Forex Trading with Professional Guides
              </h1>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                From beginner basics to advanced strategies. Learn from experienced traders and accelerate 
                your journey to consistent profitability.
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-white/90">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-emerald-400">120+</div>
                  <div className="text-sm">Expert Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-emerald-400">50k+</div>
                  <div className="text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-emerald-400">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-emerald-400">4.9</div>
                  <div className="text-sm">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Levels */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Guides for Every Experience Level
              </h2>
              <p className="text-lg text-muted-foreground">
                Structured learning paths from first steps to advanced techniques
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {guideLevels.map((level, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-success/30 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <level.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-4">{level.level}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {level.guides.map((guide, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                          <ChevronRight className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-success/10 text-success border-success/30">
                Most Popular
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Featured Trading Guides
              </h2>
              <p className="text-lg text-muted-foreground">
                Our most comprehensive and highly-rated educational resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredGuides.map((guide, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-success border-success/30">
                        {guide.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{guide.readTime} read</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{guide.level}</Badge>
                      <Button variant="ghost" size="sm" className="text-success hover:text-success hover:bg-success/10">
                        Read Guide <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Topic Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Browse by Topic
              </h2>
              <p className="text-lg text-muted-foreground">
                Find guides organized by key trading topics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {topicCategories.map((category, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                    <Badge variant="outline" className="w-fit text-success border-success/30">
                      {category.count}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-success" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-success/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Structured Learning
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Your Trading Education Path
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven roadmap to becoming a consistently profitable trader
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {learningPath.map((phase, index) => (
                <div 
                  key={index}
                  className="relative mb-12 last:mb-0 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {index < learningPath.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-success to-primary -translate-x-1/2" />
                  )}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center text-white font-bold text-xl shadow-elegant">
                        {index + 1}
                      </div>
                    </div>
                    <Card className="flex-grow hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-2xl">{phase.phase}</CardTitle>
                          <Badge variant="outline" className="text-success border-success/30">
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {phase.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-br from-success/10 to-primary/10 border-2 border-success/20">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Start Your Trading Journey Today
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Access our complete library of trading guides and start building your skills with 
                    proven strategies and expert insights.
                  </p>
                  <Button size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
                    Browse All Guides
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}