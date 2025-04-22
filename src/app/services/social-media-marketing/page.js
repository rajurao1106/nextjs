import React from "react";
import facebook from "../../../images/services/social-media-marketing/facebook.png";
import instagram from "../../../images/services/social-media-marketing/instagram.png";
import youtube from "../../../images/services/social-media-marketing/youtube.png";
import Image from "next/image";
import hero_image from '../../../images/services/social-media-marketing/hero_image.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold font-[Quicksand] leading-tight mb-6">
              Make Your Business with{" "}
              <span className="text-red-500">Social Meadia Marketing</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              We help brands like Slack, Microsoft, and Logitech grow with
              creative and strategic solutions.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 transition duration-300 shadow-md">
              Get Started
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image
                src={facebook}
                alt="Slack"
                className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100"
              />
              <Image
                src={instagram}
                alt="Microsoft"
                className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100"
              />
              <Image
                src={youtube}
                alt="Logitech"
                className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100"
              />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image
              src={hero_image}
              alt="Hero"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Are Here To Help You Build Your Business
            </h2>
            <p className="text-gray-600 mb-6">
              We provide all you need to know about our creativity processes.
              It’s a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">1k+</p>
                <p className="text-gray-500 text-sm">Total Audience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">500+</p>
                <p className="text-gray-500 text-sm">Complete Project</p>
              </div>
            </div> */}

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Explore More
            </button>
          </div>

          {/* Right Content - Services */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Content Creation & Design",
                desc: "Custom graphics, reels, stories, and post captions tailored to your brand.",
                icon: "📈",
                border: "border-indigo-100",
              },
              {
                title: "Paid Ad Campaigns",
                desc: "Daily posting, comment moderation, and DM handling across platforms like Instagram, Facebook, LinkedIn, etc.",
                icon: "🎨",
                border: "border-yellow-100",
              },
              {
                title: "Branding Design",
                desc: "Targeted ads on Facebook, Instagram, or TikTok with performance tracking and optimization.",
                icon: "💼",
                border: "border-blue-100",
              },
              {
                title: "Analytics & Reporting",
                desc: "Monthly reports showing engagement, reach, follower growth, and ROI insights.",
                icon: "💻",
                border: "border-pink-100",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-5 border shadow-md ${service.border} hover:shadow-xl transition`}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-blue-800">{service.title}</h3>
                <p className="text-sm ">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Team Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Is Social Media Important?
          </h2>
          <p className="text-gray-600">
            Social media is a powerful tool for building brand awareness,
            engaging with your audience, and driving conversions. It helps
            businesses stay connected and grow in a digital-first world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Increased Brand Awareness",
              desc: "Reach a wider audience and make your brand more recognizable.",
              icon: "📢",
            },
            {
              title: "Customer Engagement",
              desc: "Build relationships and engage in real-time conversations.",
              icon: "💬",
            },
            {
              title: "Lead Generation",
              desc: "Turn followers into customers with smart social strategies.",
              icon: "🎯",
            },
            {
              title: "Improved SEO",
              desc: "Social signals can influence search engine rankings.",
              icon: "🔍",
            },
            {
              title: "Cost-Effective",
              desc: "Organic reach and paid ads provide high ROI for small budgets.",
              icon: "💰",
            },
            {
              title: "Competitor Insights",
              desc: "Stay ahead by tracking competitor strategies and trends.",
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
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            `"Amazing work and great team!"`,
            `"Our leads doubled in just 2 months!"`,
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
