"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "../../images/portfolio/image1.png";
import image2 from "../../images/portfolio/image2.png";
import image3 from "../../images/portfolio/image3.png";
import image4 from "../../images/portfolio/image3.png";
import { useTheme } from "../../components/theme-context";

const WorkSection = () => {
    const { theme } = useTheme(); 
  const projects = [
    {
      title: "Homepage for Talent Search",
      category: "Web Design",
      bgColor: "bg-blue-800",
      textColor: "text-white",
      image: "../../images/portfolio/image1.png, // Placeholder image path
      size: "col-span-2 row-span-2", // Larger card
      link:"https://tallyzone.in/"
    },
    {
      title: "Branding for Health",
      category: "Branding",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      image: "../../images/portfolio/image2.png,
      size: "col-span-1 row-span-2",
      link:"https://origenpharmaceutical.com/"
    },
    {
      title: "Clean Design for Messaging App",
      category: "UI/UX",
      bgColor: "bg-green-500",
      textColor: "text-black",
      image: "../../images/portfolio/image3.png,
      size: "col-span-2 row-span-1",
      link:"https://origenpharmaceutical.com/"
    },
       {
      title: "Kunal Sayani",
      category: "Web Design",
      bgColor: "bg-green-500",
      textColor: "text-black",
      image: "../../images/portfolio/image3.png,
      size: "col-span-2 row-span-1",
      link:"https://origenpharmaceutical.com/"
    },
  ];

  return (
    <section className={`py-16 bg-gray-100 w-full transition-colors ${
      theme ? "bg-gray-900" : ""
    }`}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Title */}
        {/* <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2> */}

        {/* Grid Layout */}
        <div className="flex justify-center items-center gap-10 flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`max-lg:w-full w-[60rem] rounded-lg shadow-lg overflow-hidden ${project.bgColor} ${project.size} 
              flex flex-col justify-between p-6`}
            >
              {/* Project Content */}
              <div>
                <h3 className={`text-2xl font-semibold ${project.textColor}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${project.textColor} opacity-80 mt-2`}>
                  {project.category}
                </p>
              </div>

              {/* Image */}
              <Link href={project.link} className="mt-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                    height={1000}
                  className="max-lg:w-full w-[60rem] object-cover rounded-md"
                />
              </Link>

              <Link
                className={`mt-4 inline-block hover:underline text-white`}
               href={project.link}>
                View More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
