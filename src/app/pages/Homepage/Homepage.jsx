import React from 'react'
import Hero from './Hero'
import WhyChooseUs from '../WhyChooseUs'
import About from '../About'
import WhoWeAre from '../WhoWeAre'
import FAQSection from '../FAQSection'

export default function Homepage() {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      <About/>
      <WhyChooseUs/>
      <FAQSection/>
    </div>
  )
}
