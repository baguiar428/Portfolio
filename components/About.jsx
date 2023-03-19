import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2>About Me</h2>
          {/* Create bio in this div */}
          <p>Fill In Bio Here</p>
          {/*Place in link for resume or projects */}
        </div>
        {/* Place image below */}
        <div
          className="w-full h-auto m-auto shadow-lg shadow-gray-500 rounded-xl
                            flex items-center justify-center p-2 hover:scale-105 ease-in duration-300"
        >
          <Image
            className="rounded-xl"
            src="/../public/assets/profile_pic.jpg"
            alt="Profile Pic"
            width="200"
            height="150"
          />
        </div>
      </div>
    </div>
  );
};

export default About;