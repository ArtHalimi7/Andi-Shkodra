import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            {/* You can replace the text with an actual logo image */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">Logo</span>
            </div>
            <div className="ml-4">
              <span className="text-xl font-semibold">Name</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('rreth-meje')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Rreth meje
              </button>
              <button
                onClick={() => scrollToSection('platforma')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Platforma
              </button>
              <button
                onClick={() => scrollToSection('kontakti')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Kontakti
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => scrollToSection('rreth-meje')}
            className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Rreth meje
          </button>
          <button
            onClick={() => scrollToSection('platforma')}
            className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Platforma
          </button>
          <button
            onClick={() => scrollToSection('kontakti')}
            className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Kontakti
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar