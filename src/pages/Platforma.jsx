import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

const Platforma = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-20 px-4" id="platforma">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">{t('platform.title')}</h1>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('platform.subtitle')}</h2>
          <div className="prose max-w-none">
            {/* Add your platform content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platforma
