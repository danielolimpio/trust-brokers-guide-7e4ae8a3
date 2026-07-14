import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Shield, TrendingUp, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroFinance from "@/assets/hero-finance.webp";

export function HeroBanner() {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideContent = {
    en: {
      h1: "Trusted Broker – Verified & Regulated Forex Brokers You Can Trust",
      subtitle: "Independent Reviews • Regulatory Verification • Safety First",
      description: "Find the safest, most trusted forex brokers in 2026. Our expert team analyzes regulation, spreads, fees, and safety to help you choose the right trading partner.",
      cta: "Compare Verified Brokers",
      trustSignals: [
        { icon: Shield, text: "Only FCA/CySEC/ASIC Regulated", highlight: true },
        { icon: Star, text: "500+ Broker Reviews", highlight: false },
        { icon: CheckCircle, text: "Safety Verified", highlight: true },
      ]
    },
    pt: {
      h1: "BrokerTrusted – Corretoras Forex Verificadas e Regulamentadas",
      subtitle: "Análises Independentes • Verificação Regulatória • Segurança Primeiro",
      description: "Encontre as corretoras forex mais seguras e confiáveis em 2026. Nossa equipe de especialistas analisa regulamentação, spreads, taxas e segurança.",
      cta: "Comparar Corretoras Verificadas",
      trustSignals: [
        { icon: Shield, text: "Apenas Regulamentadas FCA/CySEC/ASIC", highlight: true },
        { icon: Star, text: "500+ Análises de Corretoras", highlight: false },
        { icon: CheckCircle, text: "Segurança Verificada", highlight: true },
      ]
    },
    es: {
      h1: "BrokerTrusted – Brókers Forex Verificados y Regulados",
      subtitle: "Reseñas Independientes • Verificación Regulatoria • Seguridad Primero",
      description: "Encuentra los brókers forex más seguros y confiables en 2026. Nuestro equipo de expertos analiza regulación, spreads, tarifas y seguridad.",
      cta: "Comparar Brókers Verificados",
      trustSignals: [
        { icon: Shield, text: "Solo Regulados FCA/CySEC/ASIC", highlight: true },
        { icon: Star, text: "500+ Reseñas de Brókers", highlight: false },
        { icon: CheckCircle, text: "Seguridad Verificada", highlight: true },
      ]
    }
  };

  const content = slideContent[i18n.language as keyof typeof slideContent] || slideContent.en;

  const slides = [
    {
      id: 1,
      ...content,
      image: heroFinance,
    },
    {
      id: 2,
      h1: "Independent Broker Reviews Since 2016",
      subtitle: "Transparency • Integrity • Excellence",
      description: "Over 500+ brokers analyzed with detailed performance metrics, regulatory compliance checks, and real trader feedback from verified accounts.",
      cta: "Read Our Methodology",
      image: heroFinance,
      trustSignals: [
        { icon: Shield, text: "10,000+ Safety Checks", highlight: false },
        { icon: TrendingUp, text: "Real-Time Updates", highlight: false },
        { icon: Users, text: "50,000+ User Reviews", highlight: false },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[700px] w-full overflow-hidden" role="banner">
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
            <img 
              src={slide.image} 
              alt="Professional forex trading dashboard showing regulated broker comparison and market analysis tools"
              className="absolute inset-0 w-full h-full object-cover opacity-0"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
            
            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl animate-fade-in">
                  {/* Main H1 Heading - SEO Optimized */}
                  <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    {slide.h1}
                  </h1>
                  
                  {/* Subtitle with key benefits */}
                  <p className="mb-6 text-xl text-white/95 font-medium">
                    {slide.subtitle}
                  </p>
                  
                  {/* Detailed description with keywords */}
                  <p className="mb-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                  
                  {/* Trust Signals */}
                  <div className="mb-8 flex flex-wrap gap-6">
                    {slide.trustSignals.map((signal, idx) => (
                      <div 
                        key={idx} 
                        className={cn(
                          "flex items-center space-x-3 text-white/95 px-4 py-2 rounded-full",
                          signal.highlight ? "bg-success/20 border border-success/30" : "bg-white/10"
                        )}
                      >
                        <signal.icon className={cn(
                          "h-5 w-5",
                          signal.highlight ? "text-success" : "text-white"
                        )} />
                        <span className="text-sm font-medium">{signal.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Primary CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-success hover:bg-success/90 text-success-foreground shadow-success px-8 py-4 text-lg font-semibold"
                      aria-label="View and compare verified regulated forex brokers"
                    >
                      {slide.cta}
                    </Button>
                    
                    {/* Secondary CTA */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white bg-white text-primary hover:bg-white/90 px-8 py-4"
                      aria-label="Learn how we verify broker safety and regulation"
                    >
                      Check Broker Safety
                    </Button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="mt-8 flex items-center space-x-6 text-white/80 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-success" />
                      <span>Regulation Verified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-success" />
                      <span>Expert Reviewed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Safety Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-success"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-success"
        aria-label="Next slide"
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
              "h-2 w-8 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-success",
              index === currentSlide ? "bg-success" : "bg-white/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}