'use client'

import React from 'react'
import { motion } from 'framer-motion'


const ProjectsArray = [
  {
    title: "Ecommerce Website",
    description: "A full stack ecommerce website built with React.js. Styled with CSS.",
    src: "/projects/ecommerce.png",
  },
  {
    title: "Note App",
    description: "A simple note taking app built with Next.js. Styled with Fanta.css & CSS and deployed on Netlify.",
    src: "/projects/noteapp.png",
  },
  {
    title: "Copacetic",
    description: "A language learning app built with React.js. Styled with Fanta.css & CSS.",
    src: "/projects/copacetic.png",
  }
]

const Projects = () => {

  return (
    <section className='w-screen h-[90vh]'>
      <div className='w-[65%] mx-auto h-[90vh]'>

        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">Here are a few of my favorite projects</h1>
          <hr className="flex-grow border-t-2 border-gray-500" />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-[3rem]'>
          {ProjectsArray.map((project, i) => (
            <div key={i} className='text-center'>
              
              {/* Only image is button + border */}
              <button className='border rounded-lg overflow-hidden w-full'>
                <img
                  src={project.src}
                  alt={project.title}
                  className='w-full object-cover'
                />
              </button>

              {/* Title & description under image */}
              <h2 className='text-xl font-bold mt-2'>{project.title}</h2>
              <p className='text-gray-400 text-sm'>{project.description}</p>

            </div>
          ))}
        </div>

        <motion.div className='w-full mt-[4rem] flex flex-col items-center space-y-4'
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.8 }}>

            <h1 className='text-2xl font-bold'>To see more of my work you can visit my github</h1>

            <button className='border rounded-3xl px-6 py-2 cursor-pointer'
                style={{textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 2px #ddd`}}>
                <a href="https://github.com/MaxoGitAcc" target='_blank'>View All</a>
            </button>

        </motion.div>

      </div>
    </section>
  )
}

export default Projects
