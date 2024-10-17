import React from "react";
import ParticleRing from "./ParticleRing";

function About() {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen font-mono border-t-2 flex xl:flex-row flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${require("../Assets/background_about.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(50px)",
      }}
    >
      {/* Left - Window Style for 3D Atom Animation */}
      <div className="w-full justify-center items-center">
        <div className="window-frame bg-amber-800 rounded-xl shadow-lg flex justify-center items-center w-full h-full">
          <ParticleRing />
        </div>
      </div>

      {/* Right - About Me Content */}
      <div className="w-auto flex flex-col  absolute xl:left-[56%] xl:top-2 p-5 text-left items-center">
        <div className="table-top rounded-lg p-4 relative  w-full max-w-x ">
          <div className="bulletin-board p-6 rounded-lg top-50 backdrop-blur-2xl text-base text-justify text-amber-200 transform hover:scale-101">
            <h1 className="font-extrabold text-4xl font-[Courgette]">
              ABOUT
            </h1>
            <p className="text-base font-[Courier] md:text-lg tracking-normal leading-relaxed mb-4">
              I am a <strong>Network Engineer</strong> and{" "}
              <strong>Software Developer</strong> with expertise in{" "}
              <strong>Java</strong>, <strong>C#</strong>, and{" "}
              <strong>Python</strong>. With a strong background in{" "}
              <strong>SD-WAN</strong> and <strong>Cisco</strong> technologies, I
              focus on optimizing network performance and am currently exploring{" "}
              <strong>Azure</strong> and <strong>AWS</strong> cloud solutions.
            </p>
            <p className="text-base md:text-lg tracking-normal leading-relaxed">
              In my free time, I enjoy hiking, experimenting with new recipes,
              and constantly expanding my skills to stay ahead in the tech
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
