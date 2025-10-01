import React from 'react'

const Explore = () => {
  return (
    <div className='text-center'>
      <h1
        className='text-4xl mt-10'
        style={{
          animation: 'slideTopSide 1s ease-out forwards'
        }}
      >
        Explore Our Feature
      </h1>
      <p
        className='mt-6 text-gray-500 text-base tracking-normal leading-[25px]'
        style={{
          animation: 'slideTopSide 1s ease-out forwards',
          animationDelay: '0.3s' // paragraph thodi der baad aayega
        }}
      >
        Unlock your investment potential with our unique tools. We <br/>
        make it easier for you to enter the intricate realm of capital <br/>
        trading with revolutionary AI-powered capabilities.
      </p>

      {/* Inline CSS for animation */}
      <style>
        {`
          @keyframes slideTopSide {
            0% { transform: translate(-50px, -100px); opacity: 0; } /* y value ko -100px karke aur upar se start karwaya */
            100% { transform: translate(0, 0); opacity: 1; }
          }
        `}
      </style>
    </div>
  )
}

export default Explore


