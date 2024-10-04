import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import { RightArrow } from '@/utils'
export default function serviceItem({ img, title, text }) {
  return (
    <div className="w-full h-full min-w-[8rem] max-w-[24.65rem] min-h-[6rem] max-h-full bg-[#e2e2e2] p-12 flex flex-col justify-between max-md:text-center border-[0.02rem] border-[#71B331]">
      <Image
        src={img}
        width={40}
        height={40}
        alt={'logo'}
        className="max-md:mx-auto"
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
        {RightArrow}
        <p className="my-auto font-[Outfit] text-[#003449] text-[14px] ">
          Learn More
        </p>
      </Link>
    </div>
  )
}
