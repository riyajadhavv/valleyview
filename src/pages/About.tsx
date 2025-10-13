import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import { Award, Heart, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 luxury-gradient">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            About LuxeVilla
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Redefining luxury hospitality through exceptional experiences and
            unparalleled service
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a passion for extraordinary travel experiences,
                LuxeVilla has been curating the world's finest luxury villa
                rentals for discerning travelers since 2010. Our journey began
                with a simple vision: to provide access to the most exclusive
                properties in the most breathtaking locations.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Today, we pride ourselves on offering a carefully selected
                portfolio of premium villas that combine stunning architecture,
                world-class amenities, and impeccable service. Each property is
                personally vetted to ensure it meets our exacting standards of
                luxury and comfort.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're seeking a romantic coastal retreat, a family
                celebration venue, or an intimate gathering space, LuxeVilla
                delivers unforgettable moments in the world's most coveted
                destinations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400"
                    alt="Luxury villa exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400"
                    alt="Villa interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400"
                    alt="Pool area"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"
                    alt="Modern villa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We maintain the highest standards in every property and service we offer",
              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "Our love for luxury travel drives us to create exceptional experiences",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Access to premium villas in the world's most desirable destinations",
              },
              {
                icon: Users,
                title: "Personal Touch",
                description:
                  "Dedicated concierge service tailored to your unique preferences",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl shadow-card hover:shadow-luxury transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Luxury Villas" },
              { number: "50+", label: "Destinations" },
              { number: "10K+", label: "Happy Guests" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
