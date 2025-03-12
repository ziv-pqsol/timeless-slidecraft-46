
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Bookmark } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-oldmoney-cream paper-texture p-6">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8 inline-flex items-center">
          <Bookmark className="w-6 h-6 text-oldmoney-gold mr-2" />
          <span className="font-playfair text-oldmoney-navy text-xl font-medium">Heritage</span>
        </div>
        
        <h1 className="text-6xl font-playfair font-bold text-oldmoney-navy mb-4">404</h1>
        <div className="h-0.5 w-16 bg-oldmoney-gold mx-auto mb-6"></div>
        
        <p className="text-xl font-playfair text-oldmoney-navy/90 mb-8">
          We regret to inform you that the page you seek cannot be found.
        </p>
        
        <a 
          href="/" 
          className="inline-block px-8 py-3 border-2 border-oldmoney-gold text-oldmoney-navy font-montserrat text-sm tracking-wider font-medium transition-all duration-300 hover:bg-oldmoney-gold hover:text-oldmoney-cream"
        >
          RETURN TO HOME
        </a>
      </div>
    </div>
  );
};

export default NotFound;
