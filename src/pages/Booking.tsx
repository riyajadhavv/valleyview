import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingOptions = () => {
  // ✅ WhatsApp booking redirect (same logic style as Contact page)
  const openWhatsApp = () => {
    const message = `
Hi! 👋
I would like to book *Valley View Villa, Wai* 🌿

Please share availability and pricing details.
Thank you!
    `.trim();

    const whatsappNumber = "919422255335"; // WhatsApp-enabled number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ NAVBAR */}
      <Navigation />

      {/* ✅ PAGE CONTENT */}
      <main className="flex-1 pt-32 pb-20 px-4 bg-muted/30 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
          <h1 className="text-2xl font-bold">
            Book Your Stay at Valley View Villa
          </h1>

          <p className="text-sm text-muted-foreground">
            Choose your preferred booking option below
          </p>

          {/* WhatsApp Booking */}
          <div className="border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold">
              <MessageCircle className="text-green-600" size={20} />
              Book via WhatsApp
            </div>

            <p className="text-sm text-muted-foreground">
              +91 94222 55335
            </p>

            <Button
              onClick={openWhatsApp}
              className="rounded-full w-full bg-green-600 hover:bg-green-700"
            >
              Chat on WhatsApp
            </Button>

            <p className="text-xs text-muted-foreground">
              Fastest response & best direct price
            </p>
          </div>

          {/* Call Info */}
          <div className="border rounded-xl p-4 text-sm text-muted-foreground">
            <Phone className="inline mr-2" size={16} />
            +91 94222 55335 / +91 98500 85595
          </div>

          {/* Airbnb */}
          <a
            href="https://www.airbnb.co.in/rooms/1104975167556012060?check_in=2025-12-31&check_out=2026-01-02&guests=6&adults=6&s=67&unique_share_id=12caa7f5-91c9-4d9b-9955-b27e72a50e68"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border rounded-xl p-4 hover:bg-muted transition"
          >
            <span className="font-medium">Book via Airbnb</span>
            <ExternalLink size={16} />
          </a>

          {/* Booking.com */}
          <a
            href="https://www.booking.com/Share-SFsztRl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border rounded-xl p-4 hover:bg-muted transition"
          >
            <span className="font-medium">Book via Booking.com</span>
            <ExternalLink size={16} />
          </a>

          <p className="text-xs text-muted-foreground pt-2">
            Direct bookings get priority assistance.
          </p>
        </div>
      </main>

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
};

export default BookingOptions;
