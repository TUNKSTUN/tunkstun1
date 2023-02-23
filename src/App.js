import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/about.js";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import { Parallax } from "react-parallax";
import Blue from "./Assets/blue.gif";
import Resume from "./Components/resume";
import Leaf from "./Assets/leaf.gif";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-stone-900 text-stone-900 w-full xl:px-10 lg:px-10 p-2">
        <Parallax
          bgImage={Blue}
          strength={200}
          className="border-none mt-10 w-full h-full"
        >
        </Parallax>
          <Hero />

        <About />

        <Parallax bgImage={Leaf} strength={900} className="mb-20 border-teal-100 border-8 shadow-inner shadow-black">
         <div className="backdrop-blur-lg">
          <Projects />
          <Skills />
          </div> 
        </Parallax>

        <Resume/>
          <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
