import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GoTurLogo from '/public/assets/Button container.png'
import './globals.css'
import { FooterSocialIcons } from '@/utils'
import { FooterContactIcons } from '@/utils'

import { footer } from '@/data'
export default function Footer() {
  return (
    <div className="w-full max-h-full mt-52 text-[#003449]" id="Content">
      <h1 className="max-sm:text-[3rem] max-md:text-[4rem] md:text-[6.063rem] font-[Outfit] text-center mx-auto max-sm:leading-[3.5rem] md:leading-[3.9rem] tracking-tighter">
        Let's Works Together
      </h1>

      <div className="footer p-10 flex flex-col justify-center">
        <h1 className="max-sm:text-[3rem] max-md:text-[4rem]  md:text-[6.063rem] font-[Outfit] text-center mx-auto max-sm:leading-[3.5rem] md:leading-[0.5rem] tracking-tighter">
          Let’s{' '}
          <span className="creative bg-gradient-to-r from-[#005171] to-[#71B331] text-transparent ">
            Creative
          </span>
        
        </h1>
        <button className="btn uppercase text-[#ffffff] font-bold text-[0.7rem] md:text-[0.9rem] tracking-[0.2rem] bg-[#71B331] py-4 px-6 rounded-full mt-24 mx-auto">
          start a project
        </button>

        <div className="grid grid-cols-1 max-sm:text-center md:grid-cols-5 justify-center gap-10 py-5 mt-32 mb-12 mx-auto ">
          <div className=" flex flex-col justify-between max-sm:justify-center w-[15.438rem] ">
            <Image src={GoTurLogo} width={100} height={100} alt="logo" className="flex max-sm:justify-center max-sm:mx-auto"  />
            <p className="Poppins text-[#003449] font-normal text-[.7rem] max-sm:my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <ul className="flex max-sm:justify-center">
              {FooterSocialIcons.map((icon) => (
                <Link
                  href={'#'}
                  className="bg-[#003449] p-1 w-7 h-7 rounded-full my-auto mr-3"
                >
                  <li>{icon}</li>
                </Link>
              ))}
            </ul>
          </div>

          {footer.map((item, index) => (
            <div key={index}>
              <h2 className="Poppins font-bold text-[18px]">{item.title}</h2>
              <ul className="text-[13.5px] flex flex-col gap-y-3 mt-4">
                {item.title === 'Contact Us'
                  ? item.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="Poppins flex max-sm:justify-center">
                        {FooterContactIcons[linkIndex]}
                        <Link href={link.href} target="_blank" className='ml-2'>
                          {link.link}
                        </Link>
                      </li>
                    ))
                  : item.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="Poppins">
                        <Link href={link.href} target="_blank">
                          {link.link}
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-[#71B331] w-11/12 mx-auto">
          <p className="font-bold mx-auto text-center my-10 text-[13.5px]">
            copyright 2024 @Go-Tru All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}
