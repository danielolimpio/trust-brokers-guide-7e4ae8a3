import { ArrowRight, Users, Gift, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { brokers } from "@/data/brokers";

const categories = [
  {
    id: "beginners",
    title: "Best Brokers for Beginners",
    description: "Perfect for new traders with educational resources and user-friendly platforms",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    topBrokers: brokers.slice(0, 3).map(broker => ({ ...broker, reason: "Low min deposit" })),
  },
  {
    id: "bonuses",
    title: "Best Brokers with Highest Bonuses",
    description: "Maximize your trading capital with generous welcome bonuses and promotions",
    icon: Gift,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    topBrokers: brokers.filter(b => b.bonuses).slice(0, 3).map(broker => ({ ...broker, reason: "100% bonus" })),
  },
  {
    id: "newest",
    title: "Newest Brokers",
    description: "Recently launched brokers with innovative features and competitive offerings",
    icon: Clock,
    color: "text-green-600",
    bgColor: "bg-green-50",
    topBrokers: brokers.slice(3, 6).map(broker => ({ ...broker, reason: "Est. 2024" })),
  },
  {
    id: "algorithmic",
    title: "Best for Algorithmic Trading",
    description: "Advanced platforms with API access and automated trading capabilities",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    topBrokers: brokers.slice(1, 4).map(broker => ({ ...broker, reason: "API access" })),
  },
];

export function TopCategoriesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Top Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover curated lists of the best brokers for specific trading needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card key={category.id} className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {category.topBrokers.map((broker, index) => (
                      <div key={broker.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                            {index + 1}
                          </div>
                          <img
                            src={broker.logo}
                            alt={`${broker.name} logo`}
                            className="w-8 h-8 rounded object-contain bg-white p-1"
                          />
                          <div>
                            <h4 className="font-medium text-foreground">{broker.name}</h4>
                            <p className="text-xs text-muted-foreground">{broker.reason}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {broker.rating}/5
                          </Badge>
                          <Button size="sm" variant="ghost" className="text-success hover:text-success/80">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <Button variant="outline" className="w-full group">
                      View All in Category
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}