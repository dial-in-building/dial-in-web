import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "John Richardson",
      position: "Founder & CEO",
      bio: "With over 20 years in the cleaning and maintenance industry, John founded Dial-In with a vision to provide exceptional service and unmatched quality.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2074",
    },
    {
      name: "Maria Lopez",
      position: "Operations Manager",
      bio: "Maria ensures that every cleaning project runs smoothly and meets our high standards. Her attention to detail and organizational skills keep our team performing at their best.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2070",
    },
    {
      name: "David Chen",
      position: "Client Relations",
      bio: "David works closely with our clients to understand their unique needs and ensure complete satisfaction. His friendly approach and problem-solving abilities make him a client favorite.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-dialin-gold" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, from the products we use to the results we deliver.",
    },
    {
      icon: <Users className="h-8 w-8 text-dialin-gold" />,
      title: "Reliability",
      description:
        "Our clients can count on us to be punctual, consistent, and thorough every single time.",
    },
    {
      icon: <Heart className="h-8 w-8 text-dialin-gold" />,
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and respect in all our business dealings and client relationships.",
    },
    {
      icon: <Clock className="h-8 w-8 text-dialin-gold" />,
      title: "Efficiency",
      description:
        "We value your time and work efficiently to minimize disruption while maximizing results.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-dialin-brown">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            About Dial-In
          </h1>
          <p className="text-dialin-beige max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:300ms]">
            Learn about our story, our mission, and the team behind our
            exceptional cleaning services.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-dialin-brown mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Dial-in Scrub Inc Maintenance was established in 2023 with a
                simple mission: to provide exceptional cleaning services that
                truly make a difference in the environments where people live
                and work.
              </p>
              <p className="text-gray-600 mb-4">
                In just two years, we've grown from a humble beginning into a
                trusted cleaning and maintenance service provider, serving
                residential and commercial clients throughout the region. Our
                rapid growth is built on a foundation of quality work, attention
                to detail, and genuine care for our clients' needs.
              </p>
              <p className="text-gray-600 mb-6">
                From the very start, we've been dedicated to our core values of
                excellence, reliability, integrity, and efficiency. These
                principles continue to guide every decision we make and every
                service we provide.
              </p>
              <p className="text-gray-600 mb-6">
                Our team consists of experienced professionals who bring 5-7
                years of expertise in the cleaning and maintenance industry.
                Their skills and dedication ensure that every project is
                completed with precision and care, exceeding client expectations
                every time.
              </p>
              {/* <div className="flex items-center">
                <img 
                  src="/uploads/logo.png" 
                  alt="Dial-in Scrub Inc Maintenance Logo" 
                  className="h-16 mr-4"
                />
                <div>
                  <p className="font-bold text-dialin-brown">Jatinder Singh</p>
                  <p className="text-gray-500">Founder & CEO</p>
                </div>
              </div> */}
            </div>
            <div className="circular-animation animate-fade-in order-first md:order-last">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=2070"
                alt="Clean Office Space"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-dialin-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dialin-brown mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our approach to every job and relationship,
              ensuring we deliver the highest quality service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-dialin-brown mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dialin-brown mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The experienced professionals who ensure that Dial-In consistently delivers exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dialin-brown">{member.name}</h3>
                  <p className="text-dialin-gold font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-16 bg-dialin-brown text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6">Why Choose Dial-In?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-dialin-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Experienced Team</h3>
                    <p className="text-gray-300">
                      Our staff members are thoroughly vetted, trained, and
                      experienced in all aspects of cleaning and maintenance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-dialin-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Custom Solutions</h3>
                    <p className="text-gray-300">
                      We tailor our services to meet your specific needs, not
                      the other way around. Your satisfaction is our priority.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-dialin-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Quality Products</h3>
                    <p className="text-gray-300">
                      We use high-quality, eco-friendly cleaning products that
                      are effective yet safe for your space and the environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-dialin-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Reliability</h3>
                    <p className="text-gray-300">
                      We show up on time, every time, and complete our work
                      efficiently and thoroughly. You can count on us.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in order-first md:order-last">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070"
                alt="Professional Cleaning Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dialin-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-scale-in">
            Ready to Experience the Dial-In Difference?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto animate-scale-in [animation-delay:200ms]">
            Contact us today to schedule a consultation or request a free quote
            for your cleaning and maintenance needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-dialin-brown hover:bg-white hover:text-dialin-brown text-white animate-scale-in [animation-delay:400ms]"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
