/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import React from 'react'
import BioPic from "../../../public/Images/BioPic.png"
import { motion } from "framer-motion";


const Bio = () => {
  return (
    <div className="bg-white dark:bg-black pt-[100px]">
        <p className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl text-center font-extrabold">Crafting Excellence and Innovation</p>
        <div className="flex flex-col lg:flex-row w-full items-center justify-center mt-[100px] bg-white dark:bg-black">
            <motion.div className="w-[70%] lg:w-[40%] flex justify-center mb-[40px]" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} >
                <Image src={BioPic} alt="bio-pic" className="h-auto w-[70%] rounded-full border-2 border-black shadow-2xl"/>
            </motion.div>
            <motion.div className="w-[70%] lg:w-[40%] flex flex-col justify-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} >
                <p className="text-black dark:text-white text-xl font-medium text-center lg:text-left">BIOGRAPHY</p>
                <p className="text-black dark:text-white my-5">I'm <strong className="font-semibold">Lim Zi Hong / Mizu216</strong>, a web and mobile developer driven by a deep passion for creating innovative solutions. I'm on a mission to tackle real-world challenges through technology, crafting web and app experiences that are both user-friendly and visually appealing.</p>
                <p className="text-black dark:text-white my-5">My portfolio reflects my commitment to engineering solutions that enhance processes and elevate user experiences. I firmly believe in the power of technology to not only solve problems but also provide delightful, memorable interactions.</p>
                <p className="text-black dark:text-white mt-5">Join me on this journey as we explore a collection of projects that showcase my dedication to delivering solutions that matter. Let's connect, collaborate, and innovate together in the ever-evolving tech landscape.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Bio