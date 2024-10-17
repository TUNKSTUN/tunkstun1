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
      title: "W2EDAX",
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
      image: require("https://firebasestorage.googleapis.com/v0/b/w-edax-b.appspot.com/o/MediaFileUrls%2FArticles%2Fe993e355-19c7-4d6c-885a-bff2c320b2c6%2FAssets%2FEthical%20Hacking.jpg?alt=media&token=f0fee764-481f-4828-9ffe-c63721cdbc03"),
      link: "https://w2edax.web.app/article/e993e355-19c7-4d6c-885a-bff2c320b2c6",
    },
    {
      title: "The Power of Network Segmentation in Cybersecurity",
      description:
        "Exploring the importance of network segmentation in modern cybersecurity",
    
      image: require("https://firebasestorage.googleapis.com/v0/b/w-edax-b.appspot.com/o/MediaFileUrls%2FArticles%2F1c73a654-2f47-4912-a234-fc7812c715b8%2FAssets%2FThe%20power%20of%20network%20segmentation.jpg?alt=media&token=b2cf2bb3-538a-41e9-a082-a50e9d736f59"),
      link: "https://w2edax.web.app/article/1c73a654-2f47-4912-a234-fc7812c715b8",
    },
    {
      title: "GuestBook",
      description:
        "Drop a message on our guestbook",
      image: require("../Assets/w2edax.jpg"),
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
      className="flex flex-col xl:flex-row p-5 justify-center items-center pb-10"
    >
      <div className="w-auto xl:w-2/5 pr-5  justify-center items-center text">
        <h1 className="text-5xl text-amber-200 font-[Courgette] mb-5">
          Projects 📝
        </h1>
        <p className="text-md text-justify text-white mb-5 font-[courier]">
          I have undertaken a diverse range of projects to expand my knowledge
          and skills in various technologies. These projects span across
          different domains such as web development, cloud infrastructure, and
          network security. From building dynamic web applications using Angular
          and ASP.NET to deploying cloud-based solutions with Azure and AWS,
          each project has pushed me to dive deeper into cutting-edge
          technologies.
        </p>
        <p className="text-md text-justify text-white mb-5 font-[courier]">
          Some of my notable projects include developing a scalable guestbook
          application with real-time messaging using Gun.js and Firebase,
          creating Dockerized applications served with NGINX, and designing
          secured networking setups utilizing Sophos XG firewalls and VPN
          configurations. These experiences have equipped me with a solid
          foundation in both development and system administration, with a focus
          on performance optimization and security.
        </p>
        <p className="text-md text-justify text-white mb- font-[courier]">
          Whether it's implementing REST APIs, integrating CI/CD pipelines, or
          troubleshooting complex network environments, I continuously seek
          opportunities to apply and enhance my skills.
        </p>

        <h1 className="text-3xl font-[Courgette] mt-10 text-amber-200">
          Badges
        </h1>
        <p className="text-white mt-4 font-[courier]">
          Here are some of the certifications I have earned, showcasing my
          expertise and dedication in different technologies and domains. Each
          badge represents a milestone in my professional journey.
        </p>
        <div className="flex flex-row gap-4 mt-10 xl:justify-start justify-center">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center w-16 h-16 bg-white border-amber-300 border-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
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
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-auto xl:w-2/3">
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
                    href={projects[currentProject].link} // Use the currentProject state to get the link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full h-full justify-center"
                  >
                    <h3 className="xl:text-3xl text-3xl text-amber-200">
                      {project.title}
                    </h3>
                    <p className="xl:text-lg text-md text-white mt-2 font-[courier]">
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
                className={`w-3 h-3 rounded-full transform transition-all duration-300 ease-in-out 
                ${
                  index === currentProject
                    ? "bg-amber-200 scale-125 border border-amber-100"
                    : "bg-gray-400 scale-100 hover:scale-150"
                } 
                border-amber-100 border`}
                onClick={() => setCurrentProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="w-auto items-center justify-center flex flex-col p-5">
          <h1 className="text-amber-200 font-[Courgette] text-4xl text-start items-start justify-start mt-20">~Artciles~</h1>
          <div className="relative w-full xl:h-64 h-72 flex justify-center items-center bg-stone-800 border-spacing-3 border-amber-200 border-4 rounded-md transition:ease-in-out hover:border-amber-500">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-1000 ease-in-out w-full h-full ${
                  index === currentProject ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={article.image}
                  alt={`${article.title} article`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
                  <a
                    href={articles[currentProject].link} // Use the currentProject state to get the link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full h-full justify-center"
                  >
                    <h3 className="xl:text-3xl text-2xl text-amber-200">
                      {article.title}
                    </h3>
                    <p className="xl:text-lg text-md text-white mt-2 font-[courier]">
                      {article.description}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5 space-x-3">
            {articles.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transform transition-all duration-300 ease-in-out 
                ${
                  index === currentProject
                    ? "bg-amber-200 scale-125 border border-amber-100"
                    : "bg-gray-400 scale-100 hover:scale-150"
                } 
                border-amber-100 border`}
                onClick={() => setCurrentProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
