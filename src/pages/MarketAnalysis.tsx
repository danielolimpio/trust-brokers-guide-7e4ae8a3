import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, BarChart3, LineChart, PieChart, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const majorPairs = [
  { pair: "EUR/USD", price: "1.0895", change: "+0.45%", trend: "up", signal: "Bullish" },
  { pair: "GBP/USD", price: "1.2734", change: "+0.32%", trend: "up", signal: "Bullish" },
  { pair: "USD/JPY", price: "148.52", change: "-0.28%", trend: "down", signal: "Bearish" },
  { pair: "AUD/USD", price: "0.6542", change: "+0.18%", trend: "up", signal: "Neutral" },
  { pair: "USD/CAD", price: "1.3625", change: "-0.15%", trend: "down", signal: "Bearish" },
  { pair: "USD/CHF", price: "0.8923", change: "+0.09%", trend: "up", signal: "Neutral" },
];

const marketInsights = [
  {
    title: "Federal Reserve Policy Outlook",
    category: "Central Banks",
    date: "2 hours ago",
    summary: "Fed signals potential rate cuts in Q2 2025 as inflation shows sustained decline. Markets pricing in 75bps of cuts by year-end.",
    impact: "High",
    icon: TrendingUp
  },
  {
    title: "Euro Zone Economic Data",
    category: "Economic Data",
    date: "5 hours ago",
    summary: "Manufacturing PMI exceeds expectations at 48.2, suggesting stabilization in European industrial sector.",
    impact: "Medium",
    icon: Activity
  },
  {
    title: "Dollar Strength Analysis",
    category: "Currency Analysis",
    date: "1 day ago",
    summary: "USD index shows technical resistance at 104.50 level. Key support remains at 102.20 amid mixed economic signals.",
    impact: "High",
    icon: BarChart3
  },
];

const technicalAnalysis = [
  {
    pair: "EUR/USD",
    timeframe: "Daily",
    trend: "Bullish",
    support: "1.0820",
    resistance: "1.0950",
    recommendation: "Buy on dips to 1.0850",
    confidence: 85
  },
  {
    pair: "GBP/USD",
    timeframe: "Daily",
    trend: "Bullish",
    support: "1.2650",
    resistance: "1.2800",
    recommendation: "Long above 1.2700",
    confidence: 78
  },
  {
    pair: "USD/JPY",
    timeframe: "Daily",
    trend: "Bearish",
    support: "147.20",
    resistance: "149.50",
    recommendation: "Sell rallies to 149.00",
    confidence: 72
  },
];

const economicCalendar = [
  {
    time: "08:30 EST",
    currency: "USD",
    event: "Non-Farm Payrolls",
    importance: "High",
    forecast: "185K",
    previous: "199K"
  },
  {
    time: "10:00 EST",
    currency: "EUR",
    event: "ECB Interest Rate Decision",
    importance: "High",
    forecast: "4.00%",
    previous: "4.00%"
  },
  {
    time: "14:30 EST",
    currency: "GBP",
    event: "GDP Growth Rate",
    importance: "Medium",
    forecast: "0.3%",
    previous: "0.2%"
  },
];

const sentimentIndicators = [
  {
    metric: "Market Sentiment",
    value: "65%",
    status: "Bullish",
    change: "+5%",
    icon: TrendingUp
  },
  {
    metric: "Volatility Index",
    value: "28.5",
    status: "Moderate",
    change: "-2.3",
    icon: Activity
  },
  {
    metric: "Risk Appetite",
    value: "72%",
    status: "High",
    change: "+8%",
    icon: BarChart3
  },
];

