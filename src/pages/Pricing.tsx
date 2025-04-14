
import PricingCard from "@/components/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const commercialPlans = [
    {
      title: "Basic",
      price: "$299",
      frequency: "month",
      features: [
        "Weekly cleaning (once per week)",
        "Up to 2,000 sq ft",
        "Vacuuming and mopping",
        "Dusting accessible surfaces",
        "Restroom sanitization",
        "Trash removal",
      ],
      popular: false,
    },
    {
      title: "Professional",
      price: "$499",
      frequency: "month",
      features: [
        "Twice weekly cleaning",
        "Up to 4,000 sq ft",
        "All Basic features",
        "Kitchen deep cleaning",
        "Window cleaning (interior)",
        "Break room maintenance",
        "Carpet spot treatment"
      ],
      popular: true,
    },
    {
      title: "Premium",
      price: "$799",
      frequency: "month",
      features: [
        "Three times weekly cleaning",
        "Up to 8,000 sq ft",
        "All Professional features",
        "Floor waxing and buffing",
        "Upholstery cleaning",
        "High dusting",
        "Window cleaning (ext. ground level)",
        "Priority scheduling"
      ],
      popular: false,
    }
  ];

  const residentialPlans = [
    {
      title: "Standard",
      price: "$159",
      frequency: "month",
      features: [
        "Bi-weekly cleaning",
        "Up to 1,500 sq ft",
        "Vacuuming and mopping",
        "Bathroom cleaning",
        "Kitchen cleaning",
        "Dusting accessible surfaces"
      ],
      popular: false,
    },
    {
      title: "Deluxe",
      price: "$249",
      frequency: "month",
      features: [
        "Weekly cleaning",
        "Up to 2,500 sq ft",
        "All Standard features",
        "Inside window cleaning",
        "Appliance cleaning",
        "Linen changing",
        "Baseboards cleaning"
      ],
      popular: true,
    },
    {
      title: "Executive",
      price: "$399",
      frequency: "month",
      features: [
        "Weekly cleaning",
        "Up to 4,000 sq ft",
        "All Deluxe features",
        "Deep cleaning bathrooms",
        "Cabinet organization",
        "Detailed kitchen cleaning",
        "Carpet treatment",
        "Custom requests"
      ],
      popular: false,
    }
  ];

  const specializedPlans = [
    {
      title: "One-Time Deep Clean",
      price: "$0.30",
      frequency: "sq ft",
      features: [
        "Thorough deep cleaning",
        "Detailed bathroom cleaning",
        "Kitchen appliance cleaning",
        "Baseboards and trim cleaning",
        "Window sills and tracks",
        "Cabinet fronts cleaning"
      ],
      popular: false,
    },
    {
      title: "Move In/Out",
      price: "$0.40",
      frequency: "sq ft",
      features: [
        "Complete property cleaning",
        "Inside appliance cleaning",
        "Cabinet and drawer cleaning",
        "Baseboard and trim detailing",
        "Window cleaning",
        "Floor deep cleaning and treatment"
      ],
      popular: true,
    },
    {
      title: "Post-Construction",
      price: "$0.50",
      frequency: "sq ft",
      features: [
        "Dust removal throughout",
        "Debris cleanup",
        "Surface cleaning and sanitizing",
        "Window and glass cleaning",
        "Floor cleaning and treatment",
        "Final touch-ups",
        "HEPA vacuuming"
      ],
      popular: false,
    }
  ];

  const cleaningServices = [
  {
    title: "Basic Cleaning",
    price: "$35/hr",
    frequency: "hour",
    features: [
      "Basic dusting, broom & mop",
      "Restrooms extra depending on condition",
    ],
    popular: false,
  },
  {
    title: "Deep Cleaning",
    price: "$45-50/hr",
    frequency: "hour",
    features: [
      "Thorough deep cleaning",
      "Stripping floor for wax & polish",
    ],
    popular: false,
  },
  {
    title: "Pressure Washing",
    price: "Custom Quote",
    frequency: "per project",
    features: [
      "Exterior surface cleaning",
      "Driveways and sidewalks",
      "Decks and patios",
      "Building facade wash",
      "High-pressure grime removal",
    ],
    popular: false,
  },
  {
    title: "Roof Gutter Cleaning",
    price: "Custom Quote",
    frequency: "per project",
    features: [
      "Removal of debris and leaves",
      "Downspout flushing",
      "Gutter system check",
      "Water damage prevention",
      "Safe and efficient cleaning",
    ],
    popular: false,
  },
  {
    title: "Carpet Cleaning",
    price: "Custom Quote",
    frequency: "per project",
    features: [
      "Deep carpet cleaning",
      "Spot treatment",
      "Stain and odor removal",
      "Steam cleaning option",
    ],
    popular: false,
  },
  {
    title: "Strata Cleaning",
    price: "Custom Quote",
    frequency: "per project",
    features: [
      "Comprehensive cleaning service",
      "Customized per property needs",
      "Includes exterior & common areas",
      "Free personalized quote available",
    ],
    popular: false,
  }
];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-dialin-brown">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">Pricing Plans</h1>
          <p className="text-dialin-beige max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:300ms]">
            Transparent pricing options to fit your cleaning needs and budget. All plans can be customized to your specific requirements.
          </p>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="commercial" className="w-full">
            {/* <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="specialized">Specialized</TabsTrigger>
            </TabsList> */}
            
            <TabsContent value="commercial" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cleaningServices.map((plan, index) => (
                  <PricingCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    frequency={plan.frequency}
                    features={plan.features}
                    popular={plan.popular}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="residential" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {residentialPlans.map((plan, index) => (
                  <PricingCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    frequency={plan.frequency}
                    features={plan.features}
                    popular={plan.popular}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specialized" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {specializedPlans.map((plan, index) => (
                  <PricingCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    frequency={plan.frequency}
                    features={plan.features}
                    popular={plan.popular}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-dialin-brown mb-4">Custom Pricing</h3>
            <p className="text-gray-600 mb-4">
              Need something specific? We offer custom pricing for specialized cleaning needs, large properties, or unique circumstances. Contact us for a personalized quote.
            </p>
            <Button asChild className="bg-dialin-gold hover:bg-dialin-brown text-white">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-dialin-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dialin-brown mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Do you offer contracts?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible contract options ranging from month-to-month to annual plans. Annual contracts include a 10% discount on our standard rates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">What's included in the base price?</h3>
              <p className="text-gray-600">
                Our base prices include labor, standard cleaning supplies, and equipment. Specialized cleaning products or treatments may incur additional costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Can I customize my cleaning plan?</h3>
              <p className="text-gray-600">
                Absolutely! We understand that each space has unique needs. We're happy to work with you to customize any plan to fit your specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Do you offer discounts?</h3>
              <p className="text-gray-600">
                Yes, we offer discounts for long-term contracts, multiple locations, and referrals. Contact us to learn more about our current discount programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">What forms of payment do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, checks, direct deposits, and electronic payments. We can set up automated billing for your convenience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Are your cleaning products eco-friendly?</h3>
              <p className="text-gray-600">
                Yes, we prioritize environmentally friendly cleaning products. We can also accommodate specific product requests or use client-provided supplies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dialin-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-scale-in">
            Ready to Get Started?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto animate-scale-in [animation-delay:200ms]">
            Contact us today to schedule a consultation. We'll provide a detailed quote based on your specific needs.
          </p>
          <Button asChild size="lg" className="bg-dialin-brown hover:bg-white hover:text-dialin-brown text-white animate-scale-in [animation-delay:400ms]">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
