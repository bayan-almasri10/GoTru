import React from 'react'
import Link from 'next/link'
import './globals.css'
import ServiceItem from './serviceItem'
import WebLogo from '/public/assets/Uwp(1).png'
import ReactLogo from '/public/assets/React Js.png'
import ConsoleLogo from '/public/assets/Console.png'
import MobileLogo from '/public/assets/Mobile App Development.png'

export default function OurServices() {
  const Services_sec1 = [
    {
      img: WebLogo,
      title: 'Web Development',
      text: 'Harness the power of our experienced team to transform.',
    },
    {
      img: ReactLogo,
      title: 'System Development',
      text: 'Count on us to deliver high-quality solutions on time and within budget.',
    },
    {
      img: ConsoleLogo,
      title: 'Tech Consulting',
      text: 'Harness the power of our experienced team to transform.',
    },
  ]

  const Services_sec2 = [
    {
      img: MobileLogo,
      title: 'App Development',
      text: 'Count on us to deliver high-quality solutions on time and within budget.',
    },
    {
      img: WebLogo,
      title: 'Web Development',
      text: 'Harness the power of our experienced team to transform.',
    },
    {
      img: ReactLogo,
      title: 'System Development',
      text: 'Count on us to deliver high-quality solutions on time and within budget.',
    },
  ]
  return (
    <div className="OurServices mx-36 my-32">
      <p className="text-[14px] text-[#32353fae] uppercase font-medium mb-7">
        our services
      </p>
      <h1 className="text-[64px] text-[#011F2A] font-[Outfit] w-[950px] leading-[4rem]">
        Unlock Your Business's Full Potential with Us
      </h1>

      <div className="mx-auto mt-28 bg-gradient-to-t from-[rgba(113,179,49)] to-[rgba(0,52,73,0.37)] w-[1144px] h-[290px] max-md:w-[40rem] max-md:h-max flex flex-wrap  max-md:flex-col rounded-2xl shadow-lg overflow-hidden">
        {Services_sec1.map((service, index) => (
          <div
            key={index}
            className="serviceItem mx-auto max-md:mb-0.5 max-md:mx-0.5"
          >
            <ServiceItem
              img={service.img}
              title={service.title}
              text={service.text}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto my-12 bg-gradient-to-t from-[rgba(113,179,49)] to-[rgba(0,52,73,0.37)]  w-[1144px] h-[290px] max-md:w-[40rem] max-md:h-max flex flex-wrap max-md:flex-col rounded-2xl shadow-lg overflow-hidden">
        {Services_sec2.map((service, index) => (
          <div
            key={index}
            className="serviceItem mx-auto max-md:mb-0.5 max-md:mx-0.5"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-short w-6 h-6 p-0.5 text-[24px] rounded-full text-[#71B331] bg-[#003449] my-auto mr-4"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
        <p className="my-auto font-[Outfit] text-[#003449] text-[14px] uppercase">
          view all
        </p>
      </Link>
    </div>
  )
}
