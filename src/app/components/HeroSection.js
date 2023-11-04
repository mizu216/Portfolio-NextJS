"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import profilePic from "../../../public/Images/profilePic.png"


const HeroSection = () => {
  return (
    <section className="flex flex-col h-[100%] md:flex-row justify-evenly px-[20px] py-[50px] bg-white dark:bg-black">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} 
          className="flex flex-1 justify-center items-center m-5">
        <Image src={profilePic} alt="profile-pic" className="w-[80%] h-auto"/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-1 flex-col justify-center items-center md:items-start m-5"
      >
        <h1 className=" text-black dark:text-white mb-4 text-4xl md:text-3xl lg:text-5xl lg:leading-normal text-center md:text-left font-extrabold">
          <span className="bg-clip-text">
            Hello, I&apos;m
          </span>
          <br></br>
          <TypeAnimation
            sequence={[
              "Mizu216",
              1500,
              "Web Developer",
              1500,
              "Mobile Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-justify md:text-left">
        {"I'"}m a skilled programmer who transforms ideas into functional software. With a knack for problem-solving and a passion for coding, I craft efficient and innovative solutions. My portfolio showcases projects that demonstrate my dedication to creating user-centric, cutting-edge software. {"Let's"} turn your ideas into reality through the power of code.
        </p>
        <div>
          <Link
            href="/"
            className="md:mr-6 mb-4 px-6 inline-block py-2 w-full md:w-fit rounded-full bg-black dark:bg-white  text-center border-2 border-black dark:border-white text-white dark:text-black"
          >
            Resume
          </Link>
          <Link
            href="mailto:limzihong216@gmail.com"
            target={"_blank"}
            className="px-6 inline-block py-2 w-full md:w-fit rounded-full bg-white dark:bg-black  text-center border-2 border-black dark:border-white text-black dark:text-white"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;