import React from "react";
import Art from "../Assets/Anim.gif";
import TextTransition, { presets } from "react-text-transition";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Video from "../Assets/Video/Water_1.mp4"

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
      className={`relative xl:flex lg:flex w-full  h-screen text-center text-6xl md:py-32 xl:pt-5 text-white px-10 items-center justify-around  font-mono mb-10 `}
    ><video className="absolute top-0 left-0 w-screen h-screen object-cover" autoPlay loop muted>
    <source src={Video} type="video/mp4" />
  </video>
      {/* <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/Assets/Video/Waves.m4v" type="Video/mp4: codecs=hvc1"/>
        <source src="/Assets/Video/Waves.webm" type="Video/webm; codecs=vp9"/>
      </video> */}
      <div className=" flex-col xl:flex text-center xl:space-y-2 items-center lg:px-40 xl:px-10 space-y-2 lg:space-y-1 justify-center lg:pt-8  drop-shadow-xl backdrop-blur-lg border-teal-400 border-2 rounded-md transition ease-in-out duration-500 hover:border-white p-10 px-20 lg:[300px]">
      <img
          className=" flex  p-2 min-h-full md:min-w-[400px] lg:h-auto xl:h-auto justify-center items-center h-auto rounded-full xl:hidden min-w-md md:flex md:m-auto backdrop-blur-lg border-2-gray-500 md:[200px] w-[400px]"
          src={Art} alt="image"
        />
        <h1 className="font-[Branch] tracking-normal lg:text-4xl xl:text-5xl font-extralight text-6xl text-teal-100 text-2xl transition delay-300 ease-in-out hover:text-teal-300 cursor-pointer pt-2 text-center">
          Greetings!, My name is <span className="text-6xl xl:text-5xl lg:text-2xl text-4xl font-[Branch]">
            Yahya 
            </span>
        </h1>
        <p className="text-center xl:text-xl pb-10 lg:text-md  text-lg px-3 xl:px-10 ">
          A tech whiz who moonlights as a 
        <TextTransition className="text-center justify-center text-teal-100 xl:text-3xl lg:text-md py-5 font-bold italic font-[Branch] tracking tracking-widest " springConfig={presets.slow}>
              {Texts[indexs % Texts.length]}
            </TextTransition>
        </p>
        <div className="flex xl:space-x-10 space-x-6 justify-center xl:text-10xl text-5xl text-center">
          <a href="https://www.instagram.com/solo_perfecto24">
          <SiInstagram className="text-pink-600 transtion hover:scale-110 hover:cursor-pointer shadow-md transition ease-in-out duration-300 hover:text-teal-300"/>
          </a>
          <a href="https://www.linkedin.com/in/yahya24">
          <SiLinkedin className="text-blue-500 transition ease-in-out delay-100 hover:scale-110 hover:cursor-pointer duration-300 hover:text-teal-300"/>
          </a>
          <a href="https://www.github.com/TUNKSTUN">
          <SiGithub className="text-black transition ease-in-out delay-100 hover:scale-110 hover:cursor-pointer duration-400 hover:text-teal-300"/>
          </a>
          
        </div>
       
      </div>
    
      <div className="flex flex-cols w-auto bg-transparent lg:pt-10 justify-end">
        <img
          className="ml-36 max-w-full md:min-h-full lg:h-auto xl:h-auto items-center xl:block rounded-full hidden border-2 border-gray-500 mx-5 backdrop-blur-sm xl:w-[500px] "
          src={Art} alt="image"
          />
      </div>
         
      <br/>
    </div>
  );
}

export default Hero;
