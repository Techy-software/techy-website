import SubjectSection from "./Subject";
import NavBar from "../../components/NavBar/NavBar";
import Instructors from "./Instructors";
import FAQ from "./Faq";
import Reviews from "./Reviews";
import LeaderBoard from "./LeaderBoard";
import Footer from "../../components/footer/Footer";

const Course = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <SubjectSection />
      <div className=" bg-white">
        <main className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mb-5">
          <div className="col-span-2">
            <Instructors />
            <FAQ />
            <Reviews />
            <LeaderBoard />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Course;
