import React from 'react'

function Contact() {
  return (
    <div id="contact"className='px-10 w-full h-screen bg-stone-900 text-white font-mono xl:mt-40 mt-80'><br/>
        <div className='flex flex-col bg-stone-900 '>
        <h1 className='xl:text-6xl text-4xl text-green-600 font-mono tracking-wider text-center '>CONTACT✉️</h1>
        <div>
          <form className='flex flex-col space-y-2 xl:mx-80 xl:my-10'>
            <label>Name</label>
            <input type='name' className='p-2 text-black font-serif w-auto h-auto border-none rounded-sm'/>
            <label>Email</label>
            <input type='email' className='p-2 text-black font-serif w-auto h-auto border-none rounded-sm'/>
            <label>Message</label>
            <textarea type='message' className='w-auto h-auto border-none rounded-sm text-black p-2'></textarea>
            <button type="submit" alt="submit" className='bg-green-700 text-white transition w-24 rounded-md hover:text-black hover:bg-green-600'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact