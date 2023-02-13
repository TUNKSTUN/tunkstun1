import React from "react";
import Art from "../Assets/Anim.gif";
import TextTransition, { presets } from "react-text-transition";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { FcDocument } from "react-icons/fc";
import { Parallax, ParallaxBackground } from "react-parallax";

const Texts = ["Cloud Practioner", "Netops learner", "Part-time Dev"];
function Hero() {
  const [indexs, setIndexs] = React.useState(0);

  React.useEffect(() => {
    const intervalIds = setInterval(
      () => setIndexs((index) => index + 1),
      3000
    );
    return () => clearTimeout(intervalIds);
  }, []);

  return (
    <div
      id="hero"
      className={`xl:flex lg:flex w-full xl:min-h-full lg:min-h-full h-full text-center text-6xl md:py-32 xl:pt-5 lg:pt-10 text-white px-10 items-center lg:justify-center xl:justify-around md:justify-center justify-center font-mono space-y-3 mb-10 `}
    >
      {/* <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/Assets/Video/Waves.m4v" type="Video/mp4: codecs=hvc1"/>
        <source src="/Assets/Video/Waves.webm" type="Video/webm; codecs=vp9"/>
      </video> */}
      <div className=" flex-col xl:text-center lg:text-start md:text-center lg:justify-center text-center xl:space-y-2 items-center xl:items-end xl:px-10 space-y-2 lg:space-y-1 justify-center lg:pt-12 pt-32 drop-shadow-xl backdrop-blur-sm p-10">
      <img
          className="flex flex-col px-2  justify-center items-center w-[400px] lg:w-[300px] xl:w-[550px] h-auto rounded-full xl:hidden"
          src={Art}
        />
        <h1 className="lg:text-4xl xl:text-4xl font-extralight text-6xl text-teal-100 text-2xl transition delay-300 ease-in-out hover:text-teal-300 cursor-pointer pt-2 text-center">
          Hi!, My name is <span className="text-6xl xl:text-5xl lg:text-2xl text-4xl font-[Branch]">
            Yahya 
            </span>
        </h1>
        <p className="text-center xl:text-xl pb-10 lg:text-md  text-lg px-3 xl:px-10 ">
          A tech whiz who moonlights as a 
        <TextTransition className="text-center justify-center text-teal-100 xl:text-3xl lg:text-md py-5 font-bold italic font-[Branch] tracking tracking-widest " springConfig={presets.slow}>
              {Texts[indexs % Texts.length]}
            </TextTransition>
        </p>
        <div className="flex xl:space-x-10 space-x-6 justify-center xl:text-5xl text-3xl">
          <a href="https://www.instagram.com/solo_perfecto24">
          <SiInstagram className="text-pink-600 transtion hover:scale-110 hover:cursor-pointer"/>
          </a>
          <a href="https://www.linkedin.com/in/yahya24">
          <SiLinkedin className="text-blue-500 transition ease-in-out delay-100 hover:scale-110 hover:cursor-pointer"/>
          </a>
          <a href="https://www.github.com/TUNKSTUN">
          <SiGithub className="text-white transition ease-in-out delay-100 hover:scale-110 hover:cursor-pointer"/>
          </a>
          
        </div>
       
      </div>
    
      <div className="flex flex-cols w-auto bg-transparent xl:justify-end justify-center xl:pt-10 pt-2">
        <img
          className="xl:flex justify-center items-center w-[400px] xl:w-[500px] lg:w-max h-auto p-2 rounded-full hidden border-2 border-teal-600 backdrop-blur-sm"
          src={Art}
          />
      </div>
         
      <br/>
    </div>
  );
}

export default Hero;
