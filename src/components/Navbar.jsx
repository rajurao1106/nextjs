"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoInformationCircleOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { motion } from "framer-motion";
import { useTheme } from "./theme-context";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme } = useTheme();
  const [select, setSelect] = useState(0);
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      name: "Digital Marketing Services",
      subServices: [
        {
          service: "Social Media Marketing",
          link: "/services/social-media-marketing",
        },
        {
          service: "SEO/SEM (Search Engine Optimization / Search Engine Marketing)",
          link: "/services/search-engine-marketing",
        },
        {
          service: "Google Ads",
          link: "/services/google-ads",
        },
        {
          service: "Performance Marketing",
          link: "/services/performance-marketing",
        },
        {
          service: "Political Campaign Management",
          link: "/services/political-campaign-management",
        },
        {
          service: "Lead Generation",
          link: "/services/lead-generation",
        },
        {
          service: "E-mail Marketing",
          link: "/services/e-mail-marketing",
        },
        {
          service: "Content Marketing",
          link: "/services/content-marketing",
        },
        {
          service: "WhatsApp Marketing",
          link: "/services/whatsapp-marketing",
        },
        {
          service: "Bulk Message",
          link: "/services/bulk-message",
        },
        {
          service: "Video Ads (Promotional Video, CGI Video)",
          link: "/services/video-ads",
        },
      ],
    },
    {
      name: "Web & Software Development Services",
      subServices: [
        {
          service: "Website Development",
          link: "/services/website-development",
        },
        {
          service: "App Development",
          link: "/services/app-development",
        },
        {
          service: "Software Development",
          link: "/services/software-development",
        },
        
        
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleMenu = () => setMenu((prev) => !prev);
  const handleClick = (index) => setSelect(index);

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome />, link: "/" },
    { name: "About", icon: <IoInformationCircleOutline />, link: "/about" },
    {
      name: (
        <div className=" group">
          <div className="">Services</div>
          <div className="w-full absolute left-0 flex justify-center items-center group-hover:h-20 ">
            <div className="absolute hidden group-hover:block bg-[#00000046] p-4 rounded-xl w-[70rem] top-[2rem]">
            <div className="">
            <div className=" pr-4 flex">
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => handleServiceClick(service)}
                    className={`block text-left px-3 py-2 rounded-t-lg transition-colors  ${
                      selectedService.name === service.name ? "bg-white text-blue-500 text-xl " : " text-white hover:text-blue-400 text-xl hover:bg-gray-200"
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
              <div className=" border-l  bg-white text-sm pt-5 rounded-b-lg text-black">
                {selectedService.subServices.map((subService, index) => (
                  <Link 
                    key={index}
                    href={subService.link}
                    className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {subService.service}
                  </Link>
                ))}
              </div>
            </div>

              
            </div>
          </div>
        </div>
      ),
      icon: <MdOutlineMiscellaneousServices />,
      link: "/services",
    },
    { name: "Our Work", icon: <LuBriefcaseBusiness />, link: "/portfolio" },
    { name: "Contact", icon: <IoCallOutline />, link: "/contact" },
  ];

  return (
    <nav
      className={`w-full flex flex-col justify-center items-center pt-1 max-lg:pt-3 fixed z-10 
     
      transition-all`}
    >
      <div className="w-full max-w-[1250px] max-lg:w-[90%] flex justify-between items-center font-medium">
        {/* LOGO */}
        <Link
          href={"/"}
          className="text-4xl flex flex-col max-lg:text-lg text-blue-500 font-black font-[Quicksand] text-center"
        >
          Pracharkar{" "}
          <span className="max-lg:text-sm text-lg text-gray-500">
            Solutions
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className={`flex transition-colors ${
            theme ? "bg-gray-900 border-t" : "bg-white"
          } gap-12 px-2 shadow-md rounded-md max-lg:hidden`}
        >
          {menuItems.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`border-b-2 transition-all cursor-pointer ${
                select === index
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent"
              }`}
            >
              <Link
                href={menu.link}
                className="flex items-center gap-2 px-3 py-3"
              >
                {menu.icon} {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTON & THEME TOGGLE */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 max-lg:hidden text-white px-3 py-3 rounded-lg shadow-md transition-all hover:bg-red-700 mr-5"
          >
            Get Free Consultant
          </button>
        </div>
        <ThemeToggle />
        {/* ENQUIRY FORM MODAL */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {/* Left Offer Section */}
              <div className="bg-gray-200 p-6 w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                <h2 className="text-2xl font-bold mb-3">Check our offer</h2>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>✅ Get your free bonus</li>
                  <li>✅ 100% guarantee money back</li>
                  <li>✅ Get your free bonus</li>
                </ul>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
                  Check offer
                </button>
              </div>

              {/* Right Contact Form Section */}
              <div className="p-6 w-full md:w-1/2 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Contact us
                </h2>
                <form className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <textarea
                    placeholder="Information"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    rows={3}
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-lg hover:bg-blue-600 transition">
                    Submit now
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* MOBILE MENU */}
        <div
          className={`absolute right-5 hidden max-lg:block transition-colors 
           ${
             menu
               ? "w-[90vw] h-[88vh] rounded-3xl  bg-blue-300  top-4 "
               : "right-0 rounded-3xl text-black"
           }`}
        >
          <div className="w-full h-full flex justify-end items-start">
            {menu ? (
              <div>
                <div
                  onClick={handleMenu}
                  className="text-2xl w-10 p-2 rounded shadow-md bg-blue-300 text-black"
                >
                  <AiOutlineClose />
                </div>
                <ul className="absolute w-full text-center text-3xl text-white flex flex-col gap-8 left-0 transition-all">
                  {menuItems.map((item, index) => (
                    <li key={index} onClick={() => setMenu(false)}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
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
