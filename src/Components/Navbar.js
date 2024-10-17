import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaEnvelope, FaSuitcase, FaFileAlt } from 'react-icons/fa';
import { HiHome } from "react-icons/hi"; 
import { SiAboutdotme } from "react-icons/si"; 

function Navbar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShow(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };
    
    window.onscroll = handleScroll;
    
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <nav
      className={`bg-stone-200 fixed top-0 w-full h-16 z-40 transition duration-500 ease-in-out transform ${
        show
          ? "block transition delay-100 hover:translate-y-0"
          : "transition ease-in-out delay-100 -translate-y-16 hover:-translate-y-0 hover:cursor-pointer"
      }`}
    >
      <div
        id="home"
        className="bg-stone-900 backdrop-blur-sm h-full px-12 text-amber-200 flex xl:justify-between justify-center items-center transition ease-in-out hover:bg-amber-200 hover:text-stone-900 duration-100 border-b hover:border-b-amber-100"
      >
        {/* Logo Section */}
        <div className="hidden xl:block mt-2 pl-3 text-2xl transition duration-400  ">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            activeClass="active"
            className="block text-lg nav-class transition ease-in-out xl:hover:scale-y-105 cursor-pointer hover:text-stone-700 font-[QS] text-5xl"
          >
            <h1>tunkstun</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6  xl:space-x-10 text-lg xl:text-3xl md:text-2xl lg:text-xl ">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-120}
            duration={1000}
            activeClass="active"
            className="block active:text-amber-600 nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-amber-600"
          >
            <HiHome />
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            activeClass="active"
            className="block active:text-amber-600 nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-amber-600"
          >
            <SiAboutdotme />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            activeClass="active"
            className="block nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-amber-600"
          >
            <FaSuitcase />
          </Link>
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={20}
            duration={1000}
            activeClass="active"
            className="block nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-amber-600"
          >
            <FaFileAlt />
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            activeClass="active"
            className="block nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-amber-600"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
