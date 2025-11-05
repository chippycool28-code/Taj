
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative text-center lg:text-left pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 z-0">
            <img 
                src="https://picsum.photos/1600/900?grayscale" 
                alt="Sleek vending machine in a modern university hallway"
                className="w-full h-full object-cover opacity-20"
            />
        </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#36454F] leading-tight mb-4">
            Bring the Taste of Home to Your Campus: <span className="text-[#FF69B4]">TAJ Desi Bites</span> Vending.
          </h1>
          <p className="text-lg md:text-xl text-[#36454F] mb-8 max-w-2xl">
            Offer students authentic South Asian snacks 24/7 with our fully-managed vending service — completely free for your campus.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-[#FFC300] text-[#36454F] font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request a Free Campus Vending Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
