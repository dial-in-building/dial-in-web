import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-2 "
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/uploads/new_logo.png"
            alt="Dial-in Scrub Inc Maintenance Logo"
            className="h-12 md:h-16"
          />
          {/* <span className="ml-2 text-xl font-bold text-dialin-light-brown">Dial-In</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`navbar-link ${isActive("/") ? "active-link" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`navbar-link ${
              isActive("/services") ? "active-link" : ""
            }`}
          >
            Services
          </Link>
          {/* <Link to="/pricing" className={`navbar-link ${isActive("/pricing") ? "active-link" : ""}`}>Pricing</Link> */}
          {/* <Link to="/gallery" className={`navbar-link ${isActive("/gallery") ? "active-link" : ""}`}>Gallery</Link> */}
          <Link
            to="/about"
            className={`navbar-link ${isActive("/about") ? "active-link" : ""}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`navbar-link ${
              isActive("/contact") ? "active-link" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dialin-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={`py-2 px-4 rounded ${
                isActive("/")
                  ? "bg-dialin-beige text-dialin-brown"
                  : "text-dialin-brown"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`py-2 px-4 rounded ${
                isActive("/services")
                  ? "bg-dialin-beige text-dialin-brown"
                  : "text-dialin-brown"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            {/* <Link 
              to="/pricing" 
              className={`py-2 px-4 rounded ${isActive("/pricing") ? "bg-dialin-beige text-dialin-brown" : "text-dialin-brown"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link> */}
            {/* <Link 
              to="/gallery" 
              className={`py-2 px-4 rounded ${isActive("/gallery") ? "bg-dialin-beige text-dialin-brown" : "text-dialin-brown"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link> */}
            <Link
              to="/about"
              className={`py-2 px-4 rounded ${
                isActive("/about")
                  ? "bg-dialin-beige text-dialin-brown"
                  : "text-dialin-brown"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`py-2 px-4 rounded ${
                isActive("/contact")
                  ? "bg-dialin-beige text-dialin-brown"
                  : "text-dialin-brown"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
