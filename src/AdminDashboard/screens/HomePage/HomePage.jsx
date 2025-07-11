import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ExploreLearningHub from "./ExploreLearningHub";
import HowItWorks from "./HowItWorks";
import PortfolioHero from "./PortfolioHero";
import TechLeaders from "./TechLeaders";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased">
      <main className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="absolute top-10 right-6 md:top-20 md:right-10 text-pink-500 opacity-60">
          <svg
            className="w-12 h-12 md:w-20 md:h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
        </div>

        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-6 leading-tight">
              Studying
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Techy is an engaging platform that teaches in a more interactive
              and modern way.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 12L19 3L12 12L19 21L2 12ZM4 13L10 16.5V7.5L4 13Z" />
              </svg>
              Download App
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <Card color="green" title="Java Class" subtitle="Today at 12.00 PM" />
          <Card
            color="orange"
            title="Congratulations"
            subtitle="Your admission completed"
            iconPath="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20Z"
          />
          <Card
            color="blue"
            title="250k"
            subtitle="Assisted Student"
            iconPath="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 5V19H5V5H19ZM11 11H7V13H11V11ZM17 11H13V13H17V11Z"
          />
        </section>

        <section className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            +10 professional tools in one curriculum
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
            Techy equips academies with all the tools needed to streamline and
            grow their business.
          </p>
        </section>
        <section className="mb-20 md:mb-36 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
            {[
              { title: "Mobile App Development", color: "blue" },
              { title: "AI & Machine Learning", color: "green" },
              { title: "Game Development", color: "purple" },
              { title: "3D Coding (AR, VR)", color: "yellow" },
              { title: "Python & Data Science", color: "red" },
              { title: "Minecraft & Roblox", color: "gray" },
            ].map(({ title, color }, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <div
                  className={`p-3 bg-${color}-100 rounded-full text-${color}-500 mb-3`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex justify-center mb-20 md:mb-36 px-4">
          <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">
            {["Student App", "Parent App"].map((label, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                  index === 0
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>
        <section className="relative flex flex-col md:flex-row items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
            <div className="w-48 h-48 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-2000"></div>
            <div className="w-24 h-24 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-4000"></div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            {[
              "top-1/4 left-1/4",
              "top-1/2 right-1/4",
              "bottom-1/3 left-1/3",
              "top-1/3 right-1/2",
              "bottom-1/4 left-1/2",
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-2 h-2 rounded-full bg-gray-300`}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl bg-white rounded-2xl shadow-2xl px-6 py-10 md:px-12 md:py-14 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Social Networking with <br />
              <span className="text-blue-600">Teach Leaders</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8">
              Connect with top educators and industry leaders. Engage in
              meaningful discussions, join exclusive groups, and expand your
              professional network.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <button className="p-3 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition duration-300 shadow-md">
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              </div>
              <button className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition duration-300 shadow-md">
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <HowItWorks />
        <TechLeaders />
      </main>
      <ExploreLearningHub />
      <main className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <PortfolioHero />
      </main>
      <FaqSection />
      <Footer />
    </div>
  );
};

// Reusable Card Component
const Card = ({ color, title, subtitle, iconPath }) => {
  const colors = {
    green: "bg-green-500",
    orange: "bg-orange-100 text-orange-500",
    blue: "bg-blue-100 text-blue-500",
  };

  return (
    <div className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <div
        className={`flex items-center justify-center w-10 h-10 ${colors[color]} rounded-full mr-4`}
      >
        {iconPath ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d={iconPath} />
          </svg>
        ) : (
          <div className="w-3 h-3 bg-white rounded-full" />
        )}
      </div>
      <div>
        <p
          className={`font-bold text-gray-900 ${
            title.length > 10 ? "text-xl" : "text-2xl"
          }`}
        >
          {title}
        </p>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default HomePage;
