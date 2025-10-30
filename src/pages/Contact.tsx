import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us – Get Expert Forex Broker Advice"
        description="Contact BrokerTrusted for expert advice on forex brokers, trading platforms, and market insights. Our team is here to help you choose the right broker."
        canonical="https://brokertrusted.com/contact"
        keywords={["contact forex experts","broker advice","trading support","forex consultation"]}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-muted-foreground mb-12 max-w-3xl">
                Have questions about forex brokers or need expert advice? Our team of analysts is here to help you make informed trading decisions.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">contact@brokertrusted.com</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office</h3>
                        <p className="text-muted-foreground">
                          123 Financial District<br />
                          New York, NY 10004<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-primary/5 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
