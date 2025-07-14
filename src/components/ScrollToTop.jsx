"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let timeoutId;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(scrollTop > 300);
      }, 100);
    };

    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            fixed bottom-6 right-6 z-50
            w-12 h-12 rounded-full
            bg-gradient-to-br from-red-500 to-red-600
            text-white shadow-md
            flex items-center justify-center
            transition-colors duration-200
            hover:from-red-600 hover:to-red-700
          `}
        >
          <FaArrowUp className="text-xl" />
          {/* Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full transform rotate-[-90deg]"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r={normalizedRadius}
              fill="transparent"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={stroke}
            />
            <motion.circle
              cx="24"
              cy="24"
              r={normalizedRadius}
              fill="transparent"
              stroke="white"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              initial={false}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
