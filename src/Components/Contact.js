import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Video from "../Assets/Video/white.mp4";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'; // Importing icons
import { SiSignal } from 'react-icons/si';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2y2c3a', 'template_0uzknzn', form.current, 'roDAQSRS_JjqQtVXE')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="relative w-full h-screen xl:justify-around lg:justify-around  flex xl:items-stretch">
      <video className="absolute bottom-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>

      <div id="contact" className="relative w-full max-w-4xl h-auto p-4 font-mono flex flex-col xl:flex-row md:flex-row xl:justify-around lg:justify-around gap-5 xl:gap-20">
        <div className="flex flex-col justify-center items-center xl:w-1/3 bg-transparent p-6 text-white text-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-[Courgette] font-bold mb-6 text-black">Socials</h1>
          <div className="flex justify-center space-x-4 mt-2 text-lg">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl text-black hover:text-amber-500 transition duration-300" />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-4xl text-black hover:text-amber-500 transition duration-300" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-4xl text-black hover:text-amber-500 transition duration-300" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaInstagram className="text-4xl text-black hover:text-amber-500 transition duration-300" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <SiSignal className="text-4xl text-black hover:text-amber-500 transition duration-300" />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-black">Visit my website:</h2>
            <a href="https://w2edax.web.app" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">
              w2edax.web.app
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col  w-full md:w-2/3 h-auto backdrop-blur-xl border-amber-900 rounded-xl justify-center p-6 text-white text-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-[Courgette] font-bold mb-6 text-black">Let's Connect</h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input 
              type="text" 
              name="user_name" 
              className="p-2 w-full bg-amber-100 rounded-md text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300" 
              required 
              placeholder='Name'
            />
            
            <input 
              type="email" 
              name="user_email" 
              className="p-2 w-full bg-amber-100 rounded-md text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300" 
              required 
              placeholder='Email'
            />
            
            <textarea 
              name="message" 
              rows="4" 
              className="p-2 w-full bg-amber-100 rounded-md text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300" 
              required 
              placeholder='Message'
            />
            
            <button 
              type="submit" 
              className="bg-amber-500 w-24 text-md p-2 rounded-full text-black border-2 border-amber-300 transition duration-300 hover:bg-amber-100 hover:text-amber-900 hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
