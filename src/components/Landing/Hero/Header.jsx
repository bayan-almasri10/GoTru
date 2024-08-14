import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/assets/Frame691314578@2x.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="xl:w-11/12 max-sm:w-[20rem] max-md:w-[50rem] h-[107px] flex justify-between items-center max-sm:py-2 p-4 my-10 mx-auto bg-[#FFFFFF] rounded-full shadow-xl">
        <div>
          <Image
            src={Logo}
            width={221}
            height={59}
            className="ml-7 max-sm:w-[7rem]"
            alt="logo go tru"
          />
        </div>
        <div className="block lg:hidden mr-7">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-[#003449]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col lg:flex lg:flex-row lg:items-center lg:mr-7`}
        >
          <ul className="flex flex-col lg:flex-row lg:justify-between">
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#'}>Service</Link>
            </li>
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#'}>Portfolio</Link>
            </li>
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#'}>Work</Link>
            </li>
            <li className="ml-5 font-bold text-base cursor-pointer text-[#003449]">
              <Link href={'#'}>Content</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
