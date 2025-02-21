"use client";
import React from "react";
import whatsapp from "../images/components/whatsapp.png";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-6 left-6 z-100">
      <a href="https://wa.me/918982804998">
        <img loading="lazy" src={whatsapp} alt="" className="w-[60px]" />
      </a>
    </div>
  );
}
