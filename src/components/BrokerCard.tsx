import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, Shield, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BrokerCardProps {
  id: string;
  rank: number;
  name: string;
  logo: string;
  rating: number;
  maxRating?: number;
  keyStrength: string;
  isTrusted: boolean;
  features?: string[];
  minDeposit?: string;
  maxLeverage?: string;
  regulation?: string;
  tradingPlatforms?: string[];
  foundedYear?: number;
}

export function BrokerCard({
  id,
  rank,
  name,
  logo,
  rating,
  maxRating = 5,
  keyStrength,
  isTrusted,
  features = [],
  minDeposit,
  maxLeverage,
  regulation,
  tradingPlatforms = [],
  foundedYear,
}: BrokerCardProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const percentage = (rating / maxRating) * 100;

  return (
    <Card className="mb-4 shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Rank */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              {rank}º
            </div>

            {/* Logo and Info */}
            <div className="flex items-center space-x-4">
              <Link to={`/broker/${id}`} className="group">
                <img
                  src={logo}
                  alt={`${name} regulated forex broker logo - ${regulation} licensed with ${rating}/5 rating`}
                  className="h-20 w-20 rounded-lg object-contain bg-white p-2 group-hover:shadow-card transition-shadow"
                  loading="lazy"
                />
              </Link>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Link to={`/broker/${id}`} className="hover:text-success transition-colors">
                    <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                  </Link>
                  {isTrusted && (
                    <Badge variant="secondary" className="bg-success-light text-success border-success/20">
                      <Shield className="h-3 w-3 mr-1" />
                      {t("brokers.regulated") || "VERIFIED"}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-success font-medium">{keyStrength}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Rating and Actions */}
          <div className="flex items-center space-x-6">
            {/* Rating */}
            <div className="text-center min-w-[100px]">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-foreground">{rating}</span>
                <span className="text-sm text-muted-foreground">/{maxRating}</span>
              </div>
              <Progress value={percentage} className="h-2 w-20" />
            </div>

            {/* Expand Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="min-w-[80px]"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Expand
                </>
              )}
            </Button>

            {/* Start Trading Button - Optimized CTA */}
            <Link to={`/broker/${id}`}>
              <Button 
                className="bg-success hover:bg-success/90 text-success-foreground shadow-success min-w-[140px]"
                aria-label={`Start trading with ${name} - Regulated broker with ${rating}/5 rating`}
              >
                {t("brokers.viewProfile") || "View Broker"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-border animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {minDeposit && (
                <div>
                  <p className="text-sm text-muted-foreground">{t("brokers.minDeposit") || "Min Deposit"}</p>
                  <p className="font-semibold text-foreground">{minDeposit}</p>
                </div>
              )}
              {maxLeverage && (
                <div>
                  <p className="text-sm text-muted-foreground">{t("brokers.leverage") || "Max Leverage"}</p>
                  <p className="font-semibold text-foreground">{maxLeverage}</p>
                </div>
              )}
              {regulation && (
                <div>
                  <p className="text-sm text-muted-foreground">{t("brokers.regulated") || "Regulation"}</p>
                  <p className="font-semibold text-foreground">{regulation}</p>
                </div>
              )}
              {tradingPlatforms.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground">Platforms</p>
                  <p className="font-semibold text-foreground">{tradingPlatforms.join(", ")}</p>
                </div>
              )}
            </div>
            
            {features.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {foundedYear && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-1">Founded / Age</p>
                <p className="font-semibold text-foreground">
                  {foundedYear} • {new Date().getFullYear() - foundedYear} years
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}