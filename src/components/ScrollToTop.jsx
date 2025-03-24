"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"; // Added for better animations

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll handler with debouncing for better performance
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 300);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2
            transition-colors duration-200
            hover:from-red-600 hover:to-red-700
          `}
        >
          <FaArrowUp className="text-xl" />
          {/* Optional tooltip */}
          <span className="sr-only">Scroll to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}