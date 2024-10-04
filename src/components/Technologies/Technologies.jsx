import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Swiper from './swiper'; 
import './globals.css';
import GoTruLogo from '/public/assets/Asset 2@3x 1.png';
import {ArrowTechnologie} from '@/utils/index'; 

const Technologies = () => {
  return (
    <div className="max-w-11/12 max-md:flex max-md:flex-col h-auto py-14 px-10 mx-10 max-sm:mx-5 bg-[#003449] rounded-2xl" id="Portfolio">
      <div className="grid grid-flow-col m-auto max-md:flex max-md:flex-col">
        <Image
          src={GoTruLogo}
          width={200}
          height={200}
          alt="GoTru Technologies Logo" 
          className="w-[10rem] h-[7rem] my-auto mx-auto items-end"
        />
        <div className="content flex flex-col max-w-[42.5rem] ml-10 max-md:flex max-md:flex-col">
          <p className="uppercase font-[Outfit] text-[#ffffffb4] font-medium md:text-[.9rem] tracking-widest">
            Technologies
          </p>
          <h1 className="mainTitle max-md:text-[2rem] md:text-[4rem] font-[Outfit] text-[#ffffff] max-md:leading-[2rem] md:leading-[4rem] my-5">
            Crafting Tailored Solutions <br />
            <span className="text-[#ffffff] opacity-60  max-md:text-[1.5rem] md:text-[2.5rem]">
              to Drive Your Business Forward
            </span>
          </h1>

          <Link href="#" className="cursor-pointer flex w-fit">
            {ArrowTechnologie}
            <p className="my-auto font-[Outfit] text-[#ffffff] text-[.9rem] align-middle">
              Explore Our Technologies
            </p>
          </Link>
        </div>
      </div>
      <Swiper /> 
    </div>
  );
};

export default Technologies;
