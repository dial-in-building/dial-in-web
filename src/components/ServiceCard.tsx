
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card animate-scale-in">
      <div className="text-dialin-gold mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-dialin-brown">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
