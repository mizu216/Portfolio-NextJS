"use client"
import React, { useRef } from 'react'
import { useScroll } from 'framer-motion';
import { motion } from "framer-motion";

const education = [
    { 
        id: 1,
        title:'Internship - Mobile App Developer and Tester',
        year:'July 2023 - October 2023',
        name:'ZoomoTech',
        content:"During my internship, I learned how to build mobile apps using React Native and worked on web development using Next.js. I also gained experience in testing mobile apps to make sure they work well. This internship taught me a lot and made me a more versatile developer."
    },
];

const LiIcon = ({reference}) =>{
    const {scrollYProgress} = useScroll(
        {
            target:reference,
            offset:["center end","center center"]
        }
    )
    return(
        <figure className="absolute -left-[15px] mt-16 stroke-black dark:stroke-white z-10">
            <svg width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className="stroke-black dark:stroke-white stroke-1 fill-none"/>
                <motion.circle cx="75" cy="50" r="20" style={{pathLength:scrollYProgress}} className="stroke-[5px] fill-white dark:fill-black"/>
                <circle cx="75" cy="50" r="10" className="stroke-1 fill-black dark:fill-white animate-pulse"/>
            </svg>
        </figure>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )

  return (
    <div className="py-40 flex flex-col items-center bg-white dark:bg-black">
        <p className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl text-center font-semibold tracking-wider">Experience</p>
        <div className="flex flex-col items-end mt-10 w-[420px] md:w-[600px] lg:w-[800px] relative">
            {education.map((items) => (
                <div className="flex flex-col w-[280px] md:w-[400px] lg:w-[600px] mt-4 mb-10 mr-10" key={items.id}>
                    <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:1,type:"spring"}}>
                        <p className='text-black dark:text-white text-lg md:text-xl lg:text-2xl font-semibold'>{items.title}</p>
                        <p className=' text-gray-700 dark:text-gray-400 font-medium text-base my-1'>{items.year} | {items.name}</p>
                        <p className='text-black dark:text-white font-light'>{items.content}</p>
                    </motion.div>
                    <LiIcon reference={ref}/>
                </div>
            ))}
            <motion.div ref={ref} style={{scaleY:scrollYProgress}} className="absolute left-10 top-5 w-[3px] h-full bg-black dark:bg-white origin-top"/>
        </div>
    </div>
  )
}

export default Experience