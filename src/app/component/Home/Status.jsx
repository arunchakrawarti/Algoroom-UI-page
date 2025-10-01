import React from "react";

const Status = () => {
  return (
    <section className="bg-white relative px-4 py-8">
      <div className="
        max-w-7xl mx-auto flex flex-wrap justify-between gap-15
        bg-white rounded-md shadow-lg shadow-gray-300
        relative lg:absolute lg:ml-52 lg:mt-[-110px] lg:px-14
      ">
        {/* Subscribers */}
        <div className="flex-1 min-w-[150px] mt-4 md:min-w-[200px] flex flex-col items-center p-4 rounded-lg">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-900 font-bold">18K+</p>
          <p className="text-[12px] tracking-[2px] uppercase mt-4 text-gray-900 font-bold">SUBSCRIBERS</p>
        </div>

        {/* User Base */}
        <div className="flex-1 min-w-[150px] mt-4 md:min-w-[200px] flex flex-col items-center p-4 rounded-lg">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-900 font-bold">300K+</p>
          <p className="text-[12px] tracking-[2px] uppercase mt-4 text-gray-900 font-bold">USER BASE</p>
        </div>

        {/* Trading Volume */}
        <div className="flex-1 min-w-[150px] mt-4 md:min-w-[200px] flex flex-col items-center p-4 rounded-lg">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-900 font-bold">100K+</p>
          <p className="text-[12px] tracking-[2px] uppercase mt-4 text-gray-900 font-bold">TRADING VOLUME</p>
        </div>

        {/* Active Brokers */}
        <div className="flex-1 min-w-[150px] mt-4 md:min-w-[200px] flex flex-col items-center p-4 rounded-lg">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-900 font-bold">11</p>
          <p className="text-[12px] tracking-[2px] uppercase mt-4 text-gray-900 font-bold">ACTIVE BROKERS</p>
        </div>
      </div>
    </section>
  );
};

export default Status;

