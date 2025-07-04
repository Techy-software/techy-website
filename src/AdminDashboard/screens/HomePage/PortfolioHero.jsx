const PortfolioHero = () => {
  return (
    <section className="relative overflow-hidden py-52 bg-white">
      <div className="absolute top-10 left-10 w-36 h-36 bg-sky-400 rounded-xl opacity-80 z-0" />
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-orange-300 rounded-xl  z-10" />

      <div className="absolute bottom-16 right-32 z-0">
        <DotsPattern />
      </div>

      <div className="absolute top-14 right-40 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-0 rotate-45">
        <svg
          className="w-10 h-10 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.39 7.26H22l-5.69 4.14 2.39 7.26L12 16.77 5.3 20.66 7.69 13.4 2 9.26h7.61z" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Every Student Builds a Career Ready{" "}
          <span className="text-blue-600">Portfolio</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Your portfolio is like your personal website. Your skills, projects,
          and certificates will show up here.
          <br />
          Edit it whenever & share freely with colleges and summer programs,
          it’s yours!
        </p>
      </div>
    </section>
  );
};

const DotsPattern = () => (
  <svg
    width="300"
    height="300"
    viewBox="0 0 100 100"
    fill="none"
    className="rotate-[-15deg]"
  >
    <defs>
      <pattern
        id="dot-pattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="#D9E0EB" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dot-pattern)" />
  </svg>
);

export default PortfolioHero;
