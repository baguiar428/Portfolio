import React from "react";
import newRecoupImg from "public/assets/projects/new_recoup_collage.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p>Projects</p>
        <h2>What I've Built</h2>
        {/* Container for projects */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="New Recoup"
            backgroundImg={newRecoupImg}
            projectUrl="/newrecoup"
            description="Web portal that allows therapists to keep an address book and
            send custom promotional emails and SMS to multiple clients at a
            time."
            tech="React JS + Ruby on Rails"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
