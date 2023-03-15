import React from "react";
import Image from "next/image";
import newRecoupImg from "public/assets/projects/new_recoup_collage.png";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p>Projects</p>
        <h2>What I've Built</h2>
        {/* Container for project */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-green-500 to-green-800">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={newRecoupImg}
              alt="New Recoup Project"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3>New Recoup Massage</h3>
              <p>
                Web portal that allows therapists to keep a contact list and send
                custom promotional emails and SMS to multiple clients at a time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
