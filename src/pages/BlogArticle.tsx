import { Link, Navigate, useParams } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AuthorInline, AuthorCard } from "@/components/AuthorBlock";
import { danielOlimpio } from "@/data/author";
import { blogArticles, getBlogArticleBySlug, type ArticleSection } from "@/data/blogArticles";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));

const absoluteUrl = (path: string) => new URL(path, "https://brokertrusted.com").href;

const Callout = ({ callout }: { callout: NonNullable<ArticleSection["callout"]> }) => {
  const Icon = callout.type === "warning" ? AlertTriangle : callout.type === "tip" ? Lightbulb : Sparkles;
  const styles =
    callout.type === "warning"
      ? "border-amber-300/60 bg-amber-50 text-amber-950"
      : callout.type === "tip"
        ? "border-emerald-300/60 bg-emerald-50 text-emerald-950"
        : "border-blue-300/60 bg-blue-50 text-blue-950";

  return (
    <div className={`my-8 rounded-2xl border p-5 shadow-sm ${styles}`}>
      <div className="flex gap-3">
        <Icon className="mt-1 h-5 w-5 flex-shrink-0" />
        <div>
          <h4 className="font-bold">{callout.title}</h4>
          <p className="mt-2 leading-relaxed">{callout.text}</p>
        </div>
      </div>
    </div>
  );
};

