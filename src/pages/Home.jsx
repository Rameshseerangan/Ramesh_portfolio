import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side (Text with Coding Animation) */}
        <div className="space-y-6">
          <motion.h1
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: [20, -10, 20],
              opacity: 1,
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <span>&lt;</span>
            <span className="text-blue-400">Who I Am</span>
            <span>&gt;</span>
          </motion.h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm{" "}
            <span className="text-blue-400 font-semibold">Ramesh S</span>, a
            passionate software developer. Welcome to my portfolio!
          </p>
          <motion.div
            className="text-base text-gray-300 mt-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-yellow-400">/</span> I specialize in creating dynamic,
            <span className="text-green-400"> user-friendly</span> interfaces and love solving problems through
            <span className="text-red-400"> code</span>.<span className="text-yellow-400">!</span>
          </motion.div>

          <motion.div
            className="text-lg text-gray-300 mt-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-blue-500">01</span> <span className="text-purple-500">.debug</span> <span className="text-red-500">/solve</span>
          </motion.div>
        </div>

        {/* Right Side (Profile Image with Hover Effects) */}
        <div className="flex items-center justify-center relative">
          <motion.img
            src="src/assets/usinglaptopimg.jpg" // Replace with actual image path
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full transform transition duration-200 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:border-4 hover:border-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
