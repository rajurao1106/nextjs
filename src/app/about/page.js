"use client"

import React from "react";
import CreativeAdvertising from "./CreativeAdvertising";
import DigitalTransformation from "./DigitalTransformation";
import InnovationExcellence from "./InnovationExcellence";
import ContactUs from "../homepage/ContactUs";
import WhoWeAre from "../homepage/WhoWeAre";
import WhyChooseUs from "../homepage/WhyChooseUs";
import ProcessSection from "./ProcessSection";
import Image from "next/image";
import banner1 from "../../images/about/banner1.png";
import { useTheme } from "../../components/theme-context";

export default function About() {
  const { theme } = useTheme();
  return (
    <div>
      <div
        className={`relative bg-gradient-to-r ${
          theme
            ? "from-gray-900 via-gray-700 to-black"
            : "from-orange-200 via-white to-pink-200"
        } pt-[8rem] pb-[5rem] text-center`}
      >
        {/* Decorative Elements */}
        <h1 className="text-4xl font-bold font-[Quicksand]">About Us</h1>
        <nav className="mt-3 font-[Quicksand]">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt; <span>About Us</span>
        </nav>
      </div>

      <WhoWeAre />
      <WhyChooseUs />
      <InnovationExcellence />
    </div>
  );
}
