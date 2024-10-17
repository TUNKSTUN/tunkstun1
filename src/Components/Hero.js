import React, { useState, useEffect } from "react";
import Art from "../Assets/Anim.gif";
import TextTransition, { presets } from "react-text-transition";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Video from "../Assets/Video/Water_1.mp4";

const Texts = ["Cloud Architect", "Network Engineer", "Part-time Developer"];

function Hero() {
  const [indexs, setIndexs] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(
      () => setIndexs((index) => (index + 1) % Texts.length),
      3000
    );
    return () => clearTimeout(intervalId);
  }, [indexs]);

  return (
    <div id="hero" className="relative w-full h-screen mb-20 mt-10 xl:mt-0 flex flex-col-reverse xl:flex-row items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover opacity-80 grayscale-[70%] "
        autoPlay
        loop
        muted
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Main Content: Text Section */}
      <div className="z-1 flex flex-col items-center justify-center xl:items-start space-y-6 text-center xl:text-left p-8 xl:p-20 bg-transparent backdrop-blur-xl rounded-lg shadow-md">
        <h1 className="text-3xl lg:text-5xl xl:text-5xl font-extralight text-amber-200">
          Greetings! My name is
        </h1>
        <span className="text-5xl text-center lg:text-6xl xl:text-10xl text-amber-100 font-[QS]">
          Yahya
        </span>
        <p className="text-xl lg:text-2xl xl:text-3xl text-amber-100 ">
          A tech whiz who moonlights as a{""}
          <TextTransition
            className="inline-block font-bold text-amber-300"
            springConfig={presets.wobbly}
          >
            {Texts[indexs]}
          </TextTransition>
        </p>

        {/* Social Icons */}
        <div className="flex space-x-8 text-3xl lg:text-4xl mt-6">
          <a href="https://www.instagram.com/solo_perfecto24" aria-label="Instagram">
            <SiInstagram className="text-pink-600 hover:text-amber-300 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/yahya24" aria-label="LinkedIn">
            <SiLinkedin className="text-blue-500 hover:text-amber-300 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.github.com/TUNKSTUN" aria-label="GitHub">
            <SiGithub className="text-black hover:text-amber-300 transition-transform hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="z-10 my-12 xl:mb-10 xl:ml-16">
        <img
          className="w-52 h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full border-4 border-amber-300 bg-amber-300  shadow-lg"
          src={Art}
          alt="Animated Yahya Logo"
        />
      </div>
    </div>
  );
}

export default Hero;
