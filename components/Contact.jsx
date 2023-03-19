import React from "react";
import Image from "next/image";
import Link from "next/link";
import contact_me from "../public/assets/contact_me.jpg";
import {
  FaAngleDoubleUp,
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  //   FaEnvelope, **Undecided on which icon to use
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact_me}
                  width="400"
                  height="200"
                  alt="Contact Me"
                />
                {/* Not sure why this isn't loading... */}
                {/* <img src={contact_me} alt="Contact Me"/> */}
              </div>
              <div>
                <h2 className="py-2">Bruno Aguiar</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;'s talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                {/* Container for icons */}
                <div className="flex items-center justify-between py-4">
                  <div
                    className="rounded-full shadow-lg shadow-gray-500
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaLinkedin />
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-500
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaGithub />
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-500
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaRegEnvelope />
                  </div>
                  {/* Use for later */}
                  {/* <div className='rounded-full shadow-lg shadow-gray-500
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300'>

                    </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-700 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div
              className="rounded-full shadow-lg shadow-gray-500
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaAngleDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;