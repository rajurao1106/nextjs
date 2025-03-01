"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "./theme-context";

const ConnectWithUs = () => {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col items-center justify-center text-center py-16 px-4 ${theme?"text-white":"text-black"}`}>
      {/* Badge */}
      <motion.span
        className="px-4 py-1 mb-3 text-sm font-semibold text-[#ff7b7b] bg-gradient-to-r from-pink-200 to-orange-200 rounded-full shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get Empowered
      </motion.span>

      {/* Title */}
      <h2 className="text-3xl font-bold md:text-4xl">
        Let’s Work Together
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-gray-500 text-lg">
        Reach out to us for any queries.
      </p>

      {/* Button */}
      <Link href={'/contact'}>
        <motion.button
          className="mt-5 px-6 py-3 bg-gradient-to-r from-red-400 to-orange-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Connect With Us !
        </motion.button>
      </Link>
    </div>
  );
};

export default ConnectWithUs;
