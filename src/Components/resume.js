import React from "react";
import CCNA from "../Assets/ccna.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import Anim2 from "../Assets/Anim2.png";
import AZ from "../Assets/az-900.png";
import { useState } from "react";
import {FaFilePdf } from "react-icons/fa";
import Room  from "../Assets/room.png"
import "./resume.css"

function Resume() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="resume" className="xl:flex text-center sm:w-screen sm:h-screen justify-between mt-10 h-full bg-transparent  my-20 items-center">
      <div className="xl:w-1/2 flex-col flex text-center items-center pt-20 xl:pt-5">
        

      <h1
        className="disable-text-selection xl:text-10xl text-5xl justify-start items-center text-centerflex font-bold tracking-widest font-[Branch] text-teal-200 text-start transition ease-out xl:hover:scale-110 hover:scale-125 hover:text-teal-300 hover:cursor-pointer delay-100 hover:-rotate-3"
        onClick={() => setIsOpen(!isOpen)}
        >
        Resume
        <h1 className="blink bg-stone-900 text-sm w-auto h-10  text-center font-mono">CLICK TO DISPLAY👆</h1>
      </h1>
        <p className="  text-5xl text-teal-200 font-[branch]">
            OR
         </p>
      <button type="button" alt="resume" className="1 px-10 bg-stone-900 font-mono 60 h-auto p-2 text-white border-2 border-teal-200 transition ease-out delay-100 hover:border-b-teal-600 hover:bg-teal-100 hover:text-stone-900 ">
        <a href="https://drive.google.com/file/d/1RtdII7A1c9tkCfYErURWV-FjByCkzk0J/view?usp=sharing" className="gap-2 text-lg flex italic">Download <FaFilePdf className="text-xl"/> </a>
      </button>
        </div>
        

      <div
        className={`my-5 flex xl:w-2/3 lg:w-full w-full shadow-inner   font-mono  delay-100 duration-500 items-center justify-center relative xl:my-5`}
        >
        <img src={Room} alt='room' className="flex bg-local absolute p-3 xl:w-[500px] lg:w-[500px] md:w-[300px] w-[300px] bg-transparent "/>
        <div
          className={`xl:py-10 py-5 flex-wrap p-2 border-teal-400 border-2 bg-orange-100 text-orange-900 justify-center xl:hover:scale-110  xl:w-[600px] w-[500px] h-auto text-center transition ease-out hover:shadow-md hover:drop-shadow-lg hover:shadow-teal-100  hover:cursor-pointer ${
            isOpen ? "transition duration-200 ease-in-out transform xl:-translate-x-100 scale-x-100" : " duration-200 transition ease-in-out transform  translate-x-0 scale-0"
          }`}
          >
          <h1 className="xl:text-3xl text-lg font-bold">YAHYA</h1>
          <p className="font-thin text-xs">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdnSDwRJkRkfqsrcqThPLwqrQFFfBxSpLRttkCwdNmwMHVbRkvVWwKSXKttMLbQGMJLgvtxmvbQcGgdtPfJJsfXzcMWXdgvPdjtjPJhFVHSjGwjV">
              Email: johnwick4learning@gmail.com
            </a>
            <span> | </span>
            <a href="https://www.github.com/TUNKSTUN">github.com/TUNKSTUN"</a>
            <span> | </span>Phone: - <span>|</span>
            <a href="https://www.linkedin.com/in/yahya24/">
                <span> </span>Social: linkedin.com/in/yahya24
            </a>
          </p>
          <div className="flex bg-inherit h-auto m-1">
            <div className="flex-col flex w-full h-auto p-2">
              <div className="w-full border-2 border-dashed border-gray-900 h-auto flex  my-[2px]">
                <h1 className="xl:text-xl text-start text-base p-2 font-bold">
                  ABOUT:
                  <img
                    src={Anim2} alt="image"
                    className="xl:w-[100px] xl:h-[100px] w-16 h-16 m-1 float-left border-2 border-stone-800"
                    />
                  <p className="xl:text-ms lg:text-ms text-xs text-justify text-stone-900 tracking-tighter leading-tight">
                    Computer Science Student from India, Hyderabad with a deep
                    passion for Azure Cloud, Java Development and Network
                    Automation. Aiming to become a proficient programmer and
                    Cloud engineer. Continuously learning and gaining hands-on
                    experience to become a distinguished professional in the
                    field of computer Application Engineering, while staying up
                    to date with the rapidly evolving technologies. Committed to
                    making impactful contributions to the field and society.
                  </p>
                </h1>
              </div>
              <div className="w-full border-2 border-dashed border-gray-900 h-auto flex p-1 my-[2px]">
                <h1 className="xl:text-xl text-base text-start p-2 font-bold">
                  EDUCATION:
                  <p className="xl:text-ms text-xs text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="xl:text-sm text-ms font-bold leading-tight text-orange-900">
                      1. GLOBAL INSTITUTE OF ENGINEERING & TECHNOLOGY
                    </h1>
                    <p className="italic font-bold">
                      Bachelor of Technology with First Class
                    </p>
                    <p className="text-xs leading-tight ">
                      → Core Courses: Java Programming, Software Engineering,
                      Computer Networks, Data Mining & Cloud Computing.
                    </p>
                  </p>
                  <p className="xl:text-ms text-xs  text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="xl:text-sm text-ms font-bold leading-tight text-orange-900">
                      2. SRI CHAITANYA JUNIOR KALASALA
                    </h1>
                    <p className="italic">
                      Boards of Secondary Education | Intermediate (MPC)
                    </p>
                  </p>
                  <p className="xl:text-ms text-xs  text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="xl:text-sm text-ms font-bold leading-tight text-orange-900">
                      3. SRI CHAITANYA TECHNO SCHOOL
                    </h1>
                    <p className="italic">
                      Boards of Higher Education | High School
                    </p>
                  </p>
                </h1>
              </div>
              <div className="w-full border-2 border-dashed border-gray-900 h-auto flex my-[2px] py-1 px-3">
                <h1 className="xl:text-xl text-base text-start font-bold">
                  PROJECTS:
                  <p className="xl:text-ms text-xs  text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="xl:text-sm text-ms font-bold leading-tight text-orange-900">
                      1. RAKHT-SPOT | BLOOD DONATION ANDROID APPLICATION
                    </h1>
                    <p className="italic">
                      August 2021 - May 2022 (Thesis Project)
                    </p>
                    <p className="text-xs leading-tight ">
                      → Developed a Blood Donation application using Java and
                      Firebase, enabling direct connections between blood donors
                      and recipients without the need for blood bank
                      involvement. Users can register as either a donor or
                      recipient and contact each other for blood donation.
                    </p>
                  </p>
                  <p className="xl:text-ms text-xs  text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="xl:text-sm text-ms font-bold leading-tight text-orange-900">
                      2. ALISA | KIVY BASED DESKTOP VOICE ASSISTANT
                    </h1>
                    <p className="italic">
                      August-2021 - January 2022 (Minor Project)
                    </p>
                    <p className="text-xs leading-tight ">
                      → Created a Simple Voice Assistant using Python Libraries
                      and Firebase, designed to help students retrieve
                      University-related documents with voice commands, as a
                      standalone desktop application.
                    </p>
                  </p>
                  <p className="xl:text-ms text-xs  text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="xl:text-sm text-ms font-bold leading-tight text-orange-900">
                      3. TUNKSTUN.WEB.APP | PORTFOLIO WEBSITE
                    </h1>
                    <p className="italic">September 2022 – December 2022</p>
                    <p className="text-xs leading-tight ">
                      → Blogging Website build using Spring boot and firebase,
                      for Ethical Hacking Articles, Certification Reviews and
                      Network Security Practices.
                    </p>
                  </p>
                  <p className="xl:text-ms text-xs  text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="xl:text-sm text-ms font-bold leading-tight text-orange-900">
                      4. ETHIHAX | BLOG WEBSITE
                    </h1>
                    <p className="italic">(Working Project)</p>
                    <p className="text-xs leading-tight ">
                      → Blogging Website build using Spring boot and firebase,
                      for Ethical Hacking Articles, Certification Reviews and
                      Network Security Practices.
                    </p>
                  </p>
                </h1>
              </div>
              <div className="w-full border-2 border-dashed border-gray-900 h-auto flex my-[2px] py-0 px-3">
                <h1 className="xl:text-xl text-base text-start font-bold">
                  ACHIEVEMENTS:
                  <p className="xl:text-ms text-xs  italic text-justify text-stone-900 leading-tight tracking-tighter">
                    Rewarded for Successfully Coordinating Debugging Event on
                    Engineer’s Day.
                  </p>
                </h1>
              </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 w-1/2 border-none bg-gradient-to-b from-orange-900 via-orange-700 to-orange-900 shadow-xl shadow-gray-500">
              <div className="w-auto bg-transparent h-auto 1 text-center p-1 flex justify-around text-ms">
                <a href="https://www.credly.com/badges/73af2e55-2f1b-4871-8625-010db37101be/public_url">
                  <img
                    src={CCNA} 
                    alt="ccna"
                    className="rounded-full border-amber-400 border-2 w-[70px] flex bg-white"
                    />
                </a>
                <a href="https://www.credly.com/badges/e4c9d7c3-b137-40a7-99e3-870c1b313df9/public_url">
                  <img
                    src={AZ} 
                    alt="ccna"
                    className="rounded-full border-amber-400 border-2 w-[70px] flex p-1 bg-white"
                    />
                </a>
              </div>
              <div className=" text-white  1 text-xs p-2">
                <div
                  className="flex-col justify-start text-start
                  "
                  >
                  <h1 className="xl:text-sm text-ms tracking-widest">SKILLS</h1>
                  <p className="text-justify tracking-tighter">
                    <h3 className=" text-ms">TECHNICAL SKILLS:</h3>
                    Azure Cloud, Networking, Java, React, Firebase, Python,
                    C/C++, Routing, Switching, Cloud, Computing, MS-Word,
                    MS-Excel, Linux Basics, Virtualization, NLP, TSHOOT, VScode,
                    Android Studio, Git, GitHub, Kivy Spring Boot.
                  </p>
                  <h1 className="text-ms leading-2">SOFT SKILLS</h1>
                  <p className="text-xs xl:px-6">
                    <span className="flex gap-2">
                      <HiArrowNarrowRight />
                      Problem-Solving
                    </span>
                    <span className="flex gap-2">
                      <HiArrowNarrowRight />
                      Team Player
                    </span>
                    <span className="flex gap-2">
                      <HiArrowNarrowRight />
                      Collaborative
                    </span>
                    <span className="flex gap-2">
                      <HiArrowNarrowRight />
                      Nimble Learner
                    </span>
                  </p>
                </div>
              </div>
              <div className=" text-white  m-1 text-xs p-2">
                <div
                  className="flex-col justify-start text-start
                  "
                  >
                  <h1 className="xl:text-sm text-ms flex-col flex ">
                    CERTIFICATIONS
                  </h1>

                  <div className="flex xl:space-x-2 ">
                    <p className="text-justify">1.</p>
                    <p>CISCO CERTIFIED NETWORK ASSOCIATE (CCNA)</p>
                    <p className="text-end">December 2022 to December 2025</p>
                  </div>
                  <div className="flex xl:space-x-2">
                    <p className="xl:text-justify text-start">2.</p>
                    <p>AZ-900 CERTIFICATION (AZURE)</p>
                    <p className="text-end">January 2023</p>
                  </div>
                  <div className="flex xl:space-x-2">
                    <p className="xl:text-justify text-start">3.</p>
                    <p>ALEXA VOICE ASSISTANT USING PYTHON (UDEMY)</p>
                    <p className="text-end">October 2022</p>
                  </div>
                  <div className="flex xl:space-x-2">
                    <p className="xl:text-justify text-start">4.</p>
                    <p>REACT BASICS CERTIFICATION (HACKERRANK)</p>
                    <p className="text-end">October 2022</p>
                  </div>
                  <div className="flex xl:space-x-2">
                    <p className="xl:text-justify text-start">5.</p>
                    <p>CORE JAVA DEVELOPER CERTIFICATION (UDEMY)</p>
                    <p className="text-end">October 2022</p>
                  </div>
                </div>
              </div>
              <div className="text-white m-1 text-xs p-2">
                <div
                  className="flex-col justify-start text-start text-jus
                  "
                  >
                  <h1 className="xl:text-sm text-ms tracking-widest">
                    WORKSHOPS
                  </h1>
                  <div className="text-justify text-xs flex flex-col tracking-tighter">
                    <div className="text-justify text-xs flex xl:space-x-2">
                      <p>1.</p>
                      <p>ETHICAL HACKING WORKSHOP |IITH, 2019 (X2).</p>
                    </div>
                    <div className="text-justify text-xs flex xl:space-x-2">
                      <p>2.</p>
                      <p>
                        HACKATHON | CODE FOR INDIA (CFI), <p>2022</p>
                      </p>
                    </div>
                    <div className="text-justify text-xs flex xl:space-x-2">
                      <p>3.</p>
                      <p>
                        CYBER DISEASE | GLOBAL INSTITUTE OF ENGINEERING &
                        TECHNOLOGY, 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-col justify-start text-start text-jus
                  "
                  >
                  <h1 className="xl:text-sm text-ms tracking-widest">
                    LANGUAGES
                  </h1>
                  <div className="xl:text-justify text-start text-xs flex flex-col tracking-tighter">
                    <div className="xl:text-justify text-starttext-xs flex space-x-1 tracking-tighter ">
                      <p>ENG:</p>
                      <p className="tracking-tighter text-start">
                        Professional Level Proficiency
                      </p>
                    </div>
                    <div className="text-justify text-xs flex space-x-1 ">
                      <p>URDU: </p>
                      <p> Native Proficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                
      
    </div>
  );
}

export default Resume;
