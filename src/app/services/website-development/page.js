"use client"
import React from "react";
import hero_image from '../../../images/services/webdevelopment-service/hero-image.png';
import Image from "next/image";
import wordpress from "../../../images/services/webdevelopment-service/wordpress.png";
import vs_code from "../../../images/services/webdevelopment-service/vs-code.png";
import shopify from "../../../images/services/webdevelopment-service/shopify.png";

export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Build Scalable & Modern <span className="text-indigo-600">Web Applications</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We craft high-performance websites and web apps for startups and enterprises using modern technologies.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Get a Free Quote
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={wordpress} alt="Slack" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={vs_code} alt="Microsoft" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={shopify} alt="Logitech" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Web Development" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Web Development Services</h2>
            <p className="text-gray-600 mb-6">
              We offer end-to-end development solutions — from planning and design to deployment and maintenance.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">1k+</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">800+</p>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">View Our Work</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Frontend Development",
                desc: "Responsive, fast, and beautiful UI with React, Next.js, and Tailwind.",
                icon: "🖥️",
                border: "border-indigo-100",
              },
              {
                title: "Backend Development",
                desc: "Secure and scalable APIs with Node.js, Express, and databases.",
                icon: "🛠️",
                border: "border-yellow-100",
              },
              {
                title: "CMS Solutions",
                desc: "Custom or WordPress-based content management systems.",
                icon: "🗂️",
                border: "border-blue-100",
              },
              {
                title: "E-commerce Development",
                desc: "Robust e-commerce sites with seamless checkout experiences.",
                icon: "🛒",
                border: "border-pink-100",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-5 border ${service.border} shadow-sm hover:shadow-md transition`}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Web Development Services?</h2>
          <p className="text-gray-600">
            From custom design to deployment, we ensure your website is fast, secure, and aligned with your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Design",
              desc: "Unique design tailored for your brand and audience.",
              icon: "🎨",
            },
            {
              title: "Mobile-First Approach",
              desc: "Responsive design that looks great on all devices.",
              icon: "📱",
            },
            {
              title: "SEO Optimized",
              desc: "Built with best practices to improve search rankings.",
              icon: "🚀",
            },
            {
              title: "Performance Focused",
              desc: "Fast load times and optimized assets for a smooth experience.",
              icon: "⚡",
            },
            {
              title: "Secure & Scalable",
              desc: "Built with top security practices and future growth in mind.",
              icon: "🔒",
            },
            {
              title: "Ongoing Support",
              desc: "We don’t stop after launch — we help you scale and maintain.",
              icon: "🔧",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
