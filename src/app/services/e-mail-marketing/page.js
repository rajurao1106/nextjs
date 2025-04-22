"use client"
import React from "react";
import hero_image from '../../../images/services/emailmarketing-service/hero_image.png';
import Image from "next/image";
import mailchimp from "../../../images/services/emailmarketing-service/mailchimp.png";
import sendgrid from "../../../images/services/emailmarketing-service/sendgrid.png";
import campaignmonitor from "../../../images/services/emailmarketing-service/campaignmonitor.png";

export default function EmailMarketing() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Boost Your Business with <span className="text-indigo-600">Email Marketing</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We help you create personalized email campaigns that drive engagement, sales, and customer loyalty.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Get a Free Consultation
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={mailchimp} alt="Mailchimp" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={sendgrid} alt="SendGrid" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={campaignmonitor} alt="Campaign Monitor" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Email Marketing" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Email Marketing Services</h2>
            <p className="text-gray-600 mb-6">
              From email automation to personalized campaigns, we offer full-service email marketing solutions.
            </p>

            {/* <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">5k+</p>
                <p className="text-gray-500 text-sm">Successful Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">2M+</p>
                <p className="text-gray-500 text-sm">Emails Sent</p>
              </div>
            </div> */}

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">See Our Results</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[ 
              {
                title: "Email Campaigns",
                desc: "Create personalized email campaigns to engage your audience.",
                icon: "📧",
                border: "border-indigo-100",
              },
              {
                title: "Email Automation",
                desc: "Automate email workflows to nurture leads and retain customers.",
                icon: "🔄",
                border: "border-yellow-100",
              },
              {
                title: "A/B Testing",
                desc: "Test and optimize your emails for maximum conversions.",
                icon: "⚙️",
                border: "border-blue-100",
              },
              {
                title: "Analytics & Reporting",
                desc: "Track your email performance and refine strategies with detailed reports.",
                icon: "📊",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Email Marketing Services?</h2>
          <p className="text-gray-600">
            We help you craft tailored email strategies that align with your brand’s voice, delivering results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Custom Templates",
              desc: "Design unique email templates to match your brand identity.",
              icon: "🎨",
            },
            {
              title: "Segmentation & Personalization",
              desc: "Target the right audience with personalized content.",
              icon: "📋",
            },
            {
              title: "High Deliverability",
              desc: "Ensure your emails reach your audience’s inbox, not spam.",
              icon: "🚀",
            },
            {
              title: "Engaging Content",
              desc: "Create compelling content that drives action and engagement.",
              icon: "✍️",
            },
            {
              title: "Mobile-Friendly Designs",
              desc: "Emails optimized for all devices to reach your customers anytime, anywhere.",
              icon: "📱",
            },
            {
              title: "Performance Tracking",
              desc: "Measure success with detailed analytics and improve future campaigns.",
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
