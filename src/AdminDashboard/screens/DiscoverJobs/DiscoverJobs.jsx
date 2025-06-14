import React from "react";

import Footer from "../../components/footer/Footer";
import JobListing from "./JobListing";
import TitleComponent from "./TitleComponent";

const DiscoverJobs = () => {
  return (
    <>
      <main className="flex-grow">
        <TitleComponent />
        <JobListing />
      </main>
      <Footer />
    </>
  );
};

export default DiscoverJobs;
