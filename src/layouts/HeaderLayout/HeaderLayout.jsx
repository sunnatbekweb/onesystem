import React from "react";
import "./HeaderLayout.css";
import HeaderLogo from "./components/HeaderLogo";
import HeaderNavbar from "./components/HeaderNavbar";
import { useLocation } from "react-router-dom";
import TopWallpaper from "../../ui/TopWallpaper";
export default function HeaderLayout() {
  const locationPage = useLocation();
  return (
    <div>
      {locationPage.pathname !== "/" && (
        <TopWallpaper
          text={
            locationPage.pathname === "/aboutus"
              ? "HAQIMIZDA"
              : locationPage.pathname === "/services"
              ? "XIZMATLAR"
              : locationPage.pathname === "/portfolio"
              ? "PORTFOLIO"
              : "Bog'lanish"
          }
        />
      )}
      <header
        className={`header absolute w-full overflow-hidden ${
          locationPage.pathname === "/"
            ? "bg-transparent py-[23px] pt-[88px] lg:pt-[35px] lg:pb-[35px]"
            : "bg-[#EAEAEA] py-[38px] pt-[50px] lg:py-[24px] lg:pt-[54px]"
        }`}
      >
        <div className="container header__container flex flex-row justify-between items-start w-full px-[16px] md:px-[36px] lg:px-[48px] lg:flex lg:flex-row lg:justify-between lg:items-center">
          <HeaderLogo />
          <HeaderNavbar />
        </div>
      </header>
    </div>
  );
}
