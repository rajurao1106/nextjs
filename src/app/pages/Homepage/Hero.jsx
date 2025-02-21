"use client";
import React from "react";
import {
  Award,
  ChevronRight,
  CircleDot,
  KeyRound,
  LayoutDashboard,
  Settings,
  Search,
  Palette,
  LineChart,
} from "lucide-react";
import homepage_image from "../../assets/images/pages/Homepage/homepage-image.png"

export default function Hero() {
  return (
    <div className=" bg-white pt-[3rem] ">
      {/* Navigation */}
      

      {/* Hero Section */}
      <div className="container max-w-[1200px] mx-auto px-6 pt-10 max-lg:pt-0 pb-24 relative">
        <div className="flex gap-16 items-center max-lg:flex-col-reverse">
          {/* Left Content */}
          <div className="space-y-8 relative">
            <h1 className="text-[3.5rem] max-lg:text-[2.5rem] max-lg:text-center font-bold  leading-[1.1] tracking-tight">
              We Are Solution <br />
              Oriented <span className="text-orange-500">Digital</span> <br />
              Agency{" "}
              
            </h1>
            <p className="text-gray-500 text-lg  max-lg:text-center">
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
            {/* <div className="flex items-center space-x-8 pt-4">
              <p className="text-sm font-medium text-gray-600">Trusted By</p>
              <div className="flex space-x-6">
                {["Google", "Microsoft", "Slack", "Notion"].map(
                  (brand, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center"
                    >
                      <CircleDot className="w-4 h-4 text-gray-400" />
                    </div>
                  )
                )}
              </div>
            </div> */}

            {/* Floating Elements - Left Side */}
            
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={homepage_image}
                alt="Professional woman"
                className="rounded-full w-[65rem] max-lg:w-[40rem] h-[32rem] max-lg:h-[20rem]"
              />

              {/* Floating Icons Around Image */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
              </div>

              <div className="absolute -left-4 top-1/4">
                <div className="bg-white p-3 rounded-lg flex justify-center items-center gap-2 font-semibold shadow-lg">
                  {/* <Search className="w-6 h-6 text-blue-500" /> */}Digital Marketing 
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

            {/* Background Circle */}
           </div>
        </div>

        {/* Floating Elements */}
        {/* <div className="absolute bottom-20 right-20">
          <LayoutDashboard className="w-10 h-10 text-red-500 animate-bounce" />
        </div> */}
      </div>

      {/* Specialties Section */}
      {/* <div className="container mx-auto px-6 pb-16 max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-12">Our Specialities</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            {
              name: "Analytics",
              icon: <LineChart className="w-8 h-8 text-purple-600" />,
            },
            {
              name: "Development",
              icon: <LayoutDashboard className="w-8 h-8 text-purple-600" />,
            },
            {
              name: "Research",
              icon: <Search className="w-8 h-8 text-purple-600" />,
            },
            {
              name: "Design",
              icon: <Palette className="w-8 h-8 text-purple-600" />,
            },
            {
              name: "Support",
              icon: <Settings className="w-8 h-8 text-purple-600" />,
            },
          ].map((specialty, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
                {specialty.icon}
              </div>
              <p className="text-sm font-medium text-gray-700">
                {specialty.name}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
