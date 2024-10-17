import React from "react";
import ParticleRing from "./ParticleRing";

function About() {
  return (
    <div
      id="about"
      className="relative w-full h-full mt-20 font-mono  flex xl:flex-row lg:flex-row flex-col items-center justify-center"
    >
      {/* Left - Window Style for 3D Atom Animation */}
      <div className="w-full  justify-center items-center">
        <div className="window-frame bg-amber-800 rounded-xl shadow-lg flex justify-center items-center w-full h-full">
          <ParticleRing />
        </div>
      </div>

      {/* Right - About Me Content */}
      <div className="w-auto flex flex-col  absolute xl:left-[56%] lg:left-[56%] lg:top-[10%] lg:absolute xl:top-[10%]  p-5 text-left items-center">
        <div className="table-top rounded-lg p-4 relative h-full w-full max-w-x ">
          <div className="bulletin-board p-6 rounded-lg top-50 backdrop-blur-2xl text-base text-justify text-amber-200 transform hover:scale-101">
            <h1 className="font-extrabold xl:text-4xl text-3xl font-[Courgette] text-wider mb-4 tracking-widest">
              ABOUT
            </h1>
            <p className="text-[90%] xl:text-lg font-[Courier] tracking-normal leading-relaxed mb-4">
              I am a <strong>Network Engineer</strong> with deep roots in
              implementing Software based networking solutions with strategic
              networks deployments and executing them for future proofing. While
              I am a practical guy, I love to code sometimes. As a Network
              Engineer my love for code has grown with idea of automating
              essential tasks and documenting them. This made my curiosity delve
              into the realm of development landscape, building personal projects and understanding
              Software Architectures. I am always excited to explore new
              technologies that aren't limited to networking. Currently i am
              exploring cloud solutions and Invidia's
              Infiniband. 
            </p>
            <p className="text-[90%] xl:text-lg tracking-normal font-[Courier] leading-relaxed">
            Thanks for stopping by, I'd hope we meet each other
            soon. Happy Coding and Networking!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
