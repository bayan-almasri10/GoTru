import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
export default function serviceItem({ img, title, text }) {
  return (
    <div className=" w-[380px] h-[289px] max-md:w-[39.7rem] bg-[#e2e2e2]  p-12 flex flex-col justify-between max-md:text-center">
      <Image
        src={img}
        width={40}
        height={40}
        alt={'logo'}
        className=" max-md:mx-auto"
      />

      <div>
        <p className="font-[Outfit] text-[#003449] text-[21px] font-medium ">
          {title}
        </p>
        <p className="text font-[Outfit] text-[#1f2126ab] text-[16px] font-light">
          {text}
        </p>
      </div>

      <Link href="#" className="cursor-pointer flex w-fit max-md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="icon bi bi-arrow-right-short w-6 h-6 p-0.5 text-[24px] rounded-full text-[#71B331] bg-[#003449] my-auto mr-4"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
        <p className="my-auto font-[Outfit] text-[#003449] text-[14px] ">
          Learn More
        </p>
      </Link>
    </div>
  )
}
