import React, { useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const NavBar = () => {
  const navRef = useRef();
  const linksRef = useRef();
  const menuRef = useRef();
  const overlayRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  // Initial animation for logo + desktop links
  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
    gsap.fromTo(
      linksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  // Slide-in menu animation on open/close
  useGSAP(() => {
    if (menuOpen) {
      gsap.set(menuRef.current, { x: "100%" }); // force offscreen
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
        display: "block",
      });
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          overlayRef.current.style.display = "none";
        },
      });
    }
  }, [menuOpen]);

  // Click outside to close
  useGSAP(() => {
    const handleOutsideClick = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest("button") // ignore clicks on toggle button
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  return (
    <nav className="py-5 fixed top-0 left-0 w-full z-50 bg-[#000] bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <h1
          ref={navRef}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent"
        >
          BMW
        </h1>

        {/* Desktop Nav */}
        <ul
          ref={linksRef}
          className="hidden md:flex gap-x-32 text-white text-base md:text-lg font-medium tracking-wide"
        >
          {["Home", "Models", "Gallery", "Contact"].map((item, i) => (
            <li key={i} className="hover:text-blue-400 transition duration-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          <HiMenu />
        </button>
      </div>

      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-screen bg-transparent bg-opacity-60 z-40 hidden"
      />

      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-[50%] sm:w-[60%] h-screen bg-black text-white z-50 px-6 py-20 translate-x-full"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white"
        >
          <HiX />
        </button>

        <ul className="flex flex-col gap-y-8 text-lg font-medium mt-10">
          {["Home", "Models", "Gallery", "Contact"].map((item, i) => (
            <li
              key={i}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
