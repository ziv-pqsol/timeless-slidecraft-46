
import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface NavigationProps {
  totalSlides: number;
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onDotClick: (index: number) => void;
  isFullScreen?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  totalSlides,
  currentSlide,
  onPrevSlide,
  onNextSlide,
  onDotClick,
  isFullScreen = false
}) => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!mobileMenuOpen) {
    return (
      <button 
        onClick={toggleMobileMenu}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-oldmoney-cream/90 backdrop-blur-sm border border-oldmoney-brown/20 shadow-md"
        aria-label="Open navigation"
      >
        <Menu className="w-6 h-6 text-oldmoney-brown" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center transition-all duration-300">
      <div className="flex flex-col py-6 px-8 w-full rounded-t-xl bg-oldmoney-cream/80 backdrop-blur-sm border border-oldmoney-brown/20 shadow-md">
        <div className="flex justify-between items-center w-full mb-4">
          <span className="text-sm font-medium text-oldmoney-brown">
            Diapositiva {currentSlide + 1} de {totalSlides}
          </span>
          <button
            onClick={toggleMobileMenu}
            className="text-oldmoney-brown"
            aria-label="Close navigation"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-center w-full">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                onDotClick(index);
                toggleMobileMenu();
              }}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-oldmoney-brown scale-125' 
                  : 'bg-oldmoney-brown/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
