"use client"
import React, { useEffect, useState } from "react";

const Status = () => {
  const stats = [
    { label: "SUBSCRIBERS", value: 18000 },
    { label: "USER BASE", value: 300000 },
    { label: "TRADING VOLUME", value: 100000 },
    { label: "ACTIVE BROKERS", value: 11 },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; 
    const intervalTime = 20; 
    const steps = duration / intervalTime;

    const increments = stats.map((stat) => stat.value / steps);

    const interval = setInterval(() => {
      setCounters((prev) => {
        const newCounters = prev.map((num, index) => {
          if (num < stats[index].value) {
            return Math.min(num + increments[index], stats[index].value);
          }
          return num;
        });
        return newCounters;
      });
    }, intervalTime);

    setTimeout(() => clearInterval(interval), duration + intervalTime);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }
    return Math.floor(num);
  };

  return (
    <section className="bg-white   relative px-4 py-8">
      <div className="
        max-w-7xl mx-auto flex flex-wrap justify-between gap-15
        bg-white rounded-md shadow-lg shadow-gray-300
        relative  lg:absolute lg:ml-50 lg:mt-[-113px] lg:px-14
      ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 min-w-[150px] mt-4 md:min-w-[200px] flex flex-col items-center p-4 rounded-lg"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl text-blue-900 font-bold">
              {formatNumber(counters[index])}
            </p>
            <p className="text-[12px] tracking-[2px] uppercase mt-4 text-gray-900 font-bold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Status;
