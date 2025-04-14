
import { useState } from "react";

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

const GalleryItem = ({ image, title, category, onClick }: GalleryItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="gallery-item animate-scale-in" 
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-dialin-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={image} 
        alt={title} 
        className={`w-full aspect-square object-cover rounded-lg transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bg-dialin-brown/80 p-3 rounded-lg">
          <h4 className="text-white font-bold">{title}</h4>
          <p className="text-dialin-gold text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
