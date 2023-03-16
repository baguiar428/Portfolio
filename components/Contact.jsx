import React from "react";
import Image from "next/image";
import contact_me from "../public/assets/contact_me.jpg";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4">
                <div className="lg:p-4 h-full">
                    <div>
                        <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={contact_me} width="400" height="200" alt="Contact Me"/>
                        {/* <img src={contact_me} alt="Contact Me"/> */}
                    </div>
                    <div>
                        <h2 className="py-2">Bruno Aguiar</h2>
                        <p>Full Stack Developer</p>
                        <p>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                    </div>
                </div>
            </div>
          {/* Right */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
