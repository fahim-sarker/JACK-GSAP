import React from 'react'
import Herovideo from "../assets/herovideo10.mp4"
import play from "../assets/play.svg"
import circle from "../assets/circle-text.svg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const VideoPinSecttion = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top",
        end: "100% top",
        scrub: 1.5,
        pin: true
      }
    });
    tl.to(".video-box", {
      clipPath: "circle(50% at 50% 50%)",
      ease: "power1.inOut"
    })
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{ clipPath: "circle(10% at 50% 50%)" }}
        className="size-full h-full video-box"
      >
        <video
          className="w-full h-full object-cover"
          src={Herovideo}
          playsInline
          muted
          loop
          autoPlay
        />

        <div className="abs-center md:scale-100 scale-200">
          <img src={circle} alt="" className="spin-circle" />
          <div className="play-btn">
            <img
              src={play}
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPinSecttion