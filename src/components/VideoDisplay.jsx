import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import iPhoneFrame from '../images/iphone.png' // Import the iPhone frame image

// Path to video in public folder
const videoPath = '/vid.MOV'

const VideoDisplay = ({ videoUrl = videoPath, thumbnailUrl, title }) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  
  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind is 640px
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle play/pause toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle when video ends
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  // Handle mouse events for hover state
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16" id="video">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Video Container with iPhone frame */}
        <div className="max-w-[240px] sm:max-w-[320px] mx-auto md:mx-0 animate-fade-in-up relative">
          {/* iPhone frame with video */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Video element positioned at the bottom layer */}
            <div 
              className="absolute inset-0 flex items-center justify-center" 
              style={{ zIndex: 1 }}
              onClick={isPlaying ? togglePlay : undefined}
            >
              {/* Video container with proper aspect ratio and positioning */}
              <div className="relative w-[93%] h-[97%] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  poster={thumbnailUrl}
                  className="w-full h-full object-cover"
                  onEnded={handleVideoEnd}
                  playsInline
                  controlsList="nodownload"
                />
              </div>
            </div>
            
            {/* iPhone frame image in the middle layer */}
            <img 
              src={iPhoneFrame} 
              alt="iPhone frame" 
              className="w-[280px] h-[480px] sm:w-[330px] sm:h-[600px] relative pointer-events-none"
              style={{ zIndex: 2 }}
            />
            
            {/* Play button overlay - shows only when video is not playing */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
                style={{ zIndex: 3 }}
              >
                {/* Play button */}
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{ marginLeft: '2px' }} /* Fine-tune the icon position */
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Pause button overlay - shows only when video is playing AND user is hovering AND not on mobile */}
            {isPlaying && isHovering && !isMobile && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
                style={{ zIndex: 3 }}
              >
                {/* Pause button */}
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text content on the right side */}
        <div className="md:max-w-md lg:max-w-lg mt-8 md:mt-0 text-center md:text-left animate-fade-in-up animation-delay-300">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Udhëzime për Regjistrimin e Mergimtarëve për Votim
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              Ky video demonstron procesin e regjistrimit për votuesit që jetojnë jashtë Kosovës. Ndiqni udhëzimet hap pas hapi për të siguruar të drejtën tuaj për të votuar.
            </p>
            
            <ul className="list-disc list-inside space-y-2 pl-2 text-left">
              <li>Regjistrimi online në platformën zyrtare</li>
              <li>Dokumentet e nevojshme për regjistrim</li>
              <li>Afatet e rëndësishme për aplikim</li>
              <li>Si të verifikoni statusin e aplikimit tuaj</li>
            </ul>
            
            <p className="font-medium text-base md:text-lg">
              Është thelbësore që të gjithë shqiptarët, kudo që ndodhen, të kenë mundësinë të ushtrojnë të drejtën e tyre demokratike për të votuar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;