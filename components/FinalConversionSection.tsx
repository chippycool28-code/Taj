import React, { useState } from 'react';

const FinalConversionSection = () => {
  // 1. STATE: Add state to manage the loading/success status
  const [submissionStatus, setSubmissionStatus] = useState('initial'); 
  
  // 2. HANDLER: Define the new asynchronous handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('loading'); // Show a loading state

    // Gather form data, including the hidden netlify field
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // 3. FETCH: Use fetch to submit the data to Netlify's internal endpoint
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset(); // Clear the form fields
      } else {
        setSubmissionStatus('error');
        console.error("Netlify form submission failed.", response.statusText);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error("Submission failed due to network error.", error);
    }
  };

  // 4. RENDERING: Render based on submission status
  let formContent;

  if (submissionStatus === 'success') {
    formContent = (
      <div className="text-center text-mint-green">
        <h3 className="text-2xl font-bold mb-4">🥳 Success!</h3>
        <p>Thank you for requesting a partnership consultation. We will be in touch within one business day!</p>
      </div>
    );
  } else if (submissionStatus === 'error') {
    formContent = (
      <div className="text-center text-red-500">
        <h3 className="text-2xl font-bold mb-4">Error!</h3>
        <p>There was an issue submitting your form. Please try again or email us directly.</p>
      </div>
    );
  } else {
    // Show the actual form inputs (your original JSX structure)
    formContent = (
      // YOUR FORM JSX GOES HERE (from Step 2 below)
    );
  }

  // 5. RETURN: The component's main return structure
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



