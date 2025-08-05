import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect } from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import FooterSection from '../section/FooterSection';
import React from 'react';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const RootLayout = () => {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });
  return (
    <>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default RootLayout