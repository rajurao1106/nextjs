"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        // Show when user scrolls down 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-100">
          <button
            onClick={scrollToTop}
            className="text-2xl p-2 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-800 transition duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
}
