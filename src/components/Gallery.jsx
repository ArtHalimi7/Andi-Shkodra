import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Import all images
import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpeg';
import img5 from '../images/5.jpeg';
import img6 from '../images/6.jpeg';
import img7 from '../images/7.jpeg';
import img8 from '../images/8.jpeg';
import img9 from '../images/9.jpeg';
import img10 from '../images/10.jpeg';
import img11 from '../images/11.jpeg';
import img12 from '../images/12.jpeg';
import img13 from '../images/13.jpeg';
import img14 from '../images/14.jpeg';
import img15 from '../images/15.jpeg';
import img16 from '../images/16.jpeg';
import img17 from '../images/17.jpeg';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const slideInterval = useRef(null);
  const slideContainer = useRef(null);

  // All images with their thumbnails and full-size versions
  const images = [
    { id: 1, src: img1, alt: 'Gallery image 1' },
    { id: 2, src: img2, alt: 'Gallery image 2' },
    { id: 3, src: img3, alt: 'Gallery image 3' },
    { id: 4, src: img4, alt: 'Gallery image 4' },
    { id: 5, src: img5, alt: 'Gallery image 5' },
    { id: 6, src: img6, alt: 'Gallery image 6' },
    { id: 7, src: img7, alt: 'Gallery image 7' },
    { id: 8, src: img8, alt: 'Gallery image 8' },
    { id: 9, src: img9, alt: 'Gallery image 9' },
    { id: 10, src: img10, alt: 'Gallery image 10' },
    { id: 11, src: img11, alt: 'Gallery image 11' },
    { id: 12, src: img12, alt: 'Gallery image 12' },
    { id: 13, src: img13, alt: 'Gallery image 13' },
    { id: 14, src: img14, alt: 'Gallery image 14' },
    { id: 15, src: img15, alt: 'Gallery image 15' },
    { id: 16, src: img16, alt: 'Gallery image 16' },
    { id: 17, src: img17, alt: 'Gallery image 17' },
  ];

  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Auto-advance slides
    startSlideShow();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      stopSlideShow();
    };
  }, []);

  // Start slideshow
  const startSlideShow = () => {
    stopSlideShow();
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  };

  // Stop slideshow
  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide(prev => {
      const newSlide = prev === 0 ? images.length - slidesToShow : prev - 1;
      return Math.max(0, Math.min(newSlide, images.length - slidesToShow));
    });
    stopSlideShow();
    startSlideShow();
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide(prev => {
      const newSlide = prev === images.length - slidesToShow ? 0 : prev + 1;
      return Math.max(0, Math.min(newSlide, images.length - slidesToShow));
    });
    stopSlideShow();
    startSlideShow();
  };

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    stopSlideShow();
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
    startSlideShow();
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };
  
  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-red-500 text-red-500 mb-4">
            {t('gallery.label') || 'Gallery'}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('gallery.title') || 'Photo Gallery'}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('gallery.description') || 'A collection of moments from community events, meetings, and activities.'}
          </p>
        </div>
        
        {/* Gallery Slider Controls */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-red-50 text-red-500 p-3 rounded-full shadow-md transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white hover:bg-red-50 text-red-500 p-3 rounded-full shadow-md transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Gallery Slider */}
        <div className="relative overflow-hidden mb-8" ref={slideContainer}>
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image) => (
              <div 
                key={image.id} 
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-2"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-80 md:h-96 mx-2"
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(Math.ceil(images.length / slidesToShow))].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index * slidesToShow);
                stopSlideShow();
                startSlideShow();
              }}
              className={`w-2 h-2 rounded-full ${currentSlide >= index * slidesToShow && currentSlide < (index + 1) * slidesToShow ? 'bg-red-500' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition-colors"
              onClick={prevImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-h-[80vh] max-w-[90vw] relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-h-[80vh] max-w-[90vw] object-contain"
              />
            </div>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition-colors"
              onClick={nextImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    
  );
};

export default Gallery;