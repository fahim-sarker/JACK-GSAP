import React, { useRef } from 'react'
import FlavorTitle from '../Components/FlavorTitle'
import Slide1 from "../assets/slide1.jpg"
import Slide2 from "../assets/slide2.jpg"
import Slide3 from "../assets/slide3.jpg"
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
          pin: true
        }
      }).to(slider, {
        x: `-${scrollAmount}px`,
        ease: "none"
      })
    }
  }, [])

  return (
    <section className="flavor-section overflow-hidden">
      <div
        ref={slideWrapperRef}
        className="flex items-center h-full w-max gap-x-20 px-20"
      >
        <FlavorTitle />

        <div className="flex gap-x-10">
          <img src={Slide3} alt="Slide3" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide1} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide2} alt="Slide2" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide3} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide1} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
          <img src={Slide2} alt="Slide1" className="h-[70vh] w-[600px] object-cover rounded-xl rotate-6" />
        </div>
      </div>
    </section>
  )
}

export default FlavourSection
