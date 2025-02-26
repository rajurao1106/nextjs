"use client";

import { useEffect, useState, useRef } from "react";
import promise from "../../images/homepage/promise.png";
import ad_campaign from "../../images/homepage/ad-campaign.jpg";
import vision from "../../images/homepage/vision.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutUs() {
  const sections = [
    {
      title: "Digital Marketing",
      content:
        "We provide expert digital marketing solutions, including social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, and content marketing to help businesses maximize their online presence.",
      image: promise.src || promise,
    },
    {
      title: "Branding & Design",
      content:
        "Our branding and design services include logo creation, brand identity development, and innovative creative designs that establish a strong and lasting impression for your business.",
      image: vision.src || vision,
    },
    {
      title: "Advertising Campaigns",
      content:
        "We craft strategic advertising campaigns across multiple platforms, ensuring targeted reach, high engagement, and impactful brand messaging to drive conversions and brand growth.",
      image: ad_campaign.src || ad_campaign,
    },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 1.3;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-gray-900 flex flex-col items-center px-6 py-12 min-h-[150vh]">
      {/* ✅ Fixed Sticky Section */}
      <div className="sticky top-16 w-full max-w-5xl p-6 shadow-lg rounded-2xl flex flex-col items-center justify-center bg-white">
        <p className="font-[Quicksand] font-bold text-lg text-red-500">
          What We Offer
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left font-[Quicksand] mb-3">
          Our Creative Services
        </h1>
        <p className="font-[Quicksand] font-bold text-lg w-[80%] max-lg:w-full max-lg:text-sm text-center text-gray-500">
          Get the most of reduction in your team’s operating costs for the whole
          product which creates amazing UI/UX experiences.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full mt-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSection}
              src={sections[activeSection].image}
              alt={sections[activeSection].title}
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-700 font-[Quicksand]">
              {sections[activeSection].title}
            </h2>
            <p className="text-lg max-lg:text-base text-gray-800 mt-4 leading-relaxed">
              {sections[activeSection].content}
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling Sections */}
      <div className="flex flex-col items-center w-full mt-20">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="h-[60vh] max-lg:h-[40vh] flex items-center justify-center w-full"
          >
            <span className="text-gray-500 text-lg opacity-0">{section.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
