import React from 'react'

const Navigate = () => {
  return (
    <div className='mt-10 text-center'>
      <h1
        className='text-[35px] leading-[50px]'
        style={{
          animation: 'slideFromTop 1s ease-out forwards'
        }}
      >
        Navigate the spectrum
      </h1>
      <p
        className='mt-4 text-base tracking-normal leading-[25px] text-gray-400'
        style={{
          animation: 'slideFromTop 1s ease-out forwards',
          animationDelay: '0.3s' // paragraph heading ke baad aayega
        }}
      >
        Amateurs find guidance, experts find innovation - all on our platform.
      </p>

      {/* Inline CSS animation */}
      <style>
        {`
          @keyframes slideFromTop {
            0% { transform: translateY(-300px); opacity: 0; } /* 300px upar se start */
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  )
}

export default Navigate
