'use client';

import React from 'react';
import Image from 'next/image';
import { FaSyncAlt, FaUserCog, FaAward } from 'react-icons/fa';

const DigitalTransformation = () => {
  return (
    <section className=" py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="md:w-1/2">
        <span className="px-4 py-1 bg-green-500 text-xs font-semibold uppercase rounded-full">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Digital Transformation at Scale
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <FaSyncAlt className="text-red-400 text-2xl" />
            <div>
              <h3 className="text-xl font-semibold">360-Degree Approach</h3>
              <p className="">
                With a comprehensive 360-degree approach to Omnichannel marketing, we offer everything from cloud-based marketing technology to automation through data-driven digital marketing channels.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <FaUserCog className="text-orange-400 text-2xl" />
            <div>
              <h3 className="text-xl font-semibold">Personalization</h3>
              <p className="">
                We specialize in providing 1:1 personalization, consumer value, and substantial business growth on a global scale.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <FaAward className="text-red-500 text-2xl" />
            <div>
              <h3 className="text-xl font-semibold">Experience and Expertise</h3>
              <p className="">
                Consistently delivered award-winning results through 15 years of expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/images/meeting.jpg" 
            alt="Business Presentation" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
