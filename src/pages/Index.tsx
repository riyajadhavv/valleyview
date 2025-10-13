import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import VillaCard from "@/components/VillaCard";
import { Sparkles, Award, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";
import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";

const Index = () => {
  const featuredVillas = [
    {
      id: 1,
      name: "Ocean Paradise",
      location: "Santorini, Greece",
      price: "$1,200/night",
      image: villa1,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 2,
      name: "Sunset Villa",
      location: "Bali, Indonesia",
      price: "$950/night",
      image: villa2,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 3,
      name: "Mediterranean Dream",
      location: "Amalfi Coast, Italy",
      price: "$1,500/night",
      image: villa3,
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-luxury-charcoal/40" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Experience Luxury
          </h1>
          <p className="text-xl md:text-2xl text-luxury-cream mb-8 max-w-2xl mx-auto">
            Live Serenity in the World's Most Exclusive Villas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/villas">Explore Villas</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Why Choose LuxeVilla
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Premium Locations",
                description:
                  "Handpicked villas in the world's most sought-after destinations",
              },
              {
                icon: Award,
                title: "5-Star Service",
                description:
                  "Dedicated concierge and personalized experiences",
              },
              {
                icon: Shield,
                title: "Secure Booking",
                description:
                  "Protected payments and verified property listings",
              },
              {
                icon: Heart,
                title: "Unforgettable Stays",
                description:
                  "Create memories that last a lifetime in luxury comfort",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-card transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Villas */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Featured Villas
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary properties
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVillas.map((villa, index) => (
              <div
                key={villa.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <VillaCard {...villa} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link to="/villas">View All Villas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-luxury-charcoal text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-luxury-cream mb-8 max-w-2xl mx-auto">
            Book your dream villa getaway today and create unforgettable memories
          </p>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
