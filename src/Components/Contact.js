import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Video from "../Assets/Video/white.mp4";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'; 
import { SiSignal } from 'react-icons/si';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2y2c3a', 'template_0uzknzn', form.current, 'roDAQSRS_JjqQtVXE')
      .then((result) => {
          setPopupMessage('Message sent successfully!');
          setShowPopup(true);
      }, (error) => {
          setPopupMessage('Failed to send message. Please try again.');
          setShowPopup(true);
      });

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <video className="absolute bottom-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>

      <div id="contact" className="relative w-full max-w-6xl h-full p-4 font-mono flex flex-col xl:flex-row lg:flex-row justify-around items-center">
        {/* Social Section */}
        <div className="w-full lg:w-1/2 bg-transparent p-6 text-white text-center flex flex-col justify-center items-center">
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
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-4xl text-black hover:text-amber-500 transition duration-300" />
            </a>
            <a href="https://signal.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Signal">
              <SiSignal className="text-4xl text-black hover:text-amber-500 transition duration-300" />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-black">Visit website:</h2>
            <a href="https://w2edax.web.app" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">
              w2edax.web.app
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-xl h-auto backdrop-blur-xl shadow-md shadow-slate-500 border-amber-900 rounded-xl justify-center p-6 text-white text-center flex flex-col">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-[Courgette] font-bold text-black">Let's Connect</h1>
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
              className="bg-amber-300 w-24 text-md p-2 rounded-md text-black border-2 border-amber-500 transition duration-300 hover:bg-amber-400  hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-lg shadow-lg">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
