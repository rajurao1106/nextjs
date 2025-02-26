'use client';
import { useState } from 'react';

const processSteps = [
  {
    id: 1,
    title: 'Research & Strategy',
    shortDesc: 'Understanding market trends & competitors.',
    fullDesc: 'We analyze audience behavior, market trends, and competitors to craft a winning strategy.',
  },
  {
    id: 2,
    title: 'Creative Ideation & Branding',
    shortDesc: 'Designing visually engaging campaigns.',
    fullDesc: 'We develop compelling brand identities, storytelling, and eye-catching visuals for marketing.',
  },
  {
    id: 3,
    title: 'Multi-Channel Execution',
    shortDesc: 'Social, Google Ads, TV, print & more.',
    fullDesc: 'We implement strategic campaigns across various platforms for maximum audience reach.',
  },
  {
    id: 4,
    title: 'Data-Driven Optimization',
    shortDesc: 'Analytics, A/B testing, AI insights.',
    fullDesc: 'Using AI-driven analytics, we continuously refine marketing strategies for the best ROI.',
  },
];

export default function ProcessSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="p-6 rounded-xl shadow-md bg-white transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white cursor-pointer"
            onMouseEnter={() => setHovered(step.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm">
              {hovered === step.id ? step.fullDesc : step.shortDesc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
