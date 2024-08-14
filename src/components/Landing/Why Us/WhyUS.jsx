import React, { useState } from 'react'
import './globals.css'
export default function WhyUS() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div>
      <div className="whyUs grid max-xl:grid-row-2 max-md:gap-16 max-md:flex max-md:flex-col max-md:w-[40rem] max-md:h-auto max-md:mx-auto max-md:text-center justify-center w-[1320px] h-[638px] py-8 bg-opacity-85 text-[#ffffff] mx-auto mt-60 rounded-3xl ">
        <div className="grid grid-cols-2 gap-24 max-md:gap-12 max-md:flex max-md:flex-col max-md:mx-auto max-md:text-center">
          <h1 className="my-auto text-[96px] font-[Outfit]">Why Us?</h1>
          <div className="my-auto w-[444px] h-[176px]">
            <p className="whyUS-parg opacity-80">
              Welcome to Go-Tru, where innovation meets expertise. We are a
              passionate team of tech enthusiasts dedicated to bringing your
              digital vision to life with top-tier solutions that fit your
              unique needs
            </p>
            <button
              className={`w-[160px] h-[48px] capitalize rounded-full my-8 transition-colors duration-300 ${
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

        <div className="grid grid-cols-2 gap-24 max-md:gap-12 max-md:flex max-md:flex-col max-md:mx-auto max-md:text-center max-md:mt-14 ">
          <div className="my-auto ">
            <p className="mission font-[Outfit] text-[40px] ">
              Mission Statement:
            </p>
            <p className="whyUS-parg text-[16px] font-medium w-[520px] opacity-60">
              OUR MISSION IS TO TRANSFORM YOUR IDEAS INTO POWERFUL DIGITAL
              SOLUTIONS THAT DRIVE SUCCESS.
            </p>
          </div>
          <div className="my-auto">
            <p className="mission text-[40px] ">Language Support:</p>
            <p className="whyUS-parg w-[520px] opacity-60">
              OUR MULTILINGUAL TEAM, INCLUDING ARABIC SPEAKERS, IS HERE TO
              ASSIST YOU.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
