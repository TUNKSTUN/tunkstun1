import React, {useState} from "react";
import CCNA from "../Assets/CCNA.svg";
import Az from "../Assets/az900.png";
import NB from "../Assets/NB.png";
import CS from "../Assets/CS.png";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="projects"
      className="w-full h-full md:shrink-0 bg-stone-900 p-3 font-mono xl:flex lg:flex md:flex flex-row text-teal-500 py-10 mb-20"
    >
      <div className="xl:space-y-5 lg:space-y-5 space-y-2  justify-center items-center p-3 bg-stone-900 xl:w-1/2 lg:w-1/2 w-auto">
        <h1 className="tracking-normal lg:tracking-wider  xl:text-5xl lg:text-5xl text-4xl text-teal-500 font-[Branch] xl:tracking-widest">
          PROJECTS📝
        </h1>

        <div className="tracking-tight text-sm text-justify xl:w-auto lg:w-auto md:w-auto w-auto p-3 bg-stone-800 text-white border-[1px] border-teal-400">
          <p>
            I have undertaken a diverse range of projects to expand my knowledge
            and skills in various technologies. This includes both college and
            personal projects, encompassing areas such as Natural Language
            Processing, Android app development, desktop app development, and
            website creation. Through these projects, I have aimed to gain a
            comprehensive understanding of the different technologies and
            develop my expertise in these fields.
          </p>
        </div>
        <div className="bg-teal-800 p-2 rounded-sm border-2 border-stone-600">
        <h1 className="lg:text-4xl text-2xl font-[Branch] text-stone-100 tracking-widest ">BADGES</h1>
        <div className=" badges xl:w-auto min-h-max min-w-fit border-stone-500 shadow-inner shadow-black bg-white border-2 border-spacing-2 text-black justify-center p-2 flex flex-wrap space-x-2">
          <a href="https://www.credly.com/badges/73af2e55-2f1b-4871-8625-010db37101be/public_url">
            <img
              className="xl:w-max xl:h-max lg:w-max w-16 h-16 mt-2 transition ease-in-out hover:scale-110"
              src={CCNA}
              alt=""
            />
          </a>
          <a href="https://www.credly.com/badges/e4c9d7c3-b137-40a7-99e3-870c1b313df9/public_url">
            <img
              className="xl:w-20 lg:w-min w-16 h-16 transition ease-in-out hover:scale-110"
              src={Az}
              alt=""
            />
          </a>
          <a href="https://www.credly.com/badges/af12a7ce-ca2b-4e13-80cb-752a5d9ac274/public_url">
            <img
              className="xl:w-20 lg:w-12 w-16 h-16 transition ease-in-out hover:scale-110"
              src={NB}
              alt=""
            />
          </a>
          <a href="https://www.credly.com/badges/561f246e-d546-47a4-9944-875e277e9ce9/public_url">
            <img
              className="xl:w-20 lg:w-12 w-16 h-16 transition ease-in-out hover:scale-110"
              src={CS}
              alt=""
            />
          </a>
        </div>
        </div>
      </div>
      <div className="xl:grid lg:grid grid-cols-2 md:flex-col sm:grid xl:gap-5 lg:gap-5 xl:w-full lg:w-full bg-transparent p-2 md:w-full h-auto text-lg items-center text-center sm:space-x-2 text-white font-mono">
        <article class="relative w-full blur-sm h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out hover:hover:blur-0 border-2 border-teal-600">
          <img
            src={require("../Assets/ARTS/0.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center mt-32">
                <a class="text-white text-5xl text-center transition ease-in-out delay-100 " href="https://github.com/TUNKSTUN/BloodBank-master">
                  <span class="absolute inset-0"></span>
                  RAKHT-SPOT
                </a>
              </h3>

              <div className="hidden xl:block rounded-md bg-gray-700 translate-y-24 w-[350px] items-center h-[450px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-600 font-bold tracking-widest text-sm hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm">
                    Android Application Created for Blood Donors and Recipient,
                    no Intermediaries
                  </p>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Java
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Android Studio
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="blur-sm relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out border-2 border-teal-500 hover:blur-0">
          <img
            src={require("../Assets/ARTS/ALISA.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center items-center mt-40">
                <a class="text-white text-4xl text-center" href="#">
                  <span class="absolute inset-0 "></span>
                  ALISA
                </a>
              </h3>
              <div className="hidden xl:block rounded-md bg-gray-700  translate-y-24 w-[350px] items-center h-[400px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-600 font-bold tracking-widest text-sm hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm">
                    AI Voice Assistant created for Uni Students, a Desktop Application
                  </p>
                  <span className="w-auto h-auto p-2 bg-teal-900 rounded-full text-sm">
                    #Python
                  </span>
                  <span className="w-auto h-auto p-2 bg-teal-900 rounded-full text-sm">
                    #Kivy
                  </span>
                  <span className="w-auto h-auto p-2 bg-teal-900 rounded-full text-sm">
                    #Firebase
                  </span>
                </div>teal
              </div>
            </div>
          </div>
        </article>
        <article class="blur-sm relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out border-2 border-teal-500 hover:blur-0">
          <img
            src={require("../Assets/ARTS/NATURE.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center items-center mt-36">
                <a class="text-white text-4xl  text-center" href="#">
                  <span class="absolute inset-0"></span>
                  TUNKSTUN
                </a>
              </h3>
              <div className="hidden xl:block rounded-md bg-gray-700  translate-y-24 w-[350px] items-center h-[400px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-600 font-bold tracking-widest text-sm hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm">
                   A Portfolio website, build using ReactJS, Firebase and Tailwindcss.
                  </p>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Next.JS
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Tailwind
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="blur-sm relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out border-2 border-teal-600 hover:blur-0">
          <img
            src={require("../Assets/ARTS/ETH.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class=" text-center items-center mt-36">
                <a
                  class="text-white text-4xl text-center"
                  href="https://www.github.com"
                >
                  <span class="absolute inset-0"></span>
                  ETHIHAX
                </a>
              </h3>

              <div className="hidden xl:block rounded-md bg-gray-700  translate-y-24 w-[350px] items-center h-[400px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-600 font-bold tracking-widest text-sm hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm mt-2">
                    Developing a Personal Blog Website using Next.js and Firebase (Working Project)
                  </p>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Next.JS
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Tailwind
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-teal-900 rounded-full text-sm">
                    #Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <br/>
    </div>
  );
}

export default Projects;
