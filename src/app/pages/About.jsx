"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import promise from "../assets/images/promise.png";
import ad_campaign from "../assets/images/ad-campaign.jpg";
import vision from "../assets/images/vision.jpg";

export default function AboutUs() {
  const sections = [
    {
      title: "Digital Marketing",
      content:
        "We provide expert digital marketing solutions, including social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, and content marketing to help businesses maximize their online presence.",
      image: promise,
    },
    {
      title: "Branding & Design",
      content:
        "Our branding and design services include logo creation, brand identity development, and innovative creative designs that establish a strong and lasting impression for your business.",
      image: vision,
    },
    {
      title: "Advertising Campaigns",
      content:
        "We craft strategic advertising campaigns across multiple platforms, ensuring targeted reach, high engagement, and impactful brand messaging to drive conversions and brand growth.",
      image: ad_campaign,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top < window.innerHeight * 0.8 &&
            rect.bottom > window.innerHeight * 0.2
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-gray-900 flex flex-col justify-center items-center px-6 py-12">
      {/* Sticky Image & Content */}
      <div className="sticky top-18 max-lg:top-12 w-full max-w-5xl p-6 max-lg:p-3 shadow-lg rounded-2xl transition-transform duration-200 bg-white flex flex-col items-center justify-center gap-0">
        <p className="font-quicksand font-bold text-lg text-red-500">
          What We Offer
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left font-quicksand mb-3">
          Our Creative Services
        </h1>
        <p className="font-quicksand font-bold text-lg w-[80%] max-lg:w-full max-lg:text-sm text-center text-gray-500">
          Get the most of reduction in your team’s operating costs for the whole
          product which creates amazing UI/UX experiences.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={sections[activeIndex].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                width={350}
                height={350}
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-700 font-quicksand">
              {sections[activeIndex].title}
            </h2>
            <p className="text-lg max-lg:text-base text-gray-800 mt-4 leading-relaxed">
              {sections[activeIndex].content}
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling Sections */}
      <div className="flex flex-col items-center w-full mt-16">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="h-[45vh] max-lg:h-[30vh] flex items-center justify-center w-full z-10"
          />
        ))}
      </div>
    </div>
  );
}
