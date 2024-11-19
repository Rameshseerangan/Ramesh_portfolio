import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-4 shadow-lg sticky top-0 z-50">
      <ul className="flex justify-center space-x-8 text-lg font-semibold">
        {["Home", "Education", "Skills", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className="group relative cursor-pointer"
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {item}
            </a>
            {/* Hover underline animation */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
