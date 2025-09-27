import { useParams } from "react-router-dom";
import { Star, Shield, CheckCircle, XCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brokers } from "@/data/brokers";
import { Link } from "react-router-dom";

export default function BrokerReview() {
  const { brokerId } = useParams();
  const broker = brokers.find(b => b.id === brokerId);

  if (!broker) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Broker Not Found</h1>
          <p className="text-muted-foreground mb-8">The broker you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const prosAndCons = {
    pros: [
      "Tight spreads from 0.0 pips",
      "Fast execution speeds",
      "Strong regulatory oversight",
      "Excellent customer support",
      "Advanced trading platforms",
    ],
    cons: [
      "Higher minimum deposit requirement",
      "Limited educational resources",
      "No social trading features",
    ],
  };

  const customerReviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "Dec 2024",
      comment: "Excellent broker with fast execution and great customer service. Highly recommended for serious traders.",
    },
    {
      id: 2,
      name: "John D.",
      rating: 4,
      date: "Nov 2024",
      comment: "Good spreads and reliable platform. The only downside is the higher minimum deposit.",
    },
    {
      id: 3,
      name: "Mike R.",
      rating: 5,
      date: "Nov 2024",
      comment: "Been trading with them for 2 years. Never had any issues with withdrawals or execution.",
    },
  ];

  const comparisonBrokers = brokers.filter(b => b.id !== broker.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-success">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Broker Rankings
            </Link>
          </div>

          {/* Broker Header */}
          <Card className="mb-8 shadow-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={broker.logo}
                  alt={`${broker.name} logo`}
                  className="w-24 h-24 rounded-lg object-contain bg-white p-2"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                    <h1 className="text-3xl font-bold text-foreground">{broker.name}</h1>
                    {broker.isTrusted && (
                      <Badge className="bg-success-light text-success border-success/20">
                        <Shield className="h-3 w-3 mr-1" />
                        TRUSTED
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xl font-semibold">{broker.rating}</span>
                      <span className="text-muted-foreground">/{broker.maxRating}</span>
                    </div>
                    <Progress value={(broker.rating / broker.maxRating) * 100} className="w-32 h-2" />
                  </div>
                  
                  <p className="text-success font-medium mb-4">{broker.keyStrength}</p>
                </div>

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-success hover:bg-success/90 text-success-foreground shadow-success mb-2"
                  >
                    Start Trading
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground">Min Deposit: {broker.minDeposit}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="fees">Fees</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Our Verdict</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(broker.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-2xl font-bold">{broker.rating}/5</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {broker.name} stands out as one of the leading forex brokers in the industry, 
                        offering competitive spreads, robust regulatory compliance, and advanced trading platforms. 
                        With strong investor protection measures and excellent customer support, 
                        it's an ideal choice for both beginner and experienced traders.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Minimum Deposit</p>
                          <p className="font-semibold text-lg">{broker.minDeposit}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Maximum Leverage</p>
                          <p className="font-semibold text-lg">{broker.maxLeverage}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Regulation</p>
                          <p className="font-semibold">{broker.regulation}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Investor Protection</p>
                          <p className="font-semibold">{broker.investorProtection}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pros-cons" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-success flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Pros
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {prosAndCons.pros.map((pro, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-danger flex items-center">
                          <XCircle className="h-5 w-5 mr-2" />
                          Cons
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {prosAndCons.cons.map((con, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <XCircle className="h-4 w-4 text-danger mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Trading Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {broker.tradingPlatforms.map((platform) => (
                          <div key={platform} className="p-4 rounded-lg border border-border text-center">
                            <h4 className="font-semibold">{platform}</h4>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {customerReviews.map((review) => (
                          <div key={review.id} className="border-b border-border pb-4 last:border-b-0">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{review.name}</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="faq" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Is {broker.name} regulated?</h4>
                          <p className="text-sm text-muted-foreground">
                            Yes, {broker.name} is regulated by {broker.regulation}, ensuring compliance with strict financial standards.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="font-semibold mb-2">What is the minimum deposit?</h4>
                          <p className="text-sm text-muted-foreground">
                            The minimum deposit requirement is {broker.minDeposit}.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="font-semibold mb-2">How long do withdrawals take?</h4>
                          <p className="text-sm text-muted-foreground">
                            Withdrawals are typically processed within 1-3 business days, depending on the payment method.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Founded</span>
                    <span className="text-sm font-medium">2008</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Headquarters</span>
                    <span className="text-sm font-medium">{broker.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Users</span>
                    <span className="text-sm font-medium">500,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Our Ranking</span>
                    <span className="text-sm font-medium">#{broker.rank}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle>Compare with Similar Brokers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {comparisonBrokers.map((compareBroker) => (
                      <div key={compareBroker.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center space-x-3">
                          <img
                            src={compareBroker.logo}
                            alt={compareBroker.name}
                            className="w-8 h-8 rounded object-contain bg-white p-1"
                          />
                          <div>
                            <p className="font-medium text-sm">{compareBroker.name}</p>
                            <p className="text-xs text-muted-foreground">{compareBroker.rating}/5</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Compare
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}