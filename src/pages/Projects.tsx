//TITLE
import Title from '../components/Title'

import sitePic from '../assets/images/sitePic.webp'
import { useState } from 'react'
 
function Projects() {

const [isHover,setIsHover] = useState(false)

  return (
    <div id="projects" className='pt-5 pb-10 border border-b border-slate-300 box-border'>
      <Title title='Projects'/>
      <div className='z-40 flex flex-wrap justify-evenly relative gap-10'>

            {projects.map((pro) =>
            <div key={pro.id} className='mx-5 border-black rounded-t-lg md:rounded-xl border w-[27rem] h-full' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <div className='flex flex-col capitalize rounded-t-lg md:rounded-xl text-black relative'>
                      <img className='z-40 rounded-t-lg md:rounded-xl hover:transition-all hover:duration-500 hover:ease-in' src={sitePic}/>
                          <div className={`z-50 text-white text-center md:absolute w-full h-full md:hover:border-l border-b border-white md:hover:border-black bg-[rgb(239,68,68)]  md:bg-[rgb(239,68,68,0.8)] trans md:rounded-xl hover:transition-all hover:duration-700 duration-700 hover:ease-in ${isHover ? "md:opacity-100	" : "md:opacity-0"}`}>

                            <div className='flex flex-col items-center relative md:top-[25%]'>
                                <p className='px-5 capitalize text-xl pb-5 pt-3'>teddies vs monsters</p>
                                <button className="bg-slate-400 text-white w-[10rem] h-[2.5rem] rounded-md transition-all duration-500 ease-in hover:bg-white hover:text-red-500 hover:border hover:border-slate-400"><a className='pb-10 pt-10' target='_blank' href={pro.link}>See More</a></button>
                                <p className='px-5 pt-5 capitalize text-xl pb-3'>E-Commerce Platform For Gaming Board.</p>
                            </div>
                          </div>

                          <div className={`z-30 text-white text-center md:absolute top-0 md:w-[20rem] h-full bg-[rgb(239,68,68)] md:border border-black md:rounded-xl md:hover:transition-all md:hover:duration-700 duration-700 md:hover:ease-in ${isHover ? "md:left-[-300px] md:opacity-100	" : "md:opacity-0 md:left-0"}`}>
                              <div className='flex flex-col pt-2'>
                                <p className='captitalize pb-3 pt-3 text-lg border-b border-white'>tech stack</p>
                                <div className='flex flex-wrap h-[12rem] pt-3'>
                                {pro.stack.split('\n').map((link,index) => <p key={index} className='text-left px-3 text-base pb-3'>{link}</p>)}
                                </div>
                              </div>
                          </div>
                    </div>
            </div>)}
      </div>
    </div>
  )
}

export default Projects

const projects = [ 
  {
    id: 1,
    text: `Teddies Vs Monster e-commerce platform for gaming board`,
    stack: `+NextJs \n
    +TypeScript \n
    +Tailwind Css \n
    +swiper \n
    +Zuztand \n
    +strapi \n
    +Strip \n
    +Figma \n
    +Trello`,
    link: 'https://teddies-vs-monsters-frontend.vercel.app/'
  }
]

