import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/about";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";

const DarkModeContext = createContext();

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkToggle, setDarkToggle }}>

      <Navbar />
    <div className=" bg-stone-900 text-stone-900 w-full px-5 overflow-x-hidden"> 
  
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

