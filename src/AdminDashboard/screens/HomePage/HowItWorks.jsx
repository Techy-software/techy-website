const HowItWorks = () => {
  return (
    <section className="relative bg-white px-4 md:px-12 py-16">

      <div className="absolute top-4 right-1/3 w-14 h-14 md:w-20 md:h-20 bg-sky-400 rounded-lg z-0"></div>
      <div className="absolute top-1/3 right-10 w-14 h-14 md:w-20 md:h-20 bg-orange-300 rounded-lg z-0"></div>
      <div className="absolute top-[33%] right-[43%] w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md z-0">
        <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-white transform translate-x-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How it <span className="text-blue-600">works</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
          Techy software helps traditional and online academies manage scheduling, courses, payments and virtual classrooms all in one secure cloud-based system.
        </p>
      </div>

      <div className="mt-20 bg-[#0076FF] rounded-xl px-6 md:px-12 py-10 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Enjoy more features on app</h3>
            <p className="mt-1 text-base md:text-lg text-white/80">Download now to access more features</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2 text-black text-sm font-medium hover:opacity-90 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg" alt="Apple" className="w-5 h-5" />
                App Store
              </a>
              <a href="#" className="bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2 text-black text-sm font-medium hover:opacity-90 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-5 h-5" />
                Google Play
              </a>
            </div>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 absolute bottom-0 right-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Party_popper_icon.svg/1024px-Party_popper_icon.svg.png"
              alt="Decoration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
