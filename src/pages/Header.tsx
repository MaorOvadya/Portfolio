//Import components
import Title from "../components/Title"
import Button from "../components/Button"

//Animations
import { TypeAnimation } from "react-type-animation"
import { gsap } from 'gsap'

//Icons
import {MdEmail} from 'react-icons/md'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {AiFillGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import { Children, useEffect } from "react"
import { Link } from "react-scroll"

function Header() {

useEffect(() => {
    gsap.timeline().fromTo(".containers", {
        autoAlpha:0,
        x:-50
    },
    {
        autoAlpha:1,
        x:0,
        duration:1,
        stagger: {
        each: 0.5
    }
})

},[]) 

  return (
    <div id="home" className="md:my-[6rem] border-b border-slate-300 box-border">
        <div className="text-center grid grid-flow-cols grid-cols-1 lg:grid-cols-2 lg:my-12 mt-6 mb-6 gap-5 lg:px-6 px-3">
            <div className="containers bg-white rounded-xl w-full h-full shadow-2xl">
                    <div className="text-container h-full w-full felx flex-col py-[6rem] px-[2rem] md:px-[4rem] text-left">
                        <p className="text-base">hi,my name is</p>
                        <p className="text-6xl text-red-500 capitalize pb-3 pt-3">maor ovadya</p>
                        <p className="text-lg">Full-Stack Developer in Vancuver Canada</p>
                        <div className="changing-text pt-5">
                        <TypeAnimation
                            sequence={[
                                "Hello there!!!",
                                1500,
                                "I'm Front&Back-end developer",
                                1500,
                                "I'm Open to work",
                                1500,
                                "And....",
                                500,
                                "looking for new opportunities",
                                1500
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            deletionSpeed={60}
                            style={{fontSize: '1.2rem',color:'rgb(239 68 68)',display:'block'}}
                            />
                        </div>
                            <Button props={Children}>
                                <button className="bg-red-500 text-white w-[10rem] h-[2.5rem] rounded-md transition-all duration-500 ease-in hover:bg-white hover:text-red-500 hover:border hover:border-slate-400"><Link to="contact" spy={true} smooth={true} offset={-100} duration={200}>Get in touch</Link></button>
                            </Button>
                    </div>
            </div>

                <div className="containers w-full h-full grid grid-rows-4 md:grid-rows-2 grid-flow-col-dense gap-3 ">

                    <div className="about-container bg-white rounded-xl row-span-1 md:row-span-2 hover:scale-90 shadow-2xl duration-500">
                        <div className="h-full flex flex-col justify-center items-center ">
                            <Title title='About me'/>
                            <div className="text-red-500 text-5xl animate-bounce pt-5 pb-5 cursor-pointer">
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={200}><BsFillArrowDownCircleFill/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="containers social-container flex flex-col justify-evenly rounded-xl row-span-2 hover:scale-90 shadow-2xl duration-500 bg-gradient-to-tr from-amber-200 to-white">
                        <div className="social-media flex flex-col items-center text-5xl">
                        <Title title='Social media'/>
                            <div className="text-red-500 flex gap-5 py-3">
                                <div className="linkedin duration-300 hover:scale-125 ease-in ">
                                    <a target="_blank" href="https://www.linkedin.com/in/maor-ovadya-72b011240/"><AiFillLinkedin/></a>
                                </div>
                                <div className="github duration-300 hover:scale-125 ease-in">
                                    <a target="_blank" href="https://github.com/MaorOvadya"><AiFillGithub/></a>
                                </div>
                                <div className="facebook duration-300 hover:scale-125 ease-in">
                                    <a target="_blank" href="https://www.facebook.com/maor.ovadya"><AiFillFacebook/></a>
                                </div>
                            </div>
                        </div>
                        <div className="email flex flex-col justify-center items-center text-5xl">
                            <Title title='Email me'/>
                            <div className="text-red-500 py-6 duration-300 ease-in-out hover:rotate-[18deg] hover:scale-125 ">
                                <a href="mailto:maorovadya@icloud.com"><MdEmail/></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Header