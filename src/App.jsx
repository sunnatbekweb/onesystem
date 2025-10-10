import React, { useEffect, useState } from 'react';
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout';
import { Outlet } from 'react-router-dom';
import FooterLayout from './layouts/FooterLayout/FooterLayout';
import logo from './assets/icons/roar.svg';
import './App.css';
export default function App({ bar }) {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const moveTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 1550);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 336);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className='app__container'>
      {bar}
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
      <button className={`app__scrollUp-button ${showScroll ? 'scrollUp__show-button' : ''}`} onClick={moveTop}>
        <i className="app__scrollUp-button-icon fa-solid fa-arrow-up fa-beat-fade"></i>
      </button>
      <div className={`preloader__box bg-[#CF734A] w-full h-full fixed top-0 right-0 left-0 flex justify-center items-center mx-auto z-[2222] duration-500 ${loading ? "opacity-100 visible" : "opacity-0 collapse"}`}>
        <img
          className='app__loader-image animate-ping object-contain w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]'
          src={logo}
          alt="loading"
        />
      </div>
    </main>
  );
}