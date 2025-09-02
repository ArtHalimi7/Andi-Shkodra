import React, { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'

const RrethMeje = () => {
  const { t } = useTranslation()
  
  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  
  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }
    
    // Initial check
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Certificate data
  const certificates = [
    {
      date: 'about.certificate1.date',
      organization: 'about.certificate1.organization',
      description: 'about.certificate1.description'
    },
    {
      date: 'about.certificate2.date',
      organization: 'about.certificate2.organization',
      description: 'about.certificate2.description'
    },
    {
      date: 'about.certificate3.date',
      organization: 'about.certificate3.organization',
      description: 'about.certificate3.description'
    },
    {
      date: 'about.certificate4.date',
      organization: 'about.certificate4.organization',
      description: 'about.certificate4.description'
    },
    {
      date: 'about.certificate5.date',
      organization: 'about.certificate5.organization',
      description: 'about.certificate5.description'
    },
    {
      date: 'about.certificate6.date',
      organization: 'about.certificate6.organization',
      description: 'about.certificate6.description'
    },
    {
      date: 'about.award1.date',
      organization: 'about.award1.organization',
      description: 'about.award1.description',
      isAward: true
    },
    {
      date: 'about.certificate7.date',
      organization: 'about.certificate7.organization',
      description: 'about.certificate7.description'
    }
  ]
  
  const totalSlides = certificates.length
  const maxSlide = totalSlides - slidesToShow
  
  const nextSlide = () => {
    setCurrentSlide(current => Math.min(current + 1, maxSlide))
  }
  
  const prevSlide = () => {
    setCurrentSlide(current => Math.max(current - 1, 0))
  }
  
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full border border-red-500 text-red-500 mb-4">
          {t('about.biography')}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t('about.title')}
        </h1>
        
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {t('about.shortDescription')}
        </p>
      </div>
      
      {/* Two-Column Content Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex-1">
          <div className="mb-8">
            <p className="mb-4">
              {t('about.paragraph1')}
            </p>
            <p className="mb-4">
              {t('about.paragraph2')}
            </p>
            <p className="mb-4">
              {t('about.paragraph3')}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t('about.keyExperiences')}</h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4 border-red-500">
                <h3 className="font-medium">{t('about.experience1.title')}</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1 mb-2">
                  {t('about.experience1.period')}
                </span>
                <p className="mt-1">{t('about.experience1.description')}</p>
              </div>
              
              <div className="relative pl-6 border-l-4 border-red-500">
                <h3 className="font-medium">{t('about.experience2.title')}</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1 mb-2">
                  {t('about.experience2.period')}
                </span>
                <p className="mt-1">{t('about.experience2.description')}</p>
              </div>
              
              <div className="relative pl-6 border-l-4 border-red-500">
                <h3 className="font-medium">{t('about.experience3.title')}</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1 mb-2">
                  {t('about.experience3.period')}
                </span>
                <p className="mt-1">{t('about.experience3.description')}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - New Section from Image */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.educationExperience')}</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12 12 0 01.665 1.192A11.952 11.952 0 0012 20.5c-5.25 0-9.637-3.366-11.298-8.072a11.944 11.944 0 01.656-1.428L12 14z" />
                </svg>
              </div>
              <div className="border-l-4 pl-4">
                <h3 className="font-medium">{t('about.education.title')}</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1">
                  {t('about.education.period')}
                </span>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="border-l-4 pl-4">
                <h3 className="font-medium">{t('about.leadership.title')}</h3>
                <p className="text-sm text-gray-500">{t('about.leadership.organization')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="border-l-4  pl-4">
                <h3 className="font-medium">{t('about.award.title')}</h3>
                <p className="text-sm text-gray-500">{t('about.award.organization')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="border-l-4 pl-4">
                <h3 className="font-medium">{t('about.experience.title')}</h3>
                <p className="text-sm text-gray-500">{t('about.experience.description')}</p>
              </div>
            </div>
          </div>
          
          {/* Statistics Section - Updated for mobile centering and hiding on mobile */}
          <div className="mt-10 space-y-6 -mx-[130px] ml-[1px] md:mx-0 hidden md:block">
            <div className="bg-red-600 text-white p-7 rounded-lg text-center shadow-md mx-auto max-w-md md:max-w-none">
              <h2 className="text-4xl font-bold mb-3">{t('about.stats.degree')}</h2>
              <p className="text-base mb-1">{t('about.stats.degreeDetails')}</p>
              <div className="my-6 border-t border-red-400 opacity-50"></div>
              <h2 className="text-4xl font-bold mb-3 mt-6">{t('about.stats.certificates.count')}</h2>
              <p className="text-base mb-1">{t('about.stats.certificates.text')}</p>
              <div className="my-6 border-t border-red-400 opacity-50"></div>
              <h2 className="text-4xl font-bold mb-3 mt-6">{t('about.stats.projects.count')}</h2>
              <p className="text-base">{t('about.stats.projects.text')}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Honours and Awards Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-red-500 text-red-500 mb-4">
            {t('about.honorsAndAwards')}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.achievementsTitle')}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {t('about.achievementsDescription')}
          </p>
        </div>
        
        {/* Slider Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold text-gray-700 hidden md:block">
            {t('about.certificatesAndAwards') || 'Certificates & Awards'}
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full border ${currentSlide === 0 ? 'text-gray-400 border-gray-200' : 'text-red-500 border-red-500 hover:bg-red-50'}`}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className={`p-2 rounded-full border ${currentSlide >= maxSlide ? 'text-gray-400 border-gray-200' : 'text-red-500 border-red-500 hover:bg-red-50'}`}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
          >
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className={`min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2 ${slidesToShow === 1 ? 'px-0' : 'px-2'}`}
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className={`border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow h-full ${cert.isAward ? 'bg-red-50' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className={`${cert.isAward ? 'bg-red-100' : 'bg-red-50'} rounded-full p-2 mr-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${cert.isAward ? 'text-red-600' : 'text-red-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {cert.isAward ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        )}
                      </svg>
                    </div>
                    <span className={`text-xs ${cert.isAward ? 'bg-red-100 text-red-600' : 'bg-red-50 text-red-500'} rounded-full border ${cert.isAward ? 'border-red-200' : 'border-red-200'} px-2 py-0.5`}>
                      {t(cert.date)}
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">{t(cert.organization)}</h3>
                  <p className={`text-sm text-gray-600 ${cert.isAward ? 'font-semibold' : ''}`}>{t(cert.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Indicator (optional) */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({length: maxSlide + 1}).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RrethMeje