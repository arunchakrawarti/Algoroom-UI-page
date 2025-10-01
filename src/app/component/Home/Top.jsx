import React from "react";

const Top = () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-900 to-blue-400 mt-3 relative  h-auto sm:h-[450px] md:h-[600px] rounded-bl-sm [clip-path:polygon(0_0,100%_0,100%_20%,100%_89%,77%_100%,19%_100%,0_87%,0%_20%)]"
    >
      {/* Wrapper */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24">
        
        {/* Text Section */}
        <div className="text-center md:text-left ml-29 -mt-15 max-w-lg md:max-w-xl">
          <h1 className="text-[47px] leading-[62px] tracking-[2px] !font-bold text-white mb-2">
            Trade Smarter, <br />
            <span>Not Harder</span>
          </h1>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white block mb-5">
            Where efficiency meets success
          </span>
          <p className="text-base tracking-wide leading-[26px] text-white">
            Our goal is to simplify the investment process,
            <br/>
            making it effortless as possible, even if you're new to investing.
          </p>
          <button className="px-6 sm:px-10 md:px-9 rounded-md py-2 sm:py-3 md:py-4 mt-6 sm:mt-14 text-white bg-blue-500 hover:bg-blue-700 transition">
            GET STARTED
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:-mt-6">
          <img
            src="https://algorooms.com/images/NewHero.svg"
            className="h-[35vh] sm:h-[50vh] md:h-[65vh] mr-10 w-auto object-contain"
            alt="manimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Top;

