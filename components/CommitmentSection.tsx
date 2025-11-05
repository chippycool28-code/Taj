import React from 'react';
import { QualityIcon, RiskIcon, TechIcon } from './Icons';

const CommitmentSection = () => {
  return (
    <section id="commitment" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">A Partnership Built on Trust</h2>
        <p className="text-xl text-[#FF69B4] mb-4 font-['Poppins']">The TAJ Difference</p>
         <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-700">
            Our model is simple: you provide the space and electricity, and we provide the rest. We install, stock, and maintain our state-of-the-art vending machines at absolutely no cost to you. It's a risk-free way to offer delicious, authentic food choices to your students and staff.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Pillar 1: Quality */}
          <div className="flex flex-col items-center">
            <div className="bg-[#6BBD9A] p-4 rounded-full mb-4">
              <QualityIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Global Quality</h3>
            <p>Genuine South Asian flavor from iconic, trusted brands, guaranteeing products students already know and demand.</p>
          </div>
          
          {/* Pillar 2: Zero Risk */}
          <div className="flex flex-col items-center">
             <div className="bg-[#36454F] p-4 rounded-full mb-4">
              <RiskIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Zero Campus Cost</h3>
            <p>Free machine installation, stocking, and maintenance. Your only commitment is providing the space and power.</p>
          </div>
          
          {/* Pillar 3: Smart Tech */}
          <div className="flex flex-col items-center">
             <div className="bg-[#FFC300] p-4 rounded-full mb-4">
              <TechIcon className="w-10 h-10 text-[#36454F]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Smart Service</h3>
            <p>Cashless payment, remote monitoring, and real-time inventory for optimal service.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;