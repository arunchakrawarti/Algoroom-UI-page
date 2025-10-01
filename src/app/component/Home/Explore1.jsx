import React from "react";

const Explore1 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 mx-40 sm:px-8 lg:px-16 py-10">

      {/* Left Cards */}
      <div
        className="flex-1 min-w-[250px] max-w-sm lg:max-w-none group rounded-tr-4xl rounded-md p-6 
                  shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white hover:bg-blue-400 transition-colors"
        style={{ animation: "slideLeft 1s ease-out forwards" }}
      >
        <img
          src="https://algorooms.com/images/service-icon-01.png"
          alt="Service Icon"
          className="w-14 h-14 mb-5 mt-5 mx-auto"
        />
        <h1 className="text-xl font-semibold group-hover:text-white mb-3 text-center">
          Trading Engine
        </h1>
        <p className="hover:text-white transition-all group-hover:text-white group-active:text-white duration-300 text-[15px] text-gray-400 text-center">
          An intelligent tool for <br /> automated trading, <br />
          executing trades based on <br />user-defined rules.
        </p>
      </div>

      <div
        className="flex-1 min-w-[250px] max-w-sm lg:max-w-none group rounded-tr-4xl rounded-md p-6  
                  shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white hover:bg-blue-400 transition-colors"
        style={{ animation: "slideLeft 1s ease-out forwards", animationDelay: "0.2s" }}
      >
        <img
          src="https://algorooms.com/images/service-icon-02.png"
          alt="Service Icon"
          className="w-14 h-14 mb-5 mt-5 mx-auto"
        />
        <h1 className="text-xl font-semibold group-hover:text-white mb-3 text-center">
          Strategy Building Wizard
        </h1>
        <p className="hover:text-white transition-all group-hover:text-white duration-300 text-[15px] text-gray-400 text-center">
          Revolutionizing trading by<br /> offering smart strategies <br />
          without coding. Users can <br /> create and sell ideas.
        </p>
      </div>

      {/* Right Cards */}
      <div
        className="flex-1 min-w-[250px] max-w-sm lg:max-w-none group rounded-tr-4xl rounded-md p-6  
                  shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white hover:bg-blue-400 transition-colors"
        style={{ animation: "slideRight 1s ease-out forwards", animationDelay: "0.4s" }}
      >
        <img
          src="https://algorooms.com/images/service-icon-03.png"
          alt="Service Icon"
          className="w-14 h-14 mb-5 mt-5 mx-auto"
        />
        <h1 className="text-xl font-semibold group-hover:text-white mb-3 text-center">
          Social Trading
        </h1>
        <p className="hover:text-white transition-all group-hover:text-white duration-300 text-[15px] text-gray-400 text-center">
          Choose trader strategies <br /> based on performance, <br />
          replicate their actions in <br /> your portfolio, even <br /> without expertise.
        </p>
      </div>

      <div
        className="flex-1 min-w-[250px] max-w-sm lg:max-w-none group rounded-tr-4xl rounded-md p-6  
                  shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white hover:bg-blue-400 transition-colors"
        style={{ animation: "slideRight 1s ease-out forwards", animationDelay: "0.6s" }}
      >
        <img
          src="https://algorooms.com/images/service-icon-04.png"
          alt="Service Icon"
          className="w-14 h-14 mb-5 mt-5 mx-auto"
        />
        <h1 className="text-xl font-semibold group-hover:text-white mb-3 text-center">
          Back Testing
        </h1>
        <p className="group-hover:text-white transition-all duration-300 text-[15px] text-gray-400 text-center">
          Manage trading <br /> differences using three <br /> backtesting options,
          with <br /> the worst-case scenario.
        </p>
      </div>

      {/* Inline CSS animations */}
      <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(-400px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideRight {
            0% { transform: translateX(400px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>

    </div>
  );
};

export default Explore1;
