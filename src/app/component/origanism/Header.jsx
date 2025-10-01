import React from 'react'

const Header = () => {
  return (
    <div className="flex bg-white flex-col lg:flex-row w-[90%] h-[39px] lg:w-[80%] mx-auto mt-3 items-center justify-between">
     
      <div className="mb-3 lg:mb-0">
        <img
          src="https://algorooms.com/images/background/logo.png"
          alt="Algorooms"
          className="h-8 w-36 ml-15 lg:h-6 lg:w-32"
        />
      </div>

     
      <div className='flex'>
        
          <ul className="flex mr-8 flex-col lg:flex-row items-center gap-5 lg:gap-9 text-sm">
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
            HOME
          </li>
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
            FEATURES
          </li>
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
            CONTACT
          </li>
          <li className="text-[13px] uppercase font-semibold text-gray-700 leading-[30px] lg:leading-[45px]">
            PRICING
          </li>
          <button className="w-[100px] h-[29px]  mt-2  lg:mt-[4px] bg-blue-500 text-white text-[13px] rounded">
            GET STARTED
          </button>
        </ul>
        
        </div>

       
    </div>
  )
}

export default Header
