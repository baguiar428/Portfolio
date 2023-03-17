import React from "react";
import Image from "next/image";
import { MdRadioButtonChecked } from "react-icons/md";
import newRecoupImg from "../public/assets/projects/new_recoup_collage.png";

const newrecoup = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={newRecoupImg}
          alt="New Recoup Background"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">New Recoup</h2>
          <h3>React JS + Ruby on Rails</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Web portal that allows therapists to keep an address book and send
            custom promotional emails and SMS to multiple clients at a time.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div>
              <p className="text-black py-2 flex items-center">
                <MdRadioButtonChecked className="pr-1" />
                React
              </p>
              <p className="text-black py-2 flex items-center">
                <MdRadioButtonChecked className="pr-1" />
                Javascript
              </p>
              <p className="text-black py-2 flex items-center">
                <MdRadioButtonChecked className="pr-1" />
                Ruby on Rails
              </p>
              <p className="text-black py-2 flex items-center">
                <MdRadioButtonChecked className="pr-1" />
                Material-UI
              </p>
              <p className="text-black py-2 flex items-center">
                <MdRadioButtonChecked className="pr-1" />
                Twilio
              </p>
              <p className="text-black py-2 flex items-center">
                <MdRadioButtonChecked className="pr-1" />
                Calendly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newrecoup;