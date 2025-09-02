import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import heroImage from '../images/AndiShkodraHero.png'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="relative md:h-[93vh] bg-gray-50" id="home">
      <div className="container mx-auto px-4 pt-[150px] pb-12 md:py-24">
        <div className="md:flex md:items-center md:gap-12 md:justify-between">
          {/* Text Content - Added animate-fade-in-right animation */}
          <div className="text-center md:text-left mb-12 md:mb-0 md:flex-1 max-w-xl md:max-w-none mx-auto animate-fade-in-right">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Andi <span className="text-red-600">Shkodra</span>
            </h1>
            
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium mb-6">
              {t('candidate')} 2025
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => document.getElementById('platforma').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-md font-medium text-lg"
              >
                {t('hero.cta.platform')}
              </button>
              <button
                onClick={() => document.getElementById('kontakti').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-105 hover:shadow-md font-medium text-lg"
              >
                {t('hero.cta.contact')}
              </button>
            </div>
          </div>

          {/* Image Container - Added animate-slide-in-right animation */}
          <div className="md:flex-1 md:max-w-[600px] animate-slide-in-right">
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-500">
              <img
                src={heroImage}
                alt="Andi Shkodra"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero