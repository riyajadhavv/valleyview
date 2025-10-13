import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import VillaCard from "@/components/VillaCard";
import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";

const Villas = () => {
  const allVillas = [
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
    {
      id: 4,
      name: "Azure Retreat",
      location: "Maldives",
      price: "$2,200/night",
      image: villa4,
      guests: 12,
      bedrooms: 6,
      bathrooms: 5,
    },
    {
      id: 5,
      name: "Coastal Haven",
      location: "French Riviera",
      price: "$1,800/night",
      image: villa1,
      guests: 8,
      bedrooms: 4,
      bathrooms: 4,
    },
    {
      id: 6,
      name: "Island Sanctuary",
      location: "Seychelles",
      price: "$2,500/night",
      image: villa2,
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
      <section className="pt-32 pb-20 px-4 luxury-gradient">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Our Luxury Villas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Browse our exclusive collection of premium villas in the world's most
            beautiful locations
          </p>
        </div>
      </section>

      {/* Villas Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVillas.map((villa, index) => (
              <div
                key={villa.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <VillaCard {...villa} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Villas;
