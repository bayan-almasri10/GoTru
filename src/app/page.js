'use client'
import React from "react";
import Head from 'next/head';
import Hero from "@/components/Landing/Hero/Hero";
import WhyUS from "@/components/Landing/Why Us/WhyUS";
import OurServices from "@/components/Landing/Our Services/OurServices";
import Technologies from "@/components/Landing/Technologies/Technologies";
import Footer from "@/components/Landing/Footer/Footer";
import Stepper from "@/components/Landing/Stepper Section/StepperSection";
export default function Home() {
  return (
    <div >
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
    </div>
  );
}
