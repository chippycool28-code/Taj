
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CommitmentSection from './components/CommitmentSection';
import ProductShowcase from './components/ProductShowcase';
import RiskReversalSection from './components/RiskReversalSection';
import FinalConversionSection from './components/FinalConversionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#FFFFFF] text-[#36454F]">
      <Header />
      <main>
        <HeroSection />
        <CommitmentSection />
        <ProductShowcase />
        <RiskReversalSection />
        <FinalConversionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
