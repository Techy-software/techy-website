import React from 'react';
import Footer from '../../components/footer/Footer';
import FaqSection from '../../components/FaqSection/FaqSection';
import PricingSection from '../PricingSection/PricingSection';
import AllInOnePlatform from '../AllInOnePlateForm/AllInOnePlateForm';

const ForAcademy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content expands to fill available space */}
      <main className="flex-grow">
        <AllInOnePlatform />
        <PricingSection />
        <FaqSection />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default ForAcademy;
