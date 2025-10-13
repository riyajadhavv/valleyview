import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Users, PartyPopper } from "lucide-react";

const Booking = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [eventPlanner, setEventPlanner] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login successful! You can now proceed with booking.");
  };

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates");
      return;
    }
    toast.success("Booking request submitted! We'll contact you shortly.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <CircularNav />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6 animate-fade-in-up">
            Book Your Stay
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in-up">
            Select your dates and customize your luxury experience
          </p>

          {!isLoggedIn ? (
            <Card className="p-8 animate-fade-in-up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-2">
                  Please Sign In
                </h2>
                <p className="text-muted-foreground">
                  You need to be logged in to make a booking
                </p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full rounded-full">
                    Sign In / Sign Up
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-center">
                      Welcome to LuxeVilla
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="space-y-4">
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
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="rounded-full"
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-full">
                      Sign In
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <span className="text-primary cursor-pointer hover:underline">
                        Sign up here
                      </span>
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
            </Card>
          ) : (
            <div className="space-y-8">
              <Card className="p-8 animate-fade-in-up">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                  <CalendarIcon className="mr-2 text-primary" />
                  Select Dates
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label className="mb-2 block">Check-In Date</Label>
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      className="rounded-xl border shadow-card pointer-events-auto"
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block">Check-Out Date</Label>
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) =>
                        date < (checkIn || new Date())
                      }
                      className="rounded-xl border shadow-card pointer-events-auto"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-8 animate-fade-in-up">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                  <Users className="mr-2 text-primary" />
                  Guest Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      placeholder="2"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rooms">Bedrooms Needed</Label>
                    <Input
                      id="rooms"
                      type="number"
                      min="1"
                      placeholder="1"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-8 animate-fade-in-up">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                  <PartyPopper className="mr-2 text-primary" />
                  Special Services
                </h2>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="eventPlanner"
                    checked={eventPlanner}
                    onCheckedChange={(checked) =>
                      setEventPlanner(checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="eventPlanner"
                    className="text-sm font-normal cursor-pointer"
                  >
                    I would like to collaborate with an event planner for
                    decorations and gifting arrangements
                  </Label>
                </div>

                {eventPlanner && (
                  <div className="mt-6 p-4 bg-muted rounded-xl animate-fade-in">
                    <p className="text-sm text-muted-foreground mb-4">
                      Our event planning team will contact you to discuss your
                      requirements and create a memorable experience.
                    </p>
                    <Input
                      placeholder="Special requests or preferences..."
                      className="rounded-full"
                    />
                  </div>
                )}
              </Card>

              <Card className="p-8 bg-luxury-gold/10 border-primary animate-fade-in-up">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-serif font-semibold">
                      Booking Summary
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {checkIn && checkOut
                        ? `${checkIn.toLocaleDateString()} - ${checkOut.toLocaleDateString()}`
                        : "Select dates to continue"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-serif font-bold text-primary">
                      $1,200
                    </p>
                    <p className="text-sm text-muted-foreground">per night</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-full"
                  onClick={handleBooking}
                >
                  Confirm Booking
                </Button>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
