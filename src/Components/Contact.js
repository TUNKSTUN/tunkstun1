
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Fan from '../Assets/comp.gif'
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
    <div className=' relative w-full h-full justify-center flex'>
      <video className="absolute bottom-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>

           
    <div id="contact" className=' w-full h-auto justify-start p-10'><br/>
        <div className=' w-auto h-auto xl:flex bg-transparent border-2 border-teal-100 p-2 rounded-lg justify-around backdrop-blur-md opacity-95'>
        <div className='bg-transparent xl:flex rounded-xl justify-between w-full h-full p-5 space-y-2 lg:px-40'>
        
        <div className='flex lg:flex bg-transparent xl:w-1/2  lg:w-full lg:my-5 h-auto  justify-center backdrop-blur-lg rounded-md items-center '>
          <img src={Fan} className='h-full flex rounded-full xl:max-w-xl xl:flex lg:block xl:w-[500px] w-[300px] p-2 md:min-h-full lg:h-auto xl:h-auto shadow-2xl shadow-gray-900 lg:mt-10'/>
        </div>
        <div className=' border-2 flex xl:w-1/2 lg:w-full lg:flex p-auto  bg-teal-900 flex-col backdrop-blur-xl border-teal-900 rounded-xl justify-center p-2 text-sm text-mono xl:text-xl text-white tracking-wider text-start xl:space-y-5 '>
          <form ref={form} onSubmit={sendEmail} className='lg:p-5 rounded-xl bg-teal-100 flex flex-col space-y-2 xl:p-28 px-5 md:px-24 lg:px-8 text-teal-900 ' >
          <h1 className='text-center justify-center md:text-5xl text-3xl xl:text-5xl font-[youngr] font-bold lg:text-2xl text-teal-900 flex mt-3'>Contact</h1>
            <label>Name</label>
            <input type='name' name="user_name" className='p-2 font-mono w-auto h-auto border-none rounded-md bg-teal-900 text-white' />
            <label>Email</label>
            <input type='email' name="user_email"   className='p-2  font-mono w-auto h-auto border-none rounded-md bg-teal-900 text-white'/>
            <label>Message</label>
            <textarea type='message' name="message" resize='none' className='p-2 font-mono w-auto h-auto border-none rounded-lg bg-teal-900 text-white'/>
            <button type="submit" alt="submit" name="message" value="Send" className='bg-teal-900 border-2 xl:text-xl text-xl p-2 w-40 border-teal-200 text-white transition ease-in-out duration-300 rounded-full hover:text-black hover:border-teal-700 hover:bg-teal-100 hover:scale-105'>Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
