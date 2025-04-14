
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Check, ArrowRight } from "lucide-react";

const Index = () => {
  const services = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8"></path><line x1="3" y1="20" x2="21" y2="20"></line><line x1="7" y1="16" x2="7" y2="20"></line><line x1="17" y1="16" x2="17" y2="20"></line></svg>,
    title: "Commercial & Retail Store Cleaning",
    description: "Comprehensive cleaning services tailored for commercial spaces and retail stores."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-8.5l9-9 9 9V22"></path><path d="M9 22V12h6v10"></path></svg>,
    title: "Strata Cleaning",
    description: "Professional cleaning solutions designed for strata properties and shared spaces."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 10h18"></path></svg>,
    title: "Carpet Cleaning",
    description: "Expert cleaning services to refresh and restore your carpets to pristine condition."
  },
];

  const testimonials = [
    {
      quote: "Dial-In transformed our office space. Their attention to detail is unmatched, and the team is always professional and punctual.",
      author: "Sarah Johnson",
      position: "Office Manager, Tech Solutions Inc."
    },
    {
      quote: "We've tried several cleaning services, but none compare to Dial-In. They're thorough, reliable, and genuinely care about their work.",
      author: "Michael Reynolds",
      position: "Property Manager, Oakwood Residences"
    },
    {
      quote: "The level of service Dial-In provides is exceptional. Our medical facility has never been cleaner or more sanitized.",
      author: "Dr. Emily Chen",
      position: "Director, Wellness Medical Center"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dialin-brown/80 to-dialin-brown/60"></div>
          <img
            src="https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&q=80&w=1974"
            alt="Clean Office Space"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Dial-in Building Maintenance Services
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in [animation-delay:300ms]">
              Keep your spaces immaculate with our comprehensive cleaning and maintenance solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
              <Button asChild size="lg" className="bg-dialin-gold hover:bg-dialin-brown text-white">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" className="bg-dialin-gold hover:bg-dialin-brown text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-6 animate-fade-in [animation-delay:900ms]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-white">Lower Mainland • Fraser Valley Region</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-dialin-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-dialin-brown mb-4">
                Dial In to a Cleaner Environment
              </h2>
              <p className="text-gray-700 mb-6">
                At Dial-In Building Maintenance, we're committed to providing exceptional cleaning services that meet the unique needs of your space. With years of experience and a dedicated team of professionals, we ensure pristine results that exceed expectations.
              </p>
              <ul className="space-y-2 mb-6">
                {['Experienced & Vetted Staff', 'Eco-Friendly Cleaning Products', 'Customized Cleaning Plans', 'Reliable & Consistent Service'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-dialin-gold mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-dialin-brown hover:bg-dialin-lightbrown text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="circular-animation animate-fade-in md:order-last order-first">
              <img
                src="/uploads/logo.png"
                alt="Dial-In Building Maintenance Logo"
                className="w-full max-w-md mx-auto"
                loading="lazy"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dialin-brown mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional cleaning services to meet all your building maintenance needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-dialin-gold hover:bg-dialin-brown text-white">
              <Link to="/services" className="inline-flex items-center">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-dialin-brown text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Dial-In?</h2>
            <p className="text-dialin-beige max-w-2xl mx-auto">
              With our dedication to excellence and customer satisfaction, we provide more than just cleaning services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dialin-brown/30 p-6 rounded-lg sweep-animation animate-scale-in">
              <div className="text-dialin-gold mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M11 15H9c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h2"></path><path d="M15 11v4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Experience & Expertise</h3>
              <p className="text-gray-300">
                With years of industry experience, our team has the knowledge and skills to handle any cleaning challenge.
              </p>
            </div>
            <div className="bg-dialin-brown/30 p-6 rounded-lg sweep-animation animate-scale-in [animation-delay:150ms]">
              <div className="text-dialin-gold mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-300">
                We adhere to strict quality control measures to ensure consistent, superior cleaning results every time.
              </p>
            </div>
            <div className="bg-dialin-brown/30 p-6 rounded-lg sweep-animation animate-scale-in [animation-delay:300ms]">
              <div className="text-dialin-gold mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 22 4-10 4 10"></path><path d="M12 22v-3"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Approach</h3>
              <p className="text-gray-300">
                We use environmentally responsible cleaning products and methods that are safe for people, pets, and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dialin-brown mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients who have experienced the Dial-In difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-dialin-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 animate-scale-in">
            Ready to Experience the Dial-In Difference?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto animate-scale-in [animation-delay:200ms]">
            Contact us today for a free consultation and quote. Let us help you maintain a clean, healthy environment.
          </p>
          <Button asChild size="lg" className="bg-dialin-brown hover:bg-white hover:text-dialin-brown text-white animate-scale-in [animation-delay:400ms]">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
