'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

// Navigation menu buttons (links)
const menuButtons = [
    {
        name: "Home",
        onclick: () => { window.location.href = "home" },
    },
    {
        name: "About",
        onclick: () => { window.location.href = "about" },
    },
    {
        name: "Projects",
        onclick: () => { window.location.href = "projects" },
    },
    {
        name: "Contact",
        onclick: () => { window.location.href = "contact" },
    }
]

// Social icons with links
export const socialButtons = [
    {
        class: "fa-brands fa-square-github",
        src: "https://github.com/MaxoGitAcc"
    },
    {
        class: "fa-brands fa-linkedin",
        src: "https://www.linkedin.com/in/malkhaz-tsotskhalashvili-96a56437b/"
    },
    {
        class: "fa-brands fa-square-twitter",
        src: "/"
    }
]

const Navbar = () => {
    const [menuShown, setMenuShown] = useState(false);

    // Toggle mobile menu open/close
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


                {/* Desktop Navigation Menu (hidden on smaller screens) */}
                <div className="flex space-x-[2rem] max-lg:hidden">
                    {menuButtons.map((content, i) => (
                        <div key={i} className="text-lg">
                            <button onClick={content.onclick} className="cursor-pointer">
                                {content.name}
                            </button>
                        </div>
                    ))}
                </div>


                {/* Desktop Social Links (hidden on smaller screens) */}
                <div className="flex space-x-[0.3rem] max-lg:hidden">
                    {socialButtons.map((content, i) => (
                        <button key={i} className="cursor-pointer text-lg">
                            <a href={content.src} target='_blank'>
                                <i className={content.class}></i>
                            </a>
                        </button>
                    ))}
                </div>



                {/* Mobile Hamburger Menu (shown on small screens only) */}
                <div className="min-lg:hidden">
                    <motion.button onClick={toggleMenu}>
                        {/* Switch between "bars" and "X" icons depending on state */}
                        <i className={`fa-solid ${menuShown ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </motion.button>
                </div>
            </div>



            {/* Mobile Dropdown Menu (animated with Framer Motion) */}
            <AnimatePresence initial={false}>
                {menuShown && (
                    <motion.div
                        // Start small & slightly offset from the button
                        initial={{ opacity: 0, scale: 0.5, x: 50, y: -20 }}
                        // Animate to normal size (slightly bigger for a "pop" effect)
                        animate={{ opacity: 1, scale: 1.05, x: 0, y: 0 }}
                        // Exit animation back toward the button
                        exit={{ opacity: 0, scale: 0.5, x: 50, y: -20 }}
                        // Spring physics for smooth/bouncy effect
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        key="box"
                        // Position near the hamburger button
                        className="origin-top-right absolute right-4 top-14"
                    >
                        <div className="bg-[#0a0c23] min-lg:hidden rounded-md p-6 flex flex-col space-y-4 items-center justify-center shadow-2xl min-w-[200px]">

                            {/* Mobile Navigation Buttons */}
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

                            {/* Mobile Social Icons */}
                            <div className="flex space-x-[0.5rem] mt-2">
                                {socialButtons.map((content, i) => (
                                    <button key={i} className="cursor-pointer text-xl">
                                        <a href={content.src} target='_blank'>
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
