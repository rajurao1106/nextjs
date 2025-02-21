"use client";
import React from "react";
import under_construction from "../assets/images/components/under-construction.png"

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img
        src={under_construction}
        alt="Under Construction"
        className="w-[40rem] mb-6"
      />
      <h1 className="text-3xl font-semibold text-gray-700">We’re working on something awesome!</h1>
      <p className="text-lg text-gray-500 mt-2">
        Stay tuned, we’ll be live soon. 🚧
      </p>
    </div>
  );
}