const SectionBlock = ({ section, index }: { section: ArticleSection; index: number }) => (
  <section id={section.id} className="scroll-mt-24 border-t border-border/70 pt-10 first:border-t-0 first:pt-0">
    {section.eyebrow && (
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-success">{section.eyebrow}</p>
    )}
    <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">{section.title}</h2>

    {section.paragraphs?.map((paragraph) => (
      <p key={paragraph} className="mt-5 text-lg leading-8 text-muted-foreground">
        {paragraph}
      </p>
    ))}

    {section.bullets && (
      <div className="mt-7 rounded-2xl border bg-card p-5 shadow-sm">
        <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
          <CheckCircle2 className="h-5 w-5 text-success" /> Key points
        </h3>
        <ul className="space-y-3">
          {section.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
              <span className="leading-7">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {section.ordered && (
      <div className="mt-7 rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-foreground">Step-by-step checklist</h3>
        <ol className="space-y-4">
          {section.ordered.map((item, itemIndex) => (
            <li key={item} className="flex gap-4 text-muted-foreground">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-success/10 text-sm font-bold text-success">
                {itemIndex + 1}
              </span>
              <span className="pt-1 leading-7">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    )}

    {section.table && (
      <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} className="px-5 py-4 text-sm font-bold uppercase tracking-wide">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {section.table.rows.map((row) => (
                <tr key={row.join("-")} className="hover:bg-muted/40">
                  {row.map((cell) => (
                    <td key={cell} className="px-5 py-4 align-top leading-7 text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}

    {section.callout && <Callout callout={section.callout} />}

    {(index === 3 || index === 8) && (
      <div className="my-10 rounded-3xl border border-success/25 bg-gradient-to-r from-primary via-primary/95 to-emerald-900 p-6 text-primary-foreground shadow-elegant">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Compare brokers before you deposit</h3>
            <p className="mt-2 max-w-2xl text-primary-foreground/85">
              Independent rankings on regulation, spreads, platforms and best-fit trader profiles at BrokerTrusted.
            </p>
          </div>
          <Button asChild className="bg-white text-primary hover:bg-white/90">
            <Link to="/brokers">
              See ranking <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    )}
  </section>
);

const BlogArticle = () => {
  const { slug } = useParams();
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const articleUrl = `https://brokertrusted.com/blog/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.metaDescription,
        image: [absoluteUrl(article.coverImage), absoluteUrl(article.midImage)],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: "en-US",
        mainEntityOfPage: articleUrl,
        author: {
          "@type": "Person",
          name: danielOlimpio.name,
          jobTitle: danielOlimpio.role,
          url: danielOlimpio.website,
          sameAs: danielOlimpio.socials.map((s) => s.href),
        },
        publisher: {
          "@type": "Organization",
          name: "BrokerTrusted",
          logo: { "@type": "ImageObject", url: "https://brokertrusted.com/favicon.png" },
        },
        keywords: [article.primaryKeyword, ...article.secondaryKeywords, ...article.semanticKeywords].join(", "),
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: article.title },
  ];

  const relatedStatic = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={article.seoTitle}
        description={article.metaDescription}
        keywords={[article.primaryKeyword, ...article.secondaryKeywords, ...article.semanticKeywords]}
        canonical={articleUrl}
        ogImage={absoluteUrl(article.coverImage)}
        ogType="article"
        structuredData={structuredData}
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-primary to-emerald-950 py-10 text-white md:py-16">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#34d399_0,transparent_28%),radial-gradient(circle_at_80%_0%,#60a5fa_0,transparent_24%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <BreadcrumbNav items={breadcrumbs} variant="light" />
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <Badge className="mb-5 bg-success/20 text-emerald-200 hover:bg-success/25">{article.category}</Badge>
                <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">{article.title}</h1>
                <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-200">{article.excerpt}</p>
                <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-300">
                  <AuthorInline />
                  <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {formatDate(article.publishedAt)}</span>
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {article.readTime}</span>
                </div>
              </div>
              <figure className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <img src={article.coverImage} alt={article.coverAlt} title={article.coverTitle} className="h-full max-h-[460px] w-full rounded-[1.5rem] object-cover" />
                <figcaption className="px-3 pb-1 pt-3 text-sm leading-6 text-slate-200">{article.coverCaption}</figcaption>
                <p className="px-3 pb-2 text-xs leading-5 text-slate-300">SEO description: {article.coverDescription}</p>
              </figure>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="mx-auto max-w-4xl">
              <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <BookOpen className="h-6 w-6 text-success" /> Executive summary
                </h2>
                <div className="mt-5 space-y-4">
                  {article.intro.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-8 text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl bg-muted/50 p-5">
                  <h3 className="mb-4 text-xl font-bold text-foreground">Key takeaways</h3>
                  <ul className="space-y-3">
                    {article.keyTakeaways.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 space-y-12">
                {article.sections.map((section, index) => (
                  <div key={section.id}>
                    {index === Math.ceil(article.sections.length / 2) && (
                      <figure className="mb-12 overflow-hidden rounded-[2rem] border bg-card p-3 shadow-elegant">
                        <img src={article.midImage} alt={article.midAlt} title={article.midTitle} className="max-h-[520px] w-full rounded-[1.5rem] object-cover" />
                        <figcaption className="px-3 pb-1 pt-3 text-sm leading-6 text-muted-foreground">{article.midCaption}</figcaption>
                        <p className="px-3 pb-2 text-xs leading-5 text-muted-foreground">SEO description: {article.midDescription}</p>
                      </figure>
                    )}
                    <SectionBlock section={section} index={index} />
                  </div>
                ))}
              </div>

              <section className="mt-14 rounded-3xl border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-bold text-foreground">Recommended internal reads</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {article.internalLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-card">
                      <h3 className="font-bold text-foreground">{link.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.description}</p>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="mt-14 rounded-3xl border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-bold text-foreground">Trusted external sources</h2>
                <p className="mt-3 text-muted-foreground">Verified references from high-authority sources supporting the regulation, platform and investor-protection concepts in this guide.</p>
                <div className="mt-6 space-y-4">
                  {article.externalLinks.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded-2xl border p-5 transition hover:border-success/40 hover:bg-success/5">
                      <ExternalLink className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                      <span>
                        <strong className="block text-foreground">{link.label}</strong>
                        <span className="mt-1 block text-sm leading-6 text-muted-foreground">{link.description}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="mt-14 rounded-3xl border border-success/30 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-bold text-foreground">See the best forex brokers ranking</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Before opening an account, compare brokers by regulation, spreads, platforms, reputation, bonuses, support and trader profile. The BrokerTrusted ranking helps you filter options with clarity.
                </p>
                <Button asChild size="lg" className="mt-6 bg-success text-white hover:bg-success/90">
                  <Link to="/brokers">
                    See best forex brokers <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold text-foreground">Frequently asked questions</h2>
                <div className="mt-6 space-y-4">
                  {article.faq.map((item) => (
                    <details key={item.question} className="group rounded-2xl border bg-card p-5 shadow-sm">
                      <summary className="cursor-pointer text-lg font-bold text-foreground marker:text-success">{item.question}</summary>
                      <p className="mt-4 leading-7 text-muted-foreground">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="mt-14 rounded-3xl border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-bold text-foreground">Related articles</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {relatedStatic.map((item) => (
                    <Link key={item.slug} to={`/blog/${item.slug}`} className="group overflow-hidden rounded-2xl border transition hover:-translate-y-1 hover:shadow-card">
                      <img src={item.coverImage} alt={item.coverAlt} className="h-44 w-full object-cover transition group-hover:scale-105" />
                      <div className="p-5">
                        <Badge variant="secondary">{item.category}</Badge>
                        <h3 className="mt-3 text-xl font-bold text-foreground group-hover:text-success">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                  {article.relatedArticles.map((item) => (
                    <Link key={item.href} to={item.href} className="rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-card">
                      <h3 className="text-xl font-bold text-foreground hover:text-success">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </section>

              <AuthorCard />
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                <Card className="overflow-hidden border-success/25 shadow-card">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground">In this article</h2>
                    <nav className="mt-4 max-h-[420px] space-y-2 overflow-auto pr-2">
                      {article.sections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-success/10 hover:text-success">
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-emerald-950 text-white shadow-elegant">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold">Compare brokers now</h2>
                    <p className="mt-3 leading-7 text-slate-200">Independent broker rankings by safety, cost and user experience.</p>
                    <Button asChild className="mt-5 w-full bg-white text-primary hover:bg-white/90">
                      <Link to="/brokers">Open ranking</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground">Primary keyword</h2>
                    <Badge className="mt-3 bg-success/15 text-success hover:bg-success/20">{article.primaryKeyword}</Badge>
                    <h3 className="mt-6 font-bold text-foreground">Long-tail keywords covered</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {article.secondaryKeywords.slice(0, 10).map((keyword) => (
                        <Badge key={keyword} variant="outline" className="text-xs">{keyword}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground">Useful guides</h2>
                    <div className="mt-4 space-y-3">
                      {article.internalLinks.map((link) => (
                        <Link key={link.href} to={link.href} className="block rounded-xl border p-3 text-sm font-medium text-foreground transition hover:border-success/40 hover:text-success">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;
