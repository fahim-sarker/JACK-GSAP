import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(col1Ref.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(col2Ref.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(col3Ref.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(col4Ref.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#000] py-20 overflow-hidden">
      <div className="container mx-auto">
        <ul className="flex gap-x-10 text-white font-medium">
          {["English", "Italiano", "Deutsch", "Français", "Español", "日本語"].map((lang, i) => (
            <li key={i} className="hover:text-gray-300 duration-300 ease-in-out cursor-pointer text-[22px]">
              {lang}
            </li>
          ))}
        </ul>

        <div className="pt-32 flex gap-x-20 justify-between flex-wrap">
          <div ref={col1Ref}>
            <h3 className="text-white font-medium text-[25px] pb-2 border-b border-gray-300">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-gray-400 font-medium pt-10">
              {["Home", "BMW in your country", "BMW Group Careers", "EU Detergents Regulation", "REACH Regulation", "Compatibility Check"].map((item, i) => (
                <li key={i} className="hover:text-white duration-300 cursor-pointer text-[20px]">{item}</li>
              ))}
            </ul>
          </div>

          <div ref={col2Ref}>
            <h3 className="text-white font-medium text-[25px] pb-2 border-b border-gray-300">More BMW Websites</h3>
            <ul className="flex flex-col gap-4 text-gray-400 font-medium pt-10">
              {["BMW M", "BMW M Motorsport", "BMW Golfsport", "BMW M Driving Experience", "BMW Welt", "BMW Group Classic"].map((item, i) => (
                <li key={i} className="hover:text-white duration-300 cursor-pointer text-[20px]">{item}</li>
              ))}
            </ul>
          </div>

          <div ref={col3Ref}>
            <h3 className="text-white font-medium text-[25px] pb-2 border-b border-gray-300">BMW.com</h3>
            <ul className="flex flex-col gap-4 text-gray-400 font-medium pt-10">
              {["About BMW.com", "Contact", "Cookies", "Imprint", "Accessibility"].map((item, i) => (
                <li key={i} className="hover:text-white duration-300 cursor-pointer text-[20px]">{item}</li>
              ))}
            </ul>
          </div>

          <div ref={col4Ref}>
            <h3 className="text-white font-medium text-[25px] pb-2 border-b border-gray-300">Visit us on</h3>
            <ul className="flex flex-col gap-4 text-gray-400 font-medium pt-10">
              {["Facebook", "X", "Instagram", "YouTube"].map((item, i) => (
                <li key={i} className="hover:text-white duration-300 cursor-pointer text-[20px]">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
