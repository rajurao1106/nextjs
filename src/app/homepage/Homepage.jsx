import React from "react";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import About from "./About";
import WhoWeAre from "./WhoWeAre";
import FAQSection from "./FAQSection";
import NetworkingSection from "./NetworkingSection";
import Testimonials from "./Testimonials";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <NetworkingSection/>
      {/* <WhoWeAre /> */}
      <About />
      <WhyChooseUs />
      <Testimonials/>
      <FAQSection />
    </div>
  );
}
