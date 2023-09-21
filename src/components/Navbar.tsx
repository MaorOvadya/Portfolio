import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import { gsap } from "gsap";

function Navbar() {
  const [open, setOpen] = useState(false);

  function clickHandle() {
    console.log("click");
    setOpen(!open);
  }

  useEffect(() => {
    gsap.timeline().fromTo(
      ".linksComputer",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
          each: 0.5,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <div className="linksComputer z-50 fixed top-0 bottom-0 left-0 right-0 bg-white rounded-b-xs shadow-2xl w-full h-fit flex flex-row justify-between items-center px-[1rem] py-[0.5rem] border-b border-slate-300">
          <Link
            className="linksComputer cursor-pointer transition-all duration-300 ease-in rounded-md hover:text-red-500 mx-[1rem] px-6 py-3 list-none"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            MaorOvadya
          </Link>
          <ul className="flex cursor-pointer">
            <Link
              className="linksComputer transition-all duration-500 ease-in rounded-md hover:text-white hover:bg-red-500 mx-[1rem] px-6 py-3"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}>
              About
            </Link>
            <Link
              className="linksComputer transition-all duration-500 ease-in rounded-md hover:text-white hover:bg-red-500 mx-[1rem] px-6 py-3"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}>
              Projects
            </Link>
            <Link
              className="linksComputer transition-all duration-500 ease-in rounded-md hover:text-white hover:bg-red-500 hover:border-white mx-[1rem] px-6 py-3"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}>
              Contact
            </Link>
            <Link
              className="linksComputer transition-all duration-500 ease-in rounded-md text-red-500  border border-red-500 hover:text-white hover:border-white hover:bg-red-500 mx-[1rem] px-6 py-3"
              to="resume">
              Resume
            </Link>
          </ul>
        </div>
      </div>

      <div className="md:hidden block linksMobile cursor-pointer z-50 realtive top-0 bottom-0 left-0 right-0 bg-white rounded-b-xs shadow-2xl w-full h-fit flex-row justify-between items-center py-[0.5rem] border-b border-slate-300">
        {open ? (
          <li className="linksMobile cursor-pointer transition-all duration-300 ease-in hover:text-red-500 mx-[1rem] p-6 list-none border-b border-slate-300 w-[50%]">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              MaorOvadya
            </Link>
          </li>
        ) : (
          <li className="linksMobile cursor-pointer transition-all duration-300 ease-in w-[8rem] rounded-md hover:text-red-500 mx-[1rem] p-6 list-none">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              MaorOvadya
            </Link>
          </li>
        )}

        <div
          className="absolute top-6 right-5 w-[2.5rem] h-[2.5rem] border border-slate-300 rounded-[100%] duration-500"
          onClick={() => clickHandle()}>
          <span className="spanTop absolute block h-[1px] w-[25px] bg-[#526D82] right-[6.5px] bottom-[26px]"></span>
          <span className="spanMiddle absolute block h-[1px] w-[25px] bg-[#526D82] right-[6.5px] bottom-[18px]"></span>
          <span className="spanlower absolute block h-[1px] w-[25px] bg-[#526D82] right-[6.5px] bottom-[10px]"></span>
        </div>

        <div
          className={`z-50 bg-white w-full h-72 pb-3 rounded-b-xs shadow-2xl transition-all duration-700 ease-in-out ${
            open ? "absolute left-0 " : "absolute left-[-1490px] "
          }`}>
          {open ? (
            <div>
              <ul className="flex flex-col cursor-pointer">
                <Link
                  className="linksMobile border-b border-slate-300 transition-all duration-300 ease-in mx-[1rem] hover:rounded-lg px-6 py-3 w-[60%]"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}>
                  <span className="text-red-500 text-xs">01.</span>About
                </Link>
                <Link
                  className="linksMobile border-b border-slate-300 transition-all duration-500 ease-in mx-[1rem] hover:rounded-lg px-6 py-3 w-[70%]"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}>
                  <span className="text-red-500 text-xs">02.</span>Projects
                </Link>
                <Link
                  className="linksMobile transition-all duration-500 ease-in mx-[1rem] px-6 py-3 border-b hover:rounded-lg border-slate-300 w-[80%]"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}>
                  <span className="text-red-500 text-xs">03.</span>Contact
                </Link>
                <li className="linksMobile gap-5 transition-all duration-500 ease-in text-red-500 border-b border-slate-300 hover:border-red-500 mx-[1rem] px-6 py-3 w-[90%]">
                  <Link to="resume">Resume</Link>
                </li>
              </ul>

              <div className="text-red-500 flex gap-5 p-6 text-4xl">
                <div className="linkedin duration-300 hover:scale-125 ease-in">
                  <a
                    className="text-[#526D82] hover:text-red-500 hover:opacity-[0.8]"
                    target="_blank"
                    href="https://www.linkedin.com/in/maor-ovadya-72b011240/">
                    <AiFillLinkedin />
                  </a>
                </div>
                <div className="github duration-300 hover:scale-125 ease-in">
                  <a
                    className="text-[#526D82] hover:text-red-500 hover:opacity-[0.8]"
                    target="_blank"
                    href="https://github.com/MaorOvadya">
                    <AiFillGithub />
                  </a>
                </div>
                <div className="facebook duration-300 hover:scale-125 ease-in">
                  <a
                    className="text-[#526D82] hover:text-red-500 hover:opacity-[0.8] transition-all duration-300 ease-in"
                    target="_blank"
                    href="https://www.facebook.com/maor.ovadya">
                    <AiFillFacebook />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
