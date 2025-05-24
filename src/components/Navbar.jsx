import React, { useState, useEffect } from 'react';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import themeIcon from '../assets/theme-icon.svg';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    console.log(document.documentElement.classList); // to check if 'dark' is added
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setActive(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ➕ Add "Home" link manually to navLinks render
  const extendedNavLinks = [{ id: 'home', title: 'Home' }, ...navLinks];

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white/80 dark:bg-[#0A0E0F]/80 backdrop-blur-md shadow-md`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <p className="text-[18px] font-bold cursor-pointer flex text-black dark:text-white transition-colors">
            Kruthika T &nbsp;
            <span className="sm:inline hidden">| QA Engineer</span>
          </p>
        </a>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {extendedNavLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-[#13B7A5]' : 'text-gray-400'
              } hover:text-[#13B7A5] text-[18px] font-medium cursor-pointer transition`}
              onClick={() => handleScroll(link.id)}
            >
              {link.title}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className="p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {extendedNavLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.id ? 'text-[#13B7A5]' : 'text-gray-400'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      handleScroll(link.id);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </li>
                ))}
                <li>
                   <img
                      src={themeIcon}
                      alt="Toggle Theme"
                      onClick={toggleTheme}
                      className="w-6 h-6 cursor-pointer hover:opacity-75 transition"
                      title="Toggle Theme"
                    />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

