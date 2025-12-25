import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

// Local images
import villaExterior from "@/assets/hero-villa.jpg";
import villaExteriorr from "@/assets/welcome1.jpg";
import viewImg from "@/assets/view.jpg";
import roomImg from "@/assets/room.jpg";
import foodImg from "@/assets/food.jpg";

// Why Choose Us Images
import scenic from "@/assets/scenic.jpg";
import food from "@/assets/food.jpg";
import family from "@/assets/family.jpg";
import hospitality from "@/assets/hospitality.jpg";

// Parallax and Backgrounds
import welcome2 from "@/assets/welcome2.jpg";

// Attractions
import mapro from "@/assets/mapro.jpg";
import sunset from "@/assets/sunset.jpg";
import dhom from "@/assets/dhom.jpg";
import nana from "@/assets/nana.jpg";
import pandavgad from "@/assets/pandavgad.jpg";
import mahabaleshwar from "@/assets/mahabaleshwar.jpg";
import panchgani from "@/assets/panchgani.jpg";

// Local testimonial images
import dhivyaImg from "@/assets/dhivyaa.jpg";
import abhishekhImg from "@/assets/abhishekh.jpg";
import mohanImg from "@/assets/mohan.jpg";

const About = () => {
  const testimonials = [
    {
      name: "Dhivya",
      image: dhivyaImg,
      rating: 5,
      text: "A beautiful getaway from the hustle and bustle of city life. The view from the Homestay is magical and  the property looks exactly as described. The perfect place to unwind with your loved ones or vibe indoors with your tribe.Jyoti took great care of us and every meal was cooked with extra love!",
    },
    {
      name: "abhishekh",
      image: abhishekhImg,
      rating: 5,
      text: "Perched among the clouds — heavenly experience! Beautiful villa, delicious food, and caring hosts. Truly unforgettable stay.",
    },
    {
      name: "Mohan",
      image: mohanImg,
      rating: 5,
      text: "Most stunning views and peaceful surroundings. Agro tourism at its best with Jyoti Tai’s home-style meals and warm hospitality.You don't need to go sunrise point or sunset point both at home overlooking the majestic Dhom Lake",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[70vh]"
        style={{
          backgroundImage: `url(${villaExterior})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            About Valley View Villa Wai
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-up">
            A peaceful hillside retreat overlooking Dhom Dam — blending nature,
            comfort, and Maharashtrian warmth.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nestled amidst the serene hills of Wai, Valley View Villa was built
              to create a private escape where nature and comfort coexist in harmony.
              Overlooking Dhom Dam, the villa offers a tranquil environment for peace.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Designed as a 4BHK luxury home, every corner of Valley View Villa is
              infused with warmth, character, and attention to detail — from its
              panoramic balconies to home-cooked Maharashtrian meals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether for family getaways or quiet reflection, the villa offers
              an experience surrounded by nature’s finest views.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img src={villaExteriorr} alt="Villa Exterior" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img src={foodImg} alt="Food" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img src={viewImg} alt="Scenic View" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img src={roomImg} alt="Luxury Room" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-luxury-cream">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#D9A520]">
            Why Choose Valley View Villa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Unmatched Scenic Views", desc: "Wake up to breathtaking panoramic views.", img: scenic },
              { title: "Authentic Home-Cooked Food", desc: "Taste the warmth of Maharashtrian cuisine.", img: food },
              { title: "Perfect for Groups & Families", desc: "Spacious villa ideal for family gatherings.", img: family },
              { title: "Personalized Hospitality", desc: "Our host ensures comfort and memorable experiences.", img: hospitality },
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition" />
                <div className="relative z-10 p-8 bg-black/40 text-white h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-serif font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Places Section */}
      <section className="py-24 px-6 bg-luxury-cream">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#D9A520]">
            Tourist Places Near Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              { title: "Mapro Garden, Wai", desc: "Famous for strawberries and milkshakes.", img: mapro },
              { title: "Sunset Point", desc: "Breathtaking sunsets over the Sahyadri hills.", img: sunset },
              { title: "Dhom Dam, Wai", desc: "Scenic lake with boating options.", img: dhom },
              { title: "Nana Phadanvis Wada", desc: "Historic mansion showcasing Maratha architecture.", img: nana },
              { title: "Pandav Gad Fort", desc: "Ancient hill fort with panoramic views.", img: pandavgad },
              { title: "Mahabaleshwar", desc: "Famous hill station with lush greenery and waterfalls.", img: mahabaleshwar },
            ].map((place, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-luxury transition-all animate-fade-in-up">
                <img src={place.img} alt={place.title} className="w-full h-56 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-serif font-semibold mb-2">{place.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{place.desc}</p>
                </div>
              </div>
            ))}
            <div className="col-span-full flex justify-center">
              <div className="rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-luxury transition-all w-full sm:w-2/3 lg:w-1/2 animate-fade-in-up">
                <img src={panchgani} alt="Panchgani" className="w-full h-56 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-semibold mb-2">Panchgani</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Popular hill retreat with viewpoints and cafes — enjoy strawberry farms and colonial charm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-[#D9A520]">
            What Our Guests Say
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Hear from our delighted guests
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-luxury transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
