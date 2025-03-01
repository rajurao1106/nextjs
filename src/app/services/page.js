"use client";
import React from "react";
import Services from "./Services";
import { useTheme } from "../../components/theme-context";

export default function page() {
  const { theme } = useTheme();
  return (
    <div>
      <div
        className={`relative bg-gradient-to-r ${
          theme
            ? "from-gray-900 via-gray-700 to-black"
            : "from-orange-200 via-white to-pink-200"
        } pt-[8rem] pb-[5rem] text-center`}
      >
        {/* Decorative Elements */}
        <h1 className="text-4xl font-bold font-[Quicksand]">Services</h1>
        <nav className="mt-3 font-[Quicksand]">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt; <span>Services</span>
        </nav>
      </div>
      <Services />
    </div>
  );
}
