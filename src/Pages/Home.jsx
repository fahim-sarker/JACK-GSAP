import React from 'react'
import HeroSection from '../section/HeroSection'
import MessageSection from '../section/MessageSection'
import FlavourSection from '../section/FlavourSection'
import NutritionSection from '../section/NutritionSection'
import BenifitSection from '../section/BenifitSection'
import TestimonialSection from '../section/TestimonialSection'

const Home = () => {
  return (
    <>

      <HeroSection />
      <MessageSection />
      <FlavourSection />
      <NutritionSection />
      <div>
        <BenifitSection />
        <TestimonialSection />
      </div>

    </>
  )
}

export default Home