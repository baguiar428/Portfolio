import React from "react";
import Image from "next/image";
// Skill Logos
import css_logo from "public/assets/web_tech_logos/css3.svg";
import git_logo from "public/assets/web_tech_logos/git.svg";
import html_logo from "public/assets/web_tech_logos/html5.svg";
import js_logo from "public/assets/web_tech_logos/javascript.svg";
import jira_logo from "public/assets/web_tech_logos/jira.svg";
import mui_logo from "public/assets/web_tech_logos/material-ui.svg";
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
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="pb-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 text-center cursor-pointer"
          target="_blank"
          href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={js_logo}
                  width="64"
                  height="64"
                  alt="javascript logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://react.dev/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={react_logo}
                  width="64"
                  height="64"
                  alt="react logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://nextjs.org/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={nextjs_logo}
                  width="64"
                  height="64"
                  alt="NextJS logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://www.npmjs.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto pt-6 pb-3">
                <Image src={npm_logo} width="64" height="64" alt="npm logo" />
              </div>
              <div className="flex flex-col items-center pt-1">
                <h3>NPM</h3>
              </div>
            </div>
          </a>
          {/* This is original code can delete when done with alignment
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://www.npmjs.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image src={npm_logo} width="64" height="64" alt="npm logo" />
              </div>
              <div className="flex flex-col items-center">
                <h3>NPM</h3>
              </div>
            </div>
          </a> */}
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://yarnpkg.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image src={yarn_logo} width="64" height="64" alt="yarn logo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Yarn</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://rubyonrails.org/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto pt-6 pb-3">
                <Image
                  src={rails_logo}
                  width="64"
                  height="64"
                  alt="ruby on rails logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center pt-1">
                <h3>Ruby on Rails</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://git-scm.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={git_logo}
                  width="64"
                  height="64"
                  alt="git logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://www.postman.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={postman_logo}
                  width="64"
                  height="64"
                  alt="github logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://tailwindcss.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={tailwind_logo}
                  width="64"
                  height="64"
                  alt="tailwind logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://semantic-ui.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={semantic_logo}
                  width="64"
                  height="64"
                  alt="semantic-ui logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Semantic-UI</h3>
              </div>
            </div>
          </a>
          <a className=" bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://mui.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col py-1">
              <div className="m-auto ">
                <Image
                  src={mui_logo}
                  width="64"
                  height="64"
                  alt="Mui logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center pt-2">
                <h3>MUI</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://www.atlassian.com/software/jira"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col ">
              <div className="m-auto pt-6 pb-3">
                <Image src={jira_logo} width="64" height="64" alt="jira logo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jira</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://html.spec.whatwg.org/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image src={html_logo} width="64" height="64" alt="html logo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://www.w3.org/TR/CSS/#css"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image src={css_logo} width="64" height="64" alt="css logo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://www.postgresql.org/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={postgres_logo}
                  width="64"
                  height="64"
                  alt="postgresql logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </a>
          <a className="bg-[#26c485] shadow-[#656565] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          target="_blank"
          href="https://www.twilio.com/"
          rel="noopener noreferrer">
            <div className="flex items-center flex-col">
              <div className="m-auto">
                <Image
                  src={twilio_logo}
                  width="64"
                  height="64"
                  alt="twilio logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Twilio</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;