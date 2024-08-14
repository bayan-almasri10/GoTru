import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Swiper from './swiper'
import './globals.css'
import GoTruLogo from '/public/assets/Asset 2@3x 1.png'
export default function Technologies() {
  return (
    <div className="w-[1144px] h-max mx-auto py-14 px-10 bg-[#003449] rounded-2xl">
      <div className="grid grid-flow-col m-auto">
        <Image
          src={GoTruLogo}
          width={200}
          height={200}
          alt="Technologies"
          className="w-[150px] h-[100px] my-auto mx-auto items-end"
        />
        <div className="content flex flex-col w-[680px] ml-10">
          <p className="uppercase font-[Outfit] text-[#ffffffb4] font-medium text-[14px] tracking-widest ">
            Technologies
          </p>
          <h1 className="mainTitle text-[64px] font-[Outfit] text-[#ffffff] leading-[4rem] my-5">
            Crafting Tailored Solutions <br></br>
            <span className="text-[#ffffff] opacity-60 text-[40px]">
              to Drive Your Business Forward
            </span>
          </h1>

          <Link href="#" className=" cursor-pointer flex w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon bi bi-arrow-right-short w-6 h-6 p-0.5 text-[24px] rounded-full bg-[#ffffff] text-[#003449] my-auto mr-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
            <p className="my-auto font-[Outfit] text-[#ffffff] text-[14px] align-middle">
              Explore Our Technologies
            </p>
          </Link>
        </div>
      </div>
      <Swiper />
    </div>
  )
}
