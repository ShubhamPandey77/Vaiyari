import React from 'react';

const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/918076078942"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#0a0a0a] border border-white/10 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap uppercase tracking-widest">
        WhatsApp Support
        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-[#0a0a0a]"></div>
      </div>

      {/* Button */}
      <div className="relative w-14 h-14 bg-black border border-white/10 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:border-red-500 hover:text-red-500 hover:scale-105 active:scale-95 shadow-2xl">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14c.9 0 1.8.1 2.7.4l2.7.8 2-.6 1.1 1.2" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppFloating;
