/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect, useRef } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarOpenDropdown, setSidebarOpenDropdown] = useState(null); // state for sidebar dropdown

  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarDropdown = (dropdown) => {
    setSidebarOpenDropdown(sidebarOpenDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <header className="bg-black text-white px-5">
        <div className="container max-w-[1400px] m-auto flex justify-between items-center xs:w-36">
          <a href="#">
            <img className="py-4 xxs:h-16" src="img/boysclub.png" />
          </a>

          <nav className="flex space-x-8 gap-2 py-4 lg:hidden -mr-72 justify-items-end" ref={dropdownRef}>
            <a href="Home.js" className="text-2xl font-bold">HOME</a>
            <a href="Contact.js" className="text-2xl font-bold">CONTACT</a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('boys')}
                className="flex items-center text-2xl font-bold">
                BOYS
                <span className="ml-1"><FaChevronDown /></span>
              </button>
              {openDropdown === 'boys' && (
                <div className="absolute bg-opacity-20 backdrop-blur-sm bg-white rounded-md font-bold text-lg text-start text-white mt-2 py-2 w-52 shadow-lg right-0">
                  <a href="Andy.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-ANDY</a>
                  <a href="Brett.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-BRETT</a>
                  <a href="Pepe.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-PEPE</a>
                  <a href="Landwolf.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-LANDWOLF</a>
                  <a href="Birddog.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-BLOG</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('chains')}
                className="flex items-center text-2xl font-bold">
                CHAINS
                <span className="ml-1"><FaChevronDown /></span>
              </button>
              {openDropdown === 'chains' && (
                <div className="absolute bg-opacity-20 backdrop-blur-sm bg-white rounded-md text-lg font-bold text-start text-white mt-2 py-2 w-48 right-0">
                  <a href="Pulsechaine.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-PULSECHAIN</a>
                  <a href="Basee.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-BASE</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('bridge')}
                className="flex items-center text-2xl font-bold">
                BRIDGE
                <span className="ml-1"><FaChevronDown /></span>
              </button>
              {openDropdown === 'bridge' && (
                <div className="absolute bg-opacity-20 backdrop-blur-sm bg-white rounded-md text-lg text-start font-bold text-white mt-2 py-2 w-48 right-0">
                  <a href="Pulsechain.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-PULSECHAIN</a>
                  <a href="Base.js" className="block px-5 mx-3 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">-BASE</a>
                </div>
              )}
            </div>
          </nav>

          <button onClick={toggleSidebar} className="hidden cursor-pointer text-white text-2xl focus:outline-none lg:block absolute right-4">
            ☰
          </button>

          <Drawer
            open={isSidebarOpen}
            onClose={toggleSidebar}
            direction="left"
            className="bg-black text-white w-[250px]">
            <div className="bg-black h-full flex flex-col pt-5 text-3xl space-y-4 px-4">
              <button onClick={toggleSidebar} className="text-white text-right self-end cursor-pointer text-2xl">X</button>

              <a href="Home.js" className="text-white">Home</a>
              <a href="Contact.js" className="text-white">Contact</a>

              <div>
                <button onClick={() => toggleSidebarDropdown('boys')} className="flex justify-between w-full text-white">
                  Boys <span>{sidebarOpenDropdown === 'boys' ? '–' : '+'}</span>
                </button>
                {sidebarOpenDropdown === 'boys' && (
                  <div className="pl-4 text-lg space-y-2">
                    <a href="Andy.js" className="text-white block">- ANDY</a>
                    <a href="Brett.js" className="text-white block">- BRETT</a>
                    <a href="Pepe.js" className="text-white block">- PEPE</a>
                    <a href="Landwolf.js" className="text-white block">- LANDWOLF</a>
                    <a href="Birddog.js" className="text-white block">- BLOG</a>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => toggleSidebarDropdown('chains')} className="flex justify-between w-full text-white">
                  Chains <span>{sidebarOpenDropdown === 'chains' ? '–' : '+'}</span>
                </button>
                {sidebarOpenDropdown === 'chains' && (
                  <div className="pl-4 text-lg space-y-2">
                    <a href="Pulsechaine.js" className="text-white block">- PULSECHAIN</a>
                    <a href="Basee.js" className="text-white block">- BASE</a>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => toggleSidebarDropdown('bridge')} className="flex justify-between w-full text-white">
                  Bridge <span>{sidebarOpenDropdown === 'bridge' ? '–' : '+'}</span>
                </button>
                {sidebarOpenDropdown === 'bridge' && (
                  <div className="pl-4 text-lg space-y-2">
                    <a href="Pulsechain.js" className="text-white block">- PULSECHAIN</a>
                    <a href="Base.js" className="text-white block">- BASE</a>
                  </div>
                )}
              </div>
            </div>
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default Header;
