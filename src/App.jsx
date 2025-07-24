import React, { useEffect, useLayoutEffect } from "react"
import NavBar from "./Components/NavBar"
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./section/HeroSection";
import MessageSection from "./section/MessageSection";
import FlavourSection from "./section/FlavourSection";
import NutritionSection from "./section/NutritionSection";
import BenifitSection from "./section/BenifitSection";
import TestimonialSection from "./section/TestimonialSection";
import FooterSection from "./section/FooterSection";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {

  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />

          <div>
            <BenifitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  )
}

export default App
