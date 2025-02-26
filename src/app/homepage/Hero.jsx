"use client";

import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaCode, FaPaintBrush } from "react-icons/fa";
import Image from "next/image";
import bg_image from "../../images/homepage/realistic.png";
import { useTheme } from "../../components/theme-context";
import bg_image2 from "../../images/homepage/bg-image.png";
import outdoor_icon from "../../images/homepage/outdoor-icon.png";
import design_icon from "../../images/homepage/design-icon.png";
import frame1 from "../../images/homepage/frame1.png";
import frame2 from "../../images/homepage/frame2.png";
import frame3 from "../../images/homepage/frame3.png";
import frame4 from "../../images/homepage/frame4.png";
import frame5 from "../../images/homepage/frame5.png";
import frame6 from "../../images/homepage/frame6.png";
import frame7 from "../../images/homepage/frame7.png";
import frame8 from "../../images/homepage/frame8.png";

export default function HeroSection() {
  const { theme } = useTheme();
  const services = [
    {
      title: "Digital Marketing",
      icon: <FaBullhorn className="text-pink-500 text-5xl" />,
      description:
        "Boost your brand’s online presence with expert marketing strategies.",
    },
    {
      title: "SEO Optimization",
      icon: <FaChartLine className="text-blue-500 text-5xl" />,
      description:
        "Improve your search rankings and drive more organic traffic.",
    },
    {
      title: "Web Development",
      icon: <FaCode className="text-green-500 text-5xl" />,
      description:
        "Create stunning, fast, and user-friendly websites with modern tech.",
    },
    {
      title: "Graphic Design",
      icon: <FaPaintBrush className="text-yellow-500 text-5xl" />,
      description:
        "Transform ideas into eye-catching visuals for your brand identity.",
    },
  ];

  return (
    <div
      className={`relative flex flex-col transition-colors ${
        theme ? "bg-gray-900" : "bg-white"
      } items-center 
       text-center px-6 md:px-20 pt-28  overflow-hidden`}
    >
      {" "}
      <Image src={bg_image2} alt="Background" className="absolute max-lg:hidden w-full" />
      {/* Background Image */}
      <div className="relative w-full max-w-[1200px] flex flex-col items-center ">
        <Image
          src={bg_image}
          alt="Background"
          className="max-lg:w-screen  max-lg:h-[80vh]"
        />
        <Image
          src={outdoor_icon}
          alt="Background"
          className="absolute max-lg:hidden top-[0%] left-0 w-20 max-lg:w-14 shadow-xl bg-white p-2 rounded-lg"
        />
        <Image
          src={design_icon}
          alt="Background"
          className="absolute max-lg:hidden top-[0%] right-0 w-20 max-lg:w-14 shadow-xl bg-white p-2 rounded-lg"
        />
        <Image
          src={frame1}
          alt="Background"
          className="absolute max-lg:hidden top-[15%] max-lg:top-[80%] left-0"
        />
        <Image
          src={frame8}
          alt="Background"
          className="absolute max-lg:hidden top-[15%] max-lg:top-[70%] right-0"
        />
        <Image
          src={frame6}
          alt="Background"
          className="absolute max-lg:hidden top-[35%] -left-14 shadow-xl"
        />
        <Image
          src={frame3}
          alt="Background"
          className="absolute max-lg:hidden top-[35%] right-0 shadow-xl"
        />
        <div className="absolute top-0 max-lg:-top-10 ">
          <h1
            className={`text-5xl max-lg:text-[1.7rem] bg-gradient-to-r from-yellow-400 via-yellow-300 
            to-white bg-clip-text text-transparent text-white font-extrabold mt-24 font-[Exo 2]`}
          >
            UNLOCK YOUR POTENTIAL
          </h1>
          <p className="text-lg text-white max-lg:text-gray-300 mt-4 w-[50%] max-lg:w-[90%] mx-auto">
            Embark on a transformative journey with Sync where every course is a
            key to unlocking your boundless potential. Choose your passion,
            embrace leaming, and let your creativity flourish!
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="mt-14 flex gap-10 max-lg:flex-col w-full justify-center items-center"
            >
              {" "}
              <button
                className="hover:text-[#0183F0]
            border duration-200 hover:border-[#0183F0] border-white px-6 max-lg:px-3 
            max-lg:w-[60%] py-3 rounded-2xl text-lg"
              >
                Get a Consultation
              </button>
              <button
                className="bg-white
                hover:bg-[#0153DA] text-blue-800 hover:text-white duration-200 px-6 
               border max-lg:px-3 max-lg:w-[60%] py-3 rounded-2xl text-lg"
              >
                Explore Services
              </button>
            </motion.div>
          </p>
          <div className="absolute top-[180%] w-full flex flex-col items-center text-center px-6">
            <h1 className="text-5xl font-extrabold text-white mt-28 drop-shadow-[0_0_15px_#0183F0]">
              OUR SERVICES
            </h1>
            <p className="text-lg text-white mt-4 w-[30%] leading-relaxed">
              Elevate your brand with our cutting-edge solutions. We provide
              everything you need for success.
            </p>

            {/* Services Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(31,81,255,0.8)] transition duration-300 flex flex-col items-center text-center"
                >
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-white mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
