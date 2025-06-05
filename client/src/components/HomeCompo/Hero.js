import React, { useEffect, useState } from 'react';

const Hero = () => {
  const phrases = ['Inspire', 'Innovate', 'Succeed'];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation with cycling phrases
  useEffect(() => {
    const currentText = phrases[currentPhrase];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.slice(0, index + 1));
        setIndex(index + 1);
        if (index === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentText.slice(0, index - 1));
        setIndex(index - 1);
        if (index === 0) {
          setIsDeleting(false);
          setCurrentPhrase((currentPhrase + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, currentPhrase, phrases]);

  return (
    <section className="relative bg-[#F3F4F6] dark:bg-gray-900 min-h-[90vh] flex items-center justify-center overflow-hidden py-12">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FACC15]/20 dark:bg-[#FACC15]/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#1E3A8A]/20 dark:bg-[#1E3A8A]/10 rounded-full translate-x-24 translate-y-24"></div>
      <svg
        className="absolute top-10 right-10 w-24 h-24 text-[#FACC15] dark:text-[#FACC15]/70 animate-spin-slow"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path stroke="currentColor" strokeWidth="0.5" d="M12 2a10 10 0 110 20 10 10 0 010-20" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] dark:text-gray-200 mb-6 animate-fade-in-up"
            aria-label="Welcome to Our School"
          >
            Welcome to <span className="text-[#FACC15]">Our School</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#1E3A8A] dark:text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
            Where We <span className="font-semibold text-[#FACC15]">{text}</span>
            <span className="animate-blink">|</span>
          </p>
          <p className="text-lg sm:text-xl text-[#1E3A8A]/80 dark:text-gray-400 mb-8 animate-fade-in-up animation-delay-400">
            Join a community dedicated to excellence, innovation, and shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
            <a
              href="/apply"
              className="bg-[#FACC15] text-[#1E3A8A] dark:bg-gray-700 dark:text-[#FACC15] px-6 py-3 rounded-md font-medium text-lg hover:bg-[#F3F4F6] dark:hover:bg-gray-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#FACC15] focus:ring-offset-2"
              aria-label="Apply Now"
            >
              Apply Now
            </a>
            <a
              href="/learn-more"
              className="bg-transparent border-2 border-[#FACC15] text-[#FACC15] dark:text-gray-200 px-6 py-3 rounded-md font-medium text-lg hover:bg-[#FACC15] hover:text-[#1E3A8A] dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#FACC15] focus:ring-offset-2"
              aria-label="Learn More"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
            <img
              src="/school-image.jpg" // Replace with your school image
              alt="School Community"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              onError={(e) => (e.target.src = 'https://thumbs.dreamstime.com/b/cute-boy-holding-book-education-concept-isolated-over-white-40691506.jpg')}
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#FACC15]/30 dark:bg-[#FACC15]/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <svg
          className="w-8 h-8 text-[#FACC15] dark:text-gray-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;