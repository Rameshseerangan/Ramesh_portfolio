import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Landing Page Project */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-blue-500 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Landing Page
            </h3>
            <p className="mb-4">A visually appealing landing page showcasing a clean and modern design.</p>
            <a href="https://landing-page-2-omega.vercel.app" className="text-blue-400 hover:text-blue-500 transition duration-200">View Project</a>
            <br />
            <a href="https://github.com/Rameshseerangan/Landing_page_2" className="text-blue-400 hover:text-blue-500 transition duration-200">GitHub Repository</a>
          </div>
          
          {/* Gaming Portfolio Project */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-blue-500 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Gaming Portfolio
            </h3>
            <p className="mb-4">A portfolio website featuring gaming-related content and projects, designed with a fun and engaging theme.</p>
            <a href="https://game-portfolio-pi.vercel.app" className="text-blue-400 hover:text-blue-500 transition duration-200">View Project</a>
            <br />
            <a href="https://github.com/Rameshseerangan/game_page" className="text-blue-400 hover:text-blue-500 transition duration-200">GitHub Repository</a>
          </div>

          {/* Kamini AI Chatbot */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-blue-500 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Kamini AI Chatbot
            </h3>
            <p className="mb-4">A conversational AI-powered chatbot designed for interactive communication.</p>
            <a href="https://kamini-ai.vercel.app" className="text-blue-400 hover:text-blue-500 transition duration-200">View Project</a>
            <br />
            <a href="https://github.com/Rameshseerangan/Kamini-Ai" className="text-blue-400 hover:text-blue-500 transition duration-200">GitHub Repository</a>
          </div>

          {/* Income-Expense Calculator */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-blue-500 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Income-Expense Calculator
            </h3>
            <p className="mb-4">A financial tool for tracking income and expenses, providing easy calculations and visualizations.</p>
            <a href="https://income-expence-calculator.vercel.app" className="text-blue-400 hover:text-blue-500 transition duration-200">View Project</a>
            <br />
            <a href="https://github.com/Rameshseerangan/income--expence_calculator" className="text-blue-400 hover:text-blue-500 transition duration-200">GitHub Repository</a>
          </div>

          {/* Movie Recommendation */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-blue-500 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Movie Recommendation
            </h3>
            <p className="mb-4">An app that recommends movies based on user input, utilizing a database for movie information.</p>
            <a href="https://movie-recommendation-two-sage.vercel.app" className="text-blue-400 hover:text-blue-500 transition duration-200">View Project</a>
            <br />
            <a href="https://github.com/Rameshseerangan/Movie_recommendation" className="text-blue-400 hover:text-blue-500 transition duration-200">GitHub Repository</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
