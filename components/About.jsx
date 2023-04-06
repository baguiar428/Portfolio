import React from "react";
import Image from "next/image";
import profile_pic from "../public/assets/profile_pic.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="tracking-widest text-[#050517]">About Me</h2>
          {/* Create bio in this div */}
          <p className="pt-4 text-lg text-[#050517]">I&apos;m bilingual &#40;English and Portuguese&#41; and a dual citizen of the United States and Portugal &#40;EU&#41;.
          I enjoy adventure, traveling and food. My hobbies include tinkering with technology, snowboarding, motorsports, DIY, camping, music and gardening.
          </p>
          {/*Place in link for resume or projects */}
        </div>
        {/* Place image below */}
        <div
          className="w-full h-auto m-auto shadow-lg shadow-[#656565] rounded-xl
                            flex items-center justify-center"
                            // Not sure I need/want this: hover:scale-105 ease-in duration-300
        >
          <Image
            className="rounded-xl"
            src={profile_pic}
            alt="Profile Pic"
            width="400"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;