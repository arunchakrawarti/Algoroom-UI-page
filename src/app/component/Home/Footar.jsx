
import Link from "next/link";
import React from "react";

const Footar = () => {
  return (
    <footer className="bg-[#1a1b1f] py-10 overflow-x-hidden">
      <div className="w-full mt-10 flex flex-col gap-8 md:flex-col lg:flex-row lg:justify-between 
                      px-4 sm:px-8 md:px-12 lg:mx-40">

        {/* Logo and Info */}
        <div className="flex-1">
          <img
            src="https://algorooms.com/images/Logowhite.svg"
            alt="Logo"
            className="h-10 mb-4"
          />
          <p className="font-bold mb-2 text-gray-600">Chart Powered by</p>
          <p className="mb-2 text-white">Trading View</p>
          <p className="mt-5 text-gray-600 text-sm">
            Reykle India Private Limited <br />
            CIN - U66120MP2022PTC060149 <br />
            Telephone 120-457-6454 <br />
            Mobile +91-7042132888
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col gap-2 text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/feature">Features</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Policies */}
        <div className="flex-1 flex flex-col gap-2 text-gray-600">
          <Link href="/plan">Pricing</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footar;





