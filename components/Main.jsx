import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  //   FaEnvelope, **Undecided on which icon to use
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            It's OK... You can talk about Bruno
          </p>
          <h1 className="py-4 text-black">Hi, I'm Bruno</h1>
          <h1 className="py-2">A Full-Stack Developer</h1>
          <p className="py-4 text-black max-w-[70%] m-auto">
            I'm a full-stack developer with a passion for using technology to
            solve problems and make life easier...and fun! I have 10+ years of
            experience in IT across multiple industries. I decided to dive into
            software development and graduated from Flatiron School Bootcamp.
            I've started my journey to level up my skillset and career and i'm
            excited for what's to come!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
  );
};

export default Main;