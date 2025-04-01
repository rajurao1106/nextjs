  "use client";

  import { useState } from "react";
  import Image from "next/image";
  import { useTheme } from "../../components/theme-context";
  import service1 from "../../images/services/service1.jpg";
  import service2 from "../../images/services/service2.jpg";
  import service3 from "../../images/services/service3.jpg";
  import service4 from "../../images/services/service4.jpg";
  import service5 from "../../images/services/service5.jpg";
  import service6 from "../../images/services/service6.jpg";

  const servicesData = [
    { id: 1, category: "Digital Marketing", title: "Digital Marketing", image: service3 },
    { id: 2, category: "Social Media Marketing", title: "Social Media Marketing", image: service2 },
    { id: 3, category: "Website & App Development", title: "Website & App Development", image: service1 },
    { id: 4, category: "SEO/SEM", title: "SEO/SEM", image: service4 },
    { id: 5, category: "Creative Designs", title: "UI/UX Designing", image: service5 },
    { id: 6, category: "video ads services", title: "video ads services", image: service6 },
  ];

  const categories = ["All", ...new Set(servicesData.map((service) => service.category))];

  export default function Services() {
    const { theme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredServices =
      selectedCategory === "All" ? servicesData : servicesData.filter((service) => service.category === selectedCategory);

    return (
      <section className={`${theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"} py-16 text-center`}>
        {/* <h3 className="text-purple-500 uppercase text-sm">Services</h3> */}
        <h2 className="text-3xl font-bold mt-2">What We Offer</h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center mt-6 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-full transition ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : theme
                  ? "bg-gray-700 text-white hover:bg-purple-500"
                  : "bg-gray-200 text-gray-800 hover:bg-purple-500 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 px-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`p-4 w-[25rem] rounded-lg shadow-md transition ${
                theme ? "bg-gray-800 shadow-gray-700 hover:shadow-gray-600" : "bg-white hover:shadow-lg"
              }`}
            >
              <Image src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
