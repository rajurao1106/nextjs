import { useState } from "react";

const servicesData = [
  { id: 1, category: "Digital Marketing", title: "Digital Marketing", image: "/digital-marketing.png" },
  { id: 2, category: "Outdoor Campaigns", title: "Outdoor Campaign", image: "/outdoor-campaign.png" },
  { id: 3, category: "Website & App Development", title: "Website & App Development", image: "/web-development.png" },
  { id: 4, category: "Mobile Marketing", title: "Mobile Marketing", image: "/mobile-marketing.png" },
  { id: 5, category: "Printing Solutions", title: "Printing Solutions", image: "/printing-solutions.png" },
];

const categories = ["All", ...new Set(servicesData.map((service) => service.category))];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All" ? servicesData : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <section className="py-16 text-center">
      <h3 className="text-purple-500 uppercase text-sm">Services</h3>
      <h2 className="text-3xl font-bold mt-2">What We Offer</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mt-6 gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-purple-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 px-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="p-4 w-[25rem] rounded-lg shadow-md bg-white hover:shadow-lg transition">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
