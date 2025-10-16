import React from "react";
import FooterText from "./components/FooterText";
import FooterButton from "./components/FooterButton";
import FooterLinks from "./components/FooterLinks";
import FooterCopy from "./components/FooterCopy";
import "./FooterLayout.css";
import { useLocation } from "react-router-dom";
export default function FooterLayout() {
  const locationPage = useLocation();
  return (
    <div>
      <footer
        className={`footer bg-[#FAC125] pt-[88px] pb-[48px] xl:pt-[200px] xl:pb-[102px]  ${
          locationPage.pathname === "/services" ? "block" : "hidden"
        }`}
      >
        <div className="container footer__container flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
          <FooterText />
          <FooterButton />
          <hr className="footer__hr border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 mt-[57px] mb-[48px] lg:mt-[78px] lg:mb-[51px]" />
          <FooterLinks />
          <hr className="footer__hr border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 mt-[48px] mb-[48px] lg:mt-[94px] lg:mb-[83px]" />
          <FooterCopy />
        </div>
      </footer>
    </div>
  );
}
