import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroFinance from "@/assets/hero-finance.jpg";

export function HeroBanner() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: t("hero.title"),
      subtitle: "Expert Analysis, Unbiased Reviews, Trusted Rankings",
      description: t("hero.subtitle"),
      cta: t("hero.cta"),
      image: heroFinance,
      features: [
        { icon: Shield, text: "Regulatory Compliance" },
        { icon: TrendingUp, text: "Performance Tracking" },
        { icon: Users, text: "Community Reviews" },
      ],
    },
    {
      id: 2,
      title: "Independent Broker Reviews Since 2020",
      subtitle: "Transparency • Integrity • Excellence",
      description: "Over 500+ brokers analyzed with detailed performance metrics, regulatory compliance, and real trader feedback.",
      cta: "Read Our Methodology",
      image: heroFinance,
      features: [
        { icon: Shield, text: "500+ Brokers Analyzed" },
        { icon: TrendingUp, text: "Real-Time Updates" },
        { icon: Users, text: "50,000+ Reviews" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-transform duration-700 ease-in-out",
            index === currentSlide ? "translate-x-0" : "translate-x-full",
            index < currentSlide && "-translate-x-full"
          )}
        >
          <div
            className="relative h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            
            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl animate-fade-in">
                  <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mb-6 text-xl text-white/90 font-medium">
                    {slide.subtitle}
                  </p>
                  <p className="mb-8 text-lg text-white/80 leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <div className="mb-8 flex flex-wrap gap-6">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-white/90">
                        <feature.icon className="h-5 w-5 text-success" />
                        <span className="text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    size="lg"
                    className="bg-success hover:bg-success/90 text-success-foreground shadow-success"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 w-8 rounded-full transition-all",
              index === currentSlide ? "bg-success" : "bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}