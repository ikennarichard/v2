import { useContext, useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import Pulse from "./components/pulse/Pulse";
import SplashScreen from "./components/Splash/SplashScreen";
import ThemeToggle from "./components/theme-toggler/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/app.sass";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  const width = document.querySelector("body").clientWidth;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading && width > "737") {
    return <SplashScreen />;
  }
  return (
    <div className={`${isDarkMode ? "dark" : null} app-wrapper`}>
      <ThemeToggle />
      <Pulse />
      <Cursor />
      <section id="home" className="background-dark text-dark">
        <NavBar />
        <Hero />
      </section>
      <section id="about" className="background-dark text-dark">
        <About />
      </section>
      {/* <section id='projects' className='background-dark text-dark'>
        <Project/>
      </section>
      
        <ProjectList/> */}

      <section id="contact" className="background-dark text-dark">
        <Contact />
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
