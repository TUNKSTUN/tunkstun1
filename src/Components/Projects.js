import React, { useState, useEffect } from "react";
import CCNP from "../Assets/ccnp.png";
import CCNA from "../Assets/ccna.png";
import Az from "../Assets/az900.png";
import AZ305 from "../Assets/az305.svg";
import CS from "../Assets/saac03.png";
import {
  SiDotnet,
  SiAndroid,
  SiAndroidstudio,
  SiFirebase,
  SiGooglemaps,
  SiMicrosoftazure,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiElectron,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "RAKHT-SPOT",
      description:
        "Android Application Created for Blood Donors and Recipients, no Intermediaries.",
      techStack: [
        <SiAndroidstudio />,
        <SiFirebase />,
        <SiAndroid />,
        <SiGooglemaps />,
      ],
      image: require("../Assets/ARTS/0.jpg"),
      link: "https://github.com/TUNKSTUN/BloodBank-master",
    },
    {
      title: "W²EDAX",
      description:
        "A blog website using Angular, C# ASP.NET, and Azure Cloud, focused on Worldwide Ethical Defense and Attack Exchange.",
      techStack: [
        <FaAngular />,
        <SiDotnet />,
        <SiMicrosoftazure />,
        <SiGithub />,
        <SiFirebase />,
      ],
      image: require("../Assets/ARTS/w2edax.jpg"),
      link: "https://w2edax.web.app",
    },
    {
      title: "TUNKSTUN",
      description:
        "A Portfolio website, built using ReactJS, Firebase, and TailwindCSS.",
      techStack: [<SiReact />, <SiFirebase />, <SiTailwindcss />],
      image: require("../Assets/ARTS/NATURE.jpg"),
      link: "https://github.com/tunkstun/tunkstun1",
    },
    {
      title: "POMODORO Desktop",
      description:
        "A Pomodoro app for productivity, built using ElectronJs & Tailwind.",
      techStack: [<SiElectron />, <SiFirebase />, <SiTailwindcss />],
      image: require("../Assets/ARTS/pomo.png"),
      link: "https://github.com/tunkstun/pomodoro",
    },
  ];

  const badges = [
    {
      title: "Cisco Certified Network Associate",
      image: CCNA,
      link: "https://www.your-certification-link.com",
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      image: Az,
      link: "https://www.your-certification-link.com",
    },
    {
      title: "CCNP",
      image: CCNP,
      link: "https://www.your-certification-link.com",
    },
    {
      title: "Azure Solutions Architect Expert (AZ-305)",
      image: AZ305,
      link: "https://www.your-certification-link.com",
    },
    {
      title: "SAAC3 Certification",
      image: CS,
      link: "https://www.your-certification-link.com",
    },
  ];
  const articles = [
    {
      title: "Ethical Hacking: Strengthening Cybersecurity Through Authorized Exploitation",
      description:
        "An exploration of ethical hacking and its importance in modern cybersecurity",
      image: require("../Assets/Articles/Ethical Hacking.jpg"),
      link: "https://w2edax.web.app/article/e993e355-19c7-4d6c-885a-bff2c320b2c6",
    },
    {
      title: "The Power of Network Segmentation in Cybersecurity",
      description:
        "Exploring the importance of network segmentation in modern cybersecurity",
    
      image: require("../Assets/Articles/The power of network segmentation.jpg"),
      link: "https://w2edax.web.app/article/1c73a654-2f47-4912-a234-fc7812c715b8",
    },
    {
      title: "Cloud Security Tutorial: Building Secure Cloud Infrastructure",
      description:
        "A tutorial on securing cloud infrastructure through IAM, encryption, and more",
      image: require("../Assets/Articles/Cloud Security.jpg"),
      link: "https://w2edax.web.app/Guestbook",
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div
    id="projects"
    className="flex flex-col xl:flex-row p-5 justify-center w-full items-center pb-10"
  >
    <div className="w-full xl:w-2/5 xl:pr-5 p-5 xl:p-0 justify-center items-center flex-wrap">
      <h1 className="text-4xl xl:text-5xl text-amber-200 font-[Courgette] mb-5 tracking-wide text-center xl:text-left">
        Projects 📝
      </h1>
      <p className="text-[90%] text-justify text-white mb-5 font-[courier]">
        I have undertaken a diverse range of projects to expand my knowledge and
        skills in various technologies. These projects span across different
        domains such as web development, cloud infrastructure, and network
        security. From building dynamic web applications using Angular and ASP.NET
        to deploying cloud-based solutions with Azure and AWS, each project has
        pushed me to dive deeper into cutting-edge technologies.
      </p>
      <p className="text-[90%] text-justify text-white mb-5 font-[courier]">
        Some of my notable projects include developing a scalable guestbook
        application with real-time messaging using Gun.js and Firebase, creating
        Dockerized applications served with NGINX, and designing secured networking
        setups utilizing Sophos XG firewalls and VPN configurations. These
        experiences have equipped me with a solid foundation in both development and
        system administration, with a focus on performance optimization and
        security.
      </p>
      <p className="text-[90%] text-justify text-white mb-5 font-[courier]">
        Whether it's implementing REST APIs, integrating CI/CD pipelines, or
        troubleshooting complex network environments, I continuously seek
        opportunities to apply and enhance my skills.
      </p>
  
      <h1 className="text-2xl xl:text-3xl font-[Courgette] mt-10 text-amber-200">
        Badges
      </h1>
      <p className="text-white mt-4 font-[courier] text-[90%]">
        Here are some of the certifications I have earned, showcasing my expertise
        and dedication in different technologies and domains. Each badge represents
        a milestone in my professional journey.
      </p>
  
      <div className="flex flex-row gap-4 mt-10 xl:justify-start justify-center">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-20 h-auto bg-white border-amber-300 border-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <a
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full relative"
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  
    <div className="flex flex-col w-full xl:w-2/3">
      <div className="w-auto items-center justify-center flex flex-col p-5 ">
        <div className="relative w-full xl:h-64 h-72 flex justify-center items-center bg-stone-800 border-spacing-3 border-amber-200 border-4 rounded-md transition:ease-in-out hover:border-amber-500">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ease-in-out w-full h-full ${
                index === currentProject ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} project`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4 rounded-md transition:ease-in-out hover:border-amber-500">
                <a
                  href={projects[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center w-full h-full justify-center"
                >
                  <h3 className="text-2xl xl:text-3xl text-amber-200">
                    {project.title}
                  </h3>
                  <p className="text-sm xl:text-lg text-white mt-2 font-[courier]">
                    {project.description}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {project.techStack.map((icon, idx) => (
                      <span
                        key={idx}
                        className="text-amber-200 text-2xl xl:text-5xl"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-center mt-5 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-9 h-3 rounded-full transform transition-all duration-300 ease-in-out ${
                index === currentProject
                  ? "bg-amber-200 scale-125 border border-amber-100 shadow-lg shadow-white"
                  : "bg-gray-600 shadow-inner shadow-black scale-100 hover:scale-110"
              } border-amber-100 border`}
              onClick={() => setCurrentProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

        <div className="w-full flex flex-col items-center p-5 bg-amber-400">
  <h1 className="text-stone-900 font-[Courgette] text-4xl text-start">~Articles~</h1>

  {/* Articles Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-5 w-full">
    {articles.slice(0, 6).map((article, index) => (
      <div
        key={index}
        className="relative bg-stone-800 border-amber-200 border-4 rounded-md overflow-hidden transition ease-in-out duration-300 hover:border-amber-500 hover:shadow-lg hover:brightness-110"
      >
        {/* Background Image */}
        <img
          src={article.image}
          alt={`${article.title} article`}
          className="absolute inset-0 w-full h-full object-cover text-xl"
        />

        {/* Background Blur and Content */}
        <div className="relative p-4 bg-black bg-opacity-60 h-full flex flex-col justify-center items-start transition ease-in-out duration-300 hover:backdrop-blur-md">
          <h3 className="text-xl text-amber-200">{article.title}</h3>
          <p className="text-sm text-white mt-2 font-[courier] mb-10">
            {article.description}
          </p>

          {/* "Read more" link with absolute positioning and hover effect */}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline mt-3 inline-block absolute left-5 bottom-5 font-[Courgette] transition-all duration-300 transform hover:scale-110"
          >
            Read more
          </a>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
}

export default Projects;
