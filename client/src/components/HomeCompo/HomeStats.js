import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#F3F4F6] py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#FACC15]/20 rounded-full -translate-x-12 -translate-y-12 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-[#1E3A8A]/20 rounded-full translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-12 animate-fade-in-up"
          aria-label="Our Achievements"
        >
          Our <span className="text-[#FACC15]">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Stat Card: Number of Students */}
          <div
            className="bg-white border border-[#1E3A8A]/10 rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-200"
            aria-label="Number of Students"
          >
            <svg
              className="w-12 h-12 mx-auto mb-4 text-[#FACC15]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="text-4xl font-bold text-[#1E3A8A] mb-2">1,500+</h3>
            <p className="text-[#1E3A8A]/80">Students Enrolled</p>
          </div>

          {/* Stat Card: Years of Excellence */}
          <div
            className="bg-white border border-[#1E3A8A]/10 rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
            aria-label="Years of Excellence"
          >
            <svg
              className="w-12 h-12 mx-auto mb-4 text-[#FACC15]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-4xl font-bold text-[#1E3A8A] mb-2">50</h3>
            <p className="text-[#1E3A8A]/80">Years of Excellence</p>
          </div>

          {/* Stat Card: Awards */}
          <div
            className="bg-white border border-[#1E3A8A]/10 rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600"
            aria-label="Awards Received"
          >
            <svg
              className="w-12 h-12 mx-auto mb-4 text-[#FACC15]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="text-4xl font-bold text-[#1E3A8A] mb-2">20+</h3>
            <p className="text-[#1E3A8A]/80">Awards Received</p>
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

export default Stats;