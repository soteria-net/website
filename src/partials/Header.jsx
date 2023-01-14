import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../images/soteria_logo.png'
import { Link as ScrollLink, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <ScrollLink to="home" spy={true} smooth={true} duration={300} className="block cursor-pointer" aria-label="Cruip">
              {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg> */}
              <img src={LogoImg} alt="Soteria" className="w-10 h-10" />
            </ScrollLink>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <ScrollLink to="tech" spy={true} smooth={true} duration={300} className="cursor-pointer font-medium text-gray-600 hover:text-gray-900 px-3 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out" activeClass="active">Product</ScrollLink>
              </li>
              <li>
                <ScrollLink to="features" spy={true} smooth={true} duration={300} className="cursor-pointer font-medium text-gray-600 hover:text-gray-900 px-3 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out" activeClass="active">Marketing</ScrollLink>
              </li>
              <li>
                <ScrollLink to="team" spy={true} smooth={true} duration={300} className="cursor-pointer font-medium text-gray-600 hover:text-gray-900 px-3 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out" activeClass="active">Team</ScrollLink>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
