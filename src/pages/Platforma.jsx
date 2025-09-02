import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

const PlatformItem = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 transition-all hover:shadow-md">
      <div className="flex flex-col items-center">
        <div className="bg-red-100 rounded-full p-3 sm:p-4">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 text-center">{description}</p>
      </div>
    </div>
  )
}

const Platforma = () => {
  const { t } = useTranslation()

  const platformItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Infrastruktura Urbane",
      description: "Përmirësim i rrugëve, sistemit të ujësjellësit dhe ndriçimit publik për një jetë më të mirë."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Transparenca dhe Pjesëmarrja",
      description: "Vendimmarrje transparente dhe rritje e pjesëmarrjes së qytetarëve në proceset vendore."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Mjedisi dhe Qëndrueshmëria",
      description: "Mbrojtja e mjedisit dhe zhvillimi i qëndrueshëm për brezat e ardhshëm."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12 12 0 01.665 1.192A11.952 11.952 0 0012 20.5c-5.25 0-9.637-3.366-11.298-8.072a11.944 11.944 0 01.656-1.428L12 14z" />
        </svg>
      ),
      title: "Arsimi dhe Rinia",
      description: "Përkrahje për arsimin cilësor dhe krijimi i mundësive për të rinjtë."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Shëndetësia dhe Mirëqenia",
      description: "Përmirësim i shërbimeve shëndetësore dhe mbështetje për grupet në nevojë."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Ekonomia Lokale",
      description: "Promovimi i bizneseve lokale dhe krijimi i vendeve të reja të punës."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10 sm:py-16" id="platforma">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-block px-3 py-1 rounded-full border border-red-500 text-red-500 text-sm mb-4">
          Platforma
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Platforma Ime
        </h1>
        
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
          Prioritetet e mia për zhvillimin e komunitetit tonë dhe krijimin e një të ardhmeje më të mirë për të gjithë
        </p>
      </div>
      
      {/* Platform Items Grid - Updated for mobile stacking */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {platformItems.map((item, index) => (
          <PlatformItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      
      {/* Motto Showcase - New Section */}
      <div className="my-12 sm:my-16 max-w-5xl mx-auto">
        <div className="bg-red-50 rounded-lg p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Përkushtim ndaj Komunitetit
          </h2>
          
          <p className="text-gray-700 mb-6 sm:text-lg max-w-3xl mx-auto">
            Besoj se së bashku mund të ndërtojmë një komunitet më të fortë, më transparent dhe më të
            përfshirë. Çdo vendim do të merret duke iu konsultuar me ju, qytetarët, sepse ju jeni ata që e dini
            më mirë se çfarë i duhet komunitetit tonë.
          </p>
          
          <p className="text-red-600 font-medium text-xl sm:text-2xl italic">
            "Së bashku për një të ardhme më të mirë"
          </p>
        </div>
      </div>
    </div>
  )
}

export default Platforma
