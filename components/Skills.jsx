import React from "react";
import Image from "next/image";
// Skill Logos
import css_logo from "public/assets/web_tech_logos/css3.svg";
import github_logo from "public/assets/web_tech_logos/github.svg";
import html_logo from "public/assets/web_tech_logos/html5.svg";
import js_logo from "public/assets/web_tech_logos/javascript.svg";
import jira from "public/assets/web_tech_logos/jira.svg";
import node_logo from "public/assets/web_tech_logos/nodejs.svg";
import npm_logo from "public/assets/web_tech_logos/npm.svg";
import postgres_logo from "public/assets/web_tech_logos/postgresql.svg";
import react_logo from "public/assets/web_tech_logos/react.svg";
import rails_logo from "public/assets/web_tech_logos/ruby-on-rails.svg";
import semantic_logo from "public/assets/web_tech_logos/semantic-ui.svg";
import tailwind_logo from "public/assets/web_tech_logos/tailwind.svg";
import yarn_logo from "public/assets/web_tech_logos/yarn.svg";


const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p>Skills</p>
        <h2>What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={js_logo} width="64" height="64" alt="javascript logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
