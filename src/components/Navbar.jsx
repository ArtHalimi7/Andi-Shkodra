import React, { useState, useEffect } from 'react'
import logo from "../images/vvlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    const sections = ['home', 'rreth-meje', 'platforma', 'kontakti'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset for the navbar height
      const navbarHeight = 80; // height of navbar (h-20 = 80px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Vetëvendosje Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold text-red-600">Andi Shkodra</span>
              <div className="text-sm text-gray-600">Kandidat për Kuvendin Komunal</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('rreth-meje')}
                className={`px-3 py-2 text-sm font-medium relative group ${
                  activeSection === 'rreth-meje' ? 'text-red-600' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>Rreth meje</span>
                <span className={`absolute bottom-1.5 left-3 h-0.5 bg-red-600 transition-all duration-300 ${
                  activeSection === 'rreth-meje' ? 'w-[calc(100%-24px)]' : 'w-0 group-hover:w-[calc(100%-24px)]'
                }`}></span>
              </button>
              <button
                onClick={() => scrollToSection('platforma')}
                className={`px-3 py-2 text-sm font-medium relative group ${
                  activeSection === 'platforma' ? 'text-red-600' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>Platforma</span>
                <span className={`absolute bottom-1.5 left-3 h-0.5 bg-red-600 transition-all duration-300 ${
                  activeSection === 'platforma' ? 'w-[calc(100%-24px)]' : 'w-0 group-hover:w-[calc(100%-24px)]'
                }`}></span>
              </button>
              <button
                onClick={() => scrollToSection('kontakti')}
                className={`px-3 py-2 text-sm font-medium relative group ${
                  activeSection === 'kontakti' ? 'text-red-600' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>Kontakti</span>
                <span className={`absolute bottom-1.5 left-3 h-0.5 bg-red-600 transition-all duration-300 ${
                  activeSection === 'kontakti' ? 'w-[calc(100%-24px)]' : 'w-0 group-hover:w-[calc(100%-24px)]'
                }`}></span>
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

      {/* Mobile menu overlay */}
      <div 
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu */}
      <div 
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 h-screen w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <div className="ml-2">
              <div className="text-lg font-semibold text-red-600">Andi Shkodra</div>
              <div className="text-xs text-gray-600">Kandidat për Kuvendin Komunal</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu links */}
        <div className="px-2 py-4">
          <button
            onClick={() => scrollToSection('rreth-meje')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 mb-2 relative group ${
              activeSection === 'rreth-meje' ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Rreth meje
            </div>
            <span className={`absolute bottom-0 left-4 h-0.5 bg-red-600 transition-all duration-300 ${
              activeSection === 'rreth-meje' ? 'w-[calc(100%-32px)]' : 'w-0 group-hover:w-[calc(100%-32px)]'
            }`}></span>
          </button>
          <button
            onClick={() => scrollToSection('platforma')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 mb-2 relative group ${
              activeSection === 'platforma' ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Platforma
            </div>
            <span className={`absolute bottom-0 left-4 h-0.5 bg-red-600 transition-all duration-300 ${
              activeSection === 'platforma' ? 'w-[calc(100%-32px)]' : 'w-0 group-hover:w-[calc(100%-32px)]'
            }`}></span>
          </button>
          <button
            onClick={() => scrollToSection('kontakti')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 relative group ${
              activeSection === 'kontakti' ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kontakti
            </div>
            <span className={`absolute bottom-0 left-4 h-0.5 bg-red-600 transition-all duration-300 ${
              activeSection === 'kontakti' ? 'w-[calc(100%-32px)]' : 'w-0 group-hover:w-[calc(100%-32px)]'
            }`}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar