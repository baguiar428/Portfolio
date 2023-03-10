import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div
        className="flex justify-between items-center
                      w-full h-full px-2 2xl:px-16"
      >
        <Image
          src="/../public/About-logo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
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
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
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
              <Image
                src="/../public/About-logo.png"
                width="87"
                height="35"
                alt="/"
              />
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
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
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