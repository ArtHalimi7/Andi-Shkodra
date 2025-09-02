import React from 'react'
import mottoBg from '../images/mottobg.jpeg'

const Motto = () => {
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
              Përkushtim ndaj Komunitetit
            </h2>
            
            <p className="text-gray-100 mb-6 sm:text-lg max-w-3xl mx-auto">
              Besoj se së bashku mund të ndërtojmë një komunitet më të fortë, më transparent dhe më të
              përfshirë. Çdo vendim do të merret duke iu konsultuar me ju, qytetarët, sepse ju jeni ata që e dini
              më mirë se çfarë i duhet komunitetit tonë.
            </p>
            
            <p className="text-red-300 font-medium text-xl sm:text-2xl italic">
              "Së bashku për një të ardhme më të mirë"
            </p>
          </div>
        </div>
      </div>
  )
}

export default Motto