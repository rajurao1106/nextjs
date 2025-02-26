'use client';

import React from 'react';
import Image from 'next/image';

const CreativeAdvertising = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
      {/* Left Side - Images */}
      <div className="flex space-x-4">
        <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-lg">
          <Image 
            src="/images/person-2.jpg" 
            alt="Business discussion" 
            layout="fill" 
            objectFit="cover"
          />
        </div>
      </div>
      
      {/* Right Side - Content */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Creative Advertising Agency
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mt-2">
          Brandmark Creation: Your Integrated Brand Communications Partner.
        </h3>
        <p className="text-gray-600 mt-4">
          At Brandmark Creation, we are dedicated to turning ideas into meaningful brand experiences, ensuring your message stands out in today’s competitive market. Let us help you shape a narrative that inspires and drives success.
        </p>
        <p className="text-gray-600 mt-2">
          In a world where the communication landscape is constantly evolving, Brandmark Creation shines as a trusted and versatile advertising agency. As specialists in integrated communications, we deliver comprehensive solutions that connect brands with their target audiences seamlessly and effectively.
        </p>
        <p className="text-gray-600 mt-2">
          Our approach is rooted in understanding. We delve deep into your brief, interpret it with precision, and ideate with fresh, innovative perspectives. By combining strategic thinking with creative execution, we craft campaigns that not only captivate but also leave a lasting impact on your audience.
        </p>
      </div>
    </section>
  );
};

export default CreativeAdvertising;
