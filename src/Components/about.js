import React from "react";

function about() {
  return (
    <div
      id="about"
      className="w-full h-screen dark:text-stone-900 dark:bg-stone-200 font-mono py-20"
    ><br/>
      <div className="w-auto h-auto text-center">
        <div className=" text-center lg:text-6xl xl:text-6xl md:text-4xl text-6xl mx-5 text-green-500 tracking-wider">
          <h1>ABOUT</h1>
          <div className="w-auto bg-stone-800 tracking-normal text-justify m-2 xl:p-3 lg:p-3 p-2 text-xs xl:text-lg lg:text-base md:text-lg text-stone-100 xl:px-10 xl:mx-60 border-[1px] border-green-400 rounded-md">
            <p>
              Greetings! I am an Aspiring Software Engineer from
              India, Honours in B.TECH Computer Science Engineering Degree. As a Practicing
              Engineer, I have a strong interest in the field of emerging
              technologies and continuously strive to expand my knowledge and
              skills. I am an independent and self driven individual who is always
              seeking new challenges in programming career. My ultimate goal
              is to maximize my potential and expertise as an Engineer. This
              website serves as a showcase of my previous projects and
              accomplishments, as well as an overview of my professional
              background and experience.
            </p>
          </div>
            <span className="text-xs xl:text-base">❤️ Thanks for Visiting! 😊❤️.</span>
        </div>
      </div>
    </div>
  );
}

export default about;
