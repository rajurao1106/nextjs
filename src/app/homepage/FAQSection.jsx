"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../components/theme-context";

const faqs = [
  {
    question: "What services does your agency offer?",
    answer:
      "We provide a full range of advertising services, including digital marketing, branding, social media management, PPC campaigns, and content creation.",
  },
  {
    question: "How do you create advertising strategies?",
    answer:
      "Our team analyzes market trends, audience behavior, and competitor insights to craft customized advertising strategies that drive real results.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with various industries, including e-commerce, healthcare, tech startups, real estate, and more, helping businesses of all sizes grow.",
  },
  {
    question: "How can I get started with your agency?",
    answer:
      "Simply contact us through our website or schedule a free consultation, and our experts will guide you through the process.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with various industries, including e-commerce, healthcare, tech startups, real estate, and more, helping businesses of all sizes grow.",
  },
  {
    question: "How can I get started with your agency?",
    answer:
      "Simply contact us through our website or schedule a free consultation, and our experts will guide you through the process.",
  },
];

export default function FAQSection() {
  const { theme } = useTheme();

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-16 px-6 md:px-12 lg:px-24 ${
        theme ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto ">
        <h2
          className={`text-4xl font-bold text-gray-800 mb-6 text-center ${
            theme ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          Frequently Asked Questions
        </h2>
        <p className={`text-lg text-gray-600 mb-10 text-center ${
            theme ? "bg-gray-900 text-gray-200" : "bg-white"
          }`}>
          Find answers to common questions about our advertising services.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <motion.p
                  className="text-gray-600 mt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
