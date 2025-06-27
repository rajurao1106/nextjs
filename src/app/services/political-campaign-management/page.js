"use client";
import React from "react";
import hero_image from "../../../images/services/performancemarketing-service/hero_image.png";
import Image from "next/image";
import google_ads from "../../../images/services/performancemarketing-service/google_ads.png";
import facebook_ads from "../../../images/services/performancemarketing-service/facebook_ads.png";
import seo from "../../../images/services/performancemarketing-service/seo.png";

export default function PoliticalCampaignManagement() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans pt-[5rem]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-br to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-[Quicksand] font-extrabold leading-tight mb-6">
              Win More Votes with <span className="text-purple-600">Political Campaign Management</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              From digital strategy to targeted outreach, we empower political leaders with the tools and technology to build voter trust and drive election success.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-semibold bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-md">
              Book a Strategy Session
            </button>
            <div className="flex gap-6 mt-8 items-center">
              <Image src={google_ads} alt="Google Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={facebook_ads} alt="Facebook Ads" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
              <Image src={seo} alt="SEO" className="h-16 w-16 shadow-lg rounded-2xl opacity-80 hover:opacity-100" />
            </div>
          </div>
          <div className="text-center animate-fade-in">
            <Image src={hero_image} alt="Political Campaign Strategy" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Political Campaign Services</h2>
            <p className="text-gray-600 mb-6">
              We specialize in crafting data-driven political strategies that connect with voters and boost your candidate's visibility and credibility.
            </p>

            <div className="flex items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">200+</p>
                <p className="text-gray-500 text-sm">Campaigns Managed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-500">100+</p>
                <p className="text-gray-500 text-sm">Candidates Elected</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">Explore Our Strategy</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Voter Targeting",
                desc: "Use data-driven insights to reach the right voters at the right time.",
                icon: "🎯",
                border: "border-indigo-100",
              },
              {
                title: "Social Media Campaigns",
                desc: "Build engagement and buzz across Facebook, Instagram, and Twitter.",
                icon: "📱",
                border: "border-yellow-100",
              },
              {
                title: "Reputation Management",
                desc: "Protect and promote your public image with strategic PR and online monitoring.",
                icon: "🛡️",
                border: "border-blue-100",
              },
              {
                title: "Event Promotion",
                desc: "Maximize attendance and reach for rallies, town halls, and online events.",
                icon: "📢",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Campaign Management Team?</h2>
          <p className="text-gray-600">
            We combine political expertise with digital innovation to deliver campaigns that win hearts and ballots.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Planning",
              desc: "Tailored political strategies aligned with your vision and goals.",
              icon: "🧠",
            },
            {
              title: "Digital Ad Mastery",
              desc: "Run effective Google and Meta ads that influence undecided voters.",
              icon: "💻",
            },
            {
              title: "Real-Time Monitoring",
              desc: "Stay ahead of the narrative with 24/7 campaign analytics and trend tracking.",
              icon: "📈",
            },
            {
              title: "Local & National Reach",
              desc: "Target regional and national voters with scalable digital tactics.",
              icon: "🌍",
            },
            {
              title: "Multilingual Campaigns",
              desc: "Engage diverse communities with localized messaging across languages.",
              icon: "🗣️",
            },
            {
              title: "Election-Day Activation",
              desc: "Drive voter turnout with SMS alerts, reminders, and mobilization tools.",
              icon: "📨",
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
