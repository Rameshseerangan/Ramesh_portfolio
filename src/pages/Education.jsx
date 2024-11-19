import React from "react";

const Education = () => {
  const educationDetails = [
    {
      degree: "MCA",
      institution: "Hindustan Institute of Technology and Science",
      score: "8.9 GPA",
    },
    {
      degree: "BCA",
      institution: "Hindustan Institute of Technology and Science",
      score: "7.52 GPA",
    },
    {
      degree: "12th",
      institution: "Government Boys Higher Secondary School",
      score: "65%",
    },
    {
      degree: "10th",
      institution: "Government Boys Higher Secondary School",
      score: "79%",
    },
  ];

  return (
    <div id="education" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center mb-12">
          Education
        </h1>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {educationDetails.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-900 hover:via-purple-900 hover:to-black p-8"
            >
              {/* 3D Effect */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-30 blur-3xl"></div>
              <h2 className="text-2xl font-bold mb-2">{item.degree}</h2>
              <p className="text-lg text-gray-300">{item.institution}</p>
              <p className="text-lg font-medium text-blue-400 mt-2">{item.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
