"use client"
import React, { useRef } from 'react'
import { useScroll } from 'framer-motion';
import { motion } from "framer-motion";

const education = [
    { 
        id: 1,
        title:'Bachelor Of Science In Computer Science',
        year:'2021-2024',
        name:'Asia Pacific University Malaysia',
        content:"While at my university, I gained the ability to conduct research and successfully completed several relevant courses. These courses covered a range of topics, including basic programming languages, data structures, algorithms, concurrent programming, image special effects, object-oriented programming, cloud application engineering, blockchain technology, and more."
    },
    { 
        id: 2,
        title:'Online Learning',
        year:'2022-2024',
        name:'Udemy',
        content:"I have acquired comprehensive skills in full-stack web development and mobile app development using Android Studio by completing high-quality courses on Udemy. These courses equipped me with a strong foundation in creating web applications that cover both front-end and back-end development."
    },
    { 
        id: 3,
        title:'Unified Examination Certificate',
        year:'2015-2020',
        name:'Kuen Cheng High School',
        content:"My involvement with SUEC (United Chinese School Committees' Association) has been instrumental in my educational journey, providing me with a unique set of skills and achievements. Notably, I've completed rigorous pre-university coursework that includes advanced physics, chemistry, and mathematics, alongside proficiency in three languages: Chinese, English, and Malay."
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

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )

  return (
    <div className="py-40 pb-[300px] flex flex-col items-center bg-white dark:bg-black">
        <p className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl text-center font-semibold tracking-wider">EDUCATIONS</p>
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

export default Education