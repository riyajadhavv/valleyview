import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularNav from "@/components/CircularNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, X } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

type BookingInfo = {
  checkIn: Date;
  checkOut: Date;
  guests: number;
};

type ContactProps = {
  booking?: BookingInfo; // optional booking details
};

const Contact = ({ booking }: ContactProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ Build WhatsApp message safely
  const buildWhatsAppMessage = () => {
    let message = `Hi! You have a new inquiry from Valley View Villa 🌿\n\n`;

    message += `Name: ${formData.firstName || ""} ${formData.lastName || ""}\n`;
    message += `Subject: ${formData.subject || ""}\n`;
    message += `Message: ${formData.message || ""}\n`;
    message += `📧 ${formData.email || ""} | 📞 ${formData.phone || ""}\n`;

    if (booking && booking.checkIn && booking.checkOut && booking.guests !== undefined) {
      const checkInStr = booking.checkIn instanceof Date ? booking.checkIn.toLocaleDateString() : "";
      const checkOutStr = booking.checkOut instanceof Date ? booking.checkOut.toLocaleDateString() : "";
      message += `\nBooking Details:\nCheck-in: ${checkInStr}\nCheck-out: ${checkOutStr}\nGuests: ${booking.guests}\n`;
    }

    return encodeURIComponent(message.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      subject: formData.subject || "",
      message: formData.message || "",
      bookingDetails: booking
        ? `Check-in: ${booking.checkIn.toLocaleDateString()}, Check-out: ${booking.checkOut.toLocaleDateString()}, Guests: ${booking.guests}`
        : "",
    };

    try {
      // ✅ Send email via EmailJS
      await emailjs.send(
        "service_h8fqpgo", // Replace with your EmailJS Service ID
        "template_kwmucs9", // Replace with your EmailJS Template ID
        templateParams,
        "S3Wn39Qcn7dmdzFUg" // Replace with your EmailJS Public Key
      );

      // ✅ Open WhatsApp with message
      const whatsappNumber = "919422255335"; // Replace with your number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;

      console.log("WhatsApp URL:", whatsappUrl); // Debug
      window.open(whatsappUrl, "_blank");

      // ✅ Show success modal
      setModalOpen(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
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
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                
                <p className="text-muted-foreground text-sm">valleyviewvillawai@gmail.com</p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-2">+91 9422255335</p>
                <p className="text-muted-foreground text-sm mb-2">+91 9850085595</p>
              </Card>

              

              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Sunday: 9:00 AM - 9:00 PM
                 
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <Card className="p-8">
                <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Surname"
                        value={formData.lastName}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9422255335"
                        value={formData.phone}
                        onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      className="resize-none rounded-2xl"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>

              {/* Google Map */}
              <Card className="mt-8 p-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.9749962244937!2d73.8342520750007!3d18.026363982973866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc261002a293543%3A0x6c69d7f2dd84c14!2sValley%20View%20Villa%2C%20Wai!5e0!3m2!1sen!2sin!4v1761383374662!5m2!1sen!2sin"
                  className="w-full h-64 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Valley View Villa Location"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
            <p className="mb-2">Thank you for reaching out, {formData.firstName || "Guest"}.</p>
            <p className="mb-2">We have received your message and will contact you within 24 hours.</p>
            <Button className="mt-6 w-full rounded-full" onClick={() => setModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
