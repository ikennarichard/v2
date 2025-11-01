import { lazy, Suspense, useContext, useEffect, useState } from "react";
import ThemeToggle from "./components/theme-toggler/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/app.sass";

const About = lazy(() => import("./components/about/About"));
const Cursor = lazy(() => import("./components/cursor/Cursor"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Hero = lazy(() => import("./components/hero/Hero"));
const Pulse = lazy(() => import("./components/pulse/Pulse"));
const SplashScreen = lazy(() => import("./components/Splash/SplashScreen"));
const NavBar = lazy(() => import("./components/navBar/NavBar"));

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
      <Suspense>
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
      </Suspense>
    </div>
  );
}

export default App;
