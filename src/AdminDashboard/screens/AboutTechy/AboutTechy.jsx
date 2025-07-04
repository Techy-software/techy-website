import React from "react";
import AboutTechySection from "./AboutTechySection";
import WhyTechy from "./WhyTechy";
import Footer from "../../components/footer/Footer";

const AboutTechy = () => {
  return (
    <>
      <main className="flex-grow">
        <div className="flex flex-col items-start bg-blue-50 py-8 pl-11">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Techy</span>
          </h2>
        </div>

        <AboutTechySection />

        <WhyTechy />
      </main>
      <Footer />
    </>
  );
};

export default AboutTechy;
