import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  title,
  backgroundImg,
  description,
  tech,
  projectUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#656565] rounded-xl p-4 group hover:bg-[#26c485]">
      {/* Unused: hover:bg-gradient-to-r from-green-500 to-green-800 */}
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl tracking-wide text-center">{title}</h3>
        {/* <p className="text-center">{description}</p> */}
        <p className="pt-2 pb-4 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;