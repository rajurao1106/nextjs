"use client"
import React from "react"; 
import hero_image from '../../../images/services/bulkmessage-service/hero_image.png';
import Image from "next/image";
import sms_icon from "../../../images/services/bulkmessage-service/sms_icon.png";
import whatsapp_icon from "../../../images/services/bulkmessage-service/whatsapp_icon.png";
import email_icon from "../../../images/services/bulkmessage-service/email_icon.png";

export default function BulkMessagingService() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Reach Thousands Instantly with <span className="text-indigo-600">Bulk Messaging</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Engage your audience with personalized SMS, WhatsApp, and Email campaigns — all from one powerful dashboard.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Start Messaging Now
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={sms_icon} alt="SMS" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={whatsapp_icon} alt="WhatsApp" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={email_icon} alt="Email" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Bulk Messaging Service" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Smart Messaging Solutions</h2>
            <p className="text-gray-600 mb-6">
              Our platform helps businesses scale communication with high-delivery bulk SMS, Email, and WhatsApp broadcasts.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">50M+</p>
                <p className="text-gray-500 text-sm">Messages Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">98%</p>
                <p className="text-gray-500 text-sm">Delivery Rate</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">Request a Demo</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Bulk SMS",
                desc: "Send promotional or transactional SMS at lightning speed.",
                icon: "📩",
                border: "border-indigo-100",
              },
              {
                title: "Bulk WhatsApp",
                desc: "Engage users via verified WhatsApp messages and catalogs.",
                icon: "💬",
                border: "border-green-100",
              },
              {
                title: "Bulk Email",
                desc: "Reach inboxes with personalized and responsive email campaigns.",
                icon: "📧",
                border: "border-blue-100",
              },
              {
                title: "Smart Targeting",
                desc: "Segment and personalize messages for better engagement.",
                icon: "🎯",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Bulk Messaging Platform?</h2>
          <p className="text-gray-600">
            Designed for performance, security, and ease — everything you need to manage messaging campaigns effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "High Delivery Rate",
              desc: "Get your messages delivered on time with 99.9% uptime.",
              icon: "⚡",
            },
            {
              title: "User-Friendly Dashboard",
              desc: "Monitor campaigns, manage contacts, and view analytics with ease.",
              icon: "📊",
            },
            {
              title: "Affordable Pricing",
              desc: "Pay only for what you use — no hidden charges.",
              icon: "💰",
            },
            {
              title: "Personalization",
              desc: "Send dynamic messages using contact names and custom fields.",
              icon: "🧠",
            },
            {
              title: "API Integration",
              desc: "Easily integrate messaging into your own app or CRM system.",
              icon: "🔌",
            },
            {
              title: "24/7 Support",
              desc: "Our expert team is always ready to help you out.",
              icon: "🛎️",
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
