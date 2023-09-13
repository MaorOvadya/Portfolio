import Button from "./Button"
import { Children, useState }  from "react"
import emailjs from '@emailjs/browser';

interface values {

  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;

}

function Form() {


  
const values:values = {name: "", email: "", phone: "", subject: "", message: ""}

const [formValues,setFormValues] = useState(values)


const handleChange = (e: { target: { name: string; value: string; }; }) => {
  const  {name,value}  = e.target
  setFormValues({...formValues, [name]:value})
}


const sendEmail = (e:any) => {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  e.preventDefault();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  emailjs.sendForm('gmail', 'template_gmail', e.target, 'FkrJpZXFzcsGrkdeE')
  .then((result) => {
    alert('Messege sent successfully')
      console.log(result.text);
    }, (error) => {
      console.log(error)
    });
    
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    e.target.reset()
    values.name =''
    values.email =''
    values.phone =''
    values.subject =''
    values.message =''
    
};

  return (

    <div>        
        <form  onSubmit={sendEmail}
        className="bg-white w-full h-full flex flex-col py-[2rem] capitalize rounded-xl shadow-2xl">
        <p className="text-2xl text-cetner pb-8 lg:px-[5%]">Get in touch</p>
        <p className="text-xs text-center lg:text-left pb-5 lg:px-[5%] border-b"><span className="mx-3 text-red-500">*</span>requerid field </p>
          <div className="flex flex-col lg:flex-row justify-center gap-[1rem] pt-10">

            <div>
              <label className="px-2" htmlFor='name'>Name:</label>
              <input className="border-b-2 w-[22rem] placeholder:text-red-500"
                value={formValues.name}
                onChange={handleChange}
                required
                name='name' id='name' placeholder="*" type="text"/>
            </div>

          </div>

          <div className="flex flex-col lg:flex-row justify-center py-6 gap-[1rem]">

            <div>
              <label className="px-2" htmlFor="email">Email:</label>
              <input className="border-b-2 w-[14rem] md:w-[12rem] placeholder:text-red-500"
                value={formValues.email}
                onChange={handleChange}
                required
                name='email' id='email' placeholder="* Email@example.com" type="text" />
            </div>

            <div>
              <label className="px-2" htmlFor="phone" >Phone:</label>
              <input className="border-b-2 w-[14rem] md:w-[12rem] placeholder:text-red-500"
                value={formValues.phone}
                onChange={handleChange}
                name='phone' id='phone' type="number" placeholder="xxx-xxx-xxxx" />
           </div>

          </div>

          <div className="flex flex-col">

            <div className="w-full py-3">
              <label className="px-2" htmlFor="subject">Subject</label>
              <input className="border-b-2 w-[14rem] md:w-[12rem] lg:w-[20rem] placeholder:text-left placeholder:text-red-500" placeholder="*"
                value={formValues.subject}
                onChange={handleChange}
                required 
                name='subject' id='subject' type="text" />
            </div>

            <div className="flex flex-col w-full px-5 ">
              <label className="px-2 py-3" htmlFor="message">Message</label>
              <textarea className="border-2 p-3 rounded-md placeholder:text-red-500" cols={20} rows={8}
              value={formValues.message}
              onChange={handleChange} 
              required
              name="message" placeholder="* message" id='message'/>
            </div>

          </div>

          <div className="flex mx-auto pb-0 pt-0 ">
            <Button props={Children}>
                <button className="btn bg-red-500 text-white w-[10rem] h-[2.5rem] rounded-md transition-all duration-500 ease-in hover:bg-white hover:text-red-500 hover:border hover:border-slate-400" 
                type="submit">Get in touch</button>
            </Button>
          </div>

       </form>

    </div>
  )
}

export default Form
