import React from 'react'
import Image from 'next/image'
import './globals.css'
import Header from './Header'
import HeroLogo from '/public/assets/Asset 2@3x 2.png'
import { ContactArrow } from '@/utils'
export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden w-full h-full px-4">
        <Header />
        <div className="mx-auto justify-center text-center mt-12 w-full h-full">
          <p className="special flex justify-center items-center mx-auto text-[#005171] font-[Outfit] max-sm:text-[3rem] max-md:text-[4rem] md:text-[5.8rem] lg:text-[7rem] tracking-tight text-center">
            Real Agency With Its
          </p>
          <div className="max-sm:flex-col md:flex justify-center mx-auto text-center">
            <p className="text-[#005171] z-20 font-[Outfit] max-sm:text-[3rem] max-md:text-[4rem] md:text-[5.8rem] tracking-tight text-center leading-[6rem]">
              Super
            </p>
            <div className=" md:w-[10rem] md:h-[10rem] rounded-full ">
              <div className="relative my-auto max-md:hidden md:flex justify-center md:-top-12 -top-7">
                <Image
                  src={HeroLogo}
                  width={'100%'}
                  height={'auto'}
                  className="absolute w-28 h-24 md:w-52 md:h-44 z-20 flex justify-center items-center my-auto md:top-12"
                  alt="logo"
                />
                <div className="absolute flex justify-center items-center my-auto z-10 w-36 h-36 md:w-56 md:h-56 bg-gradient-to-l from-[#ffc3e5] to-[#ffcdb0] rounded-full" />
              </div>
            </div>
            <p className=" text-[#005171] z-20 font-[Outfit] max-sm:text-[3rem] max-md:text-[4rem] md:text-[5.8rem] tracking-tight text-center leading-[6rem]">
              Digital
            </p>
          </div>
          <p className="max-w-md text-[1rem] md:text[0.5rem] mx-auto text-[#2C2C2C] mt-8 md:mt-12">
            Using management to control your financial revenue and output might
            make it easier for you to launch a business in the future.
          </p>
          <div className="mx-auto mt-8 md:mt-12 ">
            <button className="btn uppercase flex justify-between mx-auto text-center py-4 px-5 bg-[#003449] rounded-full text-white text-xs md:text-sm font-semibold tracking-[0.1rem] transition-all duration-1000 delay-1000 hover:w-[200px]">
              <span className="my-auto">contact us</span>
              {ContactArrow}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
