import React, { useRef } from 'react'
import FlavorTitle from '../Components/FlavorTitle'
import Slide1 from "../assets/slide1.jpg"
import Slide2 from "../assets/slide2.jpg"
import Slide3 from "../assets/slide3.jpg"
import Slide4 from "../assets/slide4.jpg"
import Slide5 from "../assets/slide5.jpg"
import Slide6 from "../assets/slide6.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const FlavourSection = () => {
  const slideWrapperRef = useRef()

  useGSAP(() => {
    const slider = slideWrapperRef.current
    const scrollAmount = slider.scrollWidth - window.innerWidth

    console.log('scrollWidth:', slider.scrollWidth)
    console.log('window.innerWidth:', window.innerWidth)
    console.log('scrollAmount:', scrollAmount)

    if (scrollAmount > 0) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: `+=${scrollAmount}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      }).to(slider, {
        x: `-${scrollAmount}px`,
        ease: "none"
      })
    }
  }, [])

  return (
    <section className="flavor-section overflow-hidden bg-[#000]">
      <div
        ref={slideWrapperRef}
        className="flex items-center min-h-screen w-max gap-x-20 px-20"
      >
        <FlavorTitle />

        <div className="flex gap-x-10">
          <img src={Slide1} alt="Slide3" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide2} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide3} alt="Slide2" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide4} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide5} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide6} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
        </div>
      </div>
    </section>
  )
}

export default FlavourSection
