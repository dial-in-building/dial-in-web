import { useState } from "react";
import GalleryItem from "@/components/GalleryItem";
import GalleryModal from "@/components/GalleryModal";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070",
      title: "Commercial Office Cleaning",
      category: "commercial"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2074",
      title: "Residential Living Room",
      category: "residential"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=2070",
      title: "Carpet Deep Cleaning",
      category: "carpet"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=2074",
      title: "Kitchen Sanitization",
      category: "residential"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1520052203542-d3f35befd986?auto=format&fit=crop&q=80&w=2070",
      title: "Window Cleaning Service",
      category: "windows"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1595079986436-7800ddcb7490?auto=format&fit=crop&q=80&w=2070",
      title: "Post-Construction Cleanup",
      category: "specialized"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&q=80&w=2070",
      title: "Office Sanitization",
      category: "commercial"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=2070",
      title: "Bathroom Deep Cleaning",
      category: "residential"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2080",
      title: "Medical Facility Cleaning",
      category: "specialized"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?auto=format&fit=crop&q=80&w=2070",
      title: "Residential Bedroom",
      category: "residential"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e8d?auto=format&fit=crop&q=80&w=2070",
      title: "Floor Polishing",
      category: "carpet"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1604549918702-6cf806a2d0a5?auto=format&fit=crop&q=80&w=2070",
      title: "Lobby Maintenance",
      category: "commercial"
    }
  ];
  
  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);
  
  const openModal = (image: GalleryImage) => {
    setCurrentImage(image);
    setModalOpen(true);
  };
  
  const goToNext = () => {
    if (!currentImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentImage(filteredImages[nextIndex]);
  };
  
  const goToPrevious = () => {
    if (!currentImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImage(filteredImages[prevIndex]);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-dialin-brown">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">Our Work Gallery</h1>
          <p className="text-dialin-beige max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:300ms]">
            Browse through our portfolio to see examples of our cleaning and maintenance services in action.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={activeFilter === "all" ? "bg-dialin-gold hover:bg-dialin-brown" : ""}
            >
              All
            </Button>
            <Button
              variant={activeFilter === "commercial" ? "default" : "outline"}
              onClick={() => setActiveFilter("commercial")}
              className={activeFilter === "commercial" ? "bg-dialin-gold hover:bg-dialin-brown" : ""}
            >
              Commercial
            </Button>
            <Button
              variant={activeFilter === "residential" ? "default" : "outline"}
              onClick={() => setActiveFilter("residential")}
              className={activeFilter === "residential" ? "bg-dialin-gold hover:bg-dialin-brown" : ""}
            >
              Residential
            </Button>
            <Button
              variant={activeFilter === "carpet" ? "default" : "outline"}
              onClick={() => setActiveFilter("carpet")}
              className={activeFilter === "carpet" ? "bg-dialin-gold hover:bg-dialin-brown" : ""}
            >
              Carpet & Floor
            </Button>
            <Button
              variant={activeFilter === "windows" ? "default" : "outline"}
              onClick={() => setActiveFilter("windows")}
              className={activeFilter === "windows" ? "bg-dialin-gold hover:bg-dialin-brown" : ""}
            >
              Windows
            </Button>
            <Button
              variant={activeFilter === "specialized" ? "default" : "outline"}
              onClick={() => setActiveFilter("specialized")}
              className={activeFilter === "specialized" ? "bg-dialin-gold hover:bg-dialin-brown" : ""}
            >
              Specialized
            </Button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.length > 0 ? (
              filteredImages.map((image) => (
                <GalleryItem
                  key={image.id}
                  image={image.src}
                  title={image.title}
                  category={image.category}
                  onClick={() => openModal(image)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No images found in this category.</p>
              </div>
            )}
          </div>
          
          {/* Gallery Modal */}
          <GalleryModal
            open={modalOpen}
            onOpenChange={setModalOpen}
            currentImage={currentImage}
            onPrevious={goToPrevious}
            onNext={goToNext}
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-dialin-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dialin-brown mb-4 animate-scale-in">
            Like What You See?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-scale-in [animation-delay:200ms]">
            Let us transform your space with our professional cleaning services. Contact us today to schedule an appointment.
          </p>
          <Button className="bg-dialin-gold hover:bg-dialin-brown text-white animate-scale-in [animation-delay:400ms]">
            Get a Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
