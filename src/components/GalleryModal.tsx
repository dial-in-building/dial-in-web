
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

interface GalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentImage: GalleryImage | null;
  onPrevious: () => void;
  onNext: () => void;
}

const GalleryModal = ({
  open,
  onOpenChange,
  currentImage,
  onPrevious,
  onNext,
}: GalleryModalProps) => {
  if (!currentImage) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl p-0 bg-black/90 border-none rounded-lg overflow-hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center justify-center p-2 sm:p-4">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[80vh] w-auto object-contain"
          />
        </div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <button
            onClick={onPrevious}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-r-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button
            onClick={onNext}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-l-lg transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
          <h3 className="text-lg font-semibold">{currentImage.title}</h3>
          <p className="text-dialin-gold">{currentImage.category}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
