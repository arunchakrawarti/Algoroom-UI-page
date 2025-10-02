import React from 'react'

const Textarea = ({placeholder,label}) => {
  return (
    <div>
      <textarea
            className="w-full sm:w-[350px] h-[120px] rounded-[25px] bg-[rgba(249,235,255,0.15)] border-none outline-none font-light px-[20px] pt-3 text-white text-[14px] mx-auto lg:mx-0"
            rows="5"
            placeholder={placeholder}
            label={label}
          ></textarea>
    </div>
  )
}

export default Textarea
