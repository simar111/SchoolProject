import React from 'react';

const HomeAbout = () => {
  return (
    <section className="bg-[#F3F4F6] py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#FACC15]/20 rounded-full -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-[#1E3A8A]/20 rounded-full translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] animate-fade-in-up"
              aria-label="About Our School"
            >
              About <span className="text-[#FACC15]">Our School</span>
            </h2>
            <p className="text-lg text-[#1E3A8A]/80 animate-fade-in-up animation-delay-200">
              <strong>Vision:</strong> To inspire and empower the next generation of leaders through innovative education and a commitment to excellence.
            </p>
            <p className="text-lg text-[#1E3A8A]/80 animate-fade-in-up animation-delay-400">
              <strong>Mission:</strong> To provide a nurturing and inclusive environment where students thrive academically, socially, and personally, preparing them for a dynamic world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <a
                href="/admissions"
                className="bg-[#FACC15] text-[#1E3A8A] px-6 py-3 rounded-md font-medium text-lg hover:bg-[#F3F4F6] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#FACC15] focus:ring-offset-2"
                aria-label="Admissions Open"
              >
                Admissions Open
              </a>
              <a
                href="/courses"
                className="bg-transparent border-2 border-[#FACC15] text-[#FACC15] px-6 py-3 rounded-md font-medium text-lg hover:bg-[#FACC15] hover:text-[#1E3A8A] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#FACC15] focus:ring-offset-2"
                aria-label="Explore Courses"
              >
                Explore Courses
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
              <img
                src="/about-image.jpg" // Replace with your school image
                alt="School Community"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x600?text=School+Community')}
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#FACC15]/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
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
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeAbout;