import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CircularNav from "../components/CircularNav";
import { useState } from "react";

// Local images using new URL (works reliably in Vite)
const living = new URL("../assets/living.jpg", import.meta.url).href;
const dining = new URL("../assets/dining.jpg", import.meta.url).href;
const bedroom1 = new URL("../assets/room1.jpg", import.meta.url).href;
const bedroom2 = new URL("../assets/room5.jpg", import.meta.url).href;
const bedroom3 = new URL("../assets/room3.jpg", import.meta.url).href;
const bedroom4 = new URL("../assets/room4.jpg", import.meta.url).href;
const balcony = new URL("../assets/balcony.jpg", import.meta.url).href;
const exterior = new URL("../assets/scenery.jpg", import.meta.url).href;
const bathroom1 = new URL("../assets/bathroom1.jpg", import.meta.url).href;
const bathroom2 = new URL("../assets/bathroom3.jpg", import.meta.url).href;

const Villas = () => {
  const villa = {
    name: "Valley View Villa, Wai",
    description:
      "A 4BHK luxury villa nestled in the hills of Wai, overlooking the serene Dhom Dam. Experience calm nature with home-cooked Maharashtrian meals and stunning valley views — perfect for families and groups.",
    guests: 16,
    bedrooms: 4,
    bathrooms: 4,
    beds: 6,
  };

  const rooms = [
    { name: "Bedroom 1", desc: "Books, TV, Sound System", img: bedroom1 },
    { name: "Bedroom 2", desc: "8-seater table, open layout", img: bedroom2 },
    { name: "Bedroom 3", desc: "Queen + Single bed, balcony view", img: bedroom3 },
    { name: "Bedroom 4", desc: "Queen bed, valley view", img: bedroom4 },
  ];

  const gallery = [
    { name: "Living Room", desc: "Books, TV, Sound System", img: living },
    { name: "Dining Area", desc: "8-seater dining table", img: dining },
    { name: "Bedroom 1", desc: "Queen + Single bed, balcony access", img: bedroom1 },
    { name: "Bedroom 2", desc: "Queen bed, cozy setup", img: bedroom2 },
    { name: "Full Bathroom 1", desc: "Modern fittings, geyser", img: bathroom1 },
    { name: "Full Bathroom 2", desc: "Spacious, clean & maintained", img: bathroom2 },
    { name: "Balcony", desc: "Overlooking Dhom Dam & mountains", img: balcony },
    { name: "Exterior", desc: "Private villa surrounded by nature", img: exterior },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 luxury-gradient">
        <div className="container mx-auto text-center background-[#D9A520]">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            {villa.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up ">
            {villa.description}
          </p>
        </div>
      </section>

      {/* Villa Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center mb-12">
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="px-8 py-3 bg-luxury-cream rounded-xl shadow-sm">🧑‍🤝‍🧑 {villa.guests} Guests</div>
            <div className="px-8 py-3 bg-luxury-cream rounded-xl shadow-sm">🛏️ {villa.bedrooms} Bedrooms</div>
            <div className="px-8 py-3 bg-luxury-cream rounded-xl shadow-sm">🛁 {villa.bathrooms} Bathrooms</div>
            <div className="px-8 py-3 bg-luxury-cream rounded-xl shadow-sm">🛌 {villa.beds} Beds</div>
          </div>
        </div>

        {/* Room Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-luxury transition-all"
            >
              <img src={room.img} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-serif font-semibold mb-1">{room.name}</h3>
                <p className="text-muted-foreground text-sm">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-luxury-cream/60">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#D9A520]">Inside the Property</h2>
        </div>

        {/* Masonry Grid */}
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group h-56 md:h-64 lg:h-72"
              onClick={() => setSelected(item.img)}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-2 text-white">
                <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                <p className="text-xs md:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <img src={selected} alt="Preview" className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl" />
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Villas;
