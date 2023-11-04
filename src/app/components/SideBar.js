"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaInstagram,FaLinkedin,FaGithub,FaTwitter,FaSun,FaMoon,FaBars, FaRegWindowClose } from 'react-icons/fa';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { usePathname } from 'next/navigation';

const CustomLink =({href,title,className})=>{
  const router = usePathname();
  return(
    <Link href={href} className={`${className} relative group text-white dark:text-black font-semibold`}>
      {title}
      <span className={`h-[2px] inline-block w-0 bg-white dark:bg-black 
      absolute left-0 -bottom-1
      group-hover:w-full transition-[width] ease-in-out duration-300
      ${router === href?'w-full':'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const SideBar = () => {
  const[mode,setMode] = useThemeSwitcher();
  const [sideBar,setSideBar] = useState(false)
  return (
    <>
      <header className="w-full px-7 py-7 items-center flex md:hidden bg-white dark:bg-black">
        <div 
          className="cursor-pointer"
          onClick={()=>{
            setSideBar(true);
          }}>
          <FaBars size={30} className="text-black dark:text-white"/>
        </div>
      </header>
      {sideBar===true?
        <div className="fixed w-[100%] h-[100%] top-0 left-0 flex justify-center items-center">
          <div className="flex flex-col w-[90%] h-[70%] bg-black dark:bg-white rounded-xl bg-opacity-70 dark:bg-opacity-70">
            <div 
              className="ml-5 mt-5 cursor-pointer" 
              onClick={()=>{
                setSideBar(false);
              }}
            >
              <FaRegWindowClose className="text-white dark:text-black" size={50}/>
            </div>
            <div className="flex flex-col w-[100%] h-[80%] mt-[40px] items-center">
              <nav className="flex flex-col items-center h-[50%] justify-around mb-5">
                    <CustomLink href="/" title="Home"/>
                    <CustomLink href="/about" title="About"/>
                    <CustomLink href="/events" title="Events"/>
                    <CustomLink href="/projects" title="Projects"/>
              </nav>
              <nav className='flex items-center justify-center'>
                <Link href="/" className="mr-3">
                  <FaInstagram color='#DD2A7B' size={30}/>
                </Link>
                <Link href="/" className="mx-3">
                  <FaTwitter color='#26a7de' size={30}/>
                </Link>
                <Link href="/" className="mx-3">
                  <FaGithub size={30} className="text-white dark:text-black"/>
                </Link>
                <Link href="/" className="mx-3">
                  <FaLinkedin color=' #0072b1' size={30}/>
                </Link>
                <div 
                  className="cursor-pointer ml-3 flex flex-row items-center justify-between bg-white dark:bg-black border-2 shadow-inner rounded-3xl w-[70px] h-[35px] px-[7px]"
                  onClick={()=>{
                    setMode(mode==="light"?"dark":"light")
                  }}
                  >
                    <FaMoon color='yellow'size={18}/>
                    <FaSun color='orange' size={18}/>
                    <div className={`absolute w-[24px] h-[24px] bg-white dark:bg-black border-2 rounded-full shadow-lg transform translate-x-0 dark:translate-x-[30px] transition-transform duration-300`}/>
                </div>
              </nav>
            </div>
          </div>
        </div>
      :null}
    </>
  )
}

export default SideBar