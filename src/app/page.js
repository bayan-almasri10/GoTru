'use client'
import React from "react";
import Head from 'next/head';
import Hero from "@/components/Hero/Hero";
import WhyUS from "@/components/Why Us/WhyUS";
import OurServices from "@/components/Our Services/OurServices";
import Technologies from "@/components/Technologies/Technologies";
import Footer from "@/components/Footer/Footer";
import Gotoup from "@/components/ui/Gotoup";
import Stepper from "@/components/Stepper Section/StepperSection";
export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-container">
        <Hero/>
        <WhyUS />
      </div>
      <OurServices />
      <Technologies />
      <Stepper/>
      <Footer/>
      <Gotoup/>
    </div>
  );
}
