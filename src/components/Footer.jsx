import React from 'react';
import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Logo and Name Section */}
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img
            src="https://via.placeholder.com/50" // Replace with your logo image URL
            alt="Ramesh S Logo"
            className="rounded-full transform transition-all hover:scale-110 hover:rotate-3 duration-300"
          />
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Ramesh Seerangan
          </h3>
        </div>
        
        {/* Contact Information Section */}
        <div className="space-y-2 mb-4">
          <p className="text-lg">📍 Location: Chennai</p>
          <p className="text-lg">📞 Phone: <a href="tel:+919150388374" className="text-blue-400 hover:text-blue-500 transform transition-all hover:scale-110 duration-300"><FaPhoneAlt className="inline mr-2" /> 9150388374</a></p>
          <p className="text-lg">✉️ Email: <a href="mailto:rameshseerangan70@gmail.com" className="text-blue-400 hover:text-blue-500 transform transition-all hover:scale-110 duration-300"><FaEnvelope className="inline mr-2" /> rameshseerangan70@gmail.com</a></p>
          <p className="text-lg">🔗 LinkedIn: 
            <a href="https://www.linkedin.com/in/ramesh2002/" className="text-blue-400 hover:text-blue-500 transform transition-all hover:scale-125 duration-300">
              <FaLinkedin className="inline mr-2 text-3xl hover:text-blue-600" />
              linkedin.com/in/ramesh2002/
            </a>
          </p>
          <p className="text-lg">GitHub: 
            <a href="https://github.com/Rameshseerangan" className="text-blue-400 hover:text-blue-500 transform transition-all hover:scale-125 duration-300">
              <FaGithub className="inline mr-2 text-3xl hover:text-gray-600" />
              github.com/Rameshseerangan
            </a>
          </p>
        </div>
        
        {/* Copyright Section */}
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ramesh Seerangan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
