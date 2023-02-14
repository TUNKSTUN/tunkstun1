
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Fan from '../Assets/fish.gif'
import Video from "../Assets/Video/white.mp4"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2y2c3a', 'template_0uzknzn', form.current, 'roDAQSRS_JjqQtVXE')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
          alert("Done");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className=' relative w-full h-full justify-center flex p-10'>
      <video className="absolute bottom-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>

           
    <div id="contact" className=' w-full h-full justify-start mb-10 xl:my-20 mt-10'><br/>
        <div className=' w-auto h-auto xl:flex bg-transparent border-2 border-teal-300 p-2 rounded-lg justify-around backdrop-blur-md '>
        <div className='sm:flex-wrap md:flex-wrap text-teal-300 xl:tracking-widest text-center font-[Branch] flex w-full space-x-2 justify-center'>
        
        <div className='xl:w-1/2 p-5 xl:flex flex-col px-12 md:px-32 lg:px-10 xl:px-5 bg-transparent w-full h-auto justify-center backdrop-blur-lg rounded-md items-center '>
          <img src={Fan} className='rounded-full xl:max-w-xl max-w-full p-2 md:min-h-max lg:h-auto xl:h-auto border-teal-100 border-2 shadow-2xl shadow-gray-900 lg:mt-10'/>
        </div>
        <div className='border-2 xl:w-1/2 lg:min-w-xl  xl:flex w-full lg:p-auto flex-col bg-teal-200 backdrop-blur-xl rounded-xl justify-center xl:p-5 p-2 text-sm text-mono xl:text-xl text-white tracking-wider text-start xl:space-y-5 '>
          <h1 className='text-center md:text-5xl text-3xl xl:text-10xl xl:tracking-widest lg:text-4xl text-teal-900'>CONTACT</h1>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-3 xl:my-5 my-2 xl:p-10 px-5 md:px-24 lg:px-8 text-teal-900' >
            <label>Name</label>
            <input type='name' name="user_name" className='p-2 font-mono w-auto h-auto border-none rounded-md bg-teal-900 text-white' />
            <label>Email</label>
            <input type='email' name="user_email"   className='p-2  font-mono w-auto h-auto border-none rounded-md bg-teal-900 text-white'/>
            <label>Message</label>
            <textarea type='message' name="message" className='font-mono w-auto h-auto border-none rounded-lg bg-teal-900 text-white'/>
            <button type="submit" alt="submit" name="message" value="Send" className='bg-stone-900 border-2 xl:text-2xl text-xl px-2 w-40 border-teal-100 text-white transition rounded-md hover:text-black hover:bg-teal-100'>Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
