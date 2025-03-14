
import React from 'react';
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
  // Empty component - menu removed as requested
  return null;
};

export default Navigation;
