import React, {useState} from "react";
import CCNA from "../Assets/CCNA.svg";
import Az from "../Assets/az900.png";
import NB from "../Assets/NB.png";
import CS from "../Assets/CS.png";
import { SiAnaconda, SiAndroid, SiAndroidstudio, SiFirebase, SiGooglemaps, SiMicrosoftazure, SiMysql, SiPycharm, SiPython, SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";

function Projects() {
  return (
    <div className="p-5">
      
    <div
      id="projects"
      className="w-full h-full md:shrink-0 bg-transparent font-mono xl:flex lg:flex md:flex flex-row text-teal-300 py-10 backdrop-blur-lg  transition ease-in-out duration-300  my-10"
      >
      <div className="xl:space-y-5 lg:space-y-5 space-y-2  justify-center items-center p-3 bg-stone-900 xl:w-1/2 lg:w-1/2 md:w-1/2 w-auto border-teal-400 border-2 duration-300 opacity-80 hover:border-white rounded-lg">
        <h1 className=" tracking-normal lg:tracking-wide  lg:text-5xl xl:text-10xl text-4xl text-teal-200 font-[Courgette] xl:tracking-wide">
          Projects  📝
        </h1>

        <div className="tracking-tight text-sm md:text-base xl:text-base text-justify w-auto p-3 bg-stone-800 text-white border-[1px] border-teal-400 transition ease-in-out duration-1000 hover:border-white hover:shadow-xl hover:shadow-teal-900 hover:scale-105">
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
        <div className="text-teal-400 p-2 rounded-sm border-2 border-teal-200">
        <h1 className=" text-4xl font-[Courgette] text-white tracking-wide">Badges🏅</h1>
        <div className="md:grid md:grid-cols-2 gap-1 md:justify-around w-auto badges  xl:w-auto min-h-max border-stone-500 shadow-inner shadow-black bg-white border-2 border-spacing-2 text-black justify-center p-2 flex flex-row space-x-2">
          <a href="https://www.credly.com/badges/73af2e55-2f1b-4871-8625-010db37101be/public_url">
            <img
              className="xl:w-max xl:h-max lg:w-max w-auto h-auto mt-2 transition ease-in-out hover:scale-110"
              src={CCNA}
              alt=""
              />
          </a>
          <a href="https://www.credly.com/badges/e4c9d7c3-b137-40a7-99e3-870c1b313df9/public_url">
            <img
              className="xl:w-20 lg:w-min w-auto h-auto transition ease-in-out hover:scale-110"
              src={Az}
              alt=""
              />
          </a>
          <a href="https://www.credly.com/badges/af12a7ce-ca2b-4e13-80cb-752a5d9ac274/public_url">
            <img
              className="xl:w-20 lg:w-12 w-auto h-auto transition ease-in-out hover:scale-110"
              src={NB}
              alt=""
              />
          </a>
          <a href="https://www.credly.com/badges/561f246e-d546-47a4-9944-875e277e9ce9/public_url">
            <img
              className="xl:w-20 lg:w-12 w-auto h-auto transition ease-in-out hover:scale-110"
              src={CS}
              alt=""
              />
          </a>
        </div>
        </div>
      </div>
      <div className="xl:grid lg:grid grid-cols-2 md:grid md:grid-cols-2 sm:grid xl:gap-5 lg:gap-5 md:gap-2 gap-3 xl:w-full lg:w-full bg-transparent p-2 md:w-full h-auto text-lg items-center text-center  text-white font-mono">
        <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out hover:hover:blur-1 border-2 border-teal-600">
          <img
            src={require("../Assets/ARTS/0.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
            />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center mt-[145px]">
                <a class="text-white xl:text-4xl text-2xl text-center transition ease-in-out delay-100 " href="https://github.com/TUNKSTUN/BloodBank-master">
                  <span class="absolute inset-0 text-ms xl:text-xl tracking-widest flex"></span>
                  RAKHT-SPOT
                </a>
              </h3>

              <div className="hidden xl:block rounded-md bg-gray-700 translate-y-24 pb-2 w-[350px] items-center h-[450px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-400 font-bold tracking-widest text-base hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm mt-2">
                    Android Application Created for Blood Donors and Recipient,
                    no Intermediaries
                  </p>
                  <p className="text-ms">Tech-Stack</p>
                  <span className="flex flex-wrap w-auto h-auto space-x-2 bg-teal-900 rounded-lg text-4xl justify-between p-6">
                    <SiAndroidstudio className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiFirebase className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiAndroid className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiGooglemaps className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class=" relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out border-2 border-teal-500 hover:blur-0">
          <img
            src={require("../Assets/ARTS/ALISA.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
            />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center items-center  mt-[170px]">
                <a class="text-white xl:text-4xl text-2xl text-center" href="https://github.com/TUNKSTUN/Voice_Assistant">
                  <span class="absolute inset-0 text-ms xl:text-xl tracking-widest"></span>
                  ALISA
                </a>
              </h3>
              <div className="hidden xl:block rounded-md bg-gray-700  translate-y-24 pb-2 w-[350px] items-center h-[450px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-400 font-bold tracking-widest text-base hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm mt-2">
                    AI Voice Assistant created for Uni Students, a Desktop Application
                  </p>
                  <p className="text-ms">Tech-Stack</p>
                  <span className="flex flex-wrap w-auto h-auto space-x-2 bg-teal-900 rounded-lg text-4xl justify-around p-6">
                    <SiPython className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-180 "/>
                    <SiPycharm className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiAnaconda className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiFirebase className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                  </span>
                </div>teal
              </div>
            </div>
          </div>
        </article>
        <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out border-2 border-teal-500 hover:blur-0">
          <img
            src={require("../Assets/ARTS/NATURE.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
            />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center items-center mt-36">
                <a class="text-white xl:text-4xl text-2xl  text-center" href="https://github.com/TUNKSTUN/tunkstun1">
                  <span class="absolute inset-0 text-ms xl:text-xl tracking-widest"></span>
                  TUNKSTUN
                </a>
              </h3>
              <div className="hidden xl:block rounded-md bg-gray-700  translate-y-24 pb-2 w-[350px] items-center h-[450px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-400 font-bold tracking-widest text-base hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm mt-2">
                   A Portfolio website, build using ReactJS, Firebase and Tailwindcss.
                  </p>
                  <p className="text-ms">Tech-Stack</p>
                  <span className="flex flex-wrap w-auto h-auto space-x-2 bg-teal-900 rounded-lg text-4xl justify-around p-6">
                    <SiReact className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-180 "/>
                    <SiFirebase className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiTailwindcss className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class=" relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out border-2 border-teal-600 hover:blur-0">
          <img
            src={require("../Assets/ARTS/ETH.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
            />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class=" text-center items-center mt-36">
                <a
                  class="text-white xl:text-4xl text-2xl text-center"
                  href="https://github.com/TUNKSTUN/Ethihax"
                  >
                  <span class="absolute inset-0 text-ms xl:text-xl tracking-widest"></span>
                  ETHIHAX
                </a>
              </h3>

              <div className="hidden xl:block rounded-md bg-gray-700  translate-y-24 pb-2 w-[350px] items-center h-[450px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer hover:bg-stone-900 hover:text-white p-2">
                <div className="text-teal-600 font-bold tracking-widest text-base hover:text-inherit">HOVER ME👆</div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm mt-2">
                    Developing a Personal Blog Website using React, Spring and Azure Cloud (Working Project)
                  </p>
                  <p className="text-ms">Tech-Stack</p>
                  <span className="flex flex-wrap w-auto h-auto space-x-2 bg-teal-900 rounded-lg text-4xl justify-between p-6">
                    <SiReact className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-180 "/>
                    <SiSpringboot className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiFirebase className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiMicrosoftazure className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                    <SiMysql className="transition ease-in-out duration-500 hover:text-teal-200 hover:scale-150 hover:rotate-3 "/>
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <br/>
                  </div>
    </div>
  );
}

export default Projects;
