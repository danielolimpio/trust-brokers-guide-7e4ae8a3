import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogArticles } from "@/data/blogArticles";

export function BlogSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("blog.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Original, in-depth guides on forex brokers, spreads, regulation, trading and market structure — written by professionals for serious traders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogArticles.slice(0, 4).map((post) => (
            <Card key={post.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-slide-up flex flex-col">
              <Link to={`/blog/${post.slug}`} className="aspect-video overflow-hidden block bg-muted">
                <img
                  src={post.coverImage}
                  alt={post.coverAlt}
                  title={post.coverTitle}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <CardContent className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="secondary" className="bg-success-light text-success text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-success transition-colors line-clamp-3">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto">
                  <Button asChild variant="ghost" size="sm" className="text-success hover:text-success/80 p-0 h-auto">
                    <Link to={`/blog/${post.slug}`}>
                      {t("blog.readMore")}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
