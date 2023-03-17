import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router"
// Icon Imports
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  //   FaEnvelope, **Undecided on which icon to use
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
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

  useEffect(()=> {
    if (
      router.asPath === '/newrecoup'
    ) {
      setNavBg('transparent')
      setLinkColor('#f8f8f8')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },[router])

  return (
    <div
    style={{backgroundColor: `${navBg}`}}
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
            src="/../public/assets/About_logo.png"
            alt="/"
            width="125"
            height="50"
          />
        </Link>
        <div>
          <ul style={{color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-green-800 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
              <Image
                src="/../public/About-logo.png"
                width="87"
                height="35"
                alt="/"
              />
              </Link>
              <div
                className="rounded-full shadow-lg shadow-gray-500
                             p-3 cursor-pointer"
                onClick={handleNav}
              >
                <HiOutlineXMark />
              </div>
            </div>
            <div className="border-b border-gray-500 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let's Do This</p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest">Let's Connect</p>
              {/* Icons for contacts */}
              <div className="flex items-center justify-between my-4 w-full sm:w-80%">
                <div
                  className="rounded-full shadow-lg shadow-gray-500
                                    p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedin />
                </div>
                <div
                  className="rounded-full shadow-lg shadow-gray-500
                                    p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub />
                </div>
                <div
                  className="rounded-full shadow-lg shadow-gray-500
                                    p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaRegEnvelope />
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
