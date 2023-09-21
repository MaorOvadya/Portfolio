//TITLE
import Title from "../components/Title";

import sitePic from "../assets/images/sitePic.webp";

function Projects() {
  return (
    <div
      id="projects"
      className="pt-5 pb-10 border border-b border-slate-300 box-border">
      <Title number="02." title="Projects" />
      <div className="z-40 flex flex-wrap justify-evenly relative gap-10">
        {projects.map((pro) => (
          <div key={pro.id} className="mx-5 w-full h-full">
            <div className="flex flex-col capitalize w-full ">
              <p className="px-5 text-center capitalize text-2xl pb-10 pt-10">
                {pro.TeddiesAndMonsterTitle}
              </p>
              <div className="flex flex-wrap-reverse xl:flex-wrap justify-evenly p-10">
                <div className="flex flex-wrap py-5 w-[30rem] text-center md:text-left leading-8">
                  {pro.TeddiesAndMonsterText.split("\n").map((t, index) => (
                    <div
                      key={index}
                      className="border-2 border-slate-400 self-center p-3 rounded-md">
                      <p key={index} className="capitalize text-base ">
                        {t}
                      </p>
                    </div>
                  ))}
                  <div className="capitalize text-base font-extralight  py-5">
                    {pro.TeddiesAndMonsterStack.split("\n").map((s, index) => (
                      <p key={index}>{s}</p>
                    ))}
                  </div>
                  <div className="flex flex-col items-center gap-5 sm:flex-row justify-between w-full ">
                    <p className="font-thin">made by group cooperation</p>
                    <button className="bg-slate-400 text-white w-[10rem] h-[2.5rem] rounded-md transition-all duration-500 ease-in hover:bg-white hover:text-red-500 hover:border hover:border-slate-400">
                      <a
                        className="pb-10 pt-10"
                        target="_blank"
                        href={pro.TeddiesAndMonsterLink}>
                        See More
                      </a>
                    </button>
                  </div>
                </div>

                <div className="">
                  <img
                    className="z-40 w-fit md:w-[30rem] h-fit rounded-md"
                    src={sitePic}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

const projects = [
  {
    id: 1,
    TeddiesAndMonsterTitle: `Teddies Vs Monster`,
    TeddiesAndMonsterText: `"E-Commerce Platform For Gaming Board: Teddies vs Monsters Board Game is an engaging and fun board game where players take on the roles of teddy bears defending their realm against menacing monsters.`,
    TeddiesAndMonsterStack: `Tech Stack:\n#Trello,#Figma,#TypeScript,#Tailwind Css,#NextJs,\n#Zuztand,#strapi,#Strip,#swiper,`,
    TeddiesAndMonsterLink: "https://teddies-vs-monsters-frontend.vercel.app/",
  },
];