export default function MarketAnalysis() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Forex Market Analysis - BrokerTrusted"
        description="Real-time forex market analysis, technical insights, and economic calendar. Expert analysis of major currency pairs and market trends."
        keywords={["forex market analysis", "currency analysis", "technical analysis", "economic calendar"]}
        canonical="https://brokertrusted.com/market-analysis"
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-success/50" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-success/20 text-success border-success/30 text-lg px-6 py-2">
                <Activity className="h-4 w-4 mr-2 inline" />
                Live Market Data
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Professional Forex Market Analysis
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Real-time market insights, technical analysis, and expert commentary on major currency pairs 
                and global economic events.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 text-white/90">
                <div className="text-center">
                  <LineChart className="h-8 w-8 mx-auto mb-2 text-success" />
                  <div className="font-semibold">Technical Analysis</div>
                </div>
                <div className="text-center">
                  <PieChart className="h-8 w-8 mx-auto mb-2 text-success" />
                  <div className="font-semibold">Market Sentiment</div>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-2 text-success" />
                  <div className="font-semibold">Economic Data</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Market Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <h2 className="text-4xl font-bold text-foreground">
                  Live Market Overview
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Real-time prices and trends for major currency pairs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {majorPairs.map((pair, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 animate-fade-in border-2 hover:border-success/30"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{pair.pair}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={pair.signal === "Bullish" ? "text-success border-success/30" : pair.signal === "Bearish" ? "text-destructive border-destructive/30" : "text-muted-foreground"}
                      >
                        {pair.signal}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between mb-2">
                      <div className="text-3xl font-bold text-foreground">{pair.price}</div>
                      <div className={`flex items-center gap-1 text-lg font-semibold ${pair.trend === "up" ? "text-success" : "text-destructive"}`}>
                        {pair.trend === "up" ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownRight className="h-5 w-5" />}
                        {pair.change}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-success group-hover:text-success-foreground group-hover:border-success transition-all">
                      View Analysis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Latest Market Insights
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert analysis and commentary on key market developments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {marketInsights.map((insight, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <insight.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge 
                        variant="outline"
                        className={insight.impact === "High" ? "text-destructive border-destructive/30" : "text-muted-foreground"}
                      >
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {insight.category}
                    </Badge>
                    <CardTitle className="text-xl mb-2">{insight.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{insight.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{insight.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Analysis & Economic Calendar */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="technical" className="text-lg">Technical Analysis</TabsTrigger>
                <TabsTrigger value="calendar" className="text-lg">Economic Calendar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technical" className="animate-fade-in">
                <div className="space-y-6">
                  {technicalAnalysis.map((analysis, index) => (
                    <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl">{analysis.pair}</CardTitle>
                          <div className="flex items-center gap-4">
                            <Badge variant="secondary">{analysis.timeframe}</Badge>
                            <Badge 
                              variant="outline"
                              className={analysis.trend === "Bullish" ? "text-success border-success/30" : "text-destructive border-destructive/30"}
                            >
                              {analysis.trend}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <div className="space-y-3 mb-4">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Support:</span>
                                <span className="font-semibold text-success">{analysis.support}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Resistance:</span>
                                <span className="font-semibold text-destructive">{analysis.resistance}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Confidence:</span>
                                <span className="font-semibold">{analysis.confidence}%</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="p-4 bg-gradient-to-br from-success/10 to-primary/10 rounded-lg border border-success/20">
                              <div className="text-sm text-muted-foreground mb-2">Trading Recommendation</div>
                              <div className="font-semibold text-foreground">{analysis.recommendation}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="calendar" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Today's Economic Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {economicCalendar.map((event, index) => (
                        <div 
                          key={index}
                          className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-4">
                              <div className="text-lg font-semibold text-foreground">{event.time}</div>
                              <Badge className="bg-primary text-primary-foreground">{event.currency}</Badge>
                              <Badge 
                                variant="outline"
                                className={event.importance === "High" ? "text-destructive border-destructive/30" : "text-muted-foreground"}
                              >
                                {event.importance}
                              </Badge>
                            </div>
                          </div>
                          <div className="font-semibold text-foreground mb-2">{event.event}</div>
                          <div className="flex gap-6 text-sm">
                            <div>
                              <span className="text-muted-foreground">Forecast: </span>
                              <span className="font-semibold">{event.forecast}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Previous: </span>
                              <span className="font-semibold">{event.previous}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Market Sentiment */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-success/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Market Sentiment Indicators
              </h2>
              <p className="text-lg text-muted-foreground">
                Key metrics tracking overall market mood and risk appetite
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {sentimentIndicators.map((indicator, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center mx-auto mb-4">
                      <indicator.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-muted-foreground font-normal">
                      {indicator.metric}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-foreground mb-2">{indicator.value}</div>
                    <Badge 
                      variant="outline"
                      className={indicator.status === "Bullish" || indicator.status === "High" ? "text-success border-success/30" : "text-muted-foreground"}
                    >
                      {indicator.status}
                    </Badge>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {indicator.change} from yesterday
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}