const nutrientLists = [
  { label: "Engine Power", amount: "335 hp" },
  { label: "Torque", amount: "450 Nm" },
  { label: "0-60 mph", amount: "4.6 sec" },
  { label: "Top Speed", amount: "155 mph" },
  { label: "Fuel Efficiency", amount: "30 mpg" },
];

import herovideo10 from "../assets/herovideo10.mp4";
import heroBg from "../assets/herovideo10.mp4";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

 const cards = [
  {
    src: herovideo10,
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: slide1,
    translation: "translate-y-[-5%]",
  },
  {
    src: heroBg,
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: slide2,
  },
  {
    src: heroBg,
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: slide3,
    translation: "translate-y-[-5%]",
  },
  {
    src: heroBg,
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: slide4,
    translation: "translate-y-[5%]",
  },
  {
    src: heroBg,
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: slide5,
  },
  {
    src: heroBg,
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: slide3,
    translation: "translate-y-[5%]",
  },
  {
    src: heroBg,
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: slide1,
    translation: "translate-y-[10%]",
  },
];

export { nutrientLists,cards };
