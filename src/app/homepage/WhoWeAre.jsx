"use client";
import { motion } from "framer-motion";
import examining from "../../images/homepage/cost.jpg"

export default function WhoWeAre() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 flex flex-col gap-10 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={examining} 
            alt="Our Team" 
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Creative Advertising agency</h1>
          <h2 className="text-xl font-bold text-gray-600 mb-4">Brandmark Creation: Your Integrated Brand Communications Partner.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Pracharkar Solutions</span>, we are a team of creative strategists, storytellers, and digital experts 
            dedicated to transforming brands. We craft compelling campaigns that captivate audiences and deliver real results.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our approach blends data-driven insights with artistic creativity to produce advertising solutions that stand out. 
            Whether it's digital marketing, branding, or multimedia campaigns, we create experiences that leave a lasting impact.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            🚀 Let’s tell your brand’s story in a way the world won’t forget.
          </p>
          
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto flex-row-reverse md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={examining} 
            alt="Our Team" 
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Growth Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Pracharkar Solutions</span>, we are a team of creative strategists, storytellers, and digital experts 
            dedicated to transforming brands. We craft compelling campaigns that captivate audiences and deliver real results.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our approach blends data-driven insights with artistic creativity to produce advertising solutions that stand out. 
            Whether it's digital marketing, branding, or multimedia campaigns, we create experiences that leave a lasting impact.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            🚀 Let’s tell your brand’s story in a way the world won’t forget.
          </p>
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={examining} 
            alt="Our Team" 
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">The Process</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Pracharkar Solutions</span>, we are a team of creative strategists, storytellers, and digital experts 
            dedicated to transforming brands. We craft compelling campaigns that captivate audiences and deliver real results.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our approach blends data-driven insights with artistic creativity to produce advertising solutions that stand out. 
            Whether it's digital marketing, branding, or multimedia campaigns, we create experiences that leave a lasting impact.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            🚀 Let’s tell your brand’s story in a way the world won’t forget.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
}
