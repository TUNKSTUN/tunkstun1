import React, { useState } from 'react';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div id="contact" className='xl:px-20 w-auto h-full mb-20 bg-teal-600 shadow-xl shadow-teal-200 text-white font-mono  xl:mt-40 mt-20 border-teal-500 border-2 rounded-full'><br/>
        <div className='flex flex-col bg-stone-900 xl:p-20 p-12 border-2 rounded-lg'>
        <h1 className='xl:text-5xl text-3xl text-teal-600 tracking-normal text-center font-[Branch] '>CONTACT✉️</h1>
        <div className='bg-teal-900 rounded-md w-auto p-2 '>
          <form className='flex flex-col space-y-2 xl:mx-80 xl:my-10' >
            <label>Name</label>
            <input type='name' className='p-2 text-black font-serif w-auto h-auto border-none rounded-sm' />
            <label>Email</label>
            <input type='email' className='p-2 text-black font-serif w-auto h-auto border-none rounded-sm'/>
            <label>Message</label>
            <textarea type='message' className='w-auto h-auto border-none rounded-sm text-black p-2'/>
            <button type="submit" alt="submit" className='bg-stone-900 border-2 border-teal-200 text-white transition w-24 rounded-md hover:text-white hover:bg-stone-700'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
