import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Skill from '../components/Skill'
import Education from '../components/Education'
import Bio from '../components/Bio'
import Experience from '../components/Experience'

const About = () => {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <Bio/>
      <Skill/>
      <Experience/>
      <Education/>
      <Footer/>
    </div>
  )
}
export default About;
