'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion' // For animations
import { socialButtons } from './Navbar' // Import social buttons array

const Contact = () => {
    // State to toggle visibility of social links
    const [socials, setSocials] = useState(false)

    // Toggle function for showing/hiding social links
    function toggleSocials() {
        setSocials(prev => !prev)
    }

    return (
        // Main footer section with background color and padding
        <footer className='w-screen py-16 bg-gray-900'>
            {/* Container centered with fixed width and vertical spacing */}
            <div className='w-[65%] mx-auto flex flex-col items-center justify-center space-y-6 text-center'>

                {/* Section header */}
                <h1 className='text-4xl font-bold'>Interested in Working Together?</h1>

                {/* Button with Framer Motion hover/tap effects */}
                <motion.div
                    whileHover={{ scale: 1.2 }} // Slightly enlarge on hover
                    whileTap={{ scale: 0.8 }}   // Slightly shrink on tap
                    className='mt-[0.75rem]'
                >
                    <button
                        className='border-2 rounded-full py-2 px-5 cursor-pointer'
                        style={{ textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 2px #ddd` }}
                        onClick={toggleSocials} // Show/hide social links on click
                    >
                        Get in Touch
                    </button>
                </motion.div>

                {/* Animated social links */}
                <div className='h-12 items-center justify-center mt-[1rem]'>
                    <AnimatePresence initial={false}>
                        {socials && (
                            <motion.div
                                className='flex space-x-[1.5rem]'
                                initial={{ opacity: 0, scale: 0 }}  // Start hidden and small
                                animate={{ opacity: 1, scale: 1 }}  // Animate to visible
                                exit={{ opacity: 0, scale: 0 }}     // Animate exit
                                key="box"
                            >
                                {socialButtons.map((content, i) => (
                                    <button
                                        key={i}
                                        className='border-2 rounded-[100%] p-2 cursor-pointer'
                                        style={{ border: `0 0 1px #fff, 0 0 2px #eee, 0 0 3px #ddd, 0 0 4px #ccc` }}
                                    >
                                        <a href={content.src} target='_blank' rel="noopener noreferrer">
                                            <i className={`${content.class} size[3rem]`}></i>
                                        </a>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer copyright */}
                <p className='text-gray-400 text-sm'>&copy; 2025 Maxo. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Contact
