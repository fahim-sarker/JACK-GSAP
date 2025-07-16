import React, {  useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {

  const navref = useRef();

  useGSAP(() => {
    gsap.fromTo(
      navref.current,
      {
        x: -300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",

      }
    );
  }, []);

  return (
    <nav className='py-5 fixed top-0 left-0 w-full z-20'>
      <div className="container mx-auto">
        <h1
          className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          ref={navref}
        >
          JACK DANIELS
        </h1>
      </div>
    </nav>
  )
}

export default NavBar