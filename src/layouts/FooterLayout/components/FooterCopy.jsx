import React from "react";
import "./FooterCopy.css";
export default function FooterCopy() {
  return (
    <div className="footer__copy-box flex flex-col justify-center items-center gap-8 xl:gap-12">
      <p className="footer__copy-text text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase xl:text-[32px] xl:leading-[32px]">
        &copy; 2025 OneSystem IT Group&trade;
      </p>
    </div>
  );
}
