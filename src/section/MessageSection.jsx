import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'

const MessageSection = () => {

  useGSAP(() => {
    const firstmsgsplit = SplitText.create(".first-message", {
      type: "words",
    })
    const secondmsgsplit = SplitText.create(".second-message", {
      type: "words",
    })
    const paragrapgsplit = SplitText.create(".message-content", {
      type: "words,lines",
    });

    gsap.to(firstmsgsplit.words, {
      color: "#faeade",
      ease: "power2.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      }
    })
    gsap.to(secondmsgsplit.words, {
      color: "#faeade",
      ease: "power2.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    const revealmsg = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%"
      }
    });
    revealmsg.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 2%, 100% 100%, 0 100%)",
      ease: "circ.inOut"
    })
  });



  return (
    <section className="message-content bg-[#000]">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Ignite your passion for</h1>

            <div
              style={{ clipPath: " polygon(0 0, 0 1%, 0 86%, 0% 100%)" }}
              className="msg-text-scroll"
            >
              <div className="bg-gradient-to-r from-black to-red-600 md:pb-5 pb-3 px-5">
                <h2 className="text-white">Pure Performance</h2>
              </div>
            </div>

            <h1 className="second-message">
              and drive with BMW precision
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection