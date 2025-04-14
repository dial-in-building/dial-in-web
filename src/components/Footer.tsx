
import { Link } from "react-router-dom";
import { Mail, Phone, Clock, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dialin-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 place-items-center">
          {/* Company Info */}
          {/* 
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <img 
                src="/uploads/logo.png" 
                alt="Dial-In Building Maintenance Logo" 
                className="h-12 rounded-full p-1"
              />
              <h3 className="text-xl font-bold ml-2">Dial-In Building Maintenance Services</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Professional cleaning and maintenance services for buildings of all sizes. Quality, reliability, and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-dialin-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-dialin-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-dialin-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-dialin-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>

          </div>*/}
          
          {/* Quick Links */}
          {/* <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="text-xl font-bold mb-4 text-dialin-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-dialin-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-dialin-gold transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-dialin-gold transition-colors">Pricing</Link></li>
              <li><Link to="/gallery" className="hover:text-dialin-gold transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-dialin-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-dialin-gold transition-colors">Contact</Link></li>
            </ul>
          </div> */}
          
          {/* Contact Info */}
          <div className="animate-fade-in [animation-delay:400ms]">
            <h3 className="text-xl font-bold mb-4 text-dialin-gold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Home className="mr-2 mt-1 text-dialin-gold" size={18} />
                <span>Unit:3506-13615 Fraser highway, Surrey BC, V3T 0P7</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-dialin-gold" size={18} />
                <a href="tel:778-512-5693" className="hover:text-dialin-gold transition-colors">778-512-5693,</a>
                &nbsp;
                <a href="tel:204-242-7226" className="hover:text-dialin-gold transition-colors">204-242-7226</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-dialin-gold" size={18} />
                <a href="mailto:dialinbuildingmaintenance@gmail.com" className="hover:text-dialin-gold transition-colors">dialinbuildingmaintenance@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 text-dialin-gold" size={18} />
                <div>
                  <p>Monday - Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed (Service calls only)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2023 Dial-In Building Maintenance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
