import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import heroImage from "@/assets/hero-villa.jpg";
import welcome1 from "@/assets/welcome1.jpg";
import welcome2 from "@/assets/welcome2.jpg";
import food from "@/assets/food.jpg";
import view from "@/assets/view.jpg";
import room from "@/assets/room.jpg";
import nature from "@/assets/nature.jpg";
import pool from "@/assets/pool.jpg";
import family from "@/assets/family.jpg";
import activity from "@/assets/activity.jpg";
import sunset from "@/assets/sunset.jpg";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.png";
import room3 from "@/assets/room3.jpg";
import room4 from "@/assets/room4.jpg";

const Index = () => {
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
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Valley View Villa Wai
          </h1>
          <p className="text-xl md:text-2xl text-luxury-cream mb-8 max-w-2xl mx-auto">
            Your private luxury retreat nestled amidst serene hills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/villas">View Gallery</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/booking">Book Your Stay</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-6 bg-luxury-cream text-center relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D9A520]">
          Welcome to Valley View Villa Wai
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Breathe in the mountain air, unwind amidst nature, and enjoy breathtaking views of Dhom Dam.
          Our villa blends comfort, privacy, and local Maharashtrian charm — perfect for families and weekend escapes.
        </p>

        {/* Overlapping Image Layout */}
        <div className="relative max-w-6xl mx-auto flex justify-center items-center welcome-overlap">
          <img
            src={welcome1}
            alt="Villa exterior"
            className="rounded-2xl object-cover w-[90%] md:w-[70%] h-96 shadow-2xl transition-transform duration-500 hover:scale-105"
          />
          <img
            src={welcome2}
            alt="Scenic view"
            className="absolute right-[20%] md:right-[5%] top-20 rounded-2xl object-cover w-[70%] md:w-[40%] h-80 shadow-xl border-4 border-white transition-all duration-500"
          />
        </div>
      </section>

      {/* Facilities & Services Section */}
      <section className="py-20 px-6 bg-background relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-10">
          Facilities and Services
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Experience comfort and nature in perfect harmony — from scenic balconies to authentic local meals.
        </p>

        <div className="marquee-container relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-x">
            {[
              { img: pool, caption: "Infinity Pool",  },
              { img: family, caption: "Perfect Family Stay" },
              { img: activity, caption: "Outdoor Activities" },
              { img: food, caption: "Authentic Maharashtrian Food" },
              { img: view, caption: "Breathtaking Valley Views" },
              { img: room, caption: "Spacious 4BHK AC Villa" },
              { img: nature, caption: "Peaceful Agro-Tourism Stay" },
              { img: sunset, caption: "Sunset Point View" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-96 h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-lg font-medium">{item.caption}</p>
                  {item.tag && (
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
        </div>
      </section>

      {/* Our Luxury Rooms Section (Wide Layout) */}
      <section className="py-24 px-6 bg-luxury-cream">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#D9A520]">
            Our Luxury Rooms
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The villa features four beautifully designed rooms — each offering comfort, charm, and breathtaking views.
          </p>
        </div>

        <div className="rooms-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { img: room1, title: "Master Suite", desc: "Spacious suite with balcony and panoramic dam view." },
            { img: room2, title: "Family Room", desc: "Ideal for families with cozy interiors and warm lighting." },
            { img: room3, title: "Deluxe Room", desc: "Luxurious comfort with scenic window view and modern décor." },
            { img: room4, title: "Guest Room", desc: "A calm retreat perfect for relaxation and rejuvenation." },
          ].map((r, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl shadow-lg room-card">
              <img src={r.img} alt={r.title} className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-gray-200 mb-3 max-w-sm">{r.desc}</p>
                <Link
                  to="/villas"
                  className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-white/30 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-luxury-charcoal text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Serenity?
          </h2>
          <p className="text-xl text-luxury-cream mb-8 max-w-2xl mx-auto">
            Book your stay at Valley View Villa and wake up to panoramic dam views.
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
