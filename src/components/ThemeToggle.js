"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-context";
import Image from "next/image";
import sun from '../images/components/sun.gif'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 max-lg:relative max-lg:right-[8.5rem] h-12 flex justify-center items-center rounded-full border-1 border-gray-300 dark:border-gray-700
                 transition-all duration-300 "
      aria-label="Toggle Theme"
    >
      <motion.div
        className=" rounded-full"
        initial={{ x: theme ? 0 : 0 }}
        animate={{ x: theme ? 0 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme ? (
          <image className="flex text-2xl justify-center items-center text-gray-300">🌙</image>
        ) : (
          <Image src={sun} className="" width={500} height={500}/>
        )}
      </motion.div>
    </button>
  );
}
