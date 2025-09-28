import React from 'react'

const skillsArray = [
    { name: 'HTML', src: "/skills/html.svg.png" },
    { name: 'CSS', src: "/skills/css.png" },
    { name: 'TailwindCss', src: "/skills/tailwind.svg.png" },
    { name: 'JavaScript', src: "/skills/js.webp" },
    { name: 'TypeScript', src: "/skills/Typescript.png" },
    { name: 'React', src: "/skills/react.svg.png" },
    { name: 'Next.js', src: "/skills/next.png" },
    { name: 'Firebase', src: "/skills/firebase1.png" },
    { name: 'Git', src: "/skills/git.png" }
]

const Skills = () => {
    return (
        <section id='skills' className='w-screen py-16 bg-gray-900'>
            <div className='w-[65%] mx-auto'>

                <div className="flex items-center justify-center space-x-4 mb-12">
                    <hr className="flex-grow border-t-2 border-gray-500" />
                    <h2 className="text-3xl font-bold text-white">My Skills</h2>
                    <hr className="flex-grow border-t-2 border-gray-500" />
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center'>
                    {skillsArray.map((skill, i) => (
                        <div
                            key={i}
                            className='flex flex-col items-center text-center transition-transform hover:scale-110'
                        >
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className='w-16 h-16 object-contain mb-2'
                            />
                            <h3 className='text-white font-semibold'>{skill.name}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    )
}

export default Skills
