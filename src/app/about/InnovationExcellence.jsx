"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../../components/theme-context";
import { FaAward, FaBullhorn, FaHandshake, FaLightbulb } from "react-icons/fa";

import about1 from "../../images/about/about1.png";
import about2 from "../../images/about/about2.png";
import about3 from "../../images/about/about3.jpg";

export default function WhoWeAre() {
  const { theme } = useTheme();
  const textColor = theme ? "text-gray-300" : "text-gray-600";
  const titleColor = theme ? "text-white" : "text-gray-800";
  const cardBg = theme ? "bg-gray-800" : "bg-white";
  const cardText = theme ? "text-gray-200" : "text-gray-800";

  return (
    <>
      {/* Innovation Excellence Section */}
      <section className="py-16 px-6 md:px-16 text-center">
        <span className="px-4 py-1 bg-green-200 text-green-600 text-xs font-semibold uppercase rounded-full">
          A Journey to Success
        </span>
        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mt-4`}>
          A Decade and a Half of Innovation and Excellence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              id: 1,
              icon: <FaAward className="text-3xl text-orange-500" />,
              title: "Crafting Exceptional User Experiences",
              description: "Our design philosophy revolves around actionable insights to create impactful marketing collateral and digital experiences.",
            },
            {
              id: 2,
              icon: <FaBullhorn className="text-3xl text-green-500" />,
              title: "Orchestrating Intelligent Marketing Campaigns",
              description: "We deliver personalized, real-time, and contextually relevant information through customer-centric and data-driven campaign management.",
            },
            {
              id: 3,
              icon: <FaHandshake className="text-3xl text-purple-500" />,
              title: "Global Trust: Your Reliable Marketing Partner",
              description: "A trusted partner with a track record of serving over 100 national and international brands, validated through industry-recognized awards.",
            },
            {
              id: 4,
              icon: <FaLightbulb className="text-3xl text-teal-500" />,
              title: "Pioneering Innovation and Data-Driven Excellence",
              description: "We have evolved as a pioneer in the marketing landscape, overcoming challenges and discovering new technologies to address contemporary marketing issues.",
            },
          ].map((feature) => (
            <div key={feature.id} className={`${cardBg} shadow-lg p-6 rounded-2xl text-center flex flex-col items-center`}>
              <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow-md mb-4">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold ${cardText}`}>{feature.title}</h3>
              <p className={`mt-2 text-sm ${textColor}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
