import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [show, setShow] = useState(true);

  

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
        className={`bg-stone-200 fixed top-0 w-full h-2 xl:w-full z-10 transition duration-500 ease-in-out transform${
          show
          ? "block transition delay-100 hover: translate-y-0"
          : "transition ease-in-out delay-100 -translate-y-10 hover:-translate-y-0 hover:cursor-pointer"
        }`}
      >
        
        
        <div id="home" className="  bg-stone-900 backdrop-blur-sm md:w-full lg:w-full h-12 text-teal-200 sticky top-0 z-50 font-[Courgette] transition ease-in-out hover:bg-teal-200 hover:text-stone-900 hover:text-2xl duration-100 border-b hover:border-b-teal-100">
          <div className="justify-center xl:justify-between xl:shrink-0 flex xl:px-10 px-20">
            <div className="space-x-5 mt-2 pl-3 text-2xl transition ease-in-out hover:cursor-pointer duration-400 hidden xl:block font-[youngr]">
            <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    activeClass="active"
                    className="{block} text-lg nav-class transition ease-in-out xl:hover:scale-y-105 cursor-pointer hover:text-stone-700 "
                  >
                    Yahya
                  </Link>
            </div>
            <div className=" xl:text-2xl md:text-xl lg:text-2xl sm:text-lg text-base m-2 pr-2">
              <div className="">
                <div
                  
                  className="space-x-2 xl:space-x-16 lg:space-x-10 md:space-x-6 justify-center transition ease-in-out duration-100 xl:hover:scale-y-105"
                >
                  
          
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1000}
                    activeClass="active"
                    className="{block} active:text-teal-600 nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-teal-600 "
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
                    className="{block}active:text-teal-600 nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-teal-600 "
                  >
                    About
                  </Link>

                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-teal-600 "
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
                    className="{block} nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-teal-600 "
                  >
                    Skills
                  </Link>

                  <Link
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={1000}
                    scrolling={true}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-teal-600"
                  >
                    Resume
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                    activeClass="active"
                    className="{block} nav-class transition ease-in-out xl:hover:scale-105 cursor-pointer hover:text-teal-600"
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
