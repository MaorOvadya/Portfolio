//TITLE
import Title from '../components/Title'

const webSitePicture = 'https://teddies-vs-monsters-frontend.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.b9dd666f.png&w=3840&q=75'
function Projects() {

  return (
    <div id="projects">
      <Title title='projects'/>
      <div className='flex flex-wrap justify-evenly relative gap-10'>

          {projects.map((pro) => 
            <div key={pro.id} className='mx-5 border-black rounded-xl border w-[27rem] h-full'>
              <div className='flex flex-col bg-slate-300 capitalize rounded-xl text-black relative'>
                <img className='rounded-t-xl' src={pro.projectImage}/>
                  <div className='pt-3 leading-6 text-left px-3 border-black border-b pb-3'>
                    {pro.text}
                  </div>

                  <div className='flex flex-wrap'>
                    <p className='px-3 pt-3 pb-1 capitalize'>tech stack:</p>
                    <p className='px-3 leading-6 capitalize pb-1 '>{pro.stack}</p>
                  </div>

              </div >
          </div>)}
      </div>
    </div>
  )
}

export default Projects

const projects = [ 
  {
    id: 1,
    projectImage: [webSitePicture],
    text: `Teddies Vs Monster e-commerce platform for gaming board .`,
    stack: 'NextJs \n,TypeScript \n,Tailwind Css \n,swiper \n,Zuztand \n,strapi \n,Strip \n,Figma \n,Trello',
    link: 'https://teddies-vs-monsters-frontend.vercel.app,'
  },
]