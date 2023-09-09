import Button from "./Button"
import  Children, { useEffect, useState }  from "react"
import emailjs from '@emailjs/browser';

interface values {

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;

}

function Form() {

const values:values = {firstName: "", lastName: "", email: "", phone: "", subject: "", message: ""}

const [formValues,setFormValues] = useState(values)

const [formErrors,setFormErrors] = useState({})

const [isSubmit,setIsSubmit] = useState(false)


const handleChange = (e: { target: { name: string; value:string }; }) => {
  const  {name,value}  = e.target
  setFormValues({...formValues, [name]:value})
  setFormErrors((formValues))
}


const handleSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault()
  setIsSubmit(true)

  // const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm;

  // if (!isSubmit && !validation(formValues)){
  //     console.log('please fill all details')
  //   }

  //   else if (isSubmit && validation(formValues)){
  //     if (formValues.firstName && formValues.lastName && formValues.email.match(emailValidation) && formValues.subject && formValues.message ) {
  //       sendEmail(e)
  //       } else {
  //         return null
  //       }
  //     }
}


function sendEmail(e: { preventDefault?: () => void; target?: any; }) {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  emailjs.sendForm('gmail', 'template_gmail', e.target, 'FkrJpZXFzcsGrkdeE')
  .then((result) => {
    alert('Messege sent successfully')
      console.log(result.text);
  }, (error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(error.text);
  });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    e.target.reset(); 

    formValues.firstName = ""
    formValues.lastName =""
    formValues.email =""
    formValues.subject =""
    formValues.message =""
    formValues.phone =""
}



// const validation = () => {

//   const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm;
//   const phoneValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm;
  
//   const errors = {firstName,lastName,email,phone,subject,message} 
  
//   if(!formValues.firstName) {
//     errors.firstName = "First name is required"
//   } else if (formValues.firstName.length <= 1 ) {
//     errors.firstName = "First name not valid"
//   } else {
//     errors.firstName =''
//   }
  
//   if(!formValues.lastName) {
//     errors.lastName = "Last name is required"
//   } else if (formValues.lastName.length <= 1 ) {
//     errors.lastName = "First name not valid"
//   } else {
//     errors.lastName =''
//   }

//   if(!formValues.email) {
//     errors.email = "email is required"
//   } else if (!formValues.email.match(emailValidation) && (!emailValidation.test(formValues.email))) {
//       errors.email = "Email is not valid"
//   } else {
//       errors.email = ''
//   }  


//   if(!formValues.phone) {
//     errors.phone = ""
//   } else if (!formValues.phone.match(phoneValidation) && (!phoneValidation.test(formValues.phone))) {
//       errors.phone = "Phone is not valid"
//   } else {
//       errors.phone = ''
//   }  

// if(!formValues.subject) {
//   errors.subject = "subject is required"
// } else if (formValues.subject.length < 2 ) {
//   errors.subject = "Subject not valid"
// } else {
//   errors.subject =''
// }

// if(!formValues.message) {
//   errors.message = "message is required"
// } else if (formValues.message.length < 2) {
//   errors.message = "Message not valid"
// } else {
//   errors.message =''
// }

//   return errors

// }

useEffect(()=> {
  if(Object.keys(formErrors).length === 0 && isSubmit) { /* empty */ }
},[formErrors,isSubmit])
 
  return (

    <div>        
        <form onSubmit={handleSubmit}
        className="bg-white w-full h-full flex flex-col py-[2rem] capitalize rounded-xl shadow-2xl">
        <p className="text-2xl text-cetner pb-8 lg:px-[5%]">Get in touch</p>
        <p className="text-xs text-center lg:text-left pb-5 lg:px-[5%] border-b"><span className="mx-3 text-red-500">*</span>requerid field </p>
          <div className="flex flex-col lg:flex-row justify-center gap-[1rem] pt-10">

            <div>
              <label className="px-2" htmlFor='firstName'>First name:</label>
              <input className="border-b-2 w-[12rem] placeholder:text-red-500"
                value={formValues.firstName}
                onChange={handleChange}
                name='firstName' id='firstName' placeholder="*" type="text"/>
              {/* <p className="text-xs text-left pt-3 flex justify-center text-red-500">{formErrors.firstName}</p> */}
            </div>

            <div>
              <label className="px-2" htmlFor="lastName">Last name:</label>
              <input className="border-b-2 w-[12rem] placeholder:text-red-500" 
                value={formValues.lastName}
                onChange={handleChange}
                name='lastName' id='lastName' placeholder="*" type="text"/>
              {/* <p className="text-xs text-left pt-3 flex justify-center text-red-500">{formErrors.lastName}</p> */}
            </div>

          </div>

          <div className="flex flex-col lg:flex-row justify-center py-6 gap-[1rem]">

            <div>
              <label className="px-2" htmlFor="email">Email:</label>
              <input className="border-b-2 w-[14rem] md:w-[12rem] placeholder:text-red-500"
                value={formValues.email}
                onChange={handleChange}
                name='email' id='email' placeholder="* Email@example.com" type="text" />
              {/* <p className="text-xs text-left pt-3 flex justify-center text-red-500">{formErrors.email}</p> */}
            </div>

            <div>
              <label className="px-2" htmlFor="phone" >Phone:</label>
              <input className="border-b-2 w-[14rem] md:w-[12rem] placeholder:text-red-500"
                value={formValues.phone}
                onChange={handleChange}
                name='phone' id='phone' type="text" placeholder="xxx-xxx-xxxx" />
              {/* <p className="text-xs text-left pt-3 flex justify-center text-red-500">{formErrors.phone}</p> */}
           </div>

          </div>

          <div className="flex flex-col">

            <div className="w-full py-3">
              <label className="px-2" htmlFor="subject">Subject</label>
              <input className="border-b-2 w-[14rem] md:w-[12rem] lg:w-[20rem] placeholder:text-left placeholder:text-red-500" placeholder="*"
                value={formValues.subject}
                onChange={handleChange}  
                name='subject' id='subject' type="text" />
              {/* <p className="text-xs text-left pt-3 flex justify-center text-red-500">{formErrors.subject}</p> */}
            </div>

            <div className="flex flex-col w-full px-5 ">
              <label className="px-2 py-3" htmlFor="message">Message</label>
              <textarea className="border-2 p-3 rounded-md placeholder:text-red-500" cols={20} rows={8}
              value={formValues.message}
              onChange={handleChange} 
              name="message" placeholder="* message" id='message'/>
              {/* <p className="text-xs text-left pt-3 flex justify-center text-red-500">{formErrors.message}</p> */}
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
