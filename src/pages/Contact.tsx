import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in-up">
            We're here to help you plan your perfect luxury getaway
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  info@luxevilla.com
                </p>
                <p className="text-muted-foreground text-sm">
                  reservations@luxevilla.com
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  +1 (555) 123-4567
                </p>
                <p className="text-muted-foreground text-sm">
                  +1 (555) 987-6543
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm">
                  123 Luxury Lane
                  <br />
                  Paradise Island
                  <br />
                  Coastal District, 12345
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <Card className="p-8">
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      className="rounded-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      required
                      className="resize-none rounded-2xl"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Map Section */}
              <Card className="mt-8 p-0 overflow-hidden">
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 text-primary" size={32} />
                    <p className="text-muted-foreground">
                      Interactive map would go here
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
