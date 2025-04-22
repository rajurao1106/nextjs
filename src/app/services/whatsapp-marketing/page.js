"use client"
import React from "react";
import hero_image from '../../../images/services/whatsapp-marketing-service/hero_image.png';
import Image from "next/image"; 
import notification from "../../../images/services/whatsapp-marketing-service/notification.png";
import message from "../../../images/services/whatsapp-marketing-service/message.png";
import marketing from "../../../images/services/whatsapp-marketing-service/marketing.png";

export default function WhatsAppMarketing() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Boost Sales with Targeted <span className="text-indigo-600">WhatsApp Marketing</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Engage your customers directly with personalized WhatsApp campaigns that drive real business results.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Get a Free Consultation
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={notification} alt="WhatsApp Marketing" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={message} alt="Customer Engagement" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={marketing} alt="Campaigns" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="WhatsApp Marketing" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">WhatsApp Marketing Campaigns</h2>
            <p className="text-gray-600 mb-6">
              From personalized messaging to automated campaigns, we offer end-to-end WhatsApp marketing services that increase engagement and drive sales.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">1k+</p>
                <p className="text-gray-500 text-sm">Campaigns Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">500+</p>
                <p className="text-gray-500 text-sm">Businesses Served</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">View Our Work</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[ 
              {
                title: "Personalized Messaging",
                desc: "Send targeted, personalized messages that speak directly to your customers' needs.",
                icon: "📲",
                border: "border-indigo-100",
              },
              {
                title: "Automated Campaigns",
                desc: "Set up automated WhatsApp campaigns to engage customers at the right time.",
                icon: "🔄",
                border: "border-yellow-100",
              },
              {
                title: "Customer Support",
                desc: "Provide instant support through WhatsApp, enhancing customer experience.",
                icon: "💬",
                border: "border-blue-100",
              },
              {
                title: "Lead Generation",
                desc: "Generate qualified leads through WhatsApp marketing and follow-up automation.",
                icon: "📈",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our WhatsApp Marketing Services?</h2>
          <p className="text-gray-600">
            We help businesses create meaningful conversations with their customers via WhatsApp, boosting engagement, loyalty, and sales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Instant Communication",
              desc: "Reach your customers instantly and personally on the platform they use the most.",
              icon: "⏱️",
            },
            {
              title: "High Engagement Rates",
              desc: "WhatsApp messages have high open and response rates, ensuring your content gets noticed.",
              icon: "📬",
            },
            {
              title: "Automation & Customization",
              desc: "Automate responses and customize campaigns to ensure relevance and timeliness.",
              icon: "⚙️",
            },
            {
              title: "Cost-Effective",
              desc: "WhatsApp marketing is a low-cost yet highly effective way to engage your customers.",
              icon: "💰",
            },
            {
              title: "Personalized Experience",
              desc: "Create tailored conversations that make your customers feel valued and heard.",
              icon: "❤️",
            },
            {
              title: "Sales Conversion",
              desc: "Turn your WhatsApp conversations into conversions and sales with timely follow-ups.",
              icon: "💸",
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
