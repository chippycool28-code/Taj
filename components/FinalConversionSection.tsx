
import React from 'react';

const FinalConversionSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Enhance Your Campus Experience?</h2>
          <p className="text-lg text-gray-600 mt-2">Fill out the form below to start the conversation about a partnership.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
          <form name="partnership" method="POST" data-netlify="true" action="/success.html">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="universityName" className="block text-sm font-bold mb-2">University Name</label>
                <input type="text" name="universityName" id="universityName" placeholder="e.g. State University" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC300]" required />
              </div>
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-bold mb-2">Contact Person</label>
                <input type="text" name="contactPerson" id="contactPerson" placeholder="e.g. Jane Doe" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC300]" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                <input type="email" name="email" id="email" placeholder="e.g. jane.doe@university.edu" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC300]" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder="e.g. (555) 123-4567" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC300]" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="placementArea" className="block text-sm font-bold mb-2">Desired Placement Area</label>
              <select id="placementArea" name="placementArea" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC300] bg-white">
                <option>Library</option>
                <option>Student Union</option>
                <option>Dormitory / Residence Hall</option>
                <option>Athletic Center</option>
                <option>Other</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#FF69B4] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Partnership Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default FinalConversionSection;



