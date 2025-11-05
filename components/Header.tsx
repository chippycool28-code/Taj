
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-['Poppins'] text-[#36454F]">
          TAJ Desi Bites
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#commitment" className="hover:text-[#FF69B4] transition-colors">Our Difference</a>
          <a href="#products" className="hover:text-[#FF69B4] transition-colors">Our Food</a>
          <a href="#partnership" className="hover:text-[#FF69B4] transition-colors">Our Partnership</a>
        </nav>
        <a 
          href="#contact"
          className="hidden md:inline-block bg-[#FFC300] text-[#36454F] font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
        >
          Request Consultation
        </a>
         <a href="#contact" className="md:hidden inline-block bg-[#FFC300] text-[#36454F] font-bold py-2 px-4 rounded-full text-sm">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;