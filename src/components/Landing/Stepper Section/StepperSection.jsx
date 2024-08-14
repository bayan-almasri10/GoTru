import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti'
import ActiveIcon from '/public/assets/Icon.svg'
import Icon from '/public/assets/ActiveIcon.svg'
import './globals.css'

export default function StepperSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const steps = [
    {
      title: 'Design & Development',
      description: 'Bringing your project to life with clean, efficient code',
      icons: {
        Icon: Icon,
        ActiveIcon: ActiveIcon,
      },
    },
    {
      title: 'Design & Development',
      description: 'Bringing your project to life with clean, efficient code',
      icons: {
        Icon: Icon,
        ActiveIcon: ActiveIcon,
      },
    },
    {
      title: 'Design & Development',
      description: 'Bringing your project to life with clean, efficient code',
      icons: {
        Icon: Icon,
        ActiveIcon: ActiveIcon,
      },
    },
    {
      title: 'Design & Development',
      description: 'Bringing your project to life with clean, efficient code',
      icons: {
        Icon: Icon,
        ActiveIcon: ActiveIcon,
      },
    },
    {
      title: 'Design & Development',
      description: 'Bringing your project to life with clean, efficient code',
      icons: {
        Icon: Icon,
        ActiveIcon: ActiveIcon,
      },
    },
  ]

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
    <div ref={sectionRef}>
      <div className="mx-14 w-[68rem]">
        <h1 className="font-[Outfit] text-[104px] text-[#003449] w-[60rem] leading-[7rem] mt-44">
          Transforming Ideas into Digital Solutions
        </h1>
        <div className="flex justify-between align-middle ">
          <p className="font-[Outfit] text-[18px] text-[#0d101b89] w-[30rem] mt-8 p-2">
            Our streamlined process ensures your project is handled with care
            and precision at every stage
          </p>
          <div className="relative mr-28 ">
            <button className="absolute flex flex-col mt-16 ml-5 justify-center p-3 rounded-full w-32 h-32 z-20 text-center mx-auto bg-gradient-to-br from-[#005171] to-[#4b781e] text-[#ffffff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-play-fill mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
              <span className=" mx-auto">Works</span>
            </button>
            <div className="absolute flex w-52 h-52 bg-red-200 blur-2xl  z-10 text-transparent rounded-full">
              shadow
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-6 w-[1300px] mx-auto my-44">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${
              currentStep === index + 1 ? 'active' : ''
            } ${index + 1 < currentStep ? 'complete' : ''}`}
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
