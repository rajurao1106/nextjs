"use client";
import React, { useState } from "react";
import { Zap, Target, DollarSign } from "lucide-react";
import examining from "../assets/images/pages/Homepage/cost.jpg";

const features = [
  {
    id: 1,
    icon: <Target className="w-6 h-6 text-red-600" />,
    bgColor: "bg-red-100",
    title: "Better",
    description:
      "Guaranteed Inboxing boosts email deliverability, driving a 3X ROI via boosted sales, leads, and engagement.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    background: "bg-red-500",
    border: "border-red-500",
  },
  {
    id: 2,
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    bgColor: "bg-yellow-100",
    title: "Faster",
    description:
      "Accelerate your progress with our dedicated Relationship Managers and campaign executives, ensuring personalized attention and swift outcomes.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    background: "bg-yellow-500",
    border: "border-yellow-500",
  },
  {
    id: 3,
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-100",
    title: "Cost-Effective",
    description:
      "Our products and services boast exceptional cost-effectiveness, offering the lowest prices in the market.",
    image: examining,
    background: "bg-blue-500",
    border: "border-blue-500",
  },
];

export default function WhyChooseUs() {
  const [selectedImage, setSelectedImage] = useState(features[0].image);

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="w-full max-w-[1100px] mx-auto px-4 flex flex-col justify-between items-center gap-12">
      <div className="space-y-4 text-center flex flex-col justify-center items-center">
            <p className="font-[Quicksand] font-bold text-lg text-red-500 text-center">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left font-[Quicksand] mb-3">
              Our Creative Services
            </h1>
            <p className="font-[Quicksand] font-bold text-lg w-[80%] max-lg:w-full max-lg:text-sm text-center text-gray-500">
              Get the most of reduction in your team’s operating costs for the
              whole product which creates amazing UI/UX experiences.
            </p>
          </div>
        <div className="flex gap-10 max-lg:flex-col-reverse">
        <div className="flex-1 flex-col justify-center items-center space-y-12">
          
          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`flex group z-10 relative gap-4 items-start cursor-pointer shadow-md hover:shadow-lg overflow-hidden rounded-lg border-l-3 ${feature.border}`}
                onClick={() => setSelectedImage(feature.image)}
              >
                <div
                  className={`absolute w-full h-full right-[100%] transition-all group-hover:right-0 ${feature.background}`}
                ></div>
                <div className={`p-3 m-3 ${feature.bgColor} rounded-lg z-10`}>
                  {feature.icon}
                </div>
                <div className="space-y-2 z-10 m-3  ">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-all duration-300">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed group-hover:text-white transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src={selectedImage}
            alt="Feature representation"
            className="w-full h-auto rounded-lg shadow-xl transition-all duration-300"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
