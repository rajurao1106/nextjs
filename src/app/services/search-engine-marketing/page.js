"use client"
import React from "react";
import hero_image from '../../../images/services/sem-service/hero_image.png';
import Image from "next/image";
import google_ads from "../../../images/services/sem-service/google_ads.png";
import bing_ads from "../../../images/services/sem-service/bing_ads.png";
import keyword_research from "../../../images/services/sem-service/keyword_research.png";

export default function SearchEngineMarketing() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="flex gap-20 max-lg:flex-col-reverse">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Drive Targeted Traffic with <span className="text-indigo-600">Search Engine Marketing</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We help businesses dominate search results with paid search ads, improving visibility and driving qualified leads.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Get a Free SEM Audit
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={google_ads} alt="Google Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={bing_ads} alt="Bing Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={keyword_research} alt="Keyword Research" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Search Engine Marketing" className="w-[50rem] max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Search Engine Marketing Services</h2>
            <p className="text-gray-600 mb-6">
              We specialize in paid search advertising that targets the right audience at the right time to maximize conversions.
            </p>
{/* 
            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">500+</p>
                <p className="text-gray-500 text-sm">Successful Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">1k+</p>
                <p className="text-gray-500 text-sm">Leads Generated</p>
              </div>
            </div> */}

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">Request Your SEM Strategy</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[ 
              {
                title: "Google Ads Campaigns",
                desc: "Target the right keywords with Google Ads and increase visibility on search results pages.",
                icon: "🔍",
                border: "border-indigo-100",
              },
              {
                title: "Bing Ads",
                desc: "Expand your reach with paid ads on Bing, targeting audiences who are more likely to convert.",
                icon: "🌐",
                border: "border-yellow-100",
              },
              {
                title: "Keyword Research",
                desc: "Identify high-performing keywords and optimize your ads for better results.",
                icon: "📊",
                border: "border-blue-100",
              },
              {
                title: "PPC Management",
                desc: "Maximize your ROI with ongoing optimization and management of PPC campaigns.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Search Engine Marketing Services?</h2>
          <p className="text-gray-600">
            Our expert strategies ensure your business ranks on top of search results, driving more qualified leads and conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Targeted Ad Campaigns",
              desc: "Reach the right audience with highly targeted ads that improve click-through rates.",
              icon: "🎯",
            },
            {
              title: "Advanced Keyword Targeting",
              desc: "Use comprehensive keyword research to optimize campaigns and drive high-quality traffic.",
              icon: "🔑",
            },
            {
              title: "Performance Optimization",
              desc: "Continuous monitoring and optimization to enhance performance and ROI.",
              icon: "📈",
            },
            {
              title: "Competitor Analysis",
              desc: "Analyze competitors and leverage insights to outperform them in search rankings.",
              icon: "📊",
            },
            {
              title: "Conversion Tracking",
              desc: "Track conversions and refine strategies to ensure higher engagement and returns.",
              icon: "💡",
            },
            {
              title: "Budget Optimization",
              desc: "Efficiently manage your ad spend to ensure maximum results within your budget.",
              icon: "💰",
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
