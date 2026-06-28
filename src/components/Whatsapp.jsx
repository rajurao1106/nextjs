"use client";
import React from "react";
import whatsapp from "../images/components/whatsapp.png";
import Image from "next/image";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a href="https://wa.me/919770142242">
      <Image loading="lazy" src={whatsapp} alt="" className="w-[60px] h-[60px]" />
      </a>
    </div>
  );
}
