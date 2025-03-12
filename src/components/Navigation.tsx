
import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

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
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center items-center">
      <div className="flex items-center space-x-4 px-6 py-3 bg-oldmoney-cream/80 backdrop-blur-sm rounded-full border border-oldmoney-brown/20 shadow-md">
        <button 
          onClick={onPrevSlide}
          className="navigation-arrow"
          aria-label="Previous slide"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-2 mx-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`navigation-dot ${currentSlide === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={onNextSlide}
          className="navigation-arrow"
          aria-label="Next slide"
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={toggleFullScreen}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-oldmoney-cream bg-opacity-80 backdrop-blur-sm border border-oldmoney-brown/10 text-oldmoney-brown transition-all duration-300 hover:bg-oldmoney-gold hover:text-oldmoney-cream ml-2"
          aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullScreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default Navigation;
