import React, { useRef } from 'react'
import Slide1 from "../assets/slide1.jpg"
import Slide2 from "../assets/slide2.jpg"
import Slide3 from "../assets/slide3.jpg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FlavorSlider = () => {
  const slideref = useRef();

  useGSAP(() => {
    const scrollAmount = slideref.current.scrollWidth - window.innerWidth;
   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount}px`,
        scrub: true,
        pin: true
      }
    })
    tl.to(".flavor-section", {
      x: `-${scrollAmount}px`,
      ease: "power1.inOut"
    })
  })

  return (
    <div ref={slideref} className="slider-wrapper">
      <div className="flavors">
        <div className="lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex gap-x-10">
          <img src={Slide1} alt="Slide1" className='h-full' />
          <img src={Slide2} alt="Slide1" className='h-full' />
          <img src={Slide3} alt="Slide1" className='h-full' />
        </div>
      </div>
    </div>
  )
}

export default FlavorSlider