import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [show, setShow] = useState(true);
  const [darkToggle, setDarkToggle] = useState(false);
  

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);
  return (
    <>
      <nav
        className={`bg-stone-200 fixed top-0 w-full h-20 xl:w-full z-10 transition duration-500 ease-in-out transform${
          show
          ? "block transition delay-100 hover: translate-y-0"
          : "transition ease-in-out delay-100 -translate-y-12"
        }`}
      >
        
        
        <div id="home" className="  bg-stone-900 backdrop-blur-sm md:w-full lg:w-full h-12 text-stone-200 sticky top-0 z-10 font-mono transition ease-in-out hover:bg-green-600 hover:text-stone-900 hover:text-2xl duration-100 border-b-2 border-stone-100">
          <div className="justify-center xl:justify-between xl:shrink-0 flex">
            <div className="space-x-5 mt-2 pl-3 text-2xl hover:scale-105 transition ease-in-out hover:cursor-pointer duration-400 hidden xl:block font-[youngr]">
            <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out hover:scale-110 cursor-pointer hover:text-stone-700 "
                  >
                    Yahya
                  </Link>
            </div>
            <div className=" xl:text-xl text-base m-2 pr-2">
              <div className="xl:block">
                <div
                  id="nav"
                  className="space-x-4 xl:space-x-10 lg:space-x-10 md:space-x-8 justify-center scale-y-110"
                >
                  
          
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out hover:scale-110 cursor-pointer hover:text-stone-700 "
                  >
                    Home
                  </Link>

                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out hover:scale-110 cursor-pointer hover:text-stone-700 "
                  >
                    About
                  </Link>

                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out hover:scale-110 cursor-pointer hover:text-stone-700 "
                  >
                    Projects
                  </Link>

                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out hover:scale-110 cursor-pointer hover:text-stone-700 "
                  >
                    Skills
                  </Link>

                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out hover:scale-110 cursor-pointer hover:text-stone-700"
                  >
                    Contact
                  </Link>
                  
                  {/* <label class="toggleDarkBtn">
            <input
              type="checkbox"
              onClick={() => setDarkToggle(!darkToggle)}
            />
            <span class="slideBtnTg round"></span>
          </label> */}
        </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
