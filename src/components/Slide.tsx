
import React from 'react';
import { cn } from '../lib/utils';
import ImageFrame from './ImageFrame';
import { useIsMobile } from '../hooks/use-mobile';

interface SlideProps {
  id: string;
  number: number;
  title: string;
  description?: string;
  question?: string;
  answer?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  isActive: boolean;
  imagePosition?: 'left' | 'right' | 'center';
  isWelcome?: boolean;
  isThankYou?: boolean;
}

const Slide: React.FC<SlideProps> = ({
  id,
  number,
  title,
  description,
  question,
  answer,
  imageSrc,
  imageAlt,
  className,
  isActive,
  imagePosition = 'center',
  isWelcome = false,
  isThankYou = false
}) => {
  const isMobile = useIsMobile();

  // Special rendering for welcome slide
  if (isWelcome) {
    return (
      <section
        id={id}
        className={cn(
          "slide absolute inset-0 opacity-0 pointer-events-none",
          isActive && "opacity-100 pointer-events-auto animate-fade-in",
          className
        )}
      >
        <div className="slide-content flex flex-col items-center justify-center h-full bg-transparent">
          <div className="w-full max-w-3xl mx-auto px-4 text-center">
            <ImageFrame 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 mb-8 mx-auto"
            />
            
            <h1 className="slide-title text-oldmoney-brown font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
              {title}
            </h1>
            
            {description && (
              <p className="font-montserrat text-oldmoney-brown/90 text-lg sm:text-xl md:text-2xl mb-4 whitespace-pre-line">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Special rendering for thank you slide
  if (isThankYou) {
    return (
      <section
        id={id}
        className={cn(
          "slide absolute inset-0 opacity-0 pointer-events-none",
          isActive && "opacity-100 pointer-events-auto animate-fade-in",
          className
        )}
      >
        <div className="slide-content flex flex-col items-center justify-center h-full bg-transparent">
          <div className="w-full max-w-3xl mx-auto px-4 text-center">
            <ImageFrame 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 mb-8 mx-auto rounded-lg shadow-lg"
            />
            
            <h1 className="slide-title text-oldmoney-gold font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-center italic">
              {title}
            </h1>
            
            {description && (
              <p className="font-montserrat text-oldmoney-brown/90 text-lg sm:text-xl md:text-2xl mb-6 whitespace-pre-line">
                {description}
              </p>
            )}
            
            <div className="mt-8 border-t border-oldmoney-gold/30 pt-6">
              <p className="font-playfair text-oldmoney-brown/80 text-xl italic">
                Ziv y Diego, Colegio Pequeño Sol
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Regular slide rendering
  return (
    <section
      id={id}
      className={cn(
        "slide absolute inset-0 opacity-0 pointer-events-none",
        isActive && "opacity-100 pointer-events-auto animate-fade-in",
        className
      )}
    >
      <div className="slide-content flex flex-col items-center bg-transparent">
        <div className="slide-number text-oldmoney-gold font-montserrat text-sm tracking-wider mb-2">
          {number < 10 ? `0${number}` : number}
        </div>
        <h2 className="slide-title text-oldmoney-brown font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-center px-4">
          {title}
        </h2>
        
        {/* Different layouts based on image position */}
        <div className={cn(
          "w-full flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-4",
          imagePosition === 'right' && "md:flex-row-reverse",
          imagePosition === 'center' && "flex-col"
        )}>
          <div className={cn(
            "w-full",
            imagePosition !== 'center' ? "md:w-1/2" : "max-w-3xl",
            "px-4"
          )}>
            <ImageFrame 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-44 sm:h-56 md:h-64 lg:h-72"
            />
          </div>
          
          {(description || question) && (
            <div className={cn(
              "w-full",
              imagePosition !== 'center' ? "md:w-1/2" : "max-w-2xl",
              "px-4"
            )}>
              {description && (
                <p className="slide-description text-oldmoney-brown/90 font-montserrat text-sm sm:text-base leading-relaxed text-center md:text-left mb-4">
                  {description}
                </p>
              )}
              
              {question && (
                <div className="mb-4">
                  <h3 className="font-playfair text-oldmoney-brown text-xl mb-2">Pregunta:</h3>
                  <p className="font-montserrat text-oldmoney-brown/90 italic">{question}</p>
                </div>
              )}
              
              {answer && (
                <div>
                  <h3 className="font-playfair text-oldmoney-brown text-xl mb-2">Respuesta:</h3>
                  <p className="font-montserrat text-oldmoney-brown/90">{answer}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slide;
