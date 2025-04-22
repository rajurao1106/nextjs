"use client"
import React from "react";
import hero_image from '../../../images/services/softwaredevelopment-service/hero_image.png';
import Image from "next/image";
import custom_software from "../../../images/services/softwaredevelopment-service/custom_software.png";
import app_development from "../../../images/services/softwaredevelopment-service/app_development.png";
import system_integration from "../../../images/services/softwaredevelopment-service/system_integration.png";

export default function SoftwareDevelopment() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Build Scalable & Reliable <span className="text-indigo-600">Software Solutions</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We design and develop custom software to help businesses optimize processes, enhance productivity, and drive innovation.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Get a Free Consultation
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={custom_software} alt="Custom Software" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={app_development} alt="App Development" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={system_integration} alt="System Integration" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Software Development" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Software Development Services</h2>
            <p className="text-gray-600 mb-6">
              We offer end-to-end software solutions, from planning and design to development and ongoing support.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">200+</p>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">100+</p>
                <p className="text-gray-500 text-sm">Satisfied Clients</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">View Our Work</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[ 
              {
                title: "Custom Software Development",
                desc: "Tailored software solutions to meet your unique business needs and goals.",
                icon: "💻",
                border: "border-indigo-100",
              },
              {
                title: "Mobile App Development",
                desc: "Developing responsive and user-friendly mobile applications for iOS and Android.",
                icon: "📱",
                border: "border-yellow-100",
              },
              {
                title: "System Integration",
                desc: "Seamless integration of your software with existing systems to streamline workflows.",
                icon: "🔗",
                border: "border-blue-100",
              },
              {
                title: "Software Maintenance",
                desc: "Ongoing support and maintenance to ensure your software performs optimally.",
                icon: "🔧",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Software Development Services?</h2>
          <p className="text-gray-600">
            We focus on delivering scalable, reliable, and efficient software solutions that align with your business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Tailored Solutions",
              desc: "Custom-built software designed to fit your exact business requirements.",
              icon: "🛠️",
            },
            {
              title: "Scalable Applications",
              desc: "Develop scalable and flexible software that grows with your business.",
              icon: "📈",
            },
            {
              title: "Agile Development",
              desc: "Efficient and iterative approach to meet deadlines and evolving requirements.",
              icon: "⚡",
            },
            {
              title: "Quality Assurance",
              desc: "Thorough testing and quality checks to ensure high-quality software.",
              icon: "✅",
            },
            {
              title: "Cross-Platform Support",
              desc: "Develop software that works seamlessly across different platforms.",
              icon: "🌐",
            },
            {
              title: "Ongoing Support",
              desc: "We offer continuous support and maintenance to keep your software up-to-date.",
              icon: "🔄",
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
