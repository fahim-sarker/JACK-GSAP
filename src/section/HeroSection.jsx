import React from 'react'
import Herobg from "../assets/herovideo.mp4"
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

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
  })

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <video
          src={Herobg}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-content opacity-0 container mx-auto">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{ clipPath: "polygon(55% 1%, 55% 1%, 56% 100%, 56% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine </h1>
            </div>
          </div>

          <h2>
            Live life to the fullest  with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection