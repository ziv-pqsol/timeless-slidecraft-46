
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  totalSlides: number;
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onDotClick: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  totalSlides,
  currentSlide,
  onPrevSlide,
  onNextSlide,
  onDotClick
}) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center items-center">
      <div className="flex items-center space-x-4 px-6 py-3 bg-oldmoney-cream/80 backdrop-blur-sm rounded-full border border-oldmoney-gold/20 shadow-md">
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
      </div>
    </div>
  );
};

export default Navigation;
