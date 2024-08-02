import WhiteCard from "../WhiteCard/WhiteCard";

const HorizontalManagment = (props) => {
  return (
    <>
      <div className={"bg-white rounded-lg border-2"}>
        <h2 className="mb-3 text-xl p-4 font-semibold">
          Update and manage your account
        </h2>
        <hr />
        <ul className="">
          {props.steps.map((step, index) => (
            <>
              <div
                key={step}
                className={`flex h-14 items-center text-slate-400 w-full cursor-pointer justify-between ${
                  props.currentStep === index ? "bg-white" : ""
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`me-3 px-0.5 h-14
                    ${
                      props.currentStep === index
                        ? "active-item-horizontal-steps "
                        : "bg-white"
                    }`}
                  ></div>
                  <li
                    key={index}
                    className={`px-2 py-4 ${
                      props.currentStep === index ? "text-black" : ""
                    }`}
                  >
                    {step}
                  </li>
                </div>
                <span
                  className={`mr-5 ${
                    props.currentStep === index ? "text-black " : ""
                  }`}
                >
                  {">"}
                </span>
              </div>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HorizontalManagment;
