import React, { useState } from 'react'
import './globals.css'

export default function WhyUS() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='md:px-4 mx-5'>
      <div className="whyUs grid grid-rows-2 gap-16 md:gap-20 px-8 py-16 max-sm:text-center justify-center max-w-full h-auto bg-opacity-85 text-[#ffffff] mx-auto mt-60 rounded-3xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center justify-center md:justify-start md:items-start">
          <h1 className="my-auto text-[5rem] md:text-[6rem] font-[Outfit] w-full">Why Us?</h1>
          <div className="my-auto max-w-max">
            <p className="whyUS-parg my-auto opacity-80 max-w-max text-[1rem] ">
              Welcome to Go-Tru, where innovation meets expertise. We are a
              passionate team of tech enthusiasts dedicated to bringing your
              digital vision to life with top-tier solutions that fit your
              unique needs
            </p>
            <button
              className={`w-[160px] h-[48px] capitalize rounded-full mt-8 transition-colors duration-300 ${
                isHovered
                  ? 'bg-blue-700 text-[#ffffff]'
                  : 'bg-[rgba(0,37,48,0.3)]  text-[#ffffff]'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? 'Lets Go!' : 'See All'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center justify-center  md:justify-start md:items-start">
          <div className="my-auto">
            <p className="mission font-[Outfit] text-[2.5rem] ">
              Mission Statement:
            </p>
            <p className="whyUS-parg text-[1rem] font-medium max-w-md opacity-60">
              OUR MISSION IS TO TRANSFORM YOUR IDEAS INTO POWERFUL DIGITAL
              SOLUTIONS THAT DRIVE SUCCESS.
            </p>
          </div>
          <div className="my-auto">
            <p className="mission text-[2rem] ">Language Support:</p>
            <p className="whyUS-parg max-w-md  opacity-60">
              OUR MULTILINGUAL TEAM, INCLUDING ARABIC SPEAKERS, IS HERE TO
              ASSIST YOU.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 