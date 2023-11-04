import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Events from '../components/Events'

const About = () => {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <Events/>
      <Footer/>
    </div>
  )
}
export default About;
