import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { blogArticles } from "@/data/blogArticles";
import { useMemo, useState } from "react";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return blogArticles;

    return blogArticles.filter((article) =>
      [
        article.title,
        article.excerpt,
        article.category,
        article.primaryKeyword,
        ...article.secondaryKeywords,
        ...article.semanticKeywords,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }, [searchTerm]);

  const breadcrumbs = [{ label: "Blog" }];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BrokerTrusted Blog",
    description: "In-depth guides on forex brokers, spreads, regulation, trading costs and safety for retail and professional traders.",
    url: "https://brokertrusted.com/blog",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "BrokerTrusted",
      logo: { "@type": "ImageObject", url: "https://brokertrusted.com/favicon.png" },
    },
    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `https://brokertrusted.com/blog/${article.slug}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      image: `https://brokertrusted.com${article.coverImage}`,
      description: article.metaDescription,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Forex Blog: Broker Guides & Rankings 2026"
        description="Original in-depth articles on forex brokers, spreads, regulation, trading costs and platform reviews for 2026."
        keywords={[
          "forex blog",
          "trusted forex broker",
          "forex spread",
          "best forex brokers",
          "forex guides 2026",
          "forex trading",
        ]}
        canonical="https://brokertrusted.com/blog"
        structuredData={structuredData}
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-primary to-emerald-950 py-14 text-white md:py-20">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_18%_20%,#34d399_0,transparent_27%),radial-gradient(circle_at_82%_0%,#60a5fa_0,transparent_25%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <BreadcrumbNav items={breadcrumbs} variant="light" />
            <div className="mx-auto mt-8 max-w-4xl text-center">
              <Badge className="mb-5 bg-success/20 text-emerald-200 hover:bg-success/25">Premium editorial content</Badge>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">BrokerTrusted Blog</h1>
              <p className="mt-6 text-xl leading-8 text-slate-200">
                In-depth, EEAT-driven guides on forex brokers, trading costs, regulation, rankings and smarter decisions across the financial markets.
              </p>
              <div className="relative mx-auto mt-8 max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search spreads, brokers, regulation..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="h-12 border-white/20 bg-white/10 pl-12 text-white placeholder:text-slate-300 focus:bg-white/15"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14">
          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border bg-card p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">No articles found</h2>
              <p className="mt-3 text-muted-foreground">Try another term related to forex, spreads or brokers.</p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              {filteredPosts.map((article, index) => (
                <Card key={article.slug} className={`group overflow-hidden border-border/80 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant ${index === 0 ? "lg:col-span-2" : ""}`}>
                  <div className={`grid ${index === 0 ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
                    <Link to={`/blog/${article.slug}`} className="block overflow-hidden bg-muted">
                      <img
                        src={article.coverImage}
                        alt={article.coverAlt}
                        title={article.coverTitle}
                        className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 ? "h-80 lg:h-full" : "h-64"}`}
                      />
                    </Link>
                    <CardContent className="flex flex-col p-7 md:p-8">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <Badge className="bg-success/10 text-success hover:bg-success/15">{article.category}</Badge>
                        <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDate(article.publishedAt)}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {article.readTime}</span>
                      </div>

                      <h2 className={`${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"} font-black leading-tight text-foreground group-hover:text-success`}>
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      </h2>

                      <p className="mt-4 text-lg leading-8 text-muted-foreground">{article.excerpt}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <Badge variant="outline" className="gap-1 text-xs">
                          <Tag className="h-3 w-3" /> {article.primaryKeyword}
                        </Badge>
                        {article.secondaryKeywords.slice(0, 4).map((keyword) => (
                          <Badge key={keyword} variant="secondary" className="text-xs">{keyword}</Badge>
                        ))}
                      </div>

                      <div className="mt-7">
                        <Button asChild className="bg-success text-white hover:bg-success/90">
                          <Link to={`/blog/${article.slug}`}>
                            Read full article <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <section className="mt-14 rounded-3xl border border-success/30 bg-gradient-to-br from-emerald-50 to-white p-8 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-foreground">Compare forex brokers before opening an account</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              Once you've read the guides, see the BrokerTrusted ranking focused on safety, regulation, spreads, platforms and user experience.
            </p>
            <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/brokers">
                See broker ranking <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
