"use client"
import React from "react";
import hero_image from '../../../images/services/videoads-service/hero_image.png';
import Image from "next/image";
import video_ads from "../../../images/services/videoads-service/video_ads.png";
import social_media_ads from "../../../images/services/videoads-service/social_media_ads.png"; 
import creative_design from "../../../images/services/videoads-service/creative_design.png";

export default function VideoAds() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Drive Results with Powerful <span className="text-indigo-600">Video Ads Campaigns</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We create captivating video ads tailored to your brand, driving engagement and increasing conversions across platforms.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md">
              Get a Free Consultation
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={video_ads} alt="Video Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={social_media_ads} alt="Social Media Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={creative_design} alt="Creative Design" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Video Ads" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Video Ad Campaign Services</h2>
            <p className="text-gray-600 mb-6">
              From creative concept development to ad production and optimization, we offer end-to-end video ad services.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">500+</p>
                <p className="text-gray-500 text-sm">Campaigns Launched</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">100+</p>
                <p className="text-gray-500 text-sm">Brands Served</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">View Our Work</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[ 
              {
                title: "Custom Video Ads",
                desc: "Tailored video ads designed to resonate with your target audience and boost engagement.",
                icon: "🎥",
                border: "border-indigo-100",
              },
              {
                title: "Social Media Ads",
                desc: "Engage users on social platforms with short, impactful videos that drive traffic and sales.",
                icon: "📱",
                border: "border-yellow-100",
              },
              {
                title: "YouTube Ads",
                desc: "Drive video views and conversions with ads optimized for YouTube's audience.",
                icon: "📺",
                border: "border-blue-100",
              },
              {
                title: "Creative Ad Design",
                desc: "Visually compelling ads that capture attention and convey your message effectively.",
                icon: "🎨",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Video Ads Services?</h2>
          <p className="text-gray-600">
            Our video ads are crafted to be engaging, shareable, and optimized for conversions on all digital platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Targeted Campaigns",
              desc: "Reach your ideal audience with precision-targeted video ads.",
              icon: "🎯",
            },
            {
              title: "High-Quality Production",
              desc: "We create professional-grade video content that stands out.",
              icon: "🏆",
            },
            {
              title: "Cross-Platform Strategy",
              desc: "We optimize your video ads for all major platforms including YouTube, Facebook, Instagram, and more.",
              icon: "🌐",
            },
            {
              title: "Analytics & Optimization",
              desc: "We track performance and optimize ads to ensure maximum ROI.",
              icon: "📊",
            },
            {
              title: "Brand Consistency",
              desc: "Videos that align with your brand’s message, values, and aesthetics.",
              icon: "💡",
            },
            {
              title: "Engagement-Driven",
              desc: "Our ads are designed to engage and convert, ensuring real business results.",
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
