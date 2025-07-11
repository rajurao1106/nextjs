"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../components/theme-context";

// ✅ Import images
import image1 from "../../images/portfolio/image1.png";
import image2 from "../../images/portfolio/image2.png";
import image3 from "../../images/portfolio/image3.png";
import image4 from "../../images/portfolio/image4.png";

const WorkSection = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Homepage for Talent Search",
      category: "Web Design",
      bgColor: "bg-blue-800",
      textColor: "text-white",
      image: image1,
      size: "col-span-2 row-span-2",
      link: "https://tallyzone.in/",
    },
    {
      title: "Branding for Health",
      category: "Branding",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      image: image2,
      size: "col-span-1 row-span-2",
      link: "https://origenpharmaceutical.com/",
    },
    {
      title: "Clean Design for Messaging App",
      category: "UI/UX",
      bgColor: "bg-green-500",
      textColor: "text-black",
      image: image3,
      size: "col-span-2 row-span-1",
      link: "https://origenpharmaceutical.com/",
    },
    {
      title: "Kunal Sayani",
      category: "Web Design",
      bgColor: "bg-green-500",
      textColor: "text-black",
      image: image4,
      size: "col-span-2 row-span-1",
      link: "https://drkunalsayani.com/",
    },
  ];

  return (
    <section
      className={`py-16 w-full transition-colors ${
        theme ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="flex justify-center items-center gap-10 flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`max-lg:w-full w-[60rem] rounded-lg shadow-lg overflow-hidden ${project.bgColor} ${project.size} flex flex-col justify-between p-6`}
            >
              {/* Text Content */}
              <div>
                <h3 className={`text-2xl font-semibold ${project.textColor}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${project.textColor} opacity-80 mt-2`}>
                  {project.category}
                </p>
              </div>

              {/* Image */}
              <Link href={project.link} className="mt-4 block">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="w-full object-cover rounded-md"
                />
              </Link>

              {/* View More Link */}
              <Link
                className={`mt-4 inline-block hover:underline ${project.textColor}`}
                href={project.link}
              >
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
