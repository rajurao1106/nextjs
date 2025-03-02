"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../../components/theme-context";

import about1 from "../../images/about/about1.png";
import about2 from "../../images/about/about2.png";
import about3 from "../../images/about/about3.jpg";

export default function WhoWeAre() {
  const { theme } = useTheme();
  const textColor = theme ? "text-gray-300" : "text-gray-600";
  const titleColor = theme ? "text-white" : "text-gray-800";

  return (
    <section className={`${theme ? "bg-gray-900 text-white" : "bg-white"} py-16 px-6 md:px-12 flex flex-col gap-10 lg:px-24`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={about1} alt="Our Team" className="rounded-2xl shadow-lg w-full" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-4xl font-bold ${titleColor} mb-4`}>Creative Advertising Agency</h1>
          <h2 className={`text-xl font-bold ${textColor} mb-4`}>
            Welcome to <span className="text-purple-500">Pracharkar Solutions</span>, where creativity meets technology!
          </h2>
          <p className={`text-lg leading-relaxed ${textColor}`}>
            We are a passionate team of innovators, developers, and strategists dedicated to delivering cutting-edge solutions.
            Specializing in web development, advertising, and AI-powered applications, we bring ideas to life with precision and creativity.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${textColor}`}>
            At Pracharkar Solutions, we believe in pushing boundaries, embracing new technologies, and crafting digital experiences
            that leave a lasting impact. Whether it's developing interactive websites, AI-driven applications, or strategic advertising campaigns, we are committed to excellence.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${textColor}`}>
            <strong>Our mission:</strong> Empower businesses with innovative digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Growth Story Section */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse max-lg:flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={about2} alt="Growth Story" className="rounded-2xl shadow-lg w-full" />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl font-bold ${titleColor} mb-4`}>Our Growth Story</h2>
          <p className={`text-lg leading-relaxed ${textColor}`}>
            At <span className="font-semibold text-purple-500">Pracharkar Solutions</span>, we are a team of creative strategists, storytellers, and digital
            experts dedicated to transforming brands. We craft compelling campaigns that captivate audiences and deliver real results.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${textColor}`}>
            Our approach blends data-driven insights with artistic creativity to produce advertising solutions that stand out.
            Whether it's digital marketing, branding, or multimedia campaigns, we create experiences that leave a lasting impact.
          </p>
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={about3} alt="Our Process" className="rounded-2xl shadow-lg w-full" />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl font-bold ${titleColor} mb-4`}>The Process</h2>
          <p className={`text-lg leading-relaxed ${textColor}`}>
            At <span className="font-semibold text-purple-500">Pracharkar Solutions</span>, our process is rooted in creativity and strategy.
            We research, strategize, and execute advertising campaigns that align with brand values and audience needs.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${textColor}`}>
            We combine data-driven insights with artistic creativity to craft compelling experiences that make brands stand out.
            Whether it's digital marketing, branding, or AI-driven campaigns, we help businesses reach their full potential.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${textColor}`}>
            🚀 <span className="font-semibold text-purple-500">Let’s tell your brand’s story</span> in a way the world won’t forget.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
