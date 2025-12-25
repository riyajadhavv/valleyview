import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-luxury-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient mb-3">
              Valley View Villa
            </h3>
            <p className="text-sm text-luxury-beige leading-relaxed">
              Your serene hilltop escape near Dhom Dam.  
              Experience peace, comfort, and timeless charm.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-luxury-beige hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/villas"
                  className="text-sm text-luxury-beige hover:text-primary transition-colors"
                >
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/villas"
                  className="text-sm text-luxury-beige hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-luxury-beige hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-luxury-beige hover:text-primary transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-luxury-beige">
                <Phone size={16} className="mr-2 mt-1 text-primary" />
                +91 9422255335
              </li>
              <li className="flex items-start text-sm text-luxury-beige">
                <Mail size={16} className="mr-2 mt-1 text-primary" />
                valleyviewvilla@gmail.com
              </li>
              <li className="flex items-start text-sm text-luxury-beige">
                <MapPin size={16} className="mr-2 mt-1 text-primary" />
                Near Dhom Dam, Wai, Satara, Maharashtra
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/valleyviewvillawai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-105"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-luxury-beige/20 mt-10 pt-6 text-center">
          <p className="text-sm text-luxury-beige">
            © {new Date().getFullYear()} Valley View Villa Wai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
