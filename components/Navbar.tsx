'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

// Navigation menu buttons (links)
const menuButtons = [
  { name: "Home", onclick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
  { name: "About", onclick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { name: "Projects", onclick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { name: "Skills", onclick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }
]

// Social icons with links
export const socialButtons = [
  { class: "fa-brands fa-square-github", src: "https://github.com/MaxoGitAcc" },
  { class: "fa-brands fa-linkedin", src: "https://www.linkedin.com/in/malkhaz-tsotskhalashvili-96a56437b/" },
  { class: "fa-solid fa-envelope", src: "mailto:maxowork19@gmail.com" }
]

const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false);

  function toggleMenu() {
    setMenuShown(prev => !prev)
  }

  return (
    <footer className="fixed w-screen z-50">
      <div className="w-[65%] py-2 mx-auto flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">Maxo&apos;s Portfolio</h1>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="flex space-x-[2rem] max-lg:hidden">
          {menuButtons.map((content, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button onClick={content.onclick} className="cursor-pointer hover:border-b-2 transition-all duration-200">
                {content.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="flex space-x-[0.3rem] max-lg:hidden">
          {socialButtons.map((content, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button className="cursor-pointer text-lg">
                <a href={content.src} target='_blank' rel='noopener noreferrer'>
                  <i className={content.class}></i>
                </a>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="min-lg:hidden">
          <motion.button onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
            <i className={`fa-solid ${menuShown ? 'fa-xmark' : 'fa-bars'}`}></i>
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence initial={false}>
        {menuShown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50, y: -20 }}
            animate={{ opacity: 1, scale: 1.05, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: 50, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            key="box"
            className="origin-top-right absolute right-4 top-14"
          >
            <div className="bg-[#0a0c23] min-lg:hidden rounded-md p-6 flex flex-col space-y-4 items-center justify-center shadow-2xl min-w-[200px]">
              {menuButtons.map((content, i) => (
                <div key={i}>
                  <button
                    onClick={content.onclick}
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    {content.name}
                  </button>
                </div>
              ))}
              <div className="flex space-x-[0.5rem] mt-2">
                {socialButtons.map((content, i) => (
                  <button key={i} className="cursor-pointer text-xl">
                    <a href={content.src} target='_blank' rel='noopener noreferrer'>
                      <i className={content.class}></i>
                    </a>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Navbar
