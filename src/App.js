import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/about";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import { FaGithub } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import CertificateViewer from "./Components/CertificateViewer"

const DarkModeContext = createContext();

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkToggle, setDarkToggle }}>

      <Navbar />
    <div className=" bg-stone-900 text-stone-900 w-full px-5 overflow-x-hidden"> 
    <div className="hidden flex-col space-y-10 py-32 px-2 sidebar justify-start border-r-8 border-black bg-green-600 h-screen w-32 -translate-x-28 z-5 fixed left-0 text-white transition ease-in-out delay-100 hover:translate-x-0 text-center">
      <div className="flex w-10 h-10 bg-transparent rotate-45 border-t-2 border-r-2 border-t-white border-r-white hover:cursor-pointer transition ease-linear hover:border-t-white translate-x-32"> </div>
      <GrLinkedin className="flex xl:text-8xl text-6xl flex-col text-sky-800 text-center"/ >
      <FaGithub className="flex xl:text-8xl text-6xl flex-col text-white text-center"/>
      <GrInstagram className="flex xl:text-8xl text-6xl flex-col text-pink-700 text-center justify-center"/>
    </div>
  
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;

