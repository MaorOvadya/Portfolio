import Title from "../components/Title"
import Form from "../components/Form"

function Contact() {
  return (
    <div id="contact" className="w-full h-full my-[3rem] border-slate-300">
        <Title title='Contact'/>
        <div className="text-center w-full h-full grid grid-flow-cols md:grid-cols-2 md:my-12 my-6 gap-5 px-6">
              <div className="bg-white flex flex-col justify-center items-center px-auto py-[3rem] md:py-[6rem] capitalize rounded-xl shadow-2xl">
                {text.split("\n").map((tx,index) => <p className=" text-sm px-10 tracking-widest leading-[2.5rem] sm:text-base md:text-xl md:leading-[3.5rem] lg:text-2xl lg:text-center lg:leading-[4.5rem]" key={index}>{tx}</p>)}
              </div>
              <Form/>
        </div>

    </div>
  )
}

export default Contact

const text = `need a web developer? \nor\n have a question?,\n get in touch with me.`