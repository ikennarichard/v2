import { useState, useEffect } from 'react';
import Pulse from './components/pulse/Pulse';
import SplashScreen from './components/Splash/SplashScreen';
import NavBar from './components/navBar/NavBar';
import Hero from './components/hero/Hero';
import Project from './components/projects/Projects';
import ProjectList from './components/projects/ProjectList';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import './app.sass'


function App() {

  const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    
      if (isLoading) {
        return <SplashScreen />;
      }
  return (
    <>
      <Pulse/>
      <section id='home'>
        <NavBar/>
        <Hero/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='projects'>
        <Project/>
      </section>
      
        <ProjectList/>

      <section id='contact'>
        <Contact/>
      </section>
      <Footer/>
    </>
  )
}

export default App
