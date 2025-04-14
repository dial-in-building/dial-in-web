
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-dialin-brown">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-dialin-beige max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:300ms]">
            Get in touch with our team to discuss your cleaning needs or request a quote. We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-dialin-brown mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or ready to schedule a cleaning? Use the form or contact us directly through the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dialin-gold p-3 rounded-full text-white mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dialin-brown text-lg">Our Office</h3>
                    <p className="text-gray-600">Unit:3506-13615 Fraser highway, Surrey BC, V3T 0P7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dialin-gold p-3 rounded-full text-white mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dialin-brown text-lg">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:778-512-5693" className="hover:text-dialin-gold transition-colors">778-512-5693,</a>
                      &nbsp;
                      <a href="tel:204-242-7226" className="hover:text-dialin-gold transition-colors">204-242-7226</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dialin-gold p-3 rounded-full text-white mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dialin-brown text-lg">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@dialinbuildingmaintenance@gmail.com" className="hover:text-dialin-gold transition-colors">dialinbuildingmaintenance@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dialin-gold p-3 rounded-full text-white mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dialin-brown text-lg">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed(Service calls only)</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-8">
                <h3 className="font-bold text-dialin-brown text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="bg-dialin-beige hover:bg-dialin-gold text-dialin-brown hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="bg-dialin-beige hover:bg-dialin-gold text-dialin-brown hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="bg-dialin-beige hover:bg-dialin-gold text-dialin-brown hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="bg-dialin-beige hover:bg-dialin-gold text-dialin-brown hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div> */}
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-dialin-brown mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1712607149269!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Dial-In Building Maintenance Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQs Section */}
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

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">How quickly can you start service?</h3>
              <p className="text-gray-600">
                We can typically begin services within 48-72 hours of finalizing your service agreement. For urgent cleaning needs, we also offer expedited scheduling when possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Are your cleaning products safe?</h3>
              <p className="text-gray-600">
                Yes, we use environmentally friendly cleaning products that are effective yet safe for people, pets, and the environment. We can also accommodate special requests for specific products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Do you provide cleaning equipment?</h3>
              <p className="text-gray-600">
                Yes, we bring all necessary cleaning equipment and supplies. If you have specific equipment preferences, we're happy to discuss those arrangements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Are you insured and bonded?</h3>
              <p className="text-gray-600">
                Absolutely. We are fully insured and bonded for your protection and peace of mind. We can provide proof of insurance upon request.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-3">Are you pet friendly?</h3>
              <p className="text-gray-600">
                Definitely! We love furry friends and are experienced in accommodating pets of all kinds. Your pet's safety and happiness are our top priorities.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* <section className="py-16 bg-dialin-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dialin-brown mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-2">How quickly can you start service?</h3>
              <p className="text-gray-600">
                We can typically begin services within 48-72 hours of finalizing your service agreement. For urgent cleaning needs, we also offer expedited scheduling when possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-2">Are your cleaning products safe?</h3>
              <p className="text-gray-600">
                Yes, we use environmentally friendly cleaning products that are effective yet safe for people, pets, and the environment. We can also accommodate special requests for specific products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-2">Do you provide cleaning equipment?</h3>
              <p className="text-gray-600">
                Yes, we bring all necessary cleaning equipment and supplies. If you have specific equipment preferences, we're happy to discuss those arrangements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-dialin-brown mb-2">Are you insured and bonded?</h3>
              <p className="text-gray-600">
                Absolutely. We are fully insured and bonded for your protection and peace of mind. We can provide proof of insurance upon request.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
