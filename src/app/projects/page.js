import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Project from '../components/Project'

const About = () => {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <Project/>
      <Footer/>
    </div>
  )
}
export default About;
