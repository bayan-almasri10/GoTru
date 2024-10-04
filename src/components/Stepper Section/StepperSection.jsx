import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti'
import './globals.css'
import {steps} from  '../../data/index'
import { playArrow } from '@/utils'
export default function StepperSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    let interval
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentStep((prevStep) => (prevStep % steps.length) + 1)
      }, 2000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isVisible, steps.length])

  return (
    <div ref={sectionRef} id='Work' className="mx-5 md:mx-14 md:max-w-10/12 flex flex-col gap-y-20 md:gap-[6rem]">
      <div className=''>
        <h1 className="font-[Outfit] text-[3rem] md:text-[6.5rem] text-[#003449] w-fit md:max-w-[65rem] leading-[4rem] md:leading-[7rem] mt-44">
          Transforming Ideas into Digital Solutions
        </h1>
        <div className="flex justify-between align-middle ">
          <p className="font-[Outfit] text-[1.1rem] text-[#0d101b89] w-[30rem] mt-8 p-2">
            Our streamlined process ensures your project is handled with care
            and precision at every stage
          </p>
          <div className="relative mr-28 ">
            <button className="absolute flex flex-col md:mt-16 md:ml-5 justify-center p-3 rounded-full w-32 h-32 z-20 text-center mx-auto bg-gradient-to-br from-[#005171] to-[#4b781e] text-[#ffffff]">
              {playArrow}
              <span className=" mx-auto">Works</span>
            </button>
            <div className="absolute flex w-52 h-52 bg-red-200 blur-2xl  z-10 text-transparent rounded-full">
              shadow
            </div>
          </div>
        </div>
      </div>

      <div className="max-md:flex-col md:flex justify-between max-md:gap-3 md:gap-6  md:min-w-screen md:max-w-full mx-auto ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item  ${
              currentStep === index + 1 ? 'active' : ''
            } ${index + 1 < currentStep ? 'complete' : ''} `}
          >

            <div className="step">
              {index + 1 < currentStep ? (
                <TiTick className="bg-blue-600 rounded-full w-full h-full" />
              ) : (
                index + 1
              )}
            </div>
             <div className="cardItem flex flex-col justify-center items-center bg-[#DFDFDF] p-5 mx-3 rounded-md mt-14">
              <Image
                src={
                  currentStep === index + 1
                    ? step.icons.ActiveIcon
                    : step.icons.Icon
                }
                width={40}
                height={40}
                alt="icon"
                className="text-[#DFDFDF] "
              />
              <p className="text-xs font-bold text-[#003449] mt-5 mb-2">
                {step.title}
              </p>
              <p className="text-[8px] text-[#003449] px-5">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
