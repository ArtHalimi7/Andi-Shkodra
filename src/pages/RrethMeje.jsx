import React from 'react'

const RrethMeje = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full border border-red-500 text-red-500 mb-4">
          Biografia
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Rreth Meje
        </h1>
        
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Student i pasionuar i shkencave politike me përvojë në udhëheqje, koordinim ekipor dhe fuqizim të rinisë.
        </p>
      </div>
      
      {/* Two-Column Content Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex-1">
          <div className="mb-8">
            <p className="mb-4">
              Jam student i shkencave politike me pasion për udhëheqjen, koordinimin e ekipit dhe fuqizimin e rinisë. Si kryetar i një organizate rinore, kam fituar përvojë të vlefshme në menaxhimin e projekteve, avokatimin dhe fjalimin publik.
            </p>
            <p className="mb-4">
              Jam i përkushtuar ndaj krijimit të një ndikimi pozitiv në shoqëri dhe jam duke kërkuar mundësi që më lejojnë të rritem si udhëheqës duke kontribuar në iniciativa me kuptim.
            </p>
            <p className="mb-4">
              Përmes punës sime në Zyrën e Çështjeve Studentore në UBT dhe udhëheqjes së organizatës "Fuqia e Bashkimit Rinor", kam zhvilluar aftësi të forta organizative dhe komunikuese.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Përvojat Kryesore</h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4 border-red-500">
                <h3 className="font-medium">Student Affairs Office - UBT</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1 mb-2">
                  Prill 2024 - Aktual
                </span>
                <p className="mt-1">Mbikëqyrja e implementimit të planit të rekrutimit dhe strategjisë së regjistrimit të studentëve.</p>
              </div>
              
              <div className="relative pl-6 border-l-4 border-red-500">
                <h3 className="font-medium">Kryetar i 'Fuqia e Bashkimit Rinor'</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1 mb-2">
                  Shkurt 2020 - Aktual
                </span>
                <p className="mt-1">Udhëheqja e organizatës rinore dhe koordinimi i projekteve arsimore, kulturore dhe sportive.</p>
              </div>
              
              <div className="relative pl-6 border-l-4 border-red-500">
                <h3 className="font-medium">Vullnetar #SkaMaLehte</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1 mb-2">
                  Mars - Nëntor 2020
                </span>
                <p className="mt-1">Mbështetja e studentëve gjatë pandemisë COVID-19 në bashkëpunim me Ambasadën Japoneze.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - New Section from Image */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-center">Arsimimi & Përvojat</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12 12 0 01.665 1.192A11.952 11.952 0 0012 20.5c-5.25 0-9.637-3.366-11.298-8.072a11.944 11.944 0 01.656-1.428L12 14z" />
                </svg>
              </div>
              <div className="border-l-4 pl-4">
                <h3 className="font-medium">Shkenca Politike - UBT</h3>
                <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-500 rounded-full border border-red-200 mt-1">
                  Tetor 2022 - Aktual
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
                <h3 className="font-medium">Kryetar Organizate</h3>
                <p className="text-sm text-gray-500">Fuqia e Bashkimit Rinor</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="border-l-4  pl-4">
                <h3 className="font-medium">Vullnetar i Vitit</h3>
                <p className="text-sm text-gray-500">LIZA-R 2022</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="border-l-4 pl-4">
                <h3 className="font-medium">5+ Vite Përvojë</h3>
                <p className="text-sm text-gray-500">Udhëheqje dhe Koordinim</p>
              </div>
            </div>
          </div>
          
          {/* Statistics Section - Updated for mobile centering */}
          <div className="mt-10 space-y-6 -mx-[130px] ml-[1px] md:mx-0">
            <div className="bg-red-600 text-white p-7 rounded-lg text-center shadow-md mx-auto max-w-md md:max-w-none">
              <h2 className="text-4xl font-bold mb-3">Bachelor</h2>
              <p className="text-base mb-1">Shkenca Politike - UBT</p>
              <div className="my-6 border-t border-red-400 opacity-50"></div>
              <h2 className="text-4xl font-bold mb-3 mt-6">8+</h2>
              <p className="text-base mb-1">Çertifikata & Trajnime</p>
              <div className="my-6 border-t border-red-400 opacity-50"></div>
              <h2 className="text-4xl font-bold mb-3 mt-6">10+</h2>
              <p className="text-base">Projekte të Realizuara</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RrethMeje