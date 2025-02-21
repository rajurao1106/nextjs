"use client";
import React, { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  const [select, setSelect] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleClick = (index) => {
    setSelect(index);
  };

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome />, link: "/" },
    { name: "About", icon: <IoInformationCircleOutline />, link: "/about" },
    {
      name: "Services",
      icon: <MdOutlineMiscellaneousServices />,
      link: "/services",
    },
    { name: "Portfolio", icon: <LuBriefcaseBusiness />, link: "/portfolio" },
    { name: "Contact", icon: <IoCallOutline />, link: "/contact" },
  ];

  return (
    <nav className="w-full flex flex-col justify-center items-center pt-3 fixed z-100">
      <div className="w-full max-w-[1250px] max-lg:max-w-[350px] flex justify-between items-center font-medium">
        <h1 className="text-4xl max-lg:text-lg text-blue-500 font-black font-[Quicksand] text-center">
          Pracharkar{" "}
          <p className="max-lg:text-sm text-lg text-gray-500">Solutions</p>
        </h1>
        <ul className="flex gap-20 px-2 bg-white shadow-md rounded-md max-lg:hidden">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={` ${
                select === index
                  ? " border-b-2 border-blue-500 text-blue-500"
                  : "border-b-2 border-white"
              }`}
            >
              <div
                to={menu.link}
                className="flex items-center gap-2 px-3 py-4  cursor-pointer transition-all"
              >
                {menu.icon} {menu.name}
              </div>
            </li>
          ))}
        </ul>
        <div
          to={"/contact"}
          className="bg-red-500 max-lg:hidden max-lg:text-sm text-white p-4 rounded-xl flex justify-center items-center gap-2 shadow-md "
        >
          <IoCallOutline />
          Contact Us
        </div>

        <div
          className={`absolute right-5 hidden max-lg:block
              bg-blue-200 top-5 transition-all ${
                menu
                  ? "w-[90vw] h-[88vh] rounded-4xl"
                  : "hover:w-[0vw] hover:h-[0vw] right-0 bg-white"
              }`}
        >
          <div className="w-full h-full flex justify-end items-start">
            {menu ? (
              <div className="">
                <div
                  onClick={handleMenu}
                  className={`text-2xl w-10 hidden max-lg:block p-2 rounded shadow-md ${menu?"bg-blue-200 shadow-none rounded-xl":""}`}
                >
                  <AiOutlineClose />
                </div>
                <ul
                  className={
                    "absolute w-full text-center text-3xl flex flex-col gap-8 left-0 transition-all duration-3000"
                  }
                >
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
                </ul>
              </div>
            ) : (
              <div
                onClick={handleMenu}
                className="text-2xl w-10 p-2 rounded shadow-md bg-white hidden max-lg:block"
              >
                <AiOutlineMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
