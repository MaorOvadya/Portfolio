//CSS
import './App.css'

//PAGES
import About from './pages/About'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

import HomeButton from './components/HomeButton'

function App() {

  return (
    <>
    <HomeButton/>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
