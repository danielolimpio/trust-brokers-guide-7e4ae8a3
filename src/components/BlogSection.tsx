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
            Conteúdos originais e aprofundados sobre corretoras Forex, spreads, regulação e trading para traders brasileiros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogArticles.map((post) => (
            <Card key={post.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-slide-up">
              <Link to={`/blog/${post.slug}`} className="aspect-video overflow-hidden block bg-muted">
                <img
                  src={post.coverImage}
                  alt={post.coverAlt}
                  title={post.coverTitle}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <Badge variant="secondary" className="bg-success-light text-success">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-success transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="outline" className="text-xs">{post.primaryKeyword}</Badge>
                  <Button asChild variant="ghost" size="sm" className="text-success hover:text-success/80">
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
