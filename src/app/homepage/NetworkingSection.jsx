"use client";
import laptop from "../../images/homepage/laptop.gif";
import Image from "next/image";
import { useTheme } from "../../components/theme-context";

export default function NetworkingSection() {
  const { theme } = useTheme();
  return (
    <section
      className={`py-16 px-6 transition-colors ${
        theme ? " bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex max-lg:flex-col-reverse flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-3/4 text-center lg:text-left">
          <h2
            className={`text-5xl max-lg:text-4xl font-bold mb-4 text-gray-900 ${
              theme ? " text-white" : "text-black"
            }`}
          >
            Make a better future with Our{" "}
            <span className="text-blue-500">Networking</span>
          </h2>
          <p className=" mb-6 leading-relaxed text-xl">
            Unlock limitless possibilities with our networking expertise.
            Building a smarter, more connected future with seamless
            communication, innovation, and technology-driven solutions for
            growth and success.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
            Learn More
          </button>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start mt-8 gap-6">
            <div className="bg-white text-gray-900 rounded-xl p-4 text-center w-32 shadow-md">
              <h3 className="text-2xl font-bold">15k+</h3>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
            <div className="bg-white text-gray-900 rounded-xl p-4 text-center w-32 shadow-md">
              <h3 className="text-2xl font-bold">10k+</h3>
              <p className="text-sm text-gray-600">Partners</p>
            </div>
            <div className="bg-white text-gray-900 rounded-xl p-4 text-center w-38 shadow-md">
              <h3 className="text-2xl font-bold">98%</h3>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={laptop}
            alt="Networking App"
            className="w-full max-w-md drop-shadow-xl rounded-lg"
            width={800}
            height={200}
            unoptimized={true} // Required for GIFs
          />
        </div>
      </div>
    </section>
  );
}
