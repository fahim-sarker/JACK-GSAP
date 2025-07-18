import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const FlavorTitle = () => {


  useGSAP(() => {
    const firsttextsplit = SplitText.create(".first-text-split", {
      type: "chars"
    });

    const secondtextsplit = SplitText.create(".second-text-split", {
      type: "chars"
    });

    gsap.from(firsttextsplit.chars, {
      yPercent: 200,
      ease: "power1.inOut",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      }
    })

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 2%, 100% 100%, 0 100%)",
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      }
    })
    gsap.from(secondtextsplit.chars, {
      yPercent: 200,
      ease: "power2.inOut",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      }
    })

  })
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>Experience</h1>
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">the ultimate</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>driving machine</h1>
      </div>
    </div>
  )
}

export default FlavorTitle