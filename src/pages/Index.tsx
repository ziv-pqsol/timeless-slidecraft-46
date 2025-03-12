
import React, { useState, useEffect, useCallback } from 'react';
import Slide from '../components/Slide';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { useIsMobile } from '../hooks/use-mobile';

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isMobile = useIsMobile();
  const totalSlides = 8;

  const slides = [
    {
      id: "slide-1",
      number: 1,
      title: "La Vida en la Edad Media",
      description: "Durante la Edad Media (siglos V al XV), la mayoría de las personas vivían en pequeñas aldeas, trabajando como agricultores bajo el sistema feudal.",
      question: "¿Cuáles eran los tres pilares más importantes de la vida diaria en la Edad Media?",
      answer: "La agricultura, la religión y la comunidad eran los tres pilares fundamentales que estructuraban la vida cotidiana durante la Edad Media.",
      imageSrc: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      imageAlt: "Paisaje medieval con castillo",
      imagePosition: "right"
    },
    {
      id: "slide-2",
      number: 2,
      title: "El Sistema Feudal",
      description: "El sistema feudal organizaba la sociedad en una jerarquía con el rey en la cima, seguido por nobles, caballeros y campesinos.",
      question: "¿Qué recibían los señores a cambio de proporcionar tierras a sus vasallos?",
      answer: "A cambio de las tierras (feudos), los señores recibían lealtad, servicio militar y otros tributos de sus vasallos, creando un sistema de obligaciones mutuas.",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      imageAlt: "Campiña medieval",
      imagePosition: "left"
    },
    {
      id: "slide-3",
      number: 3,
      title: "Caballeros y Guerra",
      description: "Los caballeros eran guerreros montados que seguían un código de caballería y usaban armaduras pesadas en batalla.",
      question: "¿Qué actividades realizaban los caballeros además de participar en batallas?",
      answer: "Además de la guerra, los caballeros participaban en torneos, protegían a sus señores, administraban tierras y seguían el código de caballería que enfatizaba el honor y la lealtad.",
      imageSrc: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      imageAlt: "Camino del bosque medieval",
      imagePosition: "center"
    },
    {
      id: "slide-4",
      number: 4,
      title: "Religión e Iglesia",
      description: "La Iglesia Católica era la autoridad religiosa dominante en la Europa medieval y tenía gran influencia en todos los aspectos de la vida.",
      question: "¿Qué papel desempeñaban los monasterios en la sociedad medieval?",
      answer: "Los monasterios preservaban el conocimiento a través de manuscritos, proporcionaban educación, atendían a los enfermos, ofrecían hospedaje a viajeros y mantenían viva la cultura clásica durante la Edad Media.",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      imageAlt: "Edificio de iglesia medieval",
      imagePosition: "right"
    },
    {
      id: "slide-5",
      number: 5,
      title: "Ciudades y Comercio",
      description: "Las ciudades crecieron alrededor de castillos, monasterios y rutas comerciales, mientras que los gremios regulaban los oficios.",
      question: "¿Cómo afectó la Liga Hanseática al comercio medieval europeo?",
      answer: "La Liga Hanseática, una alianza de ciudades mercantiles, facilitó el comercio internacional, estableció rutas comerciales seguras, estandarizó prácticas comerciales y aumentó la prosperidad de las ciudades miembros.",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      imageAlt: "Mercado medieval",
      imagePosition: "left"
    },
    {
      id: "slide-6",
      number: 6,
      title: "Educación y Conocimiento",
      description: "La educación estaba principalmente disponible a través de la Iglesia, y las universidades surgieron en el siglo XII.",
      question: "¿Qué áreas de estudio eran las principales en las primeras universidades medievales?",
      answer: "Las primeras universidades medievales se enfocaban principalmente en el derecho, la medicina y la teología, conocidas como las tres profesiones originales o facultades superiores.",
      imageSrc: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      imageAlt: "Manuscrito medieval",
      imagePosition: "center"
    },
    {
      id: "slide-7",
      number: 7,
      title: "Arte y Arquitectura",
      description: "Los estilos románico y gótico dominaron la arquitectura medieval, con impresionantes catedrales que mostraban la devoción religiosa.",
      question: "¿Qué innovaciones arquitectónicas permitieron construir catedrales góticas más altas y con más ventanas?",
      answer: "Los arbotantes, los arcos apuntados y las bóvedas de crucería fueron innovaciones clave que permitieron construir catedrales góticas más altas, con muros más delgados y grandes ventanales para los vitrales.",
      imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      imageAlt: "Arquitectura medieval",
      imagePosition: "right"
    },
    {
      id: "slide-8",
      number: 8,
      title: "El Fin de la Edad Media",
      description: "La Edad Media terminó con eventos como la Peste Negra, la Guerra de los Cien Años, el Renacimiento y la invención de la imprenta.",
      question: "¿Cómo cambió la invención de la imprenta de Gutenberg a la sociedad europea?",
      answer: "La imprenta de Gutenberg revolucionó la difusión del conocimiento al hacer los libros más accesibles, fomentó la alfabetización, aceleró la Reforma Protestante y sentó las bases para la era de la información moderna.",
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      imageAlt: "Transición medieval",
      imagePosition: "left"
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

  // Add touch swipe functionality for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      // Left swipe (next slide)
      if (touchEndX + swipeThreshold < touchStartX) {
        handleNextSlide();
      }
      // Right swipe (previous slide)
      if (touchEndX > touchStartX + swipeThreshold) {
        handlePrevSlide();
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, handleNextSlide, handlePrevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    return () => {
      window.removeEventListener('keydown', handleKeyNavigation);
    };
  }, [handleKeyNavigation]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

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
            question={slide.question}
            answer={slide.answer}
            imageSrc={slide.imageSrc}
            imageAlt={slide.imageAlt}
            isActive={currentSlide === index}
            className="bg-oldmoney-parchment"
            imagePosition={slide.imagePosition}
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
