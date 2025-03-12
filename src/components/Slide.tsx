
import React from 'react';
import { cn } from '../lib/utils';

interface SlideProps {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({
  id,
  number,
  title,
  subtitle,
  description,
  className,
  children,
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
      <div className="slide-content">
        <div className="slide-number">
          {number < 10 ? `0${number}` : number}
        </div>
        <h2 className="slide-title">{title}</h2>
        {subtitle && <h3 className="slide-subtitle">{subtitle}</h3>}
        {description && <p className="slide-description">{description}</p>}
        {children}
      </div>
    </section>
  );
};

export default Slide;
