
import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ImageFrame from '../components/ImageFrame';
import { Book, Crown, Shield, ScrollText } from 'lucide-react';

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleKeyNavigation = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevSlide();
    } else if (e.key === 'ArrowRight') {
      handleNextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    return () => {
      window.removeEventListener('keydown', handleKeyNavigation);
    };
  }, [currentSlide]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      
      <main className="relative min-h-screen">
        {/* Slide 1: Introduction */}
        <Slide
          id="slide-1"
          number={1}
          title="Timeless Elegance"
          subtitle="A Heritage of Sophistication"
          description="Discover the refined art of classic design principles that have stood the test of time, embodying grace, quality, and understated luxury."
          isActive={currentSlide === 0}
          className="bg-oldmoney-cream"
        >
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ImageFrame 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Classic landscape with deer" 
              className="w-full h-80 md:h-96"
            />
            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-3">
                <Crown className="w-5 h-5 text-oldmoney-gold" />
                <p className="font-montserrat text-oldmoney-navy">Refined aesthetics</p>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-oldmoney-gold" />
                <p className="font-montserrat text-oldmoney-navy">Time-honored quality</p>
              </div>
              <div className="flex items-center space-x-3">
                <Book className="w-5 h-5 text-oldmoney-gold" />
                <p className="font-montserrat text-oldmoney-navy">Heritage craftsmanship</p>
              </div>
              <div className="flex items-center space-x-3">
                <ScrollText className="w-5 h-5 text-oldmoney-gold" />
                <p className="font-montserrat text-oldmoney-navy">Storied tradition</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 2: Heritage */}
        <Slide
          id="slide-2"
          number={2}
          title="A Distinguished Legacy"
          subtitle="Centuries of Excellence"
          description="Our approach draws from generations of refinement, creating spaces and experiences that honor tradition while embracing timeless modernity."
          isActive={currentSlide === 1}
          className="bg-oldmoney-cream"
        >
          <div className="mt-8 w-full">
            <ImageFrame 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000&h=600" 
              alt="Heritage landscape" 
              className="w-full h-80 md:h-96"
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-oldmoney-parchment p-6 border border-oldmoney-gold/20">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-3">Established 1887</h4>
                <p className="text-oldmoney-navy/80 text-sm">Founded on principles of exceptional quality and meticulous attention to detail.</p>
              </div>
              <div className="bg-oldmoney-parchment p-6 border border-oldmoney-gold/20">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-3">Artisanal Methods</h4>
                <p className="text-oldmoney-navy/80 text-sm">Preserving traditional techniques that have been perfected over generations.</p>
              </div>
              <div className="bg-oldmoney-parchment p-6 border border-oldmoney-gold/20">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-3">Timeless Standards</h4>
                <p className="text-oldmoney-navy/80 text-sm">Committed to enduring excellence that transcends fleeting trends.</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 3: Design Philosophy */}
        <Slide
          id="slide-3"
          number={3}
          title="Design Philosophy"
          subtitle="The Art of Refined Restraint"
          description="Our aesthetic celebrates the beauty of balance, proportion, and the subtle power of understated elegance."
          isActive={currentSlide === 2}
          className="bg-oldmoney-cream"
        >
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left order-2 md:order-1">
              <div className="mb-8">
                <p className="text-oldmoney-navy/80 italic font-playfair text-lg mb-4">
                  "True elegance lies not in the grand statement, but in the perfectly considered detail."
                </p>
                <div className="h-0.5 w-12 bg-oldmoney-gold"></div>
              </div>
              <p className="text-oldmoney-navy/90 leading-relaxed">
                Our design approach is rooted in classical proportions and the belief that enduring style speaks in a measured voice. We embrace negative space, thoughtful symmetry, and materials that develop character with age.
              </p>
              <p className="text-oldmoney-navy/90 leading-relaxed">
                Each element is selected not merely for immediate impact, but for how it contributes to a coherent whole that will remain relevant for generations.
              </p>
            </div>
            <ImageFrame 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Elegant landscape with mountains" 
              className="w-full h-80 md:h-96 order-1 md:order-2"
            />
          </div>
        </Slide>

        {/* Slide 4: Materials */}
        <Slide
          id="slide-4"
          number={4}
          title="Noble Materials"
          subtitle="The Foundations of Quality"
          description="We select only the finest materials that possess inherent beauty and develop character with age."
          isActive={currentSlide === 3}
          className="bg-oldmoney-cream"
        >
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full bg-[#8B6C42] mb-4 flex items-center justify-center shadow-inner border border-oldmoney-gold/30">
                <span className="font-playfair text-oldmoney-cream text-lg">Wood</span>
              </div>
              <p className="text-center text-oldmoney-navy/80 text-sm">Aged oak, walnut, and mahogany with rich patinas</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full bg-[#B2946C] mb-4 flex items-center justify-center shadow-inner border border-oldmoney-gold/30">
                <span className="font-playfair text-oldmoney-cream text-lg">Brass</span>
              </div>
              <p className="text-center text-oldmoney-navy/80 text-sm">Unlacquered brass fixtures that develop natural character</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full bg-[#F3F1E7] mb-4 flex items-center justify-center shadow-inner border border-oldmoney-gold/30">
                <span className="font-playfair text-oldmoney-navy text-lg">Linen</span>
              </div>
              <p className="text-center text-oldmoney-navy/80 text-sm">Natural fibers in muted, sophisticated tones</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full bg-[#3F4540] mb-4 flex items-center justify-center shadow-inner border border-oldmoney-gold/30">
                <span className="font-playfair text-oldmoney-cream text-lg">Marble</span>
              </div>
              <p className="text-center text-oldmoney-navy/80 text-sm">Veined stone with timeless elegance</p>
            </div>
          </div>
          <div className="mt-12 w-full">
            <ImageFrame 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=400" 
              alt="Serene landscape" 
              className="w-full h-40 md:h-52"
            />
          </div>
        </Slide>

        {/* Slide 5: Color Theory */}
        <Slide
          id="slide-5"
          number={5}
          title="A Refined Palette"
          subtitle="The Language of Color"
          description="Our color philosophy embraces the subtle power of understated hues that create atmosphere rather than demand attention."
          isActive={currentSlide === 4}
          className="bg-oldmoney-cream"
        >
          <div className="mt-8 w-full space-y-8">
            <div className="grid grid-cols-5 gap-3 w-full">
              <div className="h-24 bg-oldmoney-navy rounded-sm shadow-sm"></div>
              <div className="h-24 bg-oldmoney-green rounded-sm shadow-sm"></div>
              <div className="h-24 bg-oldmoney-gold rounded-sm shadow-sm"></div>
              <div className="h-24 bg-oldmoney-cream rounded-sm shadow-sm border border-oldmoney-navy/10"></div>
              <div className="h-24 bg-oldmoney-brown rounded-sm shadow-sm"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-oldmoney-navy text-oldmoney-cream">
                <h4 className="font-playfair text-xl mb-2">Deep Tones</h4>
                <p className="text-sm opacity-80">Substantial hues anchor spaces with gravitas and timeless presence.</p>
              </div>
              <div className="p-5 bg-oldmoney-parchment text-oldmoney-navy border border-oldmoney-gold/20">
                <h4 className="font-playfair text-xl mb-2">Neutrals</h4>
                <p className="text-sm opacity-80">Sophisticated canvases that allow textures and details to speak clearly.</p>
              </div>
              <div className="p-5 bg-oldmoney-gold text-oldmoney-navy">
                <h4 className="font-playfair text-xl mb-2">Accents</h4>
                <p className="text-sm opacity-80">Judicious highlights that provide warmth and measured opulence.</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 6: Typography */}
        <Slide
          id="slide-6"
          number={6}
          title="Typography"
          subtitle="The Voice of Heritage"
          description="Our typographic approach balances classic serif elegance with clear modern communication."
          isActive={currentSlide === 5}
          className="bg-oldmoney-cream"
        >
          <div className="mt-10 w-full space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-playfair text-oldmoney-navy text-4xl mb-2">Playfair Display</h3>
                <p className="text-oldmoney-navy/80 text-sm mb-4">Our primary serif typeface for headlines and important statements.</p>
                <div className="space-y-3">
                  <p className="font-playfair text-oldmoney-navy text-3xl font-normal">Regular Weight</p>
                  <p className="font-playfair text-oldmoney-navy text-3xl font-medium">Medium Weight</p>
                  <p className="font-playfair text-oldmoney-navy text-3xl font-bold">Bold Weight</p>
                  <p className="font-playfair text-oldmoney-navy text-3xl font-normal italic">Italic Style</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-montserrat text-oldmoney-navy text-4xl mb-2">Montserrat</h3>
                <p className="text-oldmoney-navy/80 text-sm mb-4">Our supporting sans-serif for clarity and modern balance.</p>
                <div className="space-y-3">
                  <p className="font-montserrat text-oldmoney-navy text-xl font-light">Light Weight</p>
                  <p className="font-montserrat text-oldmoney-navy text-xl font-normal">Regular Weight</p>
                  <p className="font-montserrat text-oldmoney-navy text-xl font-medium">Medium Weight</p>
                  <p className="font-montserrat text-oldmoney-navy text-xl font-bold">Bold Weight</p>
                </div>
              </div>
            </div>
            <div className="border-t border-oldmoney-gold/30 pt-8">
              <p className="font-playfair text-oldmoney-navy/90 text-lg md:text-xl italic text-center">
                "Typography is the art of arranging type to make language visible."
              </p>
            </div>
          </div>
        </Slide>

        {/* Slide 7: Texture & Detail */}
        <Slide
          id="slide-7"
          number={7}
          title="Texture & Detail"
          subtitle="The Tactile Experience"
          description="We believe that true luxury is experienced through the senses, especially touch and the subtle play of light across textured surfaces."
          isActive={currentSlide === 6}
          className="bg-oldmoney-cream"
        >
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <ImageFrame 
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Architectural details" 
              className="w-full h-80 md:h-96"
            />
            <div className="space-y-6">
              <div className="p-5 border border-oldmoney-gold/30 bg-oldmoney-parchment">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-2">Natural Variation</h4>
                <p className="text-oldmoney-navy/80 text-sm">We celebrate the unique qualities inherent in natural materials—the grain of wood, the veining of marble, the slub of silk.</p>
              </div>
              <div className="p-5 border border-oldmoney-gold/30 bg-oldmoney-parchment">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-2">Patina & Age</h4>
                <p className="text-oldmoney-navy/80 text-sm">Rather than hiding signs of age, we honor materials that develop character over time, telling the story of their use.</p>
              </div>
              <div className="p-5 border border-oldmoney-gold/30 bg-oldmoney-parchment">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-2">Layered Complexity</h4>
                <p className="text-oldmoney-navy/80 text-sm">Our designs reveal themselves gradually, offering new details to discover upon each encounter.</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 8: Conclusion */}
        <Slide
          id="slide-8"
          number={8}
          title="Timeless Principles"
          subtitle="The Foundation of Lasting Design"
          description="Our approach is guided by fundamental principles that transcend trends and create enduring beauty."
          isActive={currentSlide === 7}
          className="bg-oldmoney-cream"
        >
          <div className="mt-10 w-full space-y-10">
            <ImageFrame 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=1200&h=500" 
              alt="Elegant interior" 
              className="w-full h-64 md:h-72"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 border-t-2 border-oldmoney-gold/50">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-3">Balance</h4>
                <p className="text-oldmoney-navy/80 text-sm text-center">The harmonious arrangement of elements to create visual equilibrium and stability.</p>
              </div>
              <div className="flex flex-col items-center p-6 border-t-2 border-oldmoney-gold/50">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-3">Proportion</h4>
                <p className="text-oldmoney-navy/80 text-sm text-center">The relationship between elements creating rhythm and harmony within the whole.</p>
              </div>
              <div className="flex flex-col items-center p-6 border-t-2 border-oldmoney-gold/50">
                <h4 className="font-playfair text-oldmoney-navy text-xl mb-3">Authenticity</h4>
                <p className="text-oldmoney-navy/80 text-sm text-center">The truthful expression of materials and craftsmanship without pretense.</p>
              </div>
            </div>
            <div className="text-center pt-6">
              <p className="font-playfair text-oldmoney-navy/90 text-lg italic">
                "Elegance is the only beauty that never fades."
              </p>
              <p className="font-montserrat text-oldmoney-navy/70 text-sm mt-2">
                — Audrey Hepburn
              </p>
            </div>
          </div>
        </Slide>
      </main>

      <Navigation
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onDotClick={setCurrentSlide}
      />
    </div>
  );
};

export default Index;
