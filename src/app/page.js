import Image from 'next/image'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NavBar/>
      <SideBar/>
      <HeroSection/>
      <div className="h-[250px]"/>
      <Footer/>
    </div>
  )
}
