'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion' // Framer Motion gestures
import { socialButtons } from '../Navbar'

const Hero = () => {
  const [socials, setSocials] = useState(false)

  function toggleSocials() {
    setSocials(prev => !prev)
  }

  return (
    <section id='home' className='relative h-[90vh] w-screen bg-[#0a0c23] overflow-hidden'>

      {/* Background floating blobs */}
      <div className='absolute inset-0'>
        <div className='absolute w-72 h-72 bg-blue-600 opacity-10 rounded-full -top-20 -left-20 animate-pulse'></div>
        <div className='absolute w-96 h-96 bg-purple-500 opacity-10 rounded-full -bottom-28 -right-28 animate-pulse'></div>
        <div className='absolute w-60 h-60 bg-pink-500 opacity-5 rounded-full top-1/3 left-1/2 animate-pulse'></div>
      </div>

      {/* Main content */}
      <div className='relative w-[65%] mx-auto h-[100vh] flex flex-col items-center justify-center'>

        <h3 className='text-gray-400 max-md:text-sm'>Hi. I'm Malkhaz Tsotkhalashvili</h3>

        <h1 className="text-5xl max-md:text-3xl text-center text-white mt-4">
          <span className="text-blue-400">Turning </span>
          <span className='animate-pulse'
            style={{ textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 3px #ddd, 0 0 4px #ccc` }}>
            ideas<br />
            into code, and code <br />
            into
          </span>
          <span className="text-blue-400"> experiences.</span>
        </h1>

        <img src="/HEROIMG1.jpg" alt="logo" className='rounded-full h-[300px] max-md:h-[260px] mt-8' />

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className='mt-4'
        >
          <button className='border-2 rounded-full py-2 px-5 cursor-pointer'
            style={{ textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 2px #ddd` }}
            onClick={toggleSocials}>
            Contact Me
          </button>
        </motion.div>

        <div className='h-12 flex items-center justify-center mt-4'>
          <AnimatePresence initial={false}>
            {socials && (
              <motion.div className='flex space-x-6'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                key="socials">
                {socialButtons.map((content, i) => (
                  <button key={i}
                    className='border-2 rounded-full p-2 cursor-pointer'
                    style={{ border: `0 0 1px #fff, 0 0 2px #eee, 0 0 3px #ddd, 0 0 4px #ccc` }}>
                    <a href={content.src} target='_blank' rel='noopener noreferrer'>
                      <i className={`${content.class} text-2xl`}></i>
                    </a>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default Hero
