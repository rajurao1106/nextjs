import React from "react";
import CreativeAdvertising from "./CreativeAdvertising";
import DigitalTransformation from "./DigitalTransformation";
import InnovationExcellence from "./InnovationExcellence";
import ContactUs from "../homepage/ContactUs";
import WhoWeAre from "../homepage/WhoWeAre";
import WhyChooseUs from "../homepage/WhyChooseUs";
import ProcessSection from "./ProcessSection";
import Image from "next/image";
import banner1 from '../../images/about/banner1.png';

export default function About() {
  return (
    <div>
       <div className="relative h-10 bg-gradient-to-r from-green-200 via-red-100 to-indigo-100 text-center">
      {/* Decorative Elements */}
      <Image src={banner1} alt="Banner" className="absolute top-0 h-[100px] w-full object-cover" />
d
      {/* <h1 className="text-4xl font-bold text-gray-900 font-[Quicksand]">About Us</h1>
      <nav className="mt-3 text-gray-600 font-[Quicksand]">
        <a href="/" className="hover:text-gray-900">
          Home
        </a>{" "}
        &gt; <span className="text-gray-900">About Us</span>
      </nav> */}
    </div>
      {/* <CreativeAdvertising /> */}
      <WhoWeAre/>
      {/* <ProcessSection/> */}
      {/* <DigitalTransformation /> */}
      
      <WhyChooseUs/>
      <InnovationExcellence />
      {/* <ContactUs/> */}
    </div>
  );
}
