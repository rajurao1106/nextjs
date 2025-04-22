"use client"
import React from "react";
import hero_image from '../../../images/services/performancemarketing-service/hero_image.png';
import Image from "next/image";
import google_ads from "../../../images/services/performancemarketing-service/google_ads.png";
import facebook_ads from "../../../images/services/performancemarketing-service/facebook_ads.png";
import seo from "../../../images/services/performancemarketing-service/seo.png";

export default function PerformanceMarketing() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Maximize Your ROI with <span className="text-purple-600">Performance Marketing</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We help businesses achieve measurable growth by optimizing performance across digital advertising channels.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-md">
              Get a Free Consultation
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={google_ads} alt="Google Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={facebook_ads} alt="Facebook Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={seo} alt="SEO" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Performance Marketing" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Performance Marketing Services</h2>
            <p className="text-gray-600 mb-6">
              We offer tailored digital marketing solutions that drive high-quality traffic and maximize your ROI.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">1k+</p>
                <p className="text-gray-500 text-sm">Successful Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">500+</p>
                <p className="text-gray-500 text-sm">Clients Reached</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">See Our Results</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[ 
              {
                title: "PPC Campaigns",
                desc: "Targeted pay-per-click campaigns that drive traffic and conversions.",
                icon: "💰",
                border: "border-indigo-100",
              },
              {
                title: "Social Media Advertising",
                desc: "Engage your audience with paid campaigns on Facebook, Instagram, and more.",
                icon: "📱",
                border: "border-yellow-100",
              },
              {
                title: "SEO Optimization",
                desc: "Improve your organic search rankings and attract high-intent visitors.",
                icon: "🔍",
                border: "border-blue-100",
              },
              {
                title: "Conversion Rate Optimization",
                desc: "Optimize your landing pages and sales funnels to increase conversions.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Performance Marketing Services?</h2>
          <p className="text-gray-600">
            Our data-driven approach ensures that every marketing dollar is spent effectively to maximize conversions and ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "ROI-Focused Campaigns",
              desc: "Maximize your returns with results-oriented advertising strategies.",
              icon: "📊",
            },
            {
              title: "Targeted Advertising",
              desc: "Reach your ideal customers through precise targeting across multiple platforms.",
              icon: "🎯",
            },
            {
              title: "Continuous Optimization",
              desc: "We continuously monitor and optimize campaigns for the best results.",
              icon: "🔄",
            },
            {
              title: "Cross-Platform Reach",
              desc: "Advertise across Google Ads, Facebook, Instagram, and more to reach a larger audience.",
              icon: "🌐",
            },
            {
              title: "Performance Analytics",
              desc: "Track the performance of your campaigns with detailed analytics and reports.",
              icon: "📈",
            },
            {
              title: "Conversion Tracking",
              desc: "Monitor and improve conversions with advanced tracking and reporting tools.",
              icon: "💡",
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
