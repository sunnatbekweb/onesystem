import React from "react";
import "./HeaderLogo.css";
import { Link } from "react-router-dom";
export default function HeaderLogo() {
  return (
    <div>
      <Link to={"/"}>
        <h2 className="headerLogo active:opacity-50 duration-200 font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase lg:font-black lg:text-[56px] lg:leading-[48px] lg:tracking-tighter-[-2%] lg:text-[#2F2F34] ">
          OneSystem
        </h2>
      </Link>
    </div>
  );
}
