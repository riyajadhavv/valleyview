import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-luxury-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
              LuxeVilla
            </h3>
            <p className="text-sm text-luxury-beige">
              Experience Luxury. Live Serenity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-luxury-beige hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/villas" className="text-sm text-luxury-beige hover:text-primary transition-colors">
                  Our Villas
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm text-luxury-beige hover:text-primary transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm text-luxury-beige hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-luxury-beige">
                <Phone size={16} className="mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-sm text-luxury-beige">
                <Mail size={16} className="mr-2" />
                info@luxevilla.com
              </li>
              <li className="flex items-center text-sm text-luxury-beige">
                <MapPin size={16} className="mr-2" />
                Luxury Coast, Paradise Island
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-luxury-beige/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-luxury-beige/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-luxury-beige/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-beige/20 mt-8 pt-8 text-center">
          <p className="text-sm text-luxury-beige">
            © 2025 LuxeVilla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
