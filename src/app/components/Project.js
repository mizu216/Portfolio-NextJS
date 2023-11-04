import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import p1 from "../../../public/Images/p1.PNG"
import p2 from "../../../public/Images/p2.PNG"
import p3 from "../../../public/Images/p3.PNG"
import p4 from "../../../public/Images/p4.png"
import p5 from "../../../public/Images/p5.png"
import p6 from "../../../public/Images/p6.PNG"
import p7 from "../../../public/Images/p7.PNG"


const Project = () => {
    const project =[
        {
            id:1,
            title:"Banking System in Python (Academic)",
            link:"https://github.com/mizu216/Bank-System-Python",
            image:p1,
        },
        {
            id:2,
            title:"Task Management System in C Programming (Academic)",
            link:"https://github.com/mizu216/Task-Management-System-C-Programming",
            image:p2,
        },
        {
            id:3,
            title:"Car Rental System in Object Oriented Java Programming (Academic)",
            link:"https://github.com/mizu216/Car-Rental-System-Java",
            image:p3,
        },
        {
            id:4,
            title:"Airport Flight Simulation System in Java Concurrent Programming (Academic)",
            link:"https://github.com/mizu216/Airport-Simulator-System-Java",
            image:p4,
        },
        {
            id:5,
            title:"University Ranking System in C++ Data Structure (Academic)",
            link:"https://github.com/mizu216/University-Ranking-System-CPlusPlus",
            image:p5,
        },
        {
            id:6,
            title:"Stock Demo System in HTML/CSS/Javascript (Demo)",
            link:"https://github.com/mizu216/Stock-Demo-System-HTML-CSS-JS",
            image:p6,
        },
        {
            id:7,
            title:"Login Interface in Flutter and Firebase (Demo)",
            link:"https://github.com/mizu216/Login-Interface-Flutter",
            image:p7,
        }
    ]

    return (
        <div className="px-10 py-6 bg-white dark:bg-black">
            <p className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl text-center font-extrabold my-16">Design, Develop, Deliver Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[50px]">
                {project.map((item)=>(
                    <Link href={item.link} key={item.id} target="_blank">
                        <div className="h-[400px] rounded-xl shadow-xl shadow-gray-600 dark:shadow-none overflow-hidden my-10">
                            <div className="h-[280px]  bg-gray-700 flex justify-center items-center">
                                <Image src={item.image} alt="project-pic" className="w-auto h-[90%]" />
                            </div>
                            <div className="h-[120px] py-2 px-4 flex flex-row items-center bg-white">
                                <p className="text-black text-xl mb-4 flex-1">{item.title}</p>
                                    <FaGithub size={50} color='black' className="mx-3"/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Project