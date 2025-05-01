
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const servicesData = [
    {
      id: "commercial-retail",
      title: "Commercial & Retail Store Cleaning",
      description: "Comprehensive cleaning services tailored for commercial spaces and retail stores.",
      image: "/uploads/commercial_cleaning.png",
      features: [
        "Customized cleaning solutions",
        "Office cleaning programs",
        "Retail space maintenance",
        "Sanitization and disinfection",
        "Breakroom care",
        "Trash and recycling services",
        "Floor cleaning and polishing"
      ]
    },
    {
      id: "strata-cleaning",
      title: "Strata and Residential Cleaning",
      description: "Professional cleaning solutions designed for strata properties and shared spaces.",
      image: "/uploads/starta_cleaning.png",
      features: [
        "Lobby and common area cleaning",
        "Elevator cleaning",
        "Shared facilities sanitization",
        "Exterior and interior cleaning",
        "Window and glass cleaning",
        "Regular cleaning schedules",
        "Tailored services for strata needs"
      ]
    },
    {
      id: "carpet-cleaning",
      title: "Carpet Cleaning",
      description: "Expert cleaning services to refresh and restore your carpets to pristine condition.",
      image: "/uploads/carpet_cleaning_image.png",
      features: [
        "Professional shampooing",
        "Stain and odor removal",
        "Deep cleaning techniques",
        "Protective coating",
        "Allergen reduction",
        "Regular maintenance programs",
        "Eco-friendly solutions"
      ]
    },
    {
      id: "pressure-washing",
      title: "Pressure Washing",
      description: "High-pressure cleaning to remove dirt, grime, and stains from various surfaces.",
      image: "/uploads/pressure_washing_image.png",
      features: [
        "Effective stain removal",
        "Surface rejuvenation",
        "Driveway and walkway cleaning",
        "Building exterior cleaning",
        "Grabage bins cleaning",
        "Patio and deck cleaning",
        "Professional-grade equipment"
      ]
    },
    {
      id: "roof-gutter",
      title: "Roof Gutter Cleaning",
      description: "Efficient and safe gutter cleaning to maintain proper drainage and protect your property.",
      image: "/uploads/roof_gutter_cleaning.png",
      features: [
        "Thorough debris removal",
        "Regular cleaning schedules",
        // "Drainage system inspection",
        // "Prevention of water damage",
        // "Seasonal gutter maintenance",
        "Safe cleaning techniques",
        "Protective treatments"
      ]
    }

  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-dialin-brown">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">Our Services</h1>
          <p className="text-dialin-beige max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:300ms]">
            From regular commercial cleaning to specialized maintenance, we offer comprehensive solutions to keep your spaces pristine.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`animate-fade-in ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg w-full h-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className={`animate-slide-in ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl font-bold text-dialin-brown mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="text-dialin-gold mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <Button className="bg-dialin-gold hover:bg-dialin-brown text-white">
                  Request This Service
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dialin-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dialin-brown mb-4 animate-scale-in">
            Need a Custom Cleaning Solution?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-scale-in [animation-delay:200ms]">
            We understand that each space has unique requirements. Contact us to discuss a tailored cleaning plan that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in [animation-delay:400ms]">
            <Button asChild className="bg-dialin-gold hover:bg-dialin-brown text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
            {/* <Button asChild variant="outline" className="border-dialin-brown text-dialin-brown hover:bg-dialin-brown hover:text-white">
              <Link to="/pricing">View Pricing</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
