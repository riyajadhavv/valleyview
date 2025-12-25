import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navigation = ({
  user,
  profile,
  handleLogout,
}: {
  user?: any;
  profile?: any;
  handleLogout?: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localProfile, setLocalProfile] = useState(profile);
  const location = useLocation();

  useEffect(() => {
    setLocalProfile(profile);
  }, [profile]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Feedback REMOVED
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/villas" },
    { name: "Contact", path: "/contact" },
  ];

  const initials = localProfile?.full_name
    ? localProfile.full_name
        .split(" ")
        .map((n: string) => n[0].toUpperCase())
        .join("")
        .slice(0, 2)
    : user?.email
    ? user.email.charAt(0).toUpperCase()
    : "?";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Valley View Villa Wai"
              className="h-24 w-auto select-none transition-transform hover:scale-105"
              draggable={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : location.pathname === "/" || location.pathname === "/about"
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Book Now */}
            <Button asChild className="rounded-full">
              <Link to="/booking">Book Now</Link>
            </Button>

            {/* ✅ Profile dropdown ONLY if logged in */}
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer border border-gray-300 shadow-sm">
                    <AvatarImage src={localProfile?.avatar_url || ""} />
                    <AvatarFallback>
                      {initials || <User2 className="w-5 h-5" />}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-52 mt-2" align="end">
                  <div className="px-3 py-2 border-b text-sm">
                    <p className="font-medium">
                      {localProfile?.full_name || "Guest User"}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </p>
                  </div>

                  <DropdownMenuItem asChild>
                    <Link to="/booking">My Bookings</Link>
                  </DropdownMenuItem>

                  {user.email === "admin@valleyviewvilla.in" && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin">Admin Dashboard</Link>
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" /> Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button variant="default" className="rounded-full w-full" asChild>
                <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>

              {user && (
                <Button
                  variant="outline"
                  onClick={() => {
                    handleLogout?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2"
                >
                  <LogOut size={16} /> Log Out
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
