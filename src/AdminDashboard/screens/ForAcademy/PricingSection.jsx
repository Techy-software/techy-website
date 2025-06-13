import React from 'react'


const PricingSection = () => {
  const plans = [
    {
      title: "Monthly",
      price: "$10",
      description: "Unveil new superpowers and join the Design League",
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception pogram",
        "Collaboration-Soon",
      ],
      highlight: false,
    },
    {
      title: "Quarterly",
      price: "$20",
      save: "Save $5",
      description: "Experiment the power of infinite possibilities",
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      highlight: true,
    },
    {
      title: "Annually",
      price: "$100",
      description: "Unveil new superpowers and join the Design League",
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception pogram",
        "Collaboration-Soon",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          Choose Plan <span className="text-orange-500">That’s Right For You</span>
        </h2>
        <p className="text-gray-500 mb-12 text-lg">
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 w-full max-w-sm transition-all duration-300 ${
                plan.highlight
                  ? "bg-blue-700 text-white shadow-2xl scale-105"
                  : "bg-white text-black shadow-md"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-1">{plan.title}</h3>
              <p
                className={`text-sm mb-4 ${
                  plan.highlight ? "text-white/80" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="text-5xl font-bold mb-2">{plan.price}</div>
              {plan.save && (
                <div className="text-sm bg-green-500 text-white px-3 py-1 rounded-full inline-block mb-4">
                  {plan.save}
                </div>
              )}

              <ul className="text-left space-y-3 mb-6 mt-6 text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`rounded-full w-full py-3 font-semibold text-base transition ${
                  plan.highlight
                    ? "bg-orange-400 hover:bg-orange-500 text-white"
                    : "bg-white border border-gray-300 hover:bg-gray-100"
                }`}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

