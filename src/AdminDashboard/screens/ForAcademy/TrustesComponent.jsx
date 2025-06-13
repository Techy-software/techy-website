import React from 'react';

// Import images as ES6 modules
import google from '../../assets/google.png';
import airbnb from '../../assets/airbnb.png';
import amazon from '../../assets/amazon.png';
import facebook from '../../assets/facebook.png';
import grablogo from '../../assets/grab-logo.png';
import netflix from '../../assets/netflix.png';

const TrustBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <p className="text-gray-600 text-lg mr-4 py-20 font-medium">Trusted by 5,000+ Academies Worldwide</p>
      <div className="flex w-full justify-between pb-11">
        <img src={google} alt="Google" className="h-8 opacity-50" />
        <img src={netflix} alt="Netflix" className="h-8 opacity-50" />
        <img src={airbnb} alt="Airbnb" className="h-8 opacity-50" />
        <img src={amazon} alt="Amazon" className="h-8 opacity-50" />
        <img src={facebook} alt="Facebook" className="h-8 opacity-50" />
        <img src={grablogo} alt="Grab" className="h-8 opacity-50" />
      </div>
    </div>
  );
};

export default TrustBanner;