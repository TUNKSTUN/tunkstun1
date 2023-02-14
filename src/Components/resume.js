import React from "react";
import CCNA from "../Assets/ccna.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import lvl1 from "../Assets/lvl1.png";
import lvl2 from "../Assets/lvl2.png";
import lvl3 from "../Assets/lvl3.png";
import Anim2 from "../Assets/Anim2.png";
import AZ from "../Assets/az-900.png";
import { useState } from "react";
import {FaFilePdf } from "react-icons/fa";

function Resume() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="resume" className="text-center justify-center flex-col h-full mt-20 ">
      <h1
        className="xl:text-10xl text-5xl border-b-0 font-bold tracking-widest font-[Branch] text-teal-600 text-center border-white transition ease-out hover:border-b-2 hover:scale-105 hover:text-teal-300 hover:cursor-pointer delay-100  hover:border-b-teal-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        RESUME
        <h1 className="bg-stone-900 text-sm w-auto h-10 hidden xl:block">TAP ME👆</h1>
      </h1>
        <p className="hidden xl:block text-5xl text-teal-600 font-[branch]">
            OR
         </p>
      <button type="button" alt="resume" className="my-2 px-10 bg-stone-900 font-mono w-auto h-auto p-2 text-white border-2 border-teal-500 transition ease-out delay-100 hover:border-b-teal-600 hover:bg-teal-100 hover:text-stone-900 ">
        <a href="https://drive.google.com/file/d/1eRUQuMU51QPzZeFL4cjI_FkVLSRktJjt/view?usp=sharing" className="gap-2 text-lg flex italic">Download <FaFilePdf className="text-xl"/> </a>
      </button>
      <div
        id="resume"
        className={`xl:w-full w-auto min-h-full xl:justify-center flex-col font-mono px-2 xl:px-[350px] justify-start block xl:hiddden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="bg-amber-100 shadow-2xl shadow-teal-500 text-orange-900  flex-col w-auto xl:w-[600px] h-full text-center py-8 transition ease-out hover:shadow-md hover:drop-shadow-lg hover:shadow-teal-100 xl:hover:scale-150 hover:scale-105 hover:cursor-pointer hidden xl:block"
          href=""
        >
          <h1 className="text-3xl font-bold">YAHYA</h1>
          <p className="font-thin text-xs">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdnSDwRJkRkfqsrcqThPLwqrQFFfBxSpLRttkCwdNmwMHVbRkvVWwKSXKttMLbQGMJLgvtxmvbQcGgdtPfJJsfXzcMWXdgvPdjtjPJhFVHSjGwjV">
              johnwick4learning@gmail.com
            </a>
            <span>|</span>
            <a href="https://www.github.com/TUNKSTUN">github.com/TUNKSTUN"</a>
            <span>|</span> 8096278589 <span>|</span>
            <a href="https://www.linkedin.com/in/yahya24/">
              linkedin.com/in/yahya24
            </a>
          </p>
          <div className="flex bg-inherit h-auto m-2">
            <div className="flex-col flex w-full h-auto p-2">
              <div className="w-full border-2 border-dashed border-amber-900 h-auto flex  my-[2px]">
                <h1 className="text-xl text-start p-2 font-bold">
                  ABOUT:
                  <img
                    src={Anim2}
                    className="w-[100px] h-[100px] m-1 float-left border-2 border-stone-800"
                  />
                  <p className="text-ms text-justify text-stone-900 tracking-tighter leading-tight">
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
              <div className="w-full border-2 border-dashed border-amber-900 h-auto flex p-1 my-[2px]">
                <h1 className="text-xl text-start p-2 font-bold">
                  EDUCATION:
                  <p className="text-ms text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="text-sm font-bold leading-tight text-amber-900">
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
                  <p className="text-ms text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="text-sm font-bold leading-tight text-amber-900">
                      2. SRI CHAITANYA JUNIOR KALASALA
                    </h1>
                    <p className="italic">
                      Boards of Secondary Education | Intermediate (MPC)
                    </p>
                  </p>
                  <p className="text-ms text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="text-sm font-bold leading-tight text-amber-900">
                      3. SRI CHAITANYA TECHNO SCHOOL
                    </h1>
                    <p className="italic">
                      Boards of Higher Education | High School
                    </p>
                  </p>
                </h1>
              </div>
              <div className="w-full border-2 border-dashed border-amber-900 h-auto flex p-1 my-[2px]">
                <h1 className="text-xl text-start p-2 font-bold">
                  PROJECTS:
                  <p className="text-ms text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="text-base font-bold leading-tight text-amber-900">
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
                  <p className="text-ms text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="text-base font-bold leading-tight text-amber-900">
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
                  <p className="text-ms text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="text-base font-bold leading-tight text-amber-900">
                      3. TUNKSTUN.WEB.APP | PORTFOLIO WEBSITE
                    </h1>
                    <p className="italic">September 2022 – December 2022</p>
                    <p className="text-xs leading-tight ">
                      → Blogging Website build using Spring boot and firebase,
                      for Ethical Hacking Articles, Certification Reviews and
                      Network Security Practices.
                    </p>
                  </p>
                  <p className="text-ms text-justify leading-normal text-stone-900 tracking-tighter flex-col">
                    <h1 className="text-base font-bold leading-tight text-amber-900">
                      3. ETHIHAX | BLOG WEBSITE
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
              <div className="w-full border-2 border-dashed border-amber-900 h-auto flex p-1 my-[2px]">
                <h1 className="text-xl text-start p-2 font-bold">
                  ACHIEVEMENTS:
                  <p className="text-ms italic text-justify text-stone-900 leading-tight tracking-tighter">
                    Rewarded for Successfully Coordinating Debugging Event on
                    Engineer’s Day.
                  </p>
                </h1>
              </div>
            </div>
            <div className="xl:w-1/2  border-none bg-gradient-to-b from-amber-900 via-amber-700 to-yellow-900 h-full shadow-xl shadow-gray-500">
              <div className="w-auto bg-white h-auto m-2 text-center p-1 flex justify-around text-ms">
                <a href="https://www.credly.com/badges/73af2e55-2f1b-4871-8625-010db37101be/public_url">
                  <img
                    src={CCNA}
                    alt="ccna"
                    className="rounded-full border-amber-500 border-2 w-[70px] flex"
                  />
                </a>
                <a href="https://www.credly.com/badges/e4c9d7c3-b137-40a7-99e3-870c1b313df9/public_url">
                  <img
                    src={AZ}
                    alt="ccna"
                    className="rounded-full border-amber-500 border-2 w-[70px] flex p-1"
                  />
                </a>
              </div>
              <div className=" text-white  m-2 text-xs p-2">
                <div
                  className="flex-col justify-start text-start
                "
                >
                  <h1 className="text-sm tracking-widest">SKILLS</h1>
                  <p className="text-justify leading-1 tracking-tighter">
                    <h3 className="leading-5 text-ms">TECHNICAL SKILLS:</h3>
                    Azure Cloud, Networking, Java, React, Firebase, Python,
                    C/C++, Routing, Switching, Cloud, Computing, MS-Word,
                    MS-Excel, Linux Basics, Virtualization, NLP, TSHOOT, VScode,
                    Android Studio, Git, GitHub, Kivy Spring Boot.
                  </p>
                  <h1 className="text-ms leading-2">SOFT SKILLS</h1>
                  <p className="text-xs px-6">
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
              <div className=" text-white  m-2 text-xs p-2">
                <div
                  className="flex-col justify-start text-start
                "
                >
                  <h1 className="text-sm flex-col flex leading-2">
                    CERTIFICATIONS
                  </h1>

                  <div className="flex space-x-2 leading-2">
                    <p className="text-justify">1.</p>
                    <p>CISCO CERTIFIED NETWORK ASSOCIATE (CCNA)</p>
                    <p className="text-end">December 2022 to December 2025</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="text-justify">2.</p>
                    <p>AZ-900 CERTIFICATION (AZURE)</p>
                    <p className="text-end">January 2023</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="text-justify">3.</p>
                    <p>ALEXA VOICE ASSISTANT USING PYTHON (UDEMY)</p>
                    <p className="text-end">October 2022</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="text-justify">4.</p>
                    <p>REACT BASICS CERTIFICATION (HACKERRANK)</p>
                    <p className="text-end">October 2022</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="text-justify">5.</p>
                    <p>CORE JAVA DEVELOPER CERTIFICATION (UDEMY)</p>
                    <p className="text-end">October 2022</p>
                  </div>
                </div>
              </div>
              <div className="text-white m-2 text-xs p-2">
                <div
                  className="flex-col justify-start text-start text-jus
                "
                >
                  <h1 className="text-sm tracking-widest leading-2">
                    WORKSHOPS
                  </h1>
                  <div className="text-justify text-xs flex flex-col tracking-tighter">
                    <div className="text-justify text-xs flex space-x-2">
                      <p>1.</p>
                      <p>ETHICAL HACKING WORKSHOP |IITH, 2019 (X2).</p>
                    </div>
                    <div className="text-justify text-xs flex space-x-2">
                      <p>2.</p>
                      <p>
                        HACKATHON | CODE FOR INDIA (CFI), <p>2022</p>
                      </p>
                    </div>
                    <div className="text-justify text-xs flex space-x-2">
                      <p>3.</p>
                      <p>
                        CYBER DISEASE | GLOBAL INSTITUTE OF ENGINEERING &
                        TECHNOLOGY, 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-col justify-start text-start text-justify
                "
                >
                  <h1 className="text-sm tracking-widest leading-2">
                    CODING PROFICIENCY
                  </h1>
                  <div className="text-justify text-xs flex flex-col tracking-tighter">
                    <div className="text-start text-xs flex space-x-2 p-2">
                      <p>Java:</p>
                      <p>
                        <img src={lvl1} />
                      </p>
                    </div>
                    <div className="text-start text-xs flex  space-x-2 p-2">
                      <p>JS/TS:</p>
                      <p>
                        <img src={lvl2} />
                      </p>
                    </div>
                    <div className="text-start text-xs flex  space-x-2 p-2">
                      <p>PYTHON:</p>
                      <p>
                        <img src={lvl3} />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-col justify-start text-start text-jus
                "
                >
                  <h1 className="text-sm tracking-widest leading-2">
                    LANGUAGES
                  </h1>
                  <div className="text-justify text-xs flex flex-col tracking-tighter">
                    <div className="text-justify text-xs flex space-x-2 trackimng ">
                      <p>ENGLISH:</p>
                      <p className="tracking-tighter">
                        Professional Level Proficiency
                      </p>
                    </div>
                    <div className="text-justify text-xs flex space-x-2 leading-2">
                      <p>HINDI/URDU:</p>
                      <p>Native Proficienct</p>
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