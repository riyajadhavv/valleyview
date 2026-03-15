import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CircularNav from "../components/CircularNav";
import { useState } from "react";

// Images
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
const poolf = new URL("../assets/pool.jpg", import.meta.url).href;
const g1 = new URL("../assets/g1.jpeg", import.meta.url).href;
const g2 = new URL("../assets/g2.jpeg", import.meta.url).href;
const g3 = new URL("../assets/g3.jpeg", import.meta.url).href;
const g4 = new URL("../assets/g4.jpeg", import.meta.url).href;
const g5 = new URL("../assets/g5.jpeg", import.meta.url).href;
const g6 = new URL("../assets/g6.jpeg", import.meta.url).href;
const g7 = new URL("../assets/g7.jpeg", import.meta.url).href;
const g8 = new URL("../assets/g8.jpeg", import.meta.url).href;
const g9 = new URL("../assets/g9.jpeg", import.meta.url).href;
const g10 = new URL("../assets/g10.jpeg", import.meta.url).href;

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
    { name: "Bedroom 1", desc: "Queen bed,1 single bed, valley view,Attached Bathroom", img: bedroom1 },
    { name: "Bedroom 2", desc: "Queen Bed, open layout", img: bedroom2 },
    { name: "Bedroom 3", desc: "Queen bed, balcony view", img: bedroom3 },
    { name: "Bedroom 4", desc: "Queen bed,1 single bed, valley view,Attached Bathroom", img: bedroom4 },
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

  const pool = {
    name: "Swimming Pool",
    desc: "Private Infinity Swimming Pool",
    img: poolf,
  };

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 luxury-gradient">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {villa.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {villa.description}
          </p>
        </div>
      </section>

      {/* Info */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center mb-12">
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="px-8 py-3 bg-luxury-cream rounded-xl">🧑‍🤝‍🧑 {villa.guests} Guests</div>
            <div className="px-8 py-3 bg-luxury-cream rounded-xl">🛏️ {villa.bedrooms} Bedrooms</div>
            <div className="px-8 py-3 bg-luxury-cream rounded-xl">🛁 {villa.bathrooms} Bathrooms</div>
            <div className="px-8 py-3 bg-luxury-cream rounded-xl">🛌 {villa.beds} Beds</div>
          </div>
        </div>

        {/* Rooms */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {rooms.map((room, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-card">
              <img src={room.img} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-serif font-semibold">{room.name}</h3>
                <p className="text-muted-foreground text-sm">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-luxury-cream/60">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#D9A520]">
            Inside the Property
          </h2>
        </div>

        {/* Grid */}
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="relative group h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(item.img)}
            >
              <img src={item.img} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-center p-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SINGLE centered pool (hover-only text) */}
        <div className="container mx-auto mt-10 flex justify-center">
          <div
            className="relative group w-full md:w-2/3 lg:w-1/2 h-72 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setSelected(pool.img)}
          >
            <img
              src={pool.img}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-center">
              <div>
                <h3 className="text-xl font-semibold">{pool.name}</h3>
                <p className="text-sm">{pool.desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <img src={selected} className="max-h-[85vh] max-w-[90vw] rounded-2xl" />
          </div>
        )}
      </section>

{/* Photo Grid */}
<section className="py-20 px-6 bg-white">
  <div className="container mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#D9A520]">
      More from the Property
    </h2>
    <p className="text-muted-foreground mt-3 text-lg">A closer look at every corner</p>
  </div>

  <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[g1, g2, g3, g4, g5, g6, g7, g8].map((img, i) => (
      <div
        key={i}
        className="relative group h-56 md:h-64 rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setSelected(img)}
      >
        <img src={img} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    ))}
  </div>

  {/* Last 2 centered wider */}
  <div className="container mx-auto mt-4 grid grid-cols-2 gap-4">
    {[g9, g10].map((img, i) => (
      <div
        key={i}
        className="relative group h-64 rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setSelected(img)}
      >
        <img src={img} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    ))}
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Villas;
