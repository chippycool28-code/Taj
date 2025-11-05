
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} TAJ Desi Bites. All Rights Reserved.</p>
        <p className="mt-2 text-sm">Revolutionizing Campus Snacking.</p>
      </div>
    </footer>
  );
};

export default Footer;
