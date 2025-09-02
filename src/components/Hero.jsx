import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="text-2xl font-semibold text-red-600">
          {t('welcome')}
        </div>
      </div>
    </div>
  )
}

export default Hero