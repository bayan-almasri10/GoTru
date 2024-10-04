import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/assets/Frame691314578@2x.png'

export default function Header() {
  return (
    <>
      <header className="max-sm:w-[23rem] max-md:w-[40rem] md:w-[63rem] xl:w-[75rem]  h-[6.7rem] flex justify-center md:justify-between items-center max-sm:py-2 p-4 my-10 mx-auto bg-[#FFFFFF] rounded-full shadow-xl static z-50">
        <div>
          <Image
            src={Logo}
            width={221}
            height={59}
            className="ml-7 sm:w-[7rem] md:w-[12rem] mx-auto sm:mx-auto sm:flex sm:justify-center sm:items-center"
            alt="logo go tru"
          />
        </div>
        <div className="block lg:hidden mr-7"></div>
        <div
          className={`max-md:flex max-sm:hidden
            lg:flex lg:flex-row lg:items-center lg:mr-7`}
        >
          <ul className="flex lg:flex-row lg:justify-between">
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#Service'}>Service</Link>
            </li>
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#Portfolio'}>Portfolio</Link>
            </li>
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#Work'}>Work</Link>
            </li>
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#Content'} className="">
                Content
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
