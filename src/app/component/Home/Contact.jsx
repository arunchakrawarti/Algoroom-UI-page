import React from "react";

const Contact = () => {
  return (
    <section className="mt-5 sm:px-6 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Left Section */}
        <div
          className="lg:w-[60vw] w-full h-auto lg:h-[95vh] bg-gradient-to-tr from-blue-300 to-blue-900 flex flex-col justify-start pt-10 px-6 lg:pt-36 lg:pl-20 [clip-path:polygon(20%_0%,89%_1%,100%_13%,100%_89%,75%_99%,0_100%,0%_80%,0_0)]"
          style={{ animation: "slideFromLeft 1s ease-out forwards" }}
        >
          <h1 className="text-2xl lg:text-[27px] leading-[25px] tracking-[0] mt-10 lg:mt-20 text-white font-bold mb-6 lg:mb-11">
            Feel free to contact us anytime
          </h1>
          <p className="font-semibold text-base lg:text-[16px] tracking-[0] leading-[25px] text-white">
            Mail your query at:{" "}
            <a
              href="mailto:supports@algorooms.com"
              className="underline hover:text-blue-800"
            >
              supports@algorooms.com
            </a>
          </p>
          <p className="font-semibold text-base lg:text-[16px] tracking-[0] text-white leading-[25px] mt-6 lg:mt-12">
            Reach out to us at:{" "}
            <span className="font-semibold">+91 7042132888</span>
          </p>
        </div>

        {/* Right Section */}
        <div
          className="lg:w-[40vw] w-full bg-[#2e7eed] mt-8 lg:mt-12 rounded-xl z-50 h-auto lg:h-[80vh] flex flex-col px-6 sm:px-12 lg:pl-20 py-10 lg:pt-16 text-center lg:text-left"
          style={{ animation: "slideFromRight 1s ease-out forwards" }}
        >
          <h1 className="text-2xl sm:text-3xl text-center lg:text-4xl text-white font-bold mb-6">
            Contact Us
          </h1>

          <input
            className="w-full sm:w-[350px] h-[50px] rounded-[25px] bg-[rgba(249,235,255,0.15)] border-none outline-none font-light px-[20px] mb-6 text-white text-[14px] mx-auto lg:mx-0"
            type="text"
            placeholder="Your name..."
          />

          <input
            className="w-full sm:w-[350px] h-[50px] rounded-[25px] bg-[rgba(249,235,255,0.15)] border-none outline-none font-light px-[20px] text-[14px] text-white mb-6 mx-auto lg:mx-0"
            type="email"
            placeholder="Your email..."
          />

          <textarea
            className="w-full sm:w-[350px] h-[120px] rounded-[25px] bg-[rgba(249,235,255,0.15)] border-none outline-none font-light px-[20px] pt-3 text-white text-[14px] mx-auto lg:mx-0"
            rows="5"
            placeholder="Your message..."
          ></textarea>

          <button className="py-2 px-2 rounded-3xl transition w-[170px] mt-6 text-blue-600 bg-white mx-auto lg:mx-0">
            Send Message Now
          </button>
        </div>
      </div>

      {/* Keyframes */}
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
    </section>
  );
};

export default Contact;

