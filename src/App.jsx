import React, { useEffect, useState } from "react";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";
import { Outlet } from "react-router-dom";
import FooterLayout from "./layouts/FooterLayout/FooterLayout";
import "./App.css";
export default function App({ bar }) {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const moveTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 336);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="app__container">
      {bar}
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
      <button
        className={`app__scrollUp-button ${
          showScroll ? "scrollUp__show-button" : ""
        }`}
        onClick={moveTop}
      >
        <i className="app__scrollUp-button-icon fa-solid fa-arrow-up fa-beat-fade"></i>
      </button>
      <div
        className={`preloader__box bg-[#FAC125] w-full h-full fixed top-0 right-0 left-0 flex justify-center items-center mx-auto z-[2222] duration-500 ${
          loading ? "opacity-100 visible" : "opacity-0 collapse"
        }`}
      >
        <h2 className="headerLogo animate-ping active:opacity-50 duration-200 font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase md:font-black md:text-[66px] md:leading-[58px] md:tracking-tighter-[-2%] md:text-[#2F2F34]">
          OneSystem
        </h2>
      </div>
    </main>
  );
}
