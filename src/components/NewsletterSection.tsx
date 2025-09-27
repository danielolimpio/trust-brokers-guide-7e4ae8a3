import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive the latest broker reviews and investing news.",
    });
    
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-elegant">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-success-light">
                <Mail className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {t("newsletter.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("newsletter.subtitle")}
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-success hover:bg-success/90 text-success-foreground shadow-success px-8"
                >
                  {t("newsletter.subscribe")}
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}