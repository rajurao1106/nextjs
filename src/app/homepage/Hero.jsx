"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  ChevronRight,
  Palette,
  LineChart,
} from "lucide-react";

// Import images using Next.js absolute paths
import homepage_image from "../../images/homepage/homepage-image.png";

export default function Hero() {
  return (
    <div className="bg-white pt-[3rem] -z-1">
      {/* Hero Section */}
      <div className="container max-w-[1200px] mx-auto px-6 pt-10 max-lg:pt-0 pb-24 relative">
        <div className="flex gap-16 items-center max-lg:flex-col-reverse">
          {/* Left Content */}
          <div className="space-y-8 relative">
            <h1 className="text-[3.5rem] max-lg:text-[2.5rem] max-lg:text-center font-bold leading-[1.1] tracking-tight">
              We Are Solution <br />
              Oriented <span className="text-orange-500">Digital</span> <br />
              Agency
            </h1>
            <p className="text-gray-500 text-lg max-lg:text-center">
              Suspendisse id odio a felis porta semper eu id ligula. Cras
              vestibulum nisl eu vehicula finibus. Praesent sollicitudin, arcu
              eu facilisis.
            </p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="border border-gray-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center">
                How It Works
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative ">
              <Image
                src={homepage_image}
                alt="Professional woman"
                width={1040}
                height={512}
                className="rounded-full w-[65rem] max-lg:w-[40rem] h-[32rem] max-lg:h-[20rem] object-cover"
              />

              {/* Floating Icons Around Image */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
              </div>

              <div className="absolute -left-4 top-1/4">
                <div className="bg-white p-3 rounded-lg flex justify-center items-center gap-2 font-semibold shadow-lg">
                  Digital Marketing
                </div>
              </div>

              <div className="absolute right-0 bottom-16">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <Palette className="w-6 h-6 text-purple-500" />
                </div>
              </div>

              <div className="absolute left-16 -bottom-4">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <LineChart className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
