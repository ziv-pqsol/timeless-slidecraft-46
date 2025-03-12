
import React, { useState, useEffect, useCallback } from 'react';
import Slide from '../components/Slide';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const totalSlides = 8;

  const slides = [
    {
      id: "slide-1",
      number: 1,
      title: "Life in the Middle Ages",
      description: "During the Middle Ages (5th to 15th century), most people lived in small villages, working as farmers under the feudal system. Daily life revolved around agriculture, religion, and community.",
      imageSrc: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      imageAlt: "Medieval landscape with castle"
    },
    {
      id: "slide-2",
      number: 2,
      title: "Feudal System",
      description: "The feudal system organized society into a hierarchy with the king at the top, followed by nobles, knights, and peasants. Lords provided land (fiefs) to vassals in exchange for loyalty and military service.",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      imageAlt: "Medieval countryside"
    },
    {
      id: "slide-3",
      number: 3,
      title: "Knights & Warfare",
      description: "Knights were mounted warriors who followed a code of chivalry. They wore heavy armor, wielded swords and lances, and participated in tournaments. Castles provided defense against enemies.",
      imageSrc: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      imageAlt: "Medieval forest path"
    },
    {
      id: "slide-4",
      number: 4,
      title: "Religion & the Church",
      description: "The Catholic Church was the dominant religious authority in medieval Europe. Monasteries preserved knowledge and provided education, while cathedrals and churches were centers of community life.",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      imageAlt: "Medieval church building"
    },
    {
      id: "slide-5",
      number: 5,
      title: "Medieval Towns & Trade",
      description: "Towns grew around castles, monasteries, and trade routes. Guilds regulated crafts and trades, while merchants traveled to fairs and markets. The Hanseatic League facilitated international trade.",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      imageAlt: "Medieval market"
    },
    {
      id: "slide-6",
      number: 6,
      title: "Education & Learning",
      description: "Education was primarily available through the Church. Universities emerged in the 12th century, teaching law, medicine, and theology. Most knowledge was preserved in hand-copied manuscripts.",
      imageSrc: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      imageAlt: "Medieval manuscript"
    },
    {
      id: "slide-7",
      number: 7,
      title: "Art & Architecture",
      description: "Romanesque and Gothic styles dominated medieval architecture, with impressive cathedrals featuring stained glass, flying buttresses, and pointed arches. Illuminated manuscripts showcased detailed artistry.",
      imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      imageAlt: "Medieval architecture"
    },
    {
      id: "slide-8",
      number: 8,
      title: "The End of the Middle Ages",
      description: "The Middle Ages ended with events like the Black Death, the Hundred Years' War, the Renaissance, and the invention of the printing press. These changes paved the way for the Early Modern Period.",
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      imageAlt: "Medieval transition"
    }
  ];

  const handlePrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const handleNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides]);

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  }, []);

  const handleKeyNavigation = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevSlide();
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
      handleNextSlide();
    } else if (e.key === 'Escape' && isFullScreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }, [handlePrevSlide, handleNextSlide, isFullScreen]);

  const handleDoubleClick = () => {
    toggleFullScreen();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    return () => {
      window.removeEventListener('keydown', handleKeyNavigation);
    };
  }, [handleKeyNavigation]);

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-oldmoney-parchment"
      onDoubleClick={handleDoubleClick}
    >
      {!isFullScreen && <Header />}
      
      <main className="relative min-h-screen">
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            id={slide.id}
            number={slide.number}
            title={slide.title}
            description={slide.description}
            imageSrc={slide.imageSrc}
            imageAlt={slide.imageAlt}
            isActive={currentSlide === index}
            className="bg-oldmoney-parchment"
          />
        ))}
      </main>

      <Navigation
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onDotClick={setCurrentSlide}
        isFullScreen={isFullScreen}
      />
    </div>
  );
};

export default Index;
