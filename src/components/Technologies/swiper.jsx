import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { Techs } from '../../data'
import { RightArrowTec } from '@/utils' 
import { ScrollArea } from '@/components/ui/scroll-area'

import GTLogo from '/public/assets/GT.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

export default function App() {
  const [activeTechIndex, setActiveTechIndex] = useState(0)

  const slideTo = (index) => {
    setActiveTechIndex(index)
  }

  return (
    <div className="flex flex-col h-full max-md:flex max-md:flex-col">
      <div className="flex justify-between flex-row-reverse max-md:flex max-md:flex-col-reverse">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={60}
          className="w-full flex rounded-2xl mr-0"
        >
          <SwiperSlide
            key={activeTechIndex}
            virtualIndex={activeTechIndex}
            className="bg-transparent flex flex-col"
          >
            <div className="relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
              <Image
                src={Techs[activeTechIndex].img}
                width={100}
                height={100}
                alt="Technologies"
                className="w-full h-full object-cover absolute -z-50 rounded-r-xl"
              />
              <div className="flex flex-col p-5 align-middle w-fit mt-16">
                <h1 className="text-start text-white text-[1.6rem] font-[Helvetica] regular max-md:text-[1.2rem]">
                  {Techs[activeTechIndex].tec}
                </h1>
                <p className="text-left text-white text-[0.9rem] font-[Helvetica] w-2/3 mt-5 regular max-md:w-full">
                  {Techs[activeTechIndex].disc}
                </p>
                <button>{RightArrowTec}</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex md:flex-col w-fit m-auto max-md:mt-3 ">
          {Techs.map((Tech, index) => (
            <button
              key={index}
              onClick={() => slideTo(index)}
              className={`mb-6 font-[Outfit] max-md:text-[1.1rem] md:text-[1.5rem] font-medium text-left max-md:mx-2 ${
                activeTechIndex === index
                  ? 'text-[#ffffff]'
                  : 'text-[#ffffff62]'
              }`}
            >
              {Tech.tec}
            </button>
          ))}
        </div>
      </div>

      {/* Second Swiper for the smaller square images */}
      <div className="flex flex-row-reverse justify-between gap-10  md:gap-40 h-full max-md:flex-col">
        <ScrollArea className="h-[30rem] mx-auto ">
          <Swiper className="flex flex-col w-fit h-auto">
            <SwiperSlide className="bg-transparent flex flex-col h-[50rem]">
              {Techs[activeTechIndex].images.map((img, imgIndex) => (
                <Swiper
                  key={imgIndex}
                  slidesPerView={3}
                  spaceBetween={5}
                  className="mySwiper h-[13rem]"
                >
                  <div className="mx-auto h-full">
                    {Techs[activeTechIndex].images.map((img, imgIndex) => (
                      <SwiperSlide
                        key={imgIndex}
                        virtualIndex={imgIndex}
                        className={`max-h-[13rem] max-w-[13rem] relative rounded-xl bg-transparent ${
                          Techs[activeTechIndex].images.includes(img)
                            ? 'opacity-100'
                            : 'opacity-50'
                        }`}
                      >
                        <Image
                          src={img}
                          width={100}
                          height={100}
                          alt="Technologies"
                          className="rounded-2xl h-full w-full"
                        />
                        <div className="absolute z-10 w-full p-4 flex justify-between items-center bottom-0">
                          <p className="text-[#ffffff]">
                            {Techs[activeTechIndex].subTechnologies[
                              Techs[activeTechIndex].images.indexOf(img)
                            ] || ''}
                          </p>
                          <button className="flex items-center">
                            {RightArrowTec}
                          </button>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              ))}
            </SwiperSlide>
          </Swiper>
        </ScrollArea>
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
