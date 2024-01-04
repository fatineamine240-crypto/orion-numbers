import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function Footer() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const iconClasses =
    'cursor-pointer h-5 w-5 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-300';

  const toggleTheme = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setIsDarkTheme(false);
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setIsDarkTheme(true);
    }
  };

  const toggleLanguage = () => {
    console.log('toggleLanguage');
  };

  return (
    <footer className="bg-white dark:bg-gray-800 px-4 md:px-10 xl:px-14 py-3 md:py-5 text-xs">
      <div className="flex items-center justify-between ">
        <Link to="/" className="flex items-center gap-1">
          <img className="w-auto h-8" src={logo} alt="Logo" />
          <p>Number Ninjas</p>
        </Link>

        <div className="flex gap-2 items-center">
          <div className={iconClasses} onClick={toggleLanguage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5h7" />
              <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
              <path d="M12 20l4 -9l4 9" />
              <path d="M19.1 18h-6.2" />
            </svg>
          </div>

          <div onClick={toggleTheme} className={iconClasses}>
            {isDarkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
