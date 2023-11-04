"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaInstagram,FaLinkedin,FaGithub,FaTwitter,FaSun,FaMoon } from 'react-icons/fa';
import useThemeSwitcher from './hooks/useThemeSwitcher';



const CustomLink =({href,title,className})=>{
  const router = usePathname();
  return(
    <Link href={href} className={`${className} relative group text-black dark:text-white`}>
      {title}
      <span className={`h-[2px] inline-block w-0 bg-black dark:bg-white 
      absolute left-0 -bottom-1
      group-hover:w-full transition-[width] ease-in-out duration-300
      ${router === href?'w-full':'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  const[mode,setMode] = useThemeSwitcher();

    return (
      <header className="w-full px-12 py-8 font-medium text-theme-text justify-between items-center hidden md:flex bg-white dark:bg-black">
        <nav>
            <CustomLink href="/" title="Home" className="mr-4"/>
            <CustomLink href="/about" title="About" className="mx-4"/>
            <CustomLink href="/events" title="Events" className="mx-4"/>
            <CustomLink href="/projects" title="Projects" className="ml-4"/>

        </nav>
        <nav className='flex flex-row items-center justify-center'>
          <Link href="https://www.instagram.com/limzihong554/" className="mr-3" target={"_blank"}>
            <FaInstagram color='#DD2A7B' size={30}/>
          </Link>
          <Link href="https://twitter.com/LimZiHong2" className="mx-3" target={"_blank"}>
            <FaTwitter color='#26a7de' size={30}/>
          </Link>
          <Link href="https://github.com/mizu216" className="mx-3" target={"_blank"}>
            <FaGithub size={30} className="text-black dark:text-white"/>
          </Link>
          <Link href="https://www.linkedin.com/in/lim-zi-hong-b26249243/" className="mx-3" target={"_blank"}>
            <FaLinkedin color=' #0072b1' size={30}/>
          </Link>
          <div 
            className="cursor-pointer ml-3 flex flex-row items-center justify-between bg-gray-100 dark:bg-black border-2 border-white shadow-inner shadow-gray-500 rounded-3xl w-[70px] h-[35px] px-[7px]"
            onClick={()=>{
              setMode(mode==="light"?"dark":"light")
            }}
            >
              <FaMoon color='yellow'size={18}/>
              <FaSun color='orange' size={18}/>
              <div className={`absolute w-[23px] h-[23px] bg-white shadow-gray-600 dark:bg-black border-2 border-white rounded-full shadow-sm transform translate-x-0 dark:translate-x-[30px] transition-transform duration-300`}/>
          </div>
        </nav>
      </header>
    );
  };

export default NavBar