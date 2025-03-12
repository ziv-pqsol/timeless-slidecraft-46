import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Menu, ChevronDown } from 'lucide-react';
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && !mobileMenuOpen && (
        <button 
          onClick={toggleMobileMenu}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-oldmoney-cream/90 backdrop-blur-sm border border-oldmoney-brown/20 shadow-md"
          aria-label="Open navigation"
        >
          <Menu className="w-6 h-6 text-oldmoney-brown" />
        </button>
      )}

      {/* Navigation panel */}
      <div 
        className={`fixed ${isMobile ? (mobileMenuOpen ? 'bottom-0 opacity-100' : 'bottom-0 opacity-0 pointer-events-none') : 'bottom-8'} left-0 right-0 z-50 flex justify-center items-center transition-all duration-300`}
      >
        <div className={`flex ${isMobile ? 'flex-col py-6 px-8 w-full rounded-t-xl' : 'items-center space-x-4 px-6 py-3 rounded-full'} bg-oldmoney-cream/80 backdrop-blur-sm border border-oldmoney-brown/20 shadow-md`}>
          {isMobile && (
            <div className="flex justify-between items-center w-full mb-4">
              <span className="text-sm font-medium text-oldmoney-brown">
                Slide {currentSlide + 1} of {totalSlides}
              </span>
              <button
                onClick={toggleMobileMenu}
                className="text-oldmoney-brown"
                aria-label="Close navigation"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          )}
          
          <div className={`flex ${isMobile ? 'w-full justify-between mb-4' : 'items-center'}`}>
            <button 
              onClick={onPrevSlide}
              className="navigation-arrow"
              aria-label="Previous slide"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {!isMobile && (
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
            )}
            
            <button 
              onClick={onNextSlide}
              className="navigation-arrow"
              aria-label="Next slide"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {isMobile && (
            <div className="flex items-center justify-center w-full mb-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotClick(index)}
                  className={`navigation-dot ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          <button
            onClick={toggleFullScreen}
            className={`${isMobile ? 'w-full' : 'ml-2'} h-10 flex items-center justify-center rounded-full bg-oldmoney-cream bg-opacity-80 backdrop-blur-sm border border-oldmoney-brown/10 text-oldmoney-brown transition-all duration-300 hover:bg-oldmoney-gold hover:text-oldmoney-cream`}
            aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullScreen ? (
              <>
                <Minimize2 className="w-5 h-5 mr-2" />
                {isMobile && <span>Exit Fullscreen</span>}
              </>
            ) : (
              <>
                <Maximize2 className="w-5 h-5 mr-2" />
                {isMobile && <span>Enter Fullscreen</span>}
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
