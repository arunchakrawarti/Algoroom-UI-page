// import React from 'react'

// const Header = () => {
//   return (
//     <div className="flex bg-white fixed -mt-3 px-30 z-50 flex-col lg:flex-row w-[90%] h-[45px] lg:w-[100%] mx-auto items-center justify-between">
     
//       <div className="mb-3 lg:mb-0">
//         <img
//           src="https://algorooms.com/images/background/logo.png"
//           alt="Algorooms"
//           className="h-8 w-36 ml-15 lg:h-6 lg:w-32"
//         />
//       </div>

     
//       <div className='flex'>
        
//           <ul className="flex mr-8 flex-col lg:flex-row items-center gap-5 lg:gap-9 text-sm">
//           <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
//             HOME
//           </li>
//           <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
//             FEATURES
//           </li>
//           <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
//             CONTACT
//           </li>
//           <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
//             PRICING
//           </li>
//           <button className="w-[100px] h-[29px]  mt-2  lg:mt-[4px] bg-blue-500 text-white text-[13px] rounded">
//             GET STARTED
//           </button>
//         </ul>
        
//         </div>

       
//     </div>
//   )
// }

// export default Header

"use client"
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-white fixed top-0 left-0 z-50 w-full px-4 lg:px-50 items-center justify-between h-[45px] shadow-md">
      
      {/* Logo */}
      <div>
        <img
          src="https://algorooms.com/images/background/logo.png"
          alt="Algorooms"
          className="h-8 w-36 lg:h-6 lg:w-32"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-9 text-sm">
        <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
          HOME
        </li>
        <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
          FEATURES
        </li>
        <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
          CONTACT
        </li>
        <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
          PRICING
        </li>
        <button className="w-[100px] h-[29px] bg-blue-500 text-white text-[13px] rounded">
          GET STARTED
        </button>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-[45px] left-0 w-full bg-white flex flex-col items-center gap-3 py-4 shadow-md lg:hidden">
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
            HOME
          </li>
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
            FEATURES
          </li>
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
            CONTACT
          </li>
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[45px]">
            PRICING
          </li>
          <button className="w-[100px] h-[29px] bg-blue-500 text-white text-[13px] rounded">
            GET STARTED
          </button>
        </ul>
      )}
    </div>
  );
};

export default Header;


