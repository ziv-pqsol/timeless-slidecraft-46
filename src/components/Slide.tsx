
import React from 'react';
import { cn } from '../lib/utils';
import ImageFrame from './ImageFrame';
import { useIsMobile } from '../hooks/use-mobile';

interface SlideProps {
  id: string;
  number: number;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({
  id,
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  className,
  isActive
}) => {
  const isMobile = useIsMobile();

  return (
    <section
      id={id}
      className={cn(
        "slide absolute inset-0 opacity-0 pointer-events-none",
        isActive && "opacity-100 pointer-events-auto animate-fade-in",
        className
      )}
    >
      <div className="slide-content flex flex-col items-center">
        <div className="slide-number text-oldmoney-gold font-montserrat text-sm tracking-wider mb-2">
          {number < 10 ? `0${number}` : number}
        </div>
        <h2 className="slide-title text-oldmoney-brown font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 text-center px-4">
          {title}
        </h2>
        <div className="w-full max-w-3xl px-4 mb-4 md:mb-8">
          <ImageFrame 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-44 sm:h-56 md:h-72 lg:h-80"
          />
        </div>
        {description && (
          <p className="slide-description text-oldmoney-brown/90 font-montserrat text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-center px-4 pb-16 md:pb-0">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default Slide;
