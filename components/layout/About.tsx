'use client'

import React from "react"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="h-[70vh] w-screen py-16 md:py-32 bg-[#0a0c23]">
      <div className="max-w-[65%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
          Developer. Designer. Problem-solver. I believe great digital 
          experiences are built at the intersection of creativity and 
          logic—and that’s exactly where I love to work.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Outside of coding, I enjoy exploring new technologies, building side
            projects, and constantly learning to grow my skills.
          </p>
        </motion.div>

        {/* Right Side - Subtle Visual Flair */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end items-center"
        >
          {/* Example: Floating circles for visual interest */}
          <motion.div
            className="absolute w-5 h-5 bg-blue-400 rounded-full top-10 left-5 opacity-50"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.div
            className="absolute w-4 h-4 bg-purple-500 rounded-full bottom-10 right-10 opacity-40"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-pink-500 rounded-full top-1/2 left-1/2 opacity-30"
            animate={{ x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-pink-800 rounded-full top-1/2 left-1/2 opacity-30"
            animate={{ x: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </motion.div>

      </div>
    </section>
  )
}

export default About
