"use client"
import React from 'react'
import CLanguage from "../../../public/Images/c&c++.png"
import Css from "../../../public/Images/css.png"
import Flutter from "../../../public/Images/flutter.png"
import Html from "../../../public/Images/html.png"
import Java from "../../../public/Images/java.png"
import JavaScript from "../../../public/Images/javascript.png"
import NextJS from "../../../public/Images/nextjs.png"
import Python from "../../../public/Images/python.png"
import ReactNative from "../../../public/Images/react-native.png"
import Tailwind from "../../../public/Images/tailwind.png"
import Image from 'next/image'
import { motion } from "framer-motion";



const Skill = () => {
    const mySkill = [
        { id: 1, title: 'HTML', image:Html },
        { id: 2, title: 'CSS', image:Css },
        { id: 3, title: 'JavaScript', image:JavaScript },
        { id: 4, title: 'Java', image: Java },
        { id: 5, title: 'Python', image:Python },
        { id: 6, title: 'C/C++', image:CLanguage },
        { id: 7, title: 'Flutter', image:Flutter },
        { id: 8, title: 'React Native', image:ReactNative },
        { id: 9, title: 'NextJS', image:NextJS },
        { id: 10, title: 'TailWind', image:Tailwind },
    ];
    return (
        <div className="py-40 bg-white dark:bg-black">
            <p className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl text-center font-semibold tracking-wider">SKILLS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
                {mySkill.map((items) => (
                <motion.div className="p-4 bg-white dark:bg-gray-800 dark:border-2 dark:border-white shadow-lg dark:shadow-none shadow-gray-500 rounded-xl overflow-hidden my-5" key={items.id} initial={{y:50}} whileInView={{y:0}} transition={{duration:1,type:"spring"}}>
                    <div className="flex flex-col items-center overflow-hidden">
                        <Image src={items.image} alt="skill-pic" className="h-[150px] w-auto"/>
                        <div className='text-black  dark:text-white mt-[10px]'>{items.title}</div>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skill