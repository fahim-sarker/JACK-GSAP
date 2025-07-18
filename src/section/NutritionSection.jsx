import { nutrientLists } from "../constants";
import { useState } from "react";
import React from "react";
import Nutritionbg from "../assets/ntbg.jpg"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const [lists, setLists] = useState(nutrientLists);
  

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paraSplit = SplitText.create(".nutrition-section p", {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });

    tl.from(titleSplit.chars, {
      opacity: 0,
      y: 200,
      stagger: 0.05,
      ease: "power2.out",
      duration: 0.6,
    });
    tl.from(paraSplit.words, {
      opacity: 0,
      y: 100,
      stagger: 0.05,
      ease: "power2.out",
      duration: "0.6"
    });
    const scrolltl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%"
      }
    });
    scrolltl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    })
  }, []);



  return (
    <section className="nutrition-section">
      <img
        src={Nutritionbg}
        alt=""
        className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
      />

      <div className="flex md:flex-row flex-col justify-between items-center md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title relative z-10 text-white">It still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-gradient-to-r from-black to-red-600 pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-white">Body Good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph text-white">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;