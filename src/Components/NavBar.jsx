import React, { useRef, useEffect } from 'react';
import gsap from "gsap";

const NavBar = () => {
  const navref = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1.2 } });

    tl.fromTo(
      navref.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 }
    ).fromTo(
      linksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.8"
    );
  }, []);

  return (
    <nav className="py-5 fixed top-0 left-0 w-full z-20 bg-[#000] bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <h1
          className="bmw-logo-text text-4xl font-bold bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent"
          ref={navref}
        >
          BMW
        </h1>


        <ul
          className="flex gap-x-32 text-white text-lg font-medium tracking-wide"
          ref={linksRef}
        >
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Models
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Gallery
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
