
import React from 'react';
import { cn } from '../lib/utils';
import ImageFrame from './ImageFrame';

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
        <h2 className="slide-title text-oldmoney-brown font-playfair text-4xl md:text-5xl mb-8 text-center">
          {title}
        </h2>
        <div className="w-full max-w-3xl mb-8">
          <ImageFrame 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-64 md:h-80"
          />
        </div>
        {description && (
          <p className="slide-description text-oldmoney-brown/90 font-montserrat text-base md:text-lg leading-relaxed max-w-2xl text-center">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default Slide;
