import React, { useState } from 'react'
import Image from 'next/image'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '/public/assets/IMAGE(1).png'
import img2 from '/public/assets/IMAGE(2).png'
import img3 from '/public/assets/IMAGE(3).png'
import img4 from '/public/assets/IMAGE(4).png'
import img5 from '/public/assets/IMAGE(5).png'
import MainBackground from '/public/assets/IMAGE(6).png'
import GTLogo from '/public/assets/GT.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.css'

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null)
  const [activeTechIndex, setActiveTechIndex] = useState(0)

  const Techs = [
    {
      tec: 'Backend',
      title: 'Back End Development',
      disc: 'Quickstart your development starting from nothing to complex programs.',
      subTechnologies: ['Buildspace','GotTru Bytes','Scaffold Series'],
      img: MainBackground,
      images: [img1, img2, img3],
    },
    {
      tec: 'Frontend',
      title: 'Front End Development',
      disc: 'Quickstart your development starting from nothing to complex programs.',
      subTechnologies: ['Buildspace','GotTru Bytes','Scaffold Series'],
      img: MainBackground,
      images: [img2, img3, img4],
    },
    {
      tec: 'Database',
      title: 'Database Development',
      disc: 'Quickstart your development starting from nothing to complex programs.',
      subTechnologies: ['Buildspace','GotTru Bytes','Scaffold Series'],
      img: MainBackground,
      images: [img3, img4, img5],
    },
    {
      tec: 'Cloud',
      title: 'Cloud Service',
      disc: 'Quickstart your development starting from nothing to complex programs.',
      subTechnologies: ['Buildspace','GotTru Bytes','Scaffold Series'],
      img: MainBackground,
      images: [img1, img4, img5],
    },
  ]

  const slideTo = (index) => {
    swiperRef.slideTo(index, 0)
    setActiveTechIndex(index)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between flex-row-reverse mt-10 ">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={60}
          className="w-2/3 flex rounded-2xl mr-0 "
        >
          {Techs.map((Tech, index) => (
            <SwiperSlide
              key={index}
              virtualIndex={index}
              className="bg-transparent flex flex-col"
            >
              <div className="relative w-[43rem] h-[15rem]">
                <Image
                  src={Tech.img}
                  width={100}
                  height={600}
                  alt="Technologies"
                  className="w-[30rem] h-full absolute -z-50 rounded-r-xl"
                />
                <div className="flex flex-col p-5 align-middle w-fit mt-16">
                  <h1 className="text-start text-[#ffffff] text-[27px] font-[Helvetica] regular">
                    {Tech.title}
                  </h1>
                  <p className="text-left text-[#ffffff] text-[13px] font-[Helvetica] w-2/3 mt-5 regular">
                    {Tech.disc}
                  </p>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-arrow-right-circle text-[#ffffff58] mt-4"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col w-fit m-auto">
          {Techs.map((Tech, index) => (
            <button
              key={index}
              onClick={() => slideTo(index)}
              className={`mb-6 font-[Outfit] text-[22px] font-medium text-left ${
                activeTechIndex === index ? 'text-[#ffffff]' : 'text-[#ffffff62]'
              }`}
            >
              {Tech.tec}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          className="flex flex-wrap w-2/3 h-max mr-0 -top-6 "
        >
          <div className="mx-auto">
            {Techs[activeTechIndex].images.map((img, imgIndex) => (
              <SwiperSlide
                key={`${activeTechIndex}-${imgIndex}`}
                virtualIndex={imgIndex}
                className="h-[14rem] relative rounded-xl bg-transparent"
              >
                <Image
                  src={img}
                  width={100}
                  height={100}
                  alt="Technologies "
                  className="rounded-2xl"
                />
                <div className="absolute z-10 w-full p-4 flex justify-between items-center bottom-0">
                  <p className="text-[#ffffff]">{Techs[activeTechIndex].subTechnologies[imgIndex]}</p>
                  <button className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-circle text-[#ffffff58]"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                      />
                    </svg>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <Image
          src={GTLogo}
          width={200}
          height={200}
          alt="GT Logo"
          className="opacity-10 w-[20rem]"
        />
      </div>
    </div>
  )
}
