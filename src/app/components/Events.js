"use client"
import React, { useState } from 'react'
import DeepRacer from "../../../public/Images/Deep Racer.PNG"
import Flutter1 from "../../../public/Images/FlutterFrenzy.PNG"
import Flutter2 from "../../../public/Images/FlutterFrenzy2.PNG"
import FlutterWorkshop from "../../../public/Images/FlutterWorkshop.PNG"
import Qr1 from "../../../public/Images/Qr IT Seek.PNG"
import Qr2 from "../../../public/Images/Qr IT Seek 2.png"
import Rotaract from "../../../public/Images/Rotaract.jpg"
import Rotaract2 from "../../../public/Images/Rotaract2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "framer-motion";

const Events = () => {
    const events = [
        { 
            id: 1,
            title:'GDSC APU X UM Flutter Frenzy Bootcamp',
            type:'workshop',
            year:'April 2023 ',
            image:[Flutter1,Flutter2],
            content:"A 2-day workshop jointly organized by University Malaya and Asia Pacific University (APU) at APU Campus. The workshop focused on Flutter and Firebase, key technologies in mobile app development. It included hands-on sessions, expert guidance, and networking opportunities, enhancing my mobile app development skills and professional network."
        },
        { 
            id: 2,
            title:'AWS APU Deep Racer Competition',
            type:'competition',
            year:'February 2023 - March 2023',
            image:[DeepRacer],
            content:"In this event, I have learned and applied machine learning and a method called reinforcement learning to train a DeepRacer car to drive faster in virtual. It was awesome to see how smart the car could become with these knowledge."
        },
        { 
            id: 3,
            title:'APU QR IT Seek Competition',
            type:'competition',
            year:'November 2022',
            image:[Qr1,Qr2],
            content:"Participating in the QR Code IT Seek competition organized by Asia Pacific University (APU) was an engaging experience. This event required contestants to uncover QR codes by solving a series of IT-related questions. The competition served as a unique platform for participants to put their IT knowledge to the test and hone their problem-solving skills."
        },
        { 
            id: 4,
            title:'GDSC Sunway University Flutter Workshop',
            type:'workshop',
            year:'March 2023',
            image:[FlutterWorkshop],
            content:"This Flutter workshop held at Sunway University was a great educational experience. Participants had the chance to delve into the basics of Flutter, a widely-used framework for mobile app development. This event provided attendees with a solid foundation in Flutter, empowering them with the knowledge and skills necessary to embark on their journey in creating mobile applications."
        },
        { 
            id: 5 ,
            title:'Rotaract Taylor LinkedIn Branding Workshop',
            type:'workshop',
            year:'October 2023',
            image:[Rotaract,Rotaract2],
            content:"The branding workshop hosted by the Rotaract Club at Taylor's University was an insightful event. This workshop focused on leveraging LinkedIn to build and promote one's personal brand. Attendees had the opportunity to learn valuable strategies and techniques for showcasing their professional identity on this popular social platform. The event organized by the Rotaract Club at Taylor's University provided attendees with essential knowledge on self-branding through LinkedIn."
        },
    ];

    const [option,setOption] = useState("all");
    const filteredData = (option==="all"?events:events.filter(item => item.type === option))

    const CustomOPT =({title,type})=>{
        return(
          <div onClick={()=>{setOption(type)}} className={`${type===option?'text-white dark:text-black bg-black dark:bg-white':'text-black dark:text-white'} 
          mx-2 sm:mx-5 text-base sm:text-xl border-[3px] py-2 px-7 rounded-full border-black dark:border-white
          hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer`}>
            {title}
          </div>
        )
    }
    
    return (
    <div className="bg-white dark:bg-black">
        <motion.div className="flex justify-center items-center flex-col py-10 bg-white dark:bg-black"
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}>
            <p className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl text-center font-extrabold my-16">Exploring Workshops and Challenges</p>
            <div className="flex flex-row my-2">
                <CustomOPT title={"All"} type={"all"}/>
                <CustomOPT title={"Competition"} type={"competition"}/>
                <CustomOPT title={"Workshop"} type={"workshop"}/>
            </div>
            {filteredData.map((items) => (
                <div 
                    className="flex flex-col h-[700px] sm:h-[800px] w-[80%] xl:flex-row xl:h-[500px] xl:w-[70%] my-[50px] rounded-2xl shadow-lg shadow-gray-600 dark:shadow-none dark:border-2 dark:border-gray-400 overflow-hidden" 
                    key={items.id}>
                    <Swiper
                        slidesPerView={1}
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        className="w-[100%] xl:w-[40%] h-[40%] xl:h-[500px] "
                    >
                        {items.image.map((items, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center w-[100%] h-[100%]">
                                    <Image src={items} alt="event-pic" className="w-auto h-auto max-w-[90%] max-h-[90%]" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="w-[100%] h-[60%] xl:h-[500px] xl:w-[60%] bg-gray-700 p-8">
                        <p className="text-white text-2xl sm:text-4xl font-bold mb-4">{items.title}</p>
                        <p className="text-lg sm:text-xl  text-white font-semibold my-4">{items.year}</p>
                        <p className="text-slate-400 text-sm sm:text-lg text-justify xl:text-left mt-4">{items.content}</p>
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Events