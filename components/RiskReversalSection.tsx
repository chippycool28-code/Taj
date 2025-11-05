
import React from 'react';
import { CheckCircleIcon } from './Icons';

const RiskReversalSection = () => {
  return (
    <section id="partnership" className="py-20 bg-[#36454F] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          A Simple, <span className="text-[#FFC300]">Zero-Cost Partnership.</span>
        </h2>
        <p className="text-2xl font-['Poppins'] text-gray-300 mb-12">Partnering With Us Is Easy.</p>
        <div className="max-w-3xl mx-auto text-left grid md:grid-cols-1 gap-8">
            <div className="flex items-start p-6 bg-gray-800/50 rounded-lg">
              <CheckCircleIcon className="w-10 h-10 text-[#6BBD9A] mr-5 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-1">1. Consult &amp; Plan</h3>
                <p className="text-lg text-gray-300">
                  We start with a quick chat to understand your campus's needs and identify the perfect high-traffic location for the machine.
                </p>
              </div>
            </div>
             <div className="flex items-start p-6 bg-gray-800/50 rounded-lg">
              <CheckCircleIcon className="w-10 h-10 text-[#6BBD9A] mr-5 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-1">2. Seamless Installation</h3>
                <p className="text-lg text-gray-300">
                  Our professional team handles the complete delivery and setup process at zero cost to you. All we need is a standard power outlet.
                </p>
              </div>
            </div>
             <div className="flex items-start p-6 bg-gray-800/50 rounded-lg">
              <CheckCircleIcon className="w-10 h-10 text-[#6BBD9A] mr-5 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-1">3. Ongoing Success</h3>
                <p className="text-lg text-gray-300">
                  We manage all stocking, maintenance, and customer service, ensuring a flawless and delicious experience for your students and staff.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RiskReversalSection;