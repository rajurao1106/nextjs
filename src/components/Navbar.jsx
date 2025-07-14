"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoInformationCircleOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaEnvelope, FaArrowRight, FaPhoneAlt } from "react-icons/fa"; // Added missing icons
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
        { service: "Social Media Marketing", link: "/services/social-media-marketing" },
        { service: "SEO/SEM", link: "/services/search-engine-marketing" },
        { service: "Google Ads", link: "/services/google-ads" },
        { service: "Performance Marketing", link: "/services/performance-marketing" },
        { service: "Political Campaign Management", link: "/services/political-campaign-management" },
        { service: "Lead Generation", link: "/services/lead-generation" },
        { service: "E-mail Marketing", link: "/services/e-mail-marketing" },
        { service: "Content Marketing", link: "/services/content-marketing" },
        { service: "WhatsApp Marketing", link: "/services/whatsapp-marketing" },
        { service: "Bulk Message", link: "/services/bulk-message" },
        { service: "Video Ads", link: "/services/video-ads" },
      ],
    },
    {
      name: "Web & Software Development Services",
      subServices: [
        { service: "Website Development", link: "/services/website-development" },
        { service: "App Development", link: "/services/app-development" },
        { service: "Software Development", link: "/services/software-development" },
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
        <div className="group ">
          <div>Services</div>
          <div className="absolute left-24 w-full  justify-center items-center group-hover:block hidden">
            <div className="bg-[#0000009f] p-4 rounded-xl w-[70rem] mt-2">
              <div className="flex">
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => handleServiceClick(service)}
                    className={`block text-left px-3 py-2 rounded-t-lg transition-colors text-xl ${
                      selectedService.name === service.name
                        ? "bg-white text-blue-500"
                        : "text-white hover:text-blue-400 hover:bg-gray-200"
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
              <div className="border-l bg-white text-sm pt-5 rounded-b-lg text-black">
                {selectedService.subServices.map((subService, index) => (
                  <Link
                    key={index}
                    href={subService.link}
                    className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setMenu(false)} // Close menu on link click
                  >
                    {subService.service}
                  </Link>
                ))}
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
      className={`w-full flex flex-col justify-center items-center pt-1 max-lg:pt-3 fixed z-50 transition-all ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1250px] max-lg:w-[90%] flex justify-between items-center font-medium">
        {/* LOGO */}
        <Link
          href="/"
          className="text-4xl flex flex-col max-lg:text-lg text-blue-500 font-black font-[Quicksand] text-center"
        >
          Pracharkar <span className="max-lg:text-sm text-lg text-gray-500">Solutions</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className={`flex transition-colors ${
            theme === "dark" ? "bg-gray-900 border-t" : "bg-white"
          } gap-12 px-2 shadow-md rounded-md max-lg:hidden`}
        >
          {menuItems.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`border-b-2 transition-all cursor-pointer ${
                select === index ? "border-blue-500 text-blue-500" : "border-transparent"
              }`}
            >
              <Link href={menu.link} className="flex items-center gap-2 px-3 py-3">
                {menu.icon} {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTON & THEME TOGGLE */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 max-lg:hidden text-white px-3 py-3 rounded-lg shadow-md transition-all hover:bg-red-700"
          >
            Get Free Consultant
          </button>
          <ThemeToggle />
        </div>

        {/* ENQUIRY FORM MODAL */}
        {isOpen && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg max-w-6xl w-full mx-4"
            >
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-600">
                  <AiOutlineClose />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div>
                  <h3 className="text-sm text-gray-500 uppercase">We're Here to Help</h3>
                  <h2 className="text-4xl font-bold mt-2 text-gray-900">
                    Discuss Your Advertising Needs
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Looking for creative marketing solutions tailored to your brand? Let’s connect and craft your next big campaign.
                  </p>
                  <div className="mt-6 space-y-4 text-gray-700">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-blue-600" />
                      <span>Email: info@pracharkarsolutions.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="text-blue-600" />
                      <span>Phone: +91-8982804998</span>
                    </div>
                  </div>
                </div>

                {/* Right Section - Form */}
                <div>
                  <form className="space-y-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <select
                      name="industry"
                      className="w-full border border-gray-300 p-3 rounded-lg text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Industry</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="education">Education</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 transition duration-200"
                    >
                      <span>Get a Solution</span>
                      <FaArrowRight />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* MOBILE MENU */}
        <div
          className={`absolute right-5 top-3 hidden max-lg:block transition-all ${
            menu ? "w-[90vw] h-[88vh] rounded-3xl bg-blue-300" : "w-10"
          }`}
        >
          <div className="w-full h-full flex justify-end items-start">
            {menu ? (
              <div className="w-full">
                <div
                  onClick={handleMenu}
                  className="text-2xl w-10 p-2 rounded shadow-md bg-blue-300 text-black ml-auto"
                >
                  <AiOutlineClose />
                </div>
                <ul className="w-full text-center text-3xl text-white flex flex-col gap-8 mt-4">
                  {menuItems.map((item, index) => (
                    <li key={index} onClick={() => setMenu(false)}>
                      <Link href={item.link} className="flex items-center justify-center gap-2">
                        {item.icon} {typeof item.name === "string" ? item.name : "Services"}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setMenu(false);
                      }}
                      className="bg-red-500 text-white px-3 py-3 rounded-lg shadow-md transition-all hover:bg-red-700"
                    >
                      Get Free Consultant
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                onClick={handleMenu}
                className="text-2xl w-10 p-2 rounded shadow-md bg-white"
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