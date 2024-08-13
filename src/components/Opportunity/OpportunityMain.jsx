import HorizontalManagment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";

const OpportunityMain = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 m-3">
          <HorizontalManagment
            steps={[
              "Events",
              "Scholarship",
              "Internship",
              "Trips",
              "Hackathons",
            ]}
            currentStep={0}
          />
        </div>
        <WhiteCard
          title={"Events"}
          style={"col-span-9 m-3"}
          titleStyle={"font-bold"}
        >
          <div className="flex items-center mb-6">
            <div className="relative w-1/4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 4a8 8 0 108 8 8 8 0 00-8-8zm2 10l4 4"
                  />
                </svg>
              </span>
              <div className="ps-5 bg-gray-100 rounded-xl border border-gray-300">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 rounded-xl border-0 border-gray-300 bg-gray-100"
                />
              </div>
            </div>
            <button className="ml-2 p-2 bg-white border border-gray-300 rounded-r-md">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 8h18M5 12h14M7 16h10"
                />
              </svg>
            </button>
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};

export default OpportunityMain;
