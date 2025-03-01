"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../../components/theme-context";

const ContactUs = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-24 ${theme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Top Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <FaMapMarkerAlt className="text-green-600 text-xl" />,
              title: "Our Locations",
              text: "Shankar Nagar, Raipur, Chhattisgarh",
              bgHover: "hover:bg-green-400",
            },
            {
              icon: <FaPhoneAlt className="text-purple-600 text-xl" />,
              title: "Phone",
              text: "+91 8982804998",
              bgHover: "hover:bg-purple-400",
            },
            {
              icon: <FaEnvelope className="text-red-600 text-xl" />,
              title: "Email",
              text: "info@pracharkarsolutions.com",
              bgHover: "hover:bg-red-400",
            },
          ].map(({ icon, title, text, bgHover }, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md group flex items-center duration-300 ${
                theme ? "bg-gray-800 text-white" : "bg-white"
              } ${bgHover} hover:text-white`}
            >
              <div className={`p-3 rounded-full ${theme ? "bg-gray-700" : "bg-gray-200"}`}>{icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-white duration-300">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Address */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Address Details */}
          <div>
            <h2 className="text-3xl font-bold">Please Get In Touch</h2>
            <h3 className="text-2xl font-bold mt-2">Let's Talk</h3>
            <div className="mt-6 space-y-4 text-sm">
              <p className="text-base">
                Feel free to get in touch with us through any of the following means. Whether you have inquiries,
                collaboration opportunities, or just want to say hello, we're here to listen.
              </p>
              <p className="text-2xl font-bold mt-2">Get In Touch</p>
              <p className="text-base">+91-8982804998</p>
              <p className="text-base">info@pracharkarsolutions.com</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`p-6 rounded-lg shadow-lg ${theme ? "bg-gray-800" : "bg-white"}`}>
            <h3 className="text-lg font-semibold mb-4">Send Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full name*"
                className={`w-full p-3 rounded-md outline-none border-b-2 ${
                  theme ? "border-gray-500 focus:border-gray-300" : "border-blue-500 focus:border-gray-500"
                }`}
              />
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className={`w-1/2 p-3 rounded-md outline-none border-b-2 ${
                    theme ? "border-gray-500 focus:border-gray-300" : "border-blue-500 focus:border-gray-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className={`w-1/2 p-3 rounded-md outline-none border-b-2 ${
                    theme ? "border-gray-500 focus:border-gray-300" : "border-blue-500 focus:border-gray-500"
                  }`}
                />
              </div>
              <textarea
                placeholder="Message"
                className={`w-full p-3 rounded-md outline-none border-b-2 ${
                  theme ? "border-gray-500 focus:border-gray-300" : "border-blue-500 focus:border-gray-500"
                }`}
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition relative shadow-md"
              >
                Submit
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-red-400 blur-md opacity-50"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
