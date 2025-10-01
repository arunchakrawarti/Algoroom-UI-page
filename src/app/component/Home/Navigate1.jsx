import React from "react";

const Navigate1 = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row items-start gap-10">

        {/* Image - slide from left */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
          style={{ animation: "slideFromLeft 1s ease-out forwards" }}
        >
          <img
            src="https://algorooms.com/images/features.svg"
            alt="Features"
            className="w-full max-w-md lg:max-w-full"
          />
        </div>

        {/* Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 mt-7 sm:grid-cols-2 gap-x-6 gap-y-12">

          {/* Left column cards - slide from left */}
          <div
            className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-tr-4xl py-13 px-10 rounded-md group hover:bg-blue-500 transition-colors"
            style={{ animation: "slideFromLeft 1s ease-out forwards" }}
          >
            <h1 className="text-xl leading-[30px] font-normal group-hover:text-black mb-2">
              Begin with signing up
            </h1>
            <p className="transition-all duration-300 text-[15px] leading-[25px] group-hover:text-white group-active:text-white text-gray-400">
              Start your trading journey by signing up and logging into your trading account on our trading platform.
            </p>
          </div>

          <div
            className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] py-13 px-10 rounded-tr-4xl group rounded-md hover:bg-blue-500 hover:text-white transition-colors"
            style={{ animation: "slideFromLeft 1s ease-out forwards", animationDelay: "0.2s" }}
          >
            <h1 className="text-xl group-hover:text-black leading-[30px] font-normal mb-2">
              Pick Your Strategy
            </h1>
            <p className="transition-all duration-300 group-hover:text-white group-active:text-white text-[15px] leading-[25px] text-gray-400">
              Protect yourself from the ups and downs of the market by including your preferred level of risk into the trading algorithm.
            </p>
          </div>

          {/* Right column cards - slide from right */}
          <div
            className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] py-13 px-10 rounded-tr-4xl rounded-md hover:bg-blue-500 group hover:text-white transition-colors"
            style={{ animation: "slideFromRight 1s ease-out forwards", animationDelay: "0.4s" }}
          >
            <h1 className="text-xl leading-[30px] group-hover:text-black font-normal mb-2">
              Risk-Aware Trading
            </h1>
            <p className="transition-all duration-300 group-hover:text-white group-active:text-white text-[15px] leading-[25px] text-gray-400">
              You can decide how to trade on our platform. Pick expert trading plans made by professionals, or make your own strategy.
            </p>
          </div>

          <div
            className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-tr-4xl py-13 px-10 rounded-md hover:bg-blue-500 group transition-colors"
            style={{ animation: "slideFromRight 1s ease-out forwards", animationDelay: "0.6s" }}
          >
            <h1 className="text-xl leading-[30px] group-hover:text-black font-normal mb-2">
              Trade with Ease
            </h1>
            <p className="transition-all duration-300 group-hover:text-white group-active:text-white text-[15px] leading-[25px] text-gray-400">
              Once you've adjusted everything the way you prefer, you can start your trading journey using our platform.
            </p>
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes slideFromLeft {
            0% { transform: translateX(-300px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideFromRight {
            0% { transform: translateX(300px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Navigate1;

