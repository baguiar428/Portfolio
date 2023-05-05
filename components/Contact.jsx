import React, {useState} from "react";
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

  // State for Contact Form
  // Removing feature for now. I don't have enough traffic to justify paying for
  // custom email address. SendGrid is activated and can be used in the future.

  // const [fullname, setFullname] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        {/* <p className="text-xl tracking-widest uppercase">Contact</p> */}
        <h2 className="pt-10 pb-4 text-center">Get In Touch</h2>
        {/* Original Layout for Contact Form
        <div className="grid lg:grid-cols-5 gap-8"> */}
        <div className="flex justify-center">
          {/* Left */}
          {/* <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-[#26c485] shadow-[#656565] rounded-xl p-4"> */}
          <div className="flex justify-center h-full shadow-xl bg-[#26c485] shadow-[#656565] rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div className="flex justify-center">
                <Image
                  className="rounded-xl"
                  //Not sure i want these : hover:scale-105 ease-in duration-300
                  src={contact_me}
                  width="400"
                  height="200"
                  alt="Contact Me"
                />
              </div>
              <div>
                <h2 className="py-2 text-center">Bruno Aguiar</h2>
                <p className="text-center">Full Stack Developer</p>
                <p className="py-4">
                  I am available for full-stack web, mobile and application development in freelance or full-time positions.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase font-bold text-center">Connect With Me</p>
                {/* Container for icons */}
                <div className="flex items-center justify-between py-4">
                  <a
                    className="rounded-full shadow-lg bg-[#ff6700] shadow-[#656565]
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    target="_blank"
                    href="https://www.linkedin.com/in/aguiarbruno/"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={32} className="text-[#050517]"/>
                  </a>
                  <a
                    className="rounded-full shadow-lg bg-[#ff6700] shadow-[#656565]
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  //Copy email to clipboard after clicking icon
                  // onClick={() =>  navigator.clipboard.writeText('b.aguiar428@gmail.com')}
                  href="mailto:b.aguiar428@gmail.com" data-initialized="true"
                  >
                    <FaRegEnvelope size={32} className="text-[#050517]" />
                  </a>
                  <a
                    className="rounded-full shadow-lg bg-[#ff6700] shadow-[#656565]
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    target="_blank"
                    href="https://github.com/baguiar428"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={32} className="text-[#050517]"/>
                  </a>
                  {/* Use for later */}
                  {/* <div className='rounded-full shadow-lg shadow-gray-500
                                    p-6 cursor-pointer hover:scale-110 ease-in duration-300'>

                    </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          {/* <div className="col-span-3 w-full h-auto shadow-xl bg-[#26c485] shadow-[#656565] rounded-xl lg:p-4">
            <div className="p-4">
              <form 
              // Submit function for SendGrid contact form
              // Feature not needed for now
              // onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="font-bold text-lg py-2">NAME <span className="text-red-500 font-bold">* = Field Required</span></label>
                    <input
                      className="bg-[#fbfbff] border-2 rounded-lg p-3 flex border-[#656565]"
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase font-bold text-lg py-2">
                      Phone Number
                    </label>
                    <input
                      className="bg-[#fbfbff] border-2 rounded-lg p-3 flex border-[#656565]"
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-bold text-lg py-2">Email <span className="text-red-500">*</span></label>
                  <input
                    className="bg-[#fbfbff] border-2 rounded-lg p-3 flex border-[#656565]"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-bold text-lg py-2">Subject <span className="text-red-500">*</span></label>
                  <input
                    className="bg-[#fbfbff] border-2 rounded-lg p-3 flex border-[#656565]"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.taget.value);
                    }}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-bold text-lg py-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    className=" bg-[#fbfbff] border-2 rounded-lg p-3 border-[#656565]"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">Send Message</button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div
              className="rounded-full shadow-lg shadow-[#656565]
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