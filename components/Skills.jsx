import React from "react";
import Image from "next/image";
// Skill Logos
import css_logo from "public/assets/web_tech_logos/css3.svg";
import github_logo from "public/assets/web_tech_logos/github.svg";
import html_logo from "public/assets/web_tech_logos/html5.svg";
import js_logo from "public/assets/web_tech_logos/javascript.svg";
import jira_logo from "public/assets/web_tech_logos/jira.svg";
import material_logo from "public/assets/web_tech_logos/material-ui.svg";
import nextjs_logo from "public/assets/web_tech_logos/nextjs.svg";
import npm_logo from "public/assets/web_tech_logos/npm.svg";
import postgres_logo from "public/assets/web_tech_logos/postgresql.svg";
import postman_logo from "public/assets/web_tech_logos/postman.svg";
import react_logo from "public/assets/web_tech_logos/react.svg";
import rails_logo from "public/assets/web_tech_logos/ruby-on-rails.svg";
import semantic_logo from "public/assets/web_tech_logos/semantic-ui.svg";
import tailwind_logo from "public/assets/web_tech_logos/tailwind.svg";
import twilio_logo from "public/assets/web_tech_logos/twilio.svg";
import yarn_logo from "public/assets/web_tech_logos/yarn.svg";


const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p>Skills</p>
        <h2>What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 text-center">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={js_logo} width="64" height="64" alt="javascript logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={react_logo} width="64" height="64" alt="react logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={nextjs_logo} width="64" height="64" alt="react logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={npm_logo} width="64" height="64" alt="npm logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NPM</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={yarn_logo} width="64" height="64" alt="yarn logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Yarn</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={rails_logo} width="64" height="64" alt="ruby on rails logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ruby on Rails</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={github_logo} width="64" height="64" alt="github logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={postman_logo} width="64" height="64" alt="github logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={tailwind_logo} width="64" height="64" alt="tailwind logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={semantic_logo} width="64" height="64" alt="semantic-ui logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Semantic-UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={material_logo} width="64" height="64" alt="material-ui logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Material-UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col ">
              <div className="m-auto">
                <Image
                  src={jira_logo} width="64" height="64" alt="jira logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jira</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={html_logo} width="64" height="64" alt="html logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={css_logo} width="64" height="64" alt="css logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={postgres_logo} width="64" height="64" alt="postgresql logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={twilio_logo} width="64" height="64" alt="postgresql logo"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Twilio</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
