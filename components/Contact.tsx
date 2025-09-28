'use client'

import React from 'react'
import { socialButtons } from './Navbar'
import { AnimatePresence, motion } from 'framer-motion' // Framer Motion gestures
import { useState } from 'react'

const Contact = () => {
    const [socials, setSocials] = useState(false)

    function toggleSocials() {
        setSocials(prev => !prev)
    }


    return (
        <footer className='w-screen py-16 bg-gray-900'>
            <div className='w-[65%] mx-auto flex flex-col items-center justify-center space-y-6 text-center'>

                <h1 className='text-4xl font-bold'>Interested in Working Together?</h1>

                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className='mt-[0.75rem]'
                >
                    <button className='border-2 rounded-full py-2 px-5 cursor-pointer'   
                        style={{ textShadow: `0 0 1px #fff, 0 0 2px #eee, 0 0 2px #ddd` }}
                        onClick={toggleSocials}>
                        Get in Touch
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
                                            style={{ border: `0 0 1px #fff, 0 0 2px #eee, 0 0 3px #ddd, 0 0 4px #ccc` }}>
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


                <p className='text-gray-400 text-sm'>&copy; 2025 Maxo. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Contact