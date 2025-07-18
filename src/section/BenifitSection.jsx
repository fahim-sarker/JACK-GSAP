import React from 'react'
import ClipPath from '../Components/ClipPath'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import VideoPinSecttion from '../Components/VideoPinSecttion';

const BenifitSection = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 2,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 5
      }
    })
    tl.to(".benefit-section .first-title", {
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1
    })
    tl.to(".benefit-section .second-title", {
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1
    })
    tl.to(".benefit-section .third-title", {
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1
    })
    tl.to(".benefit-section .fourth-title", {
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1
    })
  });

  return (
    <section className="benefit-section bg-[#000]">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Discover the Drive: <br />
            Key Advantages of Owning a BMW
          </p>

          <div className="mt-20 col-center">
            <ClipPath
              title={"TwinPower Turbo Engines"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPath
              title={"Intelligent xDrive System"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPath
              title={"Luxury Interior Craftsmanship"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPath
              title={"Next-Gen iDrive Technology"}
              color={"#2E2D2F"}
              bg={"#FED775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSecttion />
      </div>
    </section>
  )
}

export default BenifitSection