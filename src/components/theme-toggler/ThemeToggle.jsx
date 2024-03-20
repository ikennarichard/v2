import { useContext } from 'react';
import light from '/icons/light-mode.svg'
import dark from '/icons/dark-mode.svg'
import { ThemeContext } from '../../context/ThemeContext';
import "./themeToggle.sass";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  
  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div
      className='theme-toggle-container'
    >
      <div className="theme-bg">
      </div>
        <button
          className="theme-btn"
          onClick={handleModeChange}
        >
          <img width={26} height={26} src={isDarkMode ? light : dark} alt="theme icon" />
        </button>
    </div>
  );
};

export default ThemeToggle;
