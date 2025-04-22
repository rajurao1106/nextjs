"use client"
import React from "react";
import hero_image from '../../../images/services/google-ads/hero_image.png';
import Image from "next/image";
import crm from "../../../images/services/google-ads/crm.png";
import funnel from "../../../images/services/google-ads/funnel.png";
import email_marketing from "../../../images/services/google-ads/email_marketing.png";


export default function googleads() {
  return ( 
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="flex gap-20 max-lg:flex-col-reverse">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Generate High-Quality Leads with <span className="text-yellow-500">Effective Strategies</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We help businesses generate and nurture high-quality leads through proven methods and targeted campaigns.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-yellow-500 hover:bg-yellow-700 transition duration-300 shadow-md">
              Get a Free Consultation
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={crm} alt="CRM" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={funnel} alt="Sales Funnel" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={email_marketing} alt="Email Marketing" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Lead Generation" className="w-[50rem] max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Lead Generation Services</h2>
            <p className="text-gray-600 mb-6">
              We provide a full range of lead generation services, from attracting visitors to converting them into loyal customers.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">1k+</p>
                <p className="text-gray-500 text-sm">Leads Generated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">500+</p>
                <p className="text-gray-500 text-sm">Conversions Delivered</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">See Our Results</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[ 
              {
                title: "Lead Capture Forms",
                desc: "Attract visitors with high-converting lead capture forms.",
                icon: "📝",
                border: "border-indigo-100",
              },
              {
                title: "Sales Funnel Optimization",
                desc: "Optimize your sales funnel to turn prospects into loyal customers.",
                icon: "📊",
                border: "border-yellow-100",
              },
              {
                title: "Email Campaigns",
                desc: "Engage and nurture leads through automated email marketing.",
                icon: "📧",
                border: "border-blue-100",
              },
              {
                title: "CRM Integration",
                desc: "Integrate with CRM tools to manage and nurture leads effectively.",
                icon: "💼",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Lead Generation Services?</h2>
          <p className="text-gray-600">
            Our lead generation strategies are designed to attract, nurture, and convert high-quality leads into paying customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Targeted Lead Generation",
              desc: "Generate high-quality leads by targeting the right audience.",
              icon: "🎯",
            },
            {
              title: "Lead Nurturing",
              desc: "Nurture leads with personalized email campaigns and content.",
              icon: "🤝",
            },
            {
              title: "CRM Solutions",
              desc: "Seamlessly integrate lead generation with your CRM system.",
              icon: "🔄",
            },
            {
              title: "Conversion Optimization",
              desc: "Optimize your sales funnel and landing pages to maximize conversions.",
              icon: "⚙️",
            },
            {
              title: "Automated Campaigns",
              desc: "Run automated campaigns to continuously nurture and convert leads.",
              icon: "🤖",
            },
            {
              title: "Reporting & Analytics",
              desc: "Track performance and optimize strategies with detailed analytics.",
              icon: "📈",
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
