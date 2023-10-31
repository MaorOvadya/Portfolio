//TITLE
import Title from "../components/Title";

import AboutPicture from "../assets/images/IMG_0307.jpeg";
//React iconst knowledge
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaFontAwesomeFlag } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiGreensock,
  SiVisualstudio,
  SiCplusplus,
  SiJquery,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoSass,
  BiLogoTypescript,
  BiLogoJava,
} from "react-icons/bi";

function About() {
  return (
    <div
      id="about"
      className="border-b pt-5 bg-white border-slate-300 box-border ">
      <Title number="01." title="About Me" />
      <div className="border-b border-slate-300 pb-10">
        <div className="flex flex-wrap md:px-36 px-8 text-center md:text-left leading-8">
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-between gap-5">
            <div className="">
              {aboutMeText.split("\n").map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div>
              <img
                className="h-[30rem] md:w-[60rem] rounded-md  "
                src={AboutPicture}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="knowledge-container h-full w-full pt-10">
        <p className="text text-center pb-5 pt-5 text-2xl font-semibold">
          Tech Skills
        </p>
        <div className="flex md:flex-row flex-col gap-5 items-center md:items-stretch md:justify-evenly capitalize pb-10 pt-10 px-5">
          <div className="container-Css bg-white border border-slate-300 rounded-lg w-[20rem] shadow-2xl shadow-slate-600">
            <p className=" text-2xl text-center p-5 font-extrabold text-slate-600 bg-white">
              css & animations
            </p>
            <div>
              {CssTechnologies.map((css, index) => {
                return (
                  <div
                    key={index}
                    className="text-center flex flex-col justify-center items-center py-5">
                    <p className="text-5xl text-blue-500">{css.css}</p>
                    <p className="text-xl">{css.cssText}</p>
                    <p className="text-5xl text-sky-500">{css.tailWind}</p>
                    <p className="text-xl">{css.tailWindText}</p>
                    <p className="text-5xl text-yellow-500">
                      {css.fontAwesome}
                    </p>
                    <p className="text-xl">{css.fontAwesomeText}</p>
                    <p className="text-5xl text-purple-500">{css.bootStrap}</p>
                    <p className="text-xl">{css.bootStrapText}</p>
                    <p className="text-5xl text-red-400">{css.sass}</p>
                    <p className="text-xl">{css.sassText}</p>
                    <p className="text-5xl text-green-500">{css.gsap}</p>
                    <p className="text-xl">{css.gsapText}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="container-Css px-5 bg-white border border-slate-300 rounded-lg w-[20rem] shadow-2xl shadow-slate-600">
            <p className=" text-2xl text-center p-5 font-extrabold text-slate-600 bg-white">
              Languages & libraries
            </p>

            <div>
              {Language.map((lang, index) => {
                return (
                  <div
                    key={index}
                    className="text-center flex flex-col justify-center items-center py-5">
                    <p className="text-5xl text-blue-500">{lang.html}</p>
                    <p className="text-xl">{lang.htmlText}</p>
                    <p className="text-5xl text-sky-500">{lang.javaScript}</p>
                    <p className="text-xl">{lang.javaScriptText}</p>
                    <p className="text-5xl text-yellow-500">
                      {lang.typeScript}
                    </p>
                    <p className="text-xl">{lang.typeScriptText}</p>
                    <p className="text-5xl text-purple-500">{lang.cPlus}</p>
                    <p className="text-xl">{lang.cPlusText}</p>
                    <p className="text-5xl text-red-400">{lang.jquery}</p>
                    <p className="text-xl">{lang.jqueryText}</p>
                    <p className="text-5xl text-orange-400">{lang.java}</p>
                    <p className="text-xl">{lang.javaText}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="container-Css bg-white border border-slate-300 rounded-lg w-[20rem] shadow-2xl shadow-slate-600">
            <p className=" text-2xl text-center p-5 font-extrabold text-slate-600 bg-white">
              framework & environment
            </p>

            <div>
              {frameWork.map((frame, index) => {
                return (
                  <div
                    key={index}
                    className="text-center flex flex-col justify-center items-center py-5 ">
                    <p className="text-5xl text-gray-400">{frame.gitHub}</p>
                    <p className="text-xl">{frame.gitHubText}</p>
                    <p className="text-5xl text-red-400">
                      {frame.Visualstudio}
                    </p>
                    <p className="text-xl">{frame.VisualstudioText}</p>
                    <p className="text-5xl text-sky-500">{frame.vite}</p>
                    <p className="text-xl">{frame.viteText}</p>
                    <p className="text-5xl text-blue-500">{frame.react}</p>
                    <p className="text-xl">{frame.reactText}</p>
                    <p className="text-5xl text-yellow-500">{frame.nodeJs}</p>
                    <p className="text-xl">{frame.nodeJsText}</p>
                    <p className="text-5xl text-purple-500">{frame.nextJs}</p>
                    <p className="text-xl">{frame.nextJsText}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="px-20 pb-10 pt-10 text-center text-2xl text-red-500 capitalize">
          <p>studying to improve my technology knowledge</p>
        </div>
      </div>
    </div>
  );
}

export default About;

export const CssTechnologies = [
  {
    css: <FaCss3Alt />,
    cssText: "Css",
  },
  {
    tailWind: <SiTailwindcss />,
    tailWindText: "TailWind",
  },
  {
    fontAwesome: <FaFontAwesomeFlag />,
    fontAwesomeText: "FontAwesome",
  },
  {
    bootStrap: <BsFillBootstrapFill />,
    bootStrapText: "BootStrap",
  },
  {
    sass: <BiLogoSass />,
    sassText: "Sass",
  },
  {
    gsap: <SiGreensock />,
    gsapText: "GSAP",
  },
];

export const Language = [
  {
    html: <AiFillHtml5 />,
    htmlText: "Html",
  },
  {
    javaScript: <BiLogoJavascript />,
    javaScriptText: "JavaScript",
  },
  {
    typeScript: <BiLogoTypescript />,
    typeScriptText: "TypeScript",
  },
  {
    cPlus: <SiCplusplus />,
    cPlusText: "C++",
  },
  {
    jquery: <SiJquery />,
    jqueryText: "Jquery",
  },
  {
    java: <BiLogoJava />,
    javaText: "Java",
  },
];

export const frameWork = [
  {
    gitHub: <AiFillGithub />,
    gitHubText: "GitHub",
  },
  {
    Visualstudio: <SiVisualstudio />,
    VisualstudioText: "Visual Studio",
  },
  {
    vite: <SiVite />,
    viteText: "Vite",
  },
  {
    react: <BiLogoReact />,
    reactText: "React",
  },
  {
    nodeJs: <BiLogoNodejs />,
    nodeJsText: "NodeJs",
  },
  {
    nextJs: <TbBrandNextjs />,
    nextJsText: "NextJs",
  },
];

const aboutMeText = `Hello, my name is Maor Ovadya.\n
I am from Vancouver,Canada.
I’m passionate about programming languages and creating front- and back-end applications, and I am always seeking new challenges in tech.\n
The main technologies I use are GitHub, VisualStudio, HTML, CSS, React, JavaScript, and MySQL.\n
I’m a curious and creative person.\n
I am always interested in picking up new skills in areas like frameworks (Angular, Vuejs, Gatsby), programming languages (TypeScript, Java, Python, C#, C++, php), developing environments (nodeJs,NextJs), and technologies (Sass, Tailwind, Bootstrap ,Express.js, GSAP, jQuery, MongoDB).
I am a great team player and believe in the group, the process and the goals but I am also confident and am equally as comfortable working individually.\n
Working with a team means there will be varying opinions and ideas.\n
Even if you think your idea is best, you should listen to all ideas before pushing yours. Search for compromises, and remain respectful if your work is criticized.\n
I am not afraid of mistakes, I take responsibility for my mistakes and look for solutions. I always try to learn from my errors.`;

/*

 <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:gap-5">
            <div className="">
              {aboutMeText.split("\n").map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <img
              className="z-40 w-[24rem] h-fit rounded-lg "
              src={AboutPicture}
            />
          </div>

*/
