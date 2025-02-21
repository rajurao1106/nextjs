"use client";
import React from "react";
import Image from "next/image";
import under_construction from "../images/components/under-construction.png"; // Adjust path

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <Image
        src={under_construction}
        alt="Under Construction"
        className="w-[40rem] mb-6"
        width={640}
        height={480}
        priority
      />
      <h1 className="text-3xl font-semibold text-gray-700">
        We’re working on something awesome!
      </h1>
      <p className="text-lg text-gray-500 mt-2">
        Stay tuned, we’ll be live soon. 🚧
      </p>
    </div>
  );
}