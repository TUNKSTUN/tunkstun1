import React from "react";
import Art from "../Assets/Anim.gif";
import TextTransition, { presets } from "react-text-transition";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Texts = ["Cloud Practioner", "Netops learner", "Part-time Dev"];
function Hero() {
  const [indexs, setIndexs] = React.useState(0);

  React.useEffect(() => {
    const intervalIds = setInterval(
      () => setIndexs((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalIds);
  }, []);

  return (
    <div
      id="hero"
      className={`xl:flex lg:flex w-full xl:min-h-screen lg:min-h-screen h-full text-center text-4xl md:py-32 py-24 xl:pt-10 lg:pt-10 text-white bg-tranparent px-10 items-center lg:justify-around xl:justify-around md:justify-center justify-center font-mono space-y-3 mb-10`}
    >
      {/* <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/Assets/Video/Waves.m4v" type="Video/mp4: codecs=hvc1"/>
        <source src="/Assets/Video/Waves.webm" type="Video/webm; codecs=vp9"/>
      </video> */}
      <div className="xl:text-start lg:text-start md:text-center text-center xl:space-y-2 justify-around items-center xl:items-end xl:px-10 lg:px-20 space-y-2">
        <h1 className="lg:text-8xl xl:text-5xl text-2xl text-green-500 transition delay-300 ease-in-out hover:text-green-300 cursor-pointer">
          Hi!, My name is <span className="text-4xl xl:text-6xl font-[Branch]">
            Yahya 
            </span>
        </h1>
        <p className="text-center xl:text-xl pb-10 lg:text-lg tracking-wide text-sm px-5 xl:px-1">
          A tech whiz who moonlights as a 
        <TextTransition className="text-center justify-center" springConfig={presets.gentle}>
              {Texts[indexs % Texts.length]}
            </TextTransition>
        </p>
        <div className="flex space-x-10 justify-center text-6xl">
          <a href="https://www.instagram.com/solo_perfecto24">
          <SiInstagram className="text-pink-600 transtion hover:scale-105 hover:cursor-pointer"/>
          </a>
          <a href="https://www.linkedin.com/in/yahya24">
          <SiLinkedin className="text-blue-900 transition ease-in-out delay-100 hover:scale-105 hover:cursor-pointer"/>
          </a>
          <a href="https://www.github.com/TUNKSTUN">
          <SiGithub className="text-white transition ease-in-out delay-100 hover:scale-105 hover:cursor-pointer"/>
          </a>
          
        </div>
      </div>
      <div className="flex flex-cols w-auto bg-transparent xl:justify-end justify-center pt-10">
        <img
          className="flex justify-center items-center w-[400px] xl:w-max lg:w-max h-auto"
          src={Art}
        />
      </div>
      <br/>
    </div>
  );
}

export default Hero;
