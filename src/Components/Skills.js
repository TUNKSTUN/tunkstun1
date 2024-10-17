import React, { useState } from "react";
import SkillBar from "react-skillbars";
import {
  SiSelenium,
  SiPostman,
  SiElectron,
  SiFirebase,
  SiAndroidstudio,
  SiReact,
  SiMysql,
  SiCisco,
  SiKalilinux,
  SiWireshark,
  SiUbuntu,
  SiVirtualbox,
  SiSpring,
  SiGradle,
  SiApachemaven,
  SiAzuredevops,
  SiMicrosoft,
  SiTailwindcss,
  SiMicrosoftazure,
  SiNextdotjs,
  SiWindows,
  SiNodedotjs,
  SiVisualstudiocode,
  SiDocker,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  
  const Skills = [
    { type: "Javascript", level: 60 },
    { type: "Java", level: 87 },
    { type: "C++", level: 75 },
    { type: "Python", level: 70 },
    { type: "HTML5/CSS", level: 80 },
  ];
  
  const colors = {
    bar: "#fbbf24",
    text: "#008080",
    title: {
      text: "#171717",
      background: "white",
    },
  };

  return (
    <div
      id="skills"
      className="flex flex-col px-5 space-y-2 h-auto xl:w-full  bg-transparent p-12 backdrop-blur-lg"
    >
      <h1 className="xl:text-10xl text-4xl text-stone-900 text-start font-[Courgette]">
        👨‍💻Skills
      </h1>
      <div className="xl:grid grid-cols-2 xl:gap-2 flex flex-col space-y-2 xl:space-y-0 xl:mb-10 ">
        <div className="bg-stone-800 w-full h-full xl:text-2xl text-lg font-mono xl:space-y-10 space-y-3 xl:p-5 p-3 rounded-md border-[1px] border-amber-400 py-10 transition ease-in-out duration-300 hover:border-white">
          <h1
            className="flex justify-between text-amber-400 xl:cursor-default cursor-pointer xl:text-2xl text-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#123; Language Proficiency &#125;:
            <span className="mt-2 text-center xl:hidden block text-sm">
              Tap me👆
            </span>
          </h1>
          <div className={`hidden xl:block ${isOpen ? "block" : "hidden"}`}>
            <SkillBar
              className="xl:text-lg text-md"
              skills={Skills}
              colors={colors}
              height={35}
              animationDelay={500}
              animationDuration={3000}
            />
          </div>
          <div className={`block xl:hidden ${isOpen ? "block" : "hidden"}`}>
            <SkillBar
              className="xl:text-lg text-md"
              skills={Skills}
              colors={colors}
              height={30}
              animationDelay={500}
              animationDuration={3000}
            />
          </div>
          <p
            className={`tracking-tight text-justify xl:text-base text-sm text-amber-100 bg-stone-700 p-2 rounded-sm border-[1px] hidden xl:block border-amber-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            This data showcases my proficiency in various programming languages
            including Javascript, Java, C++, Python, and HTML5/CSS. I have more
            expertise in Java and C++, demonstrating my strong ability in these
            languages. I also have adequate understanding of the other
            languages, showcasing my versatile coding skills.
          </p>
          <p
            className={`tracking-tight text-justify xl:text-sm text-sm text-amber-100 bg-stone-700 p-2 rounded-sm border-[1px] xl:hidden block border-amber-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            This data showcases my proficiency in various programming languages
            including Javascript, Java, C++, Python, and HTML5/CSS. I have more
            expertise in Java and C++, demonstrating my strong ability in these
            languages. I also have adequate understanding of the other
            languages, showcasing my versatile coding skills.
          </p>
        </div>
        <div className="bg-stone-800 w-full h-full xl:text-2xl text-lg text-start xl:p-5 p-3 xl:space-y-5 space-y-3 font-mono text-amber-100 rounded-md border-[1px] border-amber-400 py-10 transition ease-in-out duration-300 hover:border-white">
          <h1
            className="flex justify-between text-amber-400 xl:cursor-default cursor-pointer"
            onClick={() => setIsOpens(!isOpens)}
          >
            &#123; Technologies &#125;:{" "}
            <span className="mt-2 text-center xl:hidden block text-sm">
              Tap me👆
            </span>
          </h1>

          <div className={`xl:block hidden ${isOpens ? "block" : "hidden"}`}>
            <div className="grid grid-cols-7 w-auto h-auto xl:space-x-2 gap-4 xl:text-5xl text-4xl text-center text-amber-100 items-center justify-center">
              <SiReact />
              <SiAzuredevops /> 
              <SiCisco />
              <SiNextdotjs />
              <SiAndroidstudio />
              <SiElectron />
              <SiMysql />
              <SiPostman />
              <SiSelenium />
              <SiSpring />
              <SiVisualstudiocode />
              <SiTailwindcss />
              <SiCplusplus />
              <SiFirebase />
              <SiApachemaven />
              <SiGradle />
              <SiVirtualbox />
              <SiKalilinux />
              <SiUbuntu />
              <SiMicrosoft />
              <SiMicrosoftazure />
              <SiWindows />
              <SiWireshark />
              <SiNodedotjs />
              <SiDocker />
            </div>
          </div>
          <div className={`xl:hidden block ${isOpens ? "block" : "hidden"}`}>
            <div className="grid grid-cols-7 w-auto h-auto xl:space-y-2 space-y-2 xl:space-x-2 xl:text-5xl items-center text-4xl text-center text-amber-200 justify-between">
              <SiReact />
              <SiAzuredevops />
              <SiCisco />
              <SiNextdotjs />
              <SiAndroidstudio />
              <SiElectron />
              <SiMysql />
              <SiPostman />
              <SiSelenium />
              <SiSpring />
              <SiVisualstudiocode />
              <SiTailwindcss />
              <SiCplusplus />
              <SiFirebase />
              <SiApachemaven />
              <SiGradle />
              <SiVirtualbox />
              <SiKalilinux />
              <SiUbuntu />
              <SiMicrosoft />
              <SiMicrosoftazure />
              <SiWindows />
              <SiWireshark />
              <SiNodedotjs />
              <SiDocker />
            </div>
          </div>
          <p
            className={`tracking-tight text-justify text-base text-amber-100 bg-stone-700 p-2 rounded-sm border-[1px] border-amber-300 hidden xl:block ${
              isOpens ? "block" : "hidden"
            }`}
          >
            Proficient in popular technologies such as React, Next, and
            Firebase. Experienced with tools like Android Studio, Visual Studio
            Code, and Postman. Knowledgeable in programming languages like Java
            and Node.js, and databases like MySQL. Also great in networking,
            with expertise in technologies such as Cisco Routing and switching
            and Wireshark. This showcases my broad knowledge and experience in
            software development, cloud, and networking.
          </p>
          <p
            className={`tracking-tight text-justify text-sm text-amber-100 bg-stone-700 p-2 rounded-sm border-[1px] border-amber-300 xl:hidden block ${
              isOpens ? "block" : "hidden"
            }`}
          >
            Proficient in popular technologies such as React, Next, and
            Firebase. Experienced with tools like Android Studio, Visual Studio
            Code, and Postman. Knowledgeable in programming languages like Java
            and Node.js, and databases like MySQL. Also great in networking,
            with expertise in technologies such as Cisco Routing and switching
            and Wireshark. This showcases my broad knowledge and experience in
            software development, cloud, and networking.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Skills;
