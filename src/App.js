import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/about.js";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import { Parallax } from "react-parallax";
import APP from "./Assets/background_app.jpg"
import Resume from "./Components/resume";
import Loader from "./Components/loader";

function App() {
  return (
    <>
    <Loader/>
      <Navbar />
      <div className="bg-stone-900 text-stone-900 w-full xl:px-10 lg:px-10 p-2">
          <Hero />

        <About />

        <Parallax bgImage={APP} strength={100} className="mb-20 border-amber-200 border-8 shadow-inner shadow-black">
         <div className="backdrop-blur-xl">
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
