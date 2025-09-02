import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Timeline = () => {
  const { t } = useTranslation();

  // Timeline data
  const timelineEvents = [
    {
      year: '2025',
      title: 'timeline.event1.title',
      description: 'timeline.event1.description',
    },
    {
      year: '2021',
      title: 'timeline.event2.title',
      description: 'timeline.event2.description',
    },
    {
      year: '2020',
      title: 'timeline.event3.title',
      description: 'timeline.event3.description',
    },
    {
      year: '2019',
      title: 'timeline.event4.title',
      description: 'timeline.event4.description',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-red-500 text-red-500 mb-4">
            {t('timeline.label')}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('timeline.title')}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('timeline.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-8 relative">
              {/* Timeline connector */}
              <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-1 bg-red-200 -z-10">
                {index === timelineEvents.length - 1 ? null : (
                  <div className="h-full"></div>
                )}
              </div>
              
              {/* Year */}
              <div className="md:w-60 mb-4 md:mb-0 flex md:justify-end md:pr-10 items-start">
                <div className="bg-red-600 text-white text-xl font-bold px-4 py-2 rounded-md shadow">
                  {event.year}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 relative pl-6 md:pl-10">
                {/* Circle connector */}
                <div className="absolute left-0 md:left-[-8px] top-3 w-3 h-3 rounded-full bg-red-500 border-4 border-red-100"></div>
                
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{t(event.title)}</h3>
                  <p className="text-gray-600">{t(event.description)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
