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
    <section id='home' className='h-[90vh] w-screen'>
      <div className='w-[65%] mx-auto h-[100vh] flex flex-col items-center justify-center'>


        <h3 className='text-gray-400 max-md:text-sm'>Hi. I'm Malkhaz Tsotkhalashvili</h3>

        <h1 className="text-5xl max-md:text-3xl text-center text-white">
          <span className="text-blue-400">Turning </span>
          <span className='animate-pulse'
            style={{textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 3px #ddd, 0 0 4px #ccc`}}>
            ideas<br />
            into code, and code <br />
            into
          </span>
          <span className="text-blue-400"> experiences.</span>
        </h1>


        <img src="/HEROIMG1.jpg" alt="logo" className='rounded-[100%] h-[300px] max-md:h-[260]' />

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className='mt-[0.75rem]'
        >
          <button className='border-2 rounded-full py-2 px-5'
            style={{textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 2px #ddd`}}
            onClick={toggleSocials}>
            Contact Me
          </button>
        </motion.div>


        <div className='h-12 items-center justify-center mt-[1rem]'>
          <AnimatePresence initial={false}>
          {socials && (
            <motion.div className='flex space-x-[1.5rem]'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box">
                {socialButtons.map((content, i) => {
                  return (
                      <button key={i} 
                      className='border-2 rounded-[100%] p-2 cursor-pointer'
                      style={{border: `0 0 1px #fff, 0 0 2px #eee, 0 0 3px #ddd, 0 0 4px #ccc`}}>
                        <a href={content.src} target='_blank'>
                          <i className={`${content.class} size[3rem]`}></i>
                        </a>
                      </button>
                  )
                })}
            </motion.div>
          )}
          </AnimatePresence>
        </div>
        

      </div>
    </section>
  )
}

export default Hero
