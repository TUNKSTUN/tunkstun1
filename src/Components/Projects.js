import React, {useState} from "react";
import CCNA from "../Assets/CCNA.svg";
import Az from "../Assets/az900.png";
import NB from "../Assets/NB.png";
import CS from "../Assets/CS.png";
import { Background } from "react-parallax";
import { AiOutlineLink } from "react-icons/ai";
import NATURE from "../Assets/ARTS/NATURE2.jpg";
import ETH from "../Assets/ARTS/ETH.jpg";
import ALISA from "../Assets/ARTS/ALISA.jpg";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="projects"
      className="w-full h-full md:shrink-0 bg-stone-900 p-3 font-mono xl:flex lg:flex md:flex flex-row text-green-500 py-10 mb-20"
    >
      <div className="xl:space-y-5 lg:space-y-5 space-y-2  justify-center items-center p-3 bg-stone-900 xl:w-1/2 lg:w-1/2 w-auto">
        <h1 className="xl:tracking-wider lg:tracking-wider  xl:text-6xl lg:text-6xl text-4xl text-green-500">
          PROJECTS📝
        </h1>

        <div className="tracking-tight text-sm text-justify xl:w-auto lg:w-auto md:w-auto w-auto p-3 bg-stone-800 text-white border-[1px] border-green-400">
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
        <h1 className="lg:text-4xl text-2xl">Badges</h1>
        <div className=" badges xl:w-auto h-max w-auto border-stone-500 bg-white border-2 border-spacing-2 text-black justify-center p-2 flex flex-wrap space-x-2">
          <a href="https://www.credly.com/badges/73af2e55-2f1b-4871-8625-010db37101be/public_url">
            <img
              className="xl:w-max xl:h-max lg:w-max w-20 h-20 mt-2 transition ease-in-out hover:scale-110"
              src={CCNA}
              alt=""
            />
          </a>
          <a href="https://www.credly.com/badges/e4c9d7c3-b137-40a7-99e3-870c1b313df9/public_url">
            <img
              className="xl:w-20 lg:w-min w-20 h-20 transition ease-in-out hover:scale-110"
              src={Az}
              alt=""
            />
          </a>
          <a href="https://www.credly.com/badges/af12a7ce-ca2b-4e13-80cb-752a5d9ac274/public_url">
            <img
              className="xl:w-20 lg:w-12 w-20 h-20 transition ease-in-out hover:scale-110"
              src={NB}
              alt=""
            />
          </a>
          <a href="https://www.credly.com/badges/561f246e-d546-47a4-9944-875e277e9ce9/public_url">
            <img
              className="xl:w-20 lg:w-12 w-20 h-20 transition ease-in-out hover:scale-110"
              src={CS}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="xl:grid lg:grid grid-cols-2 md:flex-col sm:grid xl:gap-5 lg:gap-5 xl:w-full lg:w-full bg-transparent p-2 md:w-full h-auto text-lg items-center text-center sm:space-x-2 text-white font-mono">
        <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out">
          <img
            src={require("../Assets/ARTS/0.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center mt-40">
                <a class="text-white text-4xl text-center" href="#">
                  <span class="absolute inset-0"></span>
                  RAKHT-SPOT
                </a>
              </h3>

              <div className="hidden xl:block rounded-md bg-white translate-y-24 w-[350px] items-center h-[400px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className={`flex-col flex border-t-black border-t-2 w-[300px] justify-center items-center h-1 text-center ml-4`}></div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-xs">
                    Android Application Created for Blood Donors and Recipient,
                    no Intermediaries
                  </p>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Java
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Android Studio
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out">
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
              <div className="hidden xl:block rounded-md bg-white translate-y-24 w-[350px] items-center h-[400px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="flex-col flex border-t-black border-t-2 w-[300px] justify-center items-center h-1 text-center ml-4"></div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-xs">
                    AI Voice Assistant created for Uni Students, a Desktop Application
                  </p>
                  <span className="w-auto h-auto p-2 bg-green-900 rounded-full text-xs">
                    #Python
                  </span>
                  <span className="w-auto h-auto p-2 bg-green-900 rounded-full text-xs">
                    #Kivy
                  </span>
                  <span className="w-auto h-auto p-2 bg-green-900 rounded-full text-xs">
                    #Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out">
          <img
            src={require("../Assets/ARTS/NATURE.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class="text-center items-center mt-40">
                <a class="text-white text-4xl  text-center" href="#">
                  <span class="absolute inset-0"></span>
                  GLIMPSE OF NATURE
                </a>
              </h3>
              <div className="hidden xl:block rounded-md bg-white translate-y-24 w-[350px] items-center h-[400px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer  hover:bg-stone-900 hover:text-white p-2">
                <div className="flex-col flex border-t-black border-t-2 w-[300px] justify-center items-center h-1 text-center ml-4 hover:border-t-gray-400"></div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm">
                    Developing an Ecommerce Website for Arts, Marketplace for
                    paint arts & tools
                  </p>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Next.JS
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Tailwind
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl mt-1 transition duration-300 ease-in-out">
          <img
            src={require("../Assets/ARTS/ETH.jpg")}
            alt="blog article"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-90 transition duration-300 ease-in-out">
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex flex-col justify-center items-center">
              <h3 class=" text-center items-center mt-40">
                <a
                  class="text-white text-4xl text-center"
                  href="https://www.github.com"
                >
                  <span class="absolute inset-0"></span>
                  ETHIHAX
                </a>
              </h3>

              <div className="hidden xl:block rounded-md bg-white translate-y-24 w-[350px] items-center h-[400px] object-bottom transition ease-in-out delay-300 hover:-translate-y-16 hover:cursor-pointer hover:bg-stone-900 hover:text-white p-2">
                <div className="flex-col flex border-t-black border-t-2 w-[300px] justify-center items-center h-1 text-center ml-4"></div>
                <div className="text-white text-center grid flex-col space-y-2">
                  <p className="flex-col text-sm mt-2">
                    Developing a Personal Blog Website using Next.js and Firebase
                  </p>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Next.JS
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
                    #Tailwind
                  </span>
                  <span className="w-auto h-auto space-x-2 p-2 bg-green-900 rounded-full text-xs">
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
