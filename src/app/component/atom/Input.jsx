import React from "react";

const Input = ({ type, placeholder, label }) => {
  return (
    <div>
      <span>{label}</span>
      <input
        className="w-full sm:w-[350px] h-[50px] rounded-[25px] bg-[rgba(249,235,255,0.15)] border-none outline-none font-light px-[20px] mb-6 text-white text-[14px] mx-auto lg:mx-0"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
