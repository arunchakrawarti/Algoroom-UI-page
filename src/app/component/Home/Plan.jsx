"use client";
import React, { useState } from "react";

const Plan = () => {
  const [active, setActive] = useState("Quarterly"); // default active button
  const buttons = ["Monthly", "Quarterly", "Yearly"];

  return (
    <div className="mt-20 text-center px-4 sm:px-0">
      {/* Heading */}
      <h1
        className="text-[45px] sm:text-5xl leading-[61px] font-medium"
        style={{ animation: "slideFromLeft 1s ease-out forwards" }}
      >
        Our pricing plan
      </h1>

      {/* Paragraph + Buttons */}
      <div
        style={{ animation: "slideFromRight 1s ease-out forwards" }}
        className="mt-4"
      >
        <p className="pt-2 text-base tracking-normal text-gray-400 mb-8 leading-[25px]">
          Pricing That Adapts to Your Success
        </p>

        <div className="bg-gray-300 flex justify-center gap-2 px-2 rounded-3xl w-full max-w-sm mx-auto mt-4 flex-wrap">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`font-bold w-[100px] py-1 text-[12px] rounded-3xl transition-colors ${
                active === btn
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-blue-600"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideFromLeft {
            0% { transform: translateX(-400px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideFromRight {
            0% { transform: translateX(400px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Plan;
