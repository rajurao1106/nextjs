"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../components/theme-context";

const categories = ["All", "Branding", "Advertising", "Marketing"];

const portfolioItems = [
  {
    id: 1,
    title: "Creative Campaign",
    category: "Marketing",
    image: "/portfolio1.jpg",
    description: "A unique marketing campaign that boosted engagement by 200%.",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Branding",
    image: "/portfolio2.jpg",
    description: "Crafting a compelling brand presence for top-tier businesses.",
  },
  {
    id: 3,
    title: "Designing Services",
    category: "Advertising",
    image: "/portfolio3.jpg",
    description: "High-impact billboard campaign for urban areas.",
  },
  {
    id: 4,
    title: "Social Media Strategy",
    category: "Marketing",
    image: "/portfolio4.jpg",
    description: "A data-driven approach to social media growth.",
  },
  {
    id: 5,
    title: "Logo Redesign",
    category: "Branding",
    image: "/portfolio5.jpg",
    description: "A fresh take on a classic brand's visual identity.",
  },
];

export default function Portfolio() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className={`py-16 text-center ${
        theme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2> */}

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm rounded-full transition ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : theme
                ? "bg-gray-700 text-white hover:bg-purple-500"
                : "bg-gray-300 text-gray-900 hover:bg-purple-500 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`p-4 w-[25rem] rounded-lg shadow-md transition ${
              theme
                ? "bg-gray-800 shadow-gray-700 hover:shadow-gray-600"
                : "bg-white hover:shadow-lg"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
            <p className={`mt-2 text-sm ${
              theme ? "text-gray-300" : "text-gray-600"
            }`}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
