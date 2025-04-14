
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  frequency: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, frequency, features, popular = false }: PricingCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${popular ? 'border-2 border-dialin-gold' : 'border border-gray-200'}`}>
      {popular && (
        <div className="bg-dialin-gold text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dialin-brown mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-dialin-brown">{price}</span>
          <span className="text-gray-500 ml-1">/{frequency}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-dialin-gold mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        {/* <Button className={`w-full ${popular ? 'bg-dialin-gold hover:bg-dialin-brown' : 'bg-dialin-brown hover:bg-dialin-lightbrown'} text-white`}>
          Choose Plan
        </Button> */}
      </div>
    </div>
  );
};

export default PricingCard;
