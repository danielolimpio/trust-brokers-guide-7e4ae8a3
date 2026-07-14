import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Globe } from "lucide-react";
import member1Image from "@/assets/team/member1.webp";
import member2Image from "@/assets/team/member2.webp";
import member3Image from "@/assets/team/member3.webp";
import member4Image from "@/assets/team/member4.webp";

const teamMembers = [
  {
    id: 1,
    name: "Jonathan Miller",
    title: "Senior Forex Analyst",
    bio: "15+ years of experience in forex markets, former Goldman Sachs trader with deep expertise in market analysis and broker evaluation.",
    image: member1Image,
    expertise: ["Market Analysis", "Risk Management", "Regulatory Compliance"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Financial Technology Expert",
    bio: "Former fintech executive specializing in trading platforms, payment systems, and broker technology infrastructure assessment.",
    image: member3Image,
    expertise: ["Trading Platforms", "Fintech", "User Experience"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    title: "Regulatory Affairs Specialist",
    bio: "Ex-FCA regulatory expert with comprehensive knowledge of global forex regulations and investor protection frameworks.",
    image: member2Image,
    expertise: ["Regulation", "Compliance", "Investor Protection"],
    social: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "Emma Thompson",
    title: "Trading Platform Analyst",
    bio: "Professional trader and platform specialist with extensive experience testing and reviewing forex trading software and tools.",
    image: member4Image,
    expertise: ["Platform Testing", "Trading Tools", "Technical Analysis"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function TeamSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("team.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("team.subtitle")}
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">30k+</div>
              <div className="text-sm text-muted-foreground">Brokers Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">1500+</div>
              <div className="text-sm text-muted-foreground">Reviews Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">5</div>
              <div className="text-sm text-muted-foreground">Expert Analysts</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-elegant transition-all duration-300 animate-slide-up">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-card group-hover:shadow-elegant transition-shadow duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-success font-medium mb-4">
                  {member.title}
                </p>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-success transition-colors p-2 rounded-full hover:bg-success-light"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-success transition-colors p-2 rounded-full hover:bg-success-light"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.website && (
                    <a
                      href={member.social.website}
                      className="text-muted-foreground hover:text-success transition-colors p-2 rounded-full hover:bg-success-light"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}