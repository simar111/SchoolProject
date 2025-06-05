import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // Close dropdown when toggling mobile menu
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#1E3A8A] dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="transition-transform hover:scale-105">
              <img
                src="/logo.png" // Replace with your school's logo path
                alt="School Logo"
                className="h-10 w-auto"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50?text=School+Logo')}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/about"
              className="text-[#F3F4F6] dark:text-gray-200 hover:text-[#FACC15] transition-colors duration-200 transform hover:scale-105"
              aria-label="About page"
            >
              About
            </a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-[#F3F4F6] dark:text-gray-200 hover:text-[#FACC15] transition-colors duration-200 transform hover:scale-105 focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Academics
                <svg
                  className="inline-block w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-[#F3F4F6] dark:bg-gray-700 rounded-md shadow-lg z-10">
                  <a
                    href="/programs"
                    className="block px-4 py-2 text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] transition-colors duration-200"
                  >
                    Programs
                  </a>
                  <a
                    href="/faculty"
                    className="block px-4 py-2 text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] transition-colors duration-200"
                  >
                    Faculty
                  </a>
                </div>
              )}
            </div>
            <a
              href="/admissions"
              className="text-[#F3F4F6] dark:text-gray-200 hover:text-[#FACC15] transition-colors duration-200 transform hover:scale-105"
              aria-label="Admissions page"
            >
              Admissions
            </a>
            <a
              href="/contact"
              className="text-[#F3F4F6] dark:text-gray-200 hover:text-[#FACC15] transition-colors duration-200 transform hover:scale-105"
              aria-label="Contact page"
            >
              Contact
            </a>
            <a
              href="/apply"
              className="bg-[#FACC15] text-[#1E3A8A] px-4 py-2 rounded-md font-medium hover:bg-[#F3F4F6] dark:hover:bg-gray-600 hover:shadow-md transition-all duration-200 transform hover:scale-105"
              aria-label="Apply now"
            >
              Apply Now
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-[#F3F4F6] hover:text-[#FACC15] focus:outline-none transition-colors duration-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#F3F4F6] hover:text-[#FACC15] focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F3F4F6] dark:bg-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/about"
              className="block text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] px-3 py-2 rounded-md"
            >
              About
            </a>
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] px-3 py-2 rounded-md"
              >
                Academics
                <svg
                  className="inline-block w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <a
                    href="/programs"
                    className="block text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] px-3 py-2 rounded-md"
                  >
                    Programs
                  </a>
                  <a
                    href="/faculty"
                    className="block text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] px-3 py-2 rounded-md"
                  >
                    Faculty
                  </a>
                </div>
              )}
            </div>
            <a
              href="/admissions"
              className="block text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] px-3 py-2 rounded-md"
            >
              Admissions
            </a>
            <a
              href="/contact"
              className="block text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] px-3 py-2 rounded-md"
            >
              Contact
            </a>
            <a
              href="/apply"
              className="block bg-[#FACC15] text-[#1E3A8A] px-3 py-2 rounded-md font-medium hover:bg-[#1E3A8A] hover:text-[#F3F4F6] transition-all duration-200"
            >
              Apply Now
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full text-left text-[#1E3A8A] dark:text-gray-200 hover:bg-[#FACC15] hover:text-[#1E3A8A] px-3 py-2 rounded-md"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;