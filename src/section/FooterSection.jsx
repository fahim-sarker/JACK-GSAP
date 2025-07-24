import React, { useRef } from "react";
import Herobg1 from "../assets/herovideo10.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FooterSection = () => {
  const contentref = useRef();
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      contentref.current,
      {
        x: 1000,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={footerRef}
      className="relative w-full h-screen overflow-hidden text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        src={Herobg1}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div ref={contentref}>
          <h2 className="text-4xl font-bold mb-4">Let’s Stay Connected</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto">
            Reach out to us anytime. We're here to help and guide you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
              <p>123 GSAP Street,<br />Animation City, NY 10001</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Contact</h3>
              <p>Email: support@gsapweb.com<br />Phone: +1 (234) 567-890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📜 Terms</h3>
              <p>Privacy Policy<br />Terms & Conditions</p>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-300">
            &copy; {new Date().getFullYear()} GSAP Web. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
