"use client";
import React from "react";
import hero_image from '../../../images/services/app-development/hero-image.png';
import react from "../../../images/services/app-development/react.png";
import flutter from "../../../images/services/app-development/flutter.png";
import android from "../../../images/services/app-development/android.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Launch Your Dream{" "}
              <span className="text-indigo-600">App Today</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We build world-class web and mobile apps tailored to your business
              goals. Trusted by startups and enterprises alike.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Get a Free Consultation
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image
                src={react}
                alt="Slack"
                className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100"
              />
              <Image
                src={flutter}
                alt="Microsoft"
                className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100"
              />
              <Image
                src={android}
                alt="Logitech"
                className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100"
              />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Hero" className="w-[50rem]" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              End-to-End App Development Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              From concept to deployment, we design and develop custom apps that
              are fast, secure, and scalable for your business.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">2M+</p>
                <p className="text-gray-500 text-sm">App Downloads</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">1.5k+</p>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Explore Our Services
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "iOS & Android Apps",
                desc: "High-performance mobile apps for both platforms.",
                icon: "📱",
                border: "border-indigo-100",
              },
              {
                title: "Web Apps",
                desc: "Modern, scalable web applications for any device.",
                icon: "💻",
                border: "border-yellow-100",
              },
              {
                title: "UI/UX Design",
                desc: "Delightful user experiences from wireframe to launch.",
                icon: "🎨",
                border: "border-blue-100",
              },
              {
                title: "Maintenance & Support",
                desc: "We ensure your app runs smoothly post-launch.",
                icon: "🛠️",
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

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our App Development Services?
          </h2>
          <p className="text-gray-600">
            Our team combines creativity, strategy, and technology to build apps
            that users love and businesses rely on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cross-Platform Ready",
              desc: "Build once, deploy anywhere—iOS, Android, Web.",
              icon: "🔁",
            },
            {
              title: "Secure Architecture",
              desc: "Data protection and app security built-in from the start.",
              icon: "🔐",
            },
            {
              title: "Agile Process",
              desc: "Fast, iterative development with complete transparency.",
              icon: "⚙️",
            },
            {
              title: "Third-Party Integrations",
              desc: "Easily integrate with payment gateways, APIs & more.",
              icon: "🔌",
            },
            {
              title: "Cloud Ready",
              desc: "Our apps scale effortlessly with your growing user base.",
              icon: "☁️",
            },
            {
              title: "Analytics & Monitoring",
              desc: "Real-time insights to help improve performance and UX.",
              icon: "📊",
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

      {/* Testimonials */}
      {/* <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            `"Our app reached 100K downloads in 3 months—absolutely incredible!"`,
            `"The team was professional, fast, and exceeded all expectations."`,
          ].map((quote, i) => (
            <div
              key={i}
              className="bg-indigo-50 rounded-xl shadow p-6 italic text-gray-700"
            >
              {quote}
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
