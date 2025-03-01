"use client";

import React from "react";
import Portfolio from "./Portfolio";
import { useTheme } from "../../components/theme-context";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className={theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div
        className={`relative bg-gradient-to-r ${
          theme ? "from-gray-900 via-gray-700 to-black" : "from-orange-200 via-white to-pink-200"
        } pt-[8rem] max-lg:pt-[6rem] pb-[4rem] text-center`}
      >
        {/* Decorative Elements */}
        <h1 className="text-4xl font-bold font-[Quicksand]">Portfolio</h1>
        <nav className="mt-3 font-[Quicksand]">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt; <span>Portfolio</span>
        </nav>
      </div>

      <Portfolio />
    </div>
  );
}
