import React from 'react'
import Link from 'next/link'
import './globals.css'
import ServiceItem from './serviceItem'
import { Services_sec1 } from '@/data/index'
import { Services_sec2 } from '@/data/index'
import { RightArrow } from '@/utils'

export default function OurServices() {

  return (
    <div className='w-full px-5 md:p-10'>
      <div className="OurServices mx-auto my-16 md:my-32 grid grid-rows-4 gap-[2.5rem] md:gap-10" id='Service'>
        <div className='h-min row-span-full'>
          <p className="text-[0.7rem] md:text-[0.8rem] text-[#32353fae] uppercase font-medium mb-7">
            our services
          </p>
          <h1 className="text-[3rem] md:text-[4rem] text-[#011F2A] font-[Outfit] min-w-md max-w-3xl leading-[3.4rem] md:leading-[4rem]">
            Unlock Your Business's Full Potential with Us
          </h1>
        </div>
      
{/* bg-gradient-to-t from-[rgba(113,179,49)] to-[rgba(0,52,73,0.37)]  */}
      <div className="mx-auto  min-w-[8rem] max-w-full min-h-[18.3rem]  max-h-full flex flex-wrap md:flex-nowrap  max-md:flex-col rounded-2xl shadow-lg overflow-hidden">
        {Services_sec1.map((service, index) => (
          <div
            key={index}
            className={`serviceItem ${index == 1 ? '' : 'max-md:mx-0.5'}  mx-auto `}
          >
            <ServiceItem
              img={service.img}
              title={service.title}
              text={service.text}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto min-w-[8rem] max-w-full min-h-[18.3rem]  max-h-full flex flex-wrap md:flex-nowrap  max-md:flex-col rounded-2xl shadow-lg overflow-hidden">
        {Services_sec2.map((service, index) => (
          <div
            key={index}
            className={`serviceItem ${index == 1 ? '' : 'max-md:mx-0.5'}  mx-auto `}
          >
            <ServiceItem
              img={service.img}
              title={service.title}
              text={service.text}
            />
          </div>
        ))}
      </div>

      <Link href="#" className="mx-auto cursor-pointer flex w-fit">
        {RightArrow}
        <p className="md:my-auto font-[Outfit] text-[#003449] text-[0.8rem] uppercase">
          view all
        </p>
      </Link>
      </div>
    </div>
   
  )
}
