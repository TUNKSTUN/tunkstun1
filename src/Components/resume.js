import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Room from "../Assets/room.png";
import Page1 from "../Assets/Resume/1.jpg"; // Import your images
import Page2 from "../Assets/Resume/2.jpg"; // Import your images
import "./resume.css";

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="resume" className="xl:flex text-center w-auto h-screen justify-between mt-10 bg-transparent my-20 items-center">
      <div className="xl:w-1/2 flex-col flex text-center items-center pt-20 xl:pt-5">
        <h1
          className="disable-text-selection xl:text-10xl text-5xl justify-start items-center  flex-col text-center flex font-bold tracking-widest font-[Courgette] text-amber-200 transition ease-out xl:hover:scale-110 hover:scale-125 hover:text-amber-300 hover:cursor-pointer delay-100 hover:-rotate-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          Resume
          <h1 className="blink bg-stone-900 text-sm w-auto h-10 text-center font-mono">CLICK TO DISPLAY👆</h1>
        </h1>
        <p className="text-5xl text-amber-200 font-[Courgette]">
          OR
        </p>
        <button type="button" alt="resume" className="px-10 bg-stone-900 font-mono h-auto p-2 text-white border-2 border-amber-200 transition ease-out delay-100 hover:border-b-amber-600 hover:bg-amber-100 hover:text-stone-900">
          <a href="https://drive.google.com/file/d/12WWzC6y6fAK7RZ4VVJnv9LaKzVrWDCpx/view?usp=sharing" className="gap-2 text-lg flex italic">Download <FaFilePdf className="text-xl" /> </a>
        </button>
      </div>

      <div className={`my-5 flex xl:w-2/3 lg:w-full w-full shadow-inner font-mono delay-100 duration-500 items-center justify-center relative xl:my-5`}>
        <img src={Room} alt='room' className="flex bg-local p-3 xl:w-[500px] lg:w-[500px] md:w-[300px] w-[300px] bg-transparent" />
        
        {/* Display images if isOpen is true */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-amber-200 p-4 rounded-lg max-w-3xl w-[92%] max-h-[90vh] overflow-auto">
              {/* Scrollable container for images */}
              <div className="flex flex-col space-y-4 overflow-auto max-h-[70vh]">
                <img src={Page1} alt="Resume Page 1" className="w-full object-cover rounded-lg" />
                <img src={Page2} alt="Resume Page 2" className="w-full object-cover rounded-lg" />
              </div>
              <button onClick={() => setIsOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
