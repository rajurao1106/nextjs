"use client";
import React from "react";
import page_not_found from "../assets/images/components/page_not_found.png";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <img 
        src={page_not_found} 
        alt="Page Not Found" 
        className="max-w-full h-auto md:max-w-lg"
      />
    </div>
  );
}
