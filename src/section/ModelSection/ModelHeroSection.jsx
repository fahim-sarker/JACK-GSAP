import React, { useRef } from 'react'
import Models from "../../assets/slide5.jpg"
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText)

const ModelHeroSection = () => {
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null) // ref for the image animation

  useGSAP(() => {
    const split = new SplitText(titleRef.current, { type: "words" })

    const tl = gsap.timeline({ delay: 0.1 })

    tl.from(contentRef.current, {
      opacity: 0,
      y: 250,
      duration: 1,
      ease: "power2.out"
    })
      .from(split.words, {
        y: 200,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "back.out(1.7)"
      }, "-=0.5")
      .from(imageRef.current, {
        y: 300,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out"
      }, "-=1") 
  }, [])

  return (
    <div className='py-42 bg-[#000] h-full w-full'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-x-20 items-center">
          <div className="hero-content text-white" ref={contentRef}>
            <p className='text-3xl font-bold'>Soundtrack of an icon</p>
            <h3
              className='py-5 text-[60px] md:text-[120px] font-bold hero-title leading-[1.1]'
              ref={titleRef}
            >
              Five Playlists Celebrating 50 Years of THE 3
            </h3>
            <button className='bg-gradient-to-r from-black to-red-600 cursor-pointer text-white px-10 py-3 rounded-lg'>
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="bg-gray-500 p-10 w-full">
              <img
                src={Models}
                alt="Models"
                className='h-[450px] w-full object-cover'
                ref={imageRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelHeroSection
