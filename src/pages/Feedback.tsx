import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { toast } from "sonner";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely stunning villa with breathtaking ocean views. The service was impeccable and every detail was perfect. Highly recommend!",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "LuxeVilla exceeded all our expectations. The property was even more beautiful than the photos, and the concierge service was outstanding.",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "Perfect for our family vacation. The villa had everything we needed and more. The event planning service made our celebration truly special.",
      image: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    toast.success("Thank you for your feedback! We appreciate your review.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6 animate-fade-in-up">
            Guest Reviews
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in-up">
            Hear from our delighted guests and share your experience
          </p>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-luxury transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary"
                      size={18}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>

          {/* Review Form */}
          <Card className="p-8 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Share Your Experience
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="rounded-full"
                  />
                </div>
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
              </div>

              <div>
                <Label className="mb-2 block">Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={
                          star <= (hoverRating || rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="review">Your Review</Label>
                <Textarea
                  id="review"
                  placeholder="Tell us about your experience..."
                  rows={6}
                  required
                  className="resize-none rounded-2xl"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Submit Review
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
