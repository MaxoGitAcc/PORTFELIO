'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Array of project objects with title, description, and image
const ProjectsArray = [
  {
    title: "Ecommerce Website",
    description: "A full stack ecommerce website built with React.js. Styled with CSS.",
    src: "/projects/ecommerce.png",
    vidSrc: "/projects/ecommerce.mp4",
    biggerDescription: `A full stack ecommerce website built with React.js, Node.js, Express, 
    and MongoDB. Features include product management, and a shopping cart. You can see code for web here: `,
    Link: ""

  },
  {
    title: "Note App",
    description: "A simple note taking app built with Next.js. Styled with Fanta.css & CSS and deployed on Netlify.",
    src: "/projects/noteapp.png",
    vidSrc: "/projects/NoteApp.mp4",
    biggerDescription: `A simple note taking app built with Next.js. styled with Fanta.css and CSS. deployed on Netlify. Features include adding, editing, and deleting notes.
    You can see code for web here:  `,
    link: "https://github.com/MaxoGitAcc/Note-App",
  },
  {
    title: "Copacetic",
    description: "A language learning app built with React.js. Styled with Fanta.css & CSS.",
    src: "/projects/copacetic.png",
    vidSrc: "/projects/CopaceticVid.mp4",
    biggerDescription: `A language learning app built with React.js. styled with Fanta.css and CSS. 
    Features include flashcards, quizzes, and progress tracking. You can se code for web here: `,
    link: "https://github.com/MaxoGitAcc/COPACETIC"
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof ProjectsArray[0]>(null)

  return (
    // Main section for projects
    <section id='projects' className='w-screen py-16'>
      <div className='w-[65%] mx-auto'>

        {/* Section header */}
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">Here are a few of my favorite projects</h1>
          <hr className="flex-grow border-t-2 border-gray-500" />
        </div>

        {/* Grid layout for project cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
          {ProjectsArray.map((project, i) => (
            <div key={i} className='text-center'>
              <p className='mb-2'>OPEN IMG TO SEE MORE DETAILS</p>
              <button
                onClick={() => setSelectedProject(project)}
                className='border rounded-lg overflow-hidden w-full cursor-pointer hover:scale-105 transition-transform duration-200'
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className='w-full object-cover'
                />
              </button>
              <h2 className='text-xl font-bold mt-2'>{project.title}</h2>
              <p className='text-gray-400 text-sm'>{project.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          className='w-full mt-[4rem] flex flex-col items-center space-y-4'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h1 className='text-2xl font-bold text-center'>
            Want to see more of my projects? Check out my GitHub!
          </h1>
          <button
            className='border rounded-3xl px-6 py-2 cursor-pointer'
            style={{ textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 2px #ddd` }}
          >
            <a
              href="https://github.com/MaxoGitAcc"
              target='_blank'
              rel="noopener noreferrer"
            >
              View All
            </a>
          </button>
        </motion.div>
      </div>

      {/* Modal for selected project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a0c23] rounded-lg shadow-lg max-w-lg w-full p-10 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-1 right-2 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>

              {/* Image */}
              {/* Video */}
              <video
                src={selectedProject.vidSrc}
                controls
                autoPlay
                loop
                muted
                className="rounded-md mb-4 w-full object-cover"
              />

              {/* Title & Description */}
              <h2 className="text-2xl  font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600">
                {selectedProject.biggerDescription} <br />
                <a href={selectedProject.link} target='_blank' className='text-white underline'>
                  <i className="fa-brands fa-github">GitHub</i>
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
