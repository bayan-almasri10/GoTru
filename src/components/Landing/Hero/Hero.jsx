import React from 'react'
import Image from 'next/image'
import './globals.css'
import Header from './Header'
import HeroLogo from '/public/assets/Asset 2@3x 2.png'
export default function Hero() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <div className="mx-auto justify-center text-center mt-12 w-max">
          <p className="special text-[#005171] font-[Outfit] text-[93px] tracking-tight text-center">
            Real Agency With Its
          </p>
          <div className="flex justify-center mx-auto text-center">
            <p className=" text-[#005171] z-20 font-[Outfit] text-[93px] tracking-tight text-center leading-[6rem]">
              Super
            </p>
            <div className=" w-[160px] h-[160px]  rounded-full">
              <div className="relative my-auto flex justify-center -top-12">
                <Image
                  src={HeroLogo}
                  width={'100%'}
                  height={'auto'}
                  className="absolute z-20 my-auto top-12"
                  alt="logo"
                />
                <div className="absolute z-10 w-56 h-56 bg-gradient-to-l from-[#ffc3e5] to-[#ffcdb0] rounded-full text-transparent">
                  logo
                </div>
              </div>
            </div>
            <p className=" text-[#005171] z-20 font-[Outfit] text-[93px] tracking-tight text-center leading-[6rem]">
              Digital
            </p>
          </div>
          <p className="w-[516px] text-[16px] mx-auto text-[#2C2C2C] mt-12">
            Using management to control your financial revenue and output might
            make it easier for you to launch a business in the future.
          </p>
          <div className="mx-auto mt-12">
            <button className="btn uppercase flex justify-between mx-auto text-center py-4 px-5 bg-[#003449] rounded-full text-white text-sm font-semibold tracking-[0.1rem] transition-all duration-[4000ms] delay-1000 hover:w-[200px]">
              <span className="my-auto">contact us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="btn-arrow bi bi-arrow-right my-auto ml-3 font-bold"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
