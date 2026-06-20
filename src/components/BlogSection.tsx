import { Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Forex Broker: Complete Guide 2026",
    excerpt: "Essential factors to consider when selecting a forex broker, from regulation to trading costs and platform features.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop",
    date: "May 18, 2026",
    readTime: "8 min read",
    category: "Guide",
    slug: "choose-right-forex-broker-2026",
  },
  {
    id: 2,
    title: "Top 5 Forex Brokers with Best Spreads in 2026",
    excerpt: "Comprehensive analysis of brokers offering the tightest spreads for major currency pairs and their impact on your trading.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Analysis",
    slug: "best-spreads-forex-brokers-2026",
  },
  {
    id: 3,
    title: "Understanding Forex Regulation: Why It Matters",
    excerpt: "A deep dive into regulatory bodies, investor protection schemes, and why choosing regulated brokers is crucial.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    date: "Apr 28, 2026",
    readTime: "10 min read",
    category: "Education",
    slug: "forex-regulation-guide",
  },
  {
    id: 4,
    title: "MetaTrader 4 vs MetaTrader 5: Which Platform to Choose?",
    excerpt: "Detailed comparison of the world's most popular trading platforms, their features, and which suits your trading style.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    date: "Apr 14, 2026",
    readTime: "7 min read",
    category: "Platforms",
    slug: "metatrader-4-vs-5-comparison",
  },
  {
    id: 5,
    title: "Forex Trading Psychology: Common Mistakes to Avoid",
    excerpt: "Psychological factors that impact trading decisions and practical strategies to develop disciplined trading habits.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
    date: "Mar 30, 2026",
    readTime: "9 min read",
    category: "Psychology",
    slug: "forex-trading-psychology-mistakes",
  },
];

export function BlogSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("blog.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights, analysis, and guides from our trading experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post) => (
            <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 animate-slide-up">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-success-light text-success">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-success transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm" className="text-success hover:text-success/80">
                    {t("blog.readMore")}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional posts preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(3, 5).map((post) => (
            <Card key={post.id} className="group hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-success transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {post.excerpt.substring(0, 120)}...
                    </p>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}