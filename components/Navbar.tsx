"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import logo from "@/public/images/logo.png";
import { navLinks } from "@/constant/constant";

export default function Navbar() {
  const [showNav, setShownNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const showNavHandler = () => setShownNav(true);
  const hideNavHandler = () => setShownNav(false);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      {/* Navbar Desktop & Mobile Trigger */}
      <div
        className={`fixed ${navBg ? "bg-white shadow-md" : "bg-transparent"} w-full transition-all duration-200 h-[12vh] z-[1000]`}
      >
        {/* <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto"> */}
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
          <Image src={logo} alt="Logo" width={200} height={200} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.url}>
                <p className="nav__link text-3xl">{link.label}</p>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden">
            <HiBars3BottomRight onClick={showNavHandler} className="w-8 h-8 cursor-pointer text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div>
        <div className={`fixed ${navOpen} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bg-black opacity-70 w-full h-[100vh]`} />
        {/* <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-orange-500 space-y-6 z-[100006]`}> */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-orange-500 space-y-6 z-[100006]`}>
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] text-white">
                {link.label}
              </p>
            </Link>
          ))}
          <CgClose onClick={hideNavHandler} className="absolute top-[0.7rem] right-[1.4rem] cursor-pointer sm:w-8 sm:h-8 w-6 h-6 text-white" />
        </div>
      </div>
    </>
  );
}
