    "use client";

    import { motion } from "framer-motion";
    import { useState } from "react";

    const categories = ["All", "Branding", "Advertising", "Marketing"];

    const portfolioItems = [
    { id: 1, title: "Creative Campaign", category: "Marketing", image: "/portfolio1.jpg", description: "A unique marketing campaign that boosted engagement by 200%." },
    { id: 2, title: "Brand Identity", category: "Branding", image: "/portfolio2.jpg", description: "Crafting a compelling brand presence for top-tier businesses." },
    { id: 3, title: "Outdoor Advertising", category: "Advertising", image: "/portfolio3.jpg", description: "High-impact billboard campaign for urban areas." },
    { id: 4, title: "Social Media Strategy", category: "Marketing", image: "/portfolio4.jpg", description: "A data-driven approach to social media growth." },
    { id: 5, title: "Logo Redesign", category: "Branding", image: "/portfolio5.jpg", description: "A fresh take on a classic brand's visual identity." },
    ];

    export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems = selectedCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === selectedCategory);

    return (
        <section id="portfolio" className="py-16 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
        
        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8">
            {categories.map((category) => (
            <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
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
                className="p-4 w-[25rem] rounded-lg shadow-lg bg-white hover:shadow-2xl transition"
            >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
            ))}
        </div>

        {/* Testimonials */}
        <section className="mt-16 py-12 bg-white">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 px-6">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-200 rounded-lg max-w-sm">
                <p className="text-gray-700 italic">"Their creativity transformed our brand! Highly recommend."</p>
                <h4 className="mt-4 font-semibold">- Alex Johnson</h4>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-200 rounded-lg max-w-sm">
                <p className="text-gray-700 italic">"Amazing results from their ad campaigns!"</p>
                <h4 className="mt-4 font-semibold">- Lisa Wong</h4>
            </motion.div>
            </div>
        </section>
        
        
        </section>
    );
    }