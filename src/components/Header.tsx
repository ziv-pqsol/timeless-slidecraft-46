
import React from 'react';
import { Bookmark } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Bookmark className="w-5 h-5 text-oldmoney-gold mr-2" />
        <span className="font-playfair text-oldmoney-navy text-lg font-medium">Heritage</span>
      </div>
      <div className="text-xs md:text-sm font-montserrat text-oldmoney-navy/70 tracking-wider">
        TIMELESS ELEGANCE
      </div>
    </header>
  );
};

export default Header;
