'use client';

import React from 'react';
import { FaAward, FaBullhorn, FaHandshake, FaLightbulb } from 'react-icons/fa';

const InnovationExcellence = () => {
  const features = [
    {
      id: 1,
      icon: <FaAward className="text-3xl text-orange-500" />, 
      title: "Crafting Exceptional User Experiences",
      description: "Our design philosophy revolves around actionable insights to create impactful marketing collateral and digital experiences."
    },
    {
      id: 2,
      icon: <FaBullhorn className="text-3xl text-green-500" />, 
      title: "Orchestrating Intelligent Marketing Campaigns",
      description: "We deliver personalized, real-time, and contextually relevant information through customer-centric and data-driven campaign management."
    },
    {
      id: 3,
      icon: <FaHandshake className="text-3xl text-purple-500" />, 
      title: "Global Trust: Your Reliable Marketing Partner",
      description: "A trusted partner with a track record of serving over 100 national and international brands, validated through industry-recognized awards."
    },
    {
      id: 4,
      icon: <FaLightbulb className="text-3xl text-teal-500" />, 
      title: "Pioneering Innovation and Data-Driven Excellence",
      description: "We have evolved as a pioneer in the marketing landscape, overcoming challenges and discovering new technologies to address contemporary marketing issues."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-16 text-center">
      <span className="px-4 py-1 bg-green-200 text-green-600 text-xs font-semibold uppercase rounded-full">
        A Journey to Success
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
        A Decade and a Half of Innovation and Excellence
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white shadow-lg p-6 rounded-2xl text-center flex flex-col items-center">
            <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow-md mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovationExcellence;
