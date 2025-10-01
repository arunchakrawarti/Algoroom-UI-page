import React from "react";

const Plan1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 mx-20 sm:px-10 lg:px-36">

      {/* Free Plan */}
      <div
        className="bg-white rounded-2xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-6 flex flex-col items-center text-gray-700"
        style={{ animation: "slideFromLeft 1s ease-out forwards" }}
      >
        <h1 className="text-base font-bold uppercase tracking-widest text-black mb-6 mt-5">FREE</h1>
        <img
          src="https://algorooms.com/images/by3.svg"
          alt="Free Plan"
          className="w-23 h-23 my-4"
        />
        <p className="text-2xl font-bold border-b-6 rounded-sm border-blue-400 text-black inline-block pb-8">₹0/day</p>
        <ul className="mt-6 space-y-2 text-sm text-left px-2 sm:px-5 text-gray-400 w-full">
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>50 Backtest Credit Points</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>5 Strategy Creation</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>No Basic+HNI & Retail Strategy Template Access</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>Reporting Console</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>No Strategy Deployment (Live & Forward)</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>No Portfolio Backtesting</li>
        </ul>
        <button className="mt-10 bg-blue-600 hover:bg-blue-950 font-normal text-base leading-6 font-[Open_Sans] text-white py-2 px-12 rounded-3xl shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]">
          GET STARTED
        </button>
      </div>

      {/* Unlimited Plan */}
      <div
        className="bg-white rounded-2xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-6 flex flex-col items-center text-gray-700"
        style={{ animation: "slideFromLeft 1s ease-out forwards", animationDelay: "0.2s" }}
      >
        <h1 className="text-base font-bold uppercase tracking-widest text-black mb-6 mt-5">Unlimited Plan</h1>
        <img
          src="https://algorooms.com/images/by2.svg"
          alt="Unlimited Plan"
          className="w-23 h-23 my-4"
        />
        <p className="text-2xl font-bold border-b-6 rounded-sm border-blue-400 text-black inline-block pb-8">₹69/day</p>
        <ul className="mt-6 space-y-2 text-sm text-left px-2 sm:px-5 text-gray-400 w-full">
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>1500 Backtest Credit Points</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>50 Strategy Creation</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>Basic+HNI & Retail Strategy Template Access</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>Reporting Console</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>20 Strategy Deployment (Live & Forward)</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>10 Portfolio Backtesting</li>
        </ul>
        <button className="mt-10 bg-blue-600 py-2 px-12 hover:bg-blue-950 text-white rounded-3xl font-normal text-base leading-6 font-[Open_Sans] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]">
          GET STARTED
        </button>
      </div>

      {/* Limited Plan */}
      <div
        className="bg-white rounded-2xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-6 flex flex-col items-center text-gray-700"
        style={{ animation: "slideFromLeft 1s ease-out forwards", animationDelay: "0.4s" }}
      >
        <h1 className="text-base font-bold uppercase tracking-widest mb-6 text-black mt-5">Limited Plan</h1>
        <img
          src="https://algorooms.com/images/b1y.svg"
          alt="Limited Plan"
          className="w-32 h-24 my-4"
        />
        <p className="text-2xl font-bold border-b-6 rounded-sm border-blue-400 inline-block text-black pb-8">₹41/day</p>
        <ul className="mt-6 space-y-2 text-sm text-left px-2 sm:px-5 text-gray-400 w-full">
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>500 Backtest Credit Points</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>20 Strategy Creation</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>Basic+HNI & Retail Strategy Template Access</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>Reporting Console</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>15 Strategy Deployment (Live & Forward)</li>
          <li className='leading-[25px] mt-5'><span className='pr-2 text-blue-800 font-extrabold'>✔</span>8 Portfolio Backtesting</li>
        </ul>
        <button className="mt-10 bg-blue-600 py-2 px-12 hover:bg-blue-950 text-white rounded-3xl font-normal text-base leading-6 font-[Open_Sans] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]">
          GET STARTED
        </button>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes slideFromLeft {
            0% { transform: translateX(-400px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Plan1;
