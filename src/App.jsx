import React from "react"
import NavBar from "./Components/NavBar"
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./section/HeroSection";
import MessageSection from "./section/MessageSection";
import FlavourSection from "./section/FlavourSection";
;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <div id="smooth-wrapper">
        <NavBar />
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <FlavourSection />
        </div>
      </div>
    </main>
  )
}

export default App
