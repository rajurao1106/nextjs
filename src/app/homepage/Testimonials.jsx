"use client"; // Ensure Swiper runs on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { name: "John Doe", review: "This agency transformed our brand!" },
  { name: "Jane Smith", review: "A truly professional and creative team!" },
  { name: "Alice Brown", review: "Their strategies boosted our engagement." },
  { name: "Michael Lee", review: "Highly recommended for advertising needs!" },
];

const Testimonials = () => {
  return (
    <div className="w-full py-16 bg-blue-950 flex flex-col items-center text-white">
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
