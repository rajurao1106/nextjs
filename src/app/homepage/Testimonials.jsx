"use client"; // Ensure Swiper runs on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { 
    name: "Amit Verma", 
    review: "Their performance marketing campaigns scaled our lead generation by 3x. The ROAS on our Meta and Google ads has been phenomenal." 
  },
  { 
    name: "Priya Desai", 
    review: "They built a lightning-fast, premium website for us. The UI/UX is incredibly clean, and our online conversions spiked immediately after launch." 
  },
  { 
    name: "Rohan Kapoor", 
    review: "Our Instagram presence grew exponentially in just three months. The team really understands content strategy and how to build a highly engaged community." 
  },
  { 
    name: "Sneha Joshi", 
    review: "From developing our full-stack website to managing our digital ad spends, the team delivered beyond expectations. Highly recommend them for end-to-end growth." 
  },
  { 
    name: "Vikram Singh", 
    review: "The quality of inbound leads from their localized SEO and Google Ads strategy is top-notch. A truly professional agency that actually delivers ROI." 
  }
];
const Testimonials = () => {
  return (
    <div className="w-full py-16 bg-gray-900 flex flex-col items-center text-white">
      <h2 className="text-4xl max-lg:w-[70%] font-bold text-center mb-10 tracking-wide">
        What Our Clients Say
      </h2>
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-[90%] lg:w-[70%] mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm transition-transform duration-300 ">
              <FaQuoteLeft className="text-4xl text-blue-100 mb-4" />
              <p className="text-lg italic leading-relaxed">{testimonial.review}</p>
              <h4 className="font-bold text-xl mt-6 text-gray-900">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
