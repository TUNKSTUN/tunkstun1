import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/about.js";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import { render } from "react-dom";
import { Parallax, ParallaxBackground } from "react-parallax";
import Blue from './Assets/blue.gif'
import Resume from "./Components/resume";

const DarkModeContext = createContext();

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkToggle, setDarkToggle }}>

      <Navbar />
    <div className=" bg-stone-900 text-stone-900 w-full px-5 overflow-x-hidden "> 
  <Parallax bgImage={Blue} strength={100}>
      <Hero />
    </Parallax>
      <About />
      <Projects />
      <Skills />
      <Resume/>
      <Contact />
      <Footer/>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;

