import { Routes, Route } from 'react-router-dom';
import CloudBackground from "./components/CloudBackground"
import Navbar from "./components/Navbar"
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Home from './sections/Home';
import Footer from './components/Footer';


function App() {

  return (
    <div className="relative min-h-screen overflow-hidden">
      <CloudBackground />
      <Navbar />
      <main>
                <section id="home">
                    <Home />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="experience">
                    <Experience />
                </section>

                <section id="contact">
                    <Contact />
                </section>


            </main>
        <Footer />
    </div>
  )
}

export default App
