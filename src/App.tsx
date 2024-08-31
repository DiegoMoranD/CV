import Navbar from "./navbar/Navbar"
import Description from "./profile/Description"
import Projects from "./profile/Projects"
import Skills from "./profile/Skills"
import Contact from "./profile/Contact"
import Footer from "./profile/Footer"

function App() {

  return (
    <div className='text-white bg-[#0f0f10] font-sans'>
      <Navbar></Navbar>
      <Description></Description>
      <Projects/>
      <Skills></Skills>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
