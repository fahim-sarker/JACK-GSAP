import React from 'react'
import Herobg1 from "../assets/herovideo10.mp4"
import { useGSAP } from '@gsap/react'
import { Draggable, InertiaPlugin, SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(Draggable, InertiaPlugin);

const HeroSection = () => {

  useGSAP(() => {
    const textsplit = SplitText.create(".hero-title", {
      type: "chars"
    })

    const tl = gsap.timeline({
      delay: 0.05
    })
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut"
    })
      .to(".hero-text-scroll", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "circ.out"
      }, "-=0.05")
      .from(textsplit.chars, {
        yPercent: 200,
        ease: "power2.out",
        stagger: 0.02
      }, "-=0.05");

    const herotl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        // markers: true,
        scrub: true
      }
    });

    herotl.to(".hero-container", {
      rotate: 7,
      yPercent: 30,
      // scale: 0.09,
      ease: "power1.inOut"
    })
    Draggable.create(".flair--3b", {
      type: "rotation",
      inertia: true
    });

  })

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <video
          src={Herobg1}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-content opacity-0 container mx-auto">
          <div className="overflow-hidden">
            <h1 className="hero-title">Ultimate Driving Machine</h1>
          </div>
          <div
            style={{ clipPath: "polygon(55% 1%, 55% 1%, 56% 100%, 56% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle text-[50px] ">
              <h1>Pure Power. Precision Performance.</h1>
            </div>
          </div>

          <h2>
            Experience the future of luxury and innovation with BMW’s latest generation — where design meets engineering.
          </h2>

          <div className="hero-button flair--3b bg-gradient-to-r from-blue-500 via-white to-blue-800 cursor-pointer">
            <p>Explore Models</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection