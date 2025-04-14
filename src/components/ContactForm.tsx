import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown } from 'lucide-react';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cleaningType: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const cleaningOptions = [
    { value: "Commercial & Retail Store Cleaning", label: "Commercial & Retail Store Cleaning" },
    { value: "Strata and Residential Cleaning", label: "Strata and Residential Cleaning" },
    { value: "Carpet Cleaning", label: "Carpet Cleaning" },
    { value: "Pressure Washing", label: "Pressure Washing" },
    { value: "Roof Gutter Cleaning", label: "Roof Gutter Cleaning" }
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(service_id, template_id, e.target as HTMLFormElement, public_key)
      .then((result) => {
          toast({ title: "Message Sent!", description: "We'll get back to you soon." });
          setFormData({ 
            name: "", 
            email: "", 
            phone: "", 
            message: "",
            cleaningType: "" 
          });
          setIsLoading(false);
      }, (error) => {
          console.log(error.text);
          toast({ title: "Error", description: "Failed to send the message. Try again later." });
          setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="(123) 456-7890"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="cleaningType" className="block text-sm font-medium text-gray-700 mb-1">
            Type of Cleaning
          </label>
          <div className="relative">
            <select
              id="cleaningType"
              name="cleaningType"
              value={formData.cleaningType}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-8 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
            >
              <option value="" disabled className="text-muted-foreground/50">
                Select Type of Cleaning
              </option>
              {cleaningOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">
              <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your cleaning needs..."
          required
          className="w-full min-h-[150px]"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full md:w-auto bg-dialin-gold hover:bg-dialin-brown text-white"
      >
        {isLoading ? (
          <>
            <span className="animate-spin mr-2">&#9696;</span>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
