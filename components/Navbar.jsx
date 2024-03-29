import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// Icon Imports
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  //   FaEnvelope, **Undecided on which icon to use
} from "react-icons/fa";
import about_Logo from "../public/assets/about_logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#26c485");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (router.asPath === "/newrecoup") {
      setNavBg("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNavBg("#26c485");
      setLinkColor("#1f2937");
    }
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div
        className="flex justify-between items-center
                      w-full h-full px-2 2xl:px-16"
      >
        <Link href="/">
          <Image
            src={about_Logo}
            alt="/"
            width="200"
            height="65"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className=" text-[#fbfbff] ml-10 text-2xl font-bold uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="text-[#fbfbff] ml-10 text-2xl font-bold uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="text-[#fbfbff] ml-10 text-2xl font-bold uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="text-[#fbfbff] ml-10 text-2xl font-bold uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className=" text-[#fbfbff] ml-10 text-2xl font-bold uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <HiOutlineBars3 size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#26c485] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={about_Logo}
                  width="130"
                  height="65"
                  alt="/"
                />
              </Link>
              <div
                className="rounded-full shadow-lg bg-[#fbfbff] shadow-[#656565]
                             p-3 cursor-pointer"
                onClick={handleNav}
              >
                <HiOutlineXMark size={16} className="text-[#050517]" />
              </div>
            </div>
            <div className="border-b border-[#656565] my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-extrabold tracking-widest text-[#fbfbff]">Let&apos;s Do This</p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-lg font-bold">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-lg font-bold">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-lg font-bold">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-lg font-bold">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-lg font-bold">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-4">
              <p className="uppercase tracking-widest font-extrabold text-[#fbfbff]">Let&apos;s Connect</p>
              {/* Icons for contacts */}
              <div className="flex items-center justify-between my-4 w-full sm:w-80%">
                <a
                  className="rounded-full shadow-lg bg-[#ff6700] shadow-[#656565]
                                    p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/aguiarbruno/"
                                    rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="text-[#050517]"/>
                </a>
                <a
                  className="rounded-full shadow-lg bg-[#ff6700] shadow-[#656565]
                                    p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                    target="_blank"
                                    href="https://github.com/baguiar428"
                                    rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="text-[#050517]" />
                </a>
                <div
                  className="rounded-full shadow-lg bg-[#ff6700] shadow-[#656565]
                                    p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaRegEnvelope size={30} className="text-[#050517]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;