import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import mottoBg from '../images/mottobg.jpeg'

const Motto = () => {
  const { t } = useTranslation()
  
  return (
      <div className="my-12 sm:my-16 w-full mx-auto">
        <div 
          className="p-6 sm:p-10 text-center relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mottoBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t('motto.title')}
            </h2>
            
            <p className="text-gray-100 mb-6 sm:text-lg max-w-3xl mx-auto">
              {t('motto.description')}
            </p>
            
            <p className="text-red-300 font-medium text-xl sm:text-2xl italic">
              "{t('motto.quote')}"
            </p>
          </div>
        </div>
      </div>
  )
}

export default Motto