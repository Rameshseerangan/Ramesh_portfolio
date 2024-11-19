import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiGit, SiGithub } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Language",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <FaReact /> },
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "SQL", icon: <SiMongodb /> },
        { name: "No-SQL", icon: <SiMongodb /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
    {
      title: "Development",
      skills: [
        { name: "Full Stack Development", icon: <FaReact /> },
        { name: "Website Development", icon: <FaHtml5 /> },
        { name: "UI Design", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Software & Tools",
      skills: [
        { name: "MS-Office", icon: <SiGit /> },
        { name: "VS-Code", icon: <SiGithub /> },
        { name: "Jupyter Notebook", icon: <SiGithub /> },
        { name: "ChatGPT", icon: <SiGit /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
      ],
    },
  ];

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center mb-12">
          My Skills
        </h1>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">{category.title}</h2>
            <div className="flex flex-wrap justify-center gap-12">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="relative text-center transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-xl p-6"
                >
                  {/* 3D Hover Effect */}
                  <div className="text-5xl text-blue-400 mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-xl font-semibold">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
