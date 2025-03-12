
import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageFrame: React.FC<ImageFrameProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("image-frame relative", className)}>
      <div 
        className={cn(
          "absolute inset-0 bg-oldmoney-cream animate-pulse", 
          isLoaded && "opacity-0 transition-opacity duration-700"
        )}
      />
      <img 
        src={src} 
        alt={alt} 
        className={cn(
          "w-full h-full object-cover transition-opacity duration-700",
          !isLoaded && "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageFrame;
