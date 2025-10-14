import React from "react";
import "./FooterLinks.css";
export default function FooterLinks() {
  return (
    <div className="footerLinks w-full">
      <div className="footerLinks__box w-full flex flex-col justify-center items-center gap-[24px] xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
        <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
          <p className="footerLinks__mini-boxes-texts text-center font-bold text-base tracking-tighter-[-2%] text-[#2F2F34]">
            Bizga yozing
          </p>
          <a
            className="footerLinks__mini-boxes-email text-center font-black text-base tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]"
            href="https://t.me/OneSystem_uz"
          >
            "Onesystem Admin" ustiga bosing
          </a>
        </div>
        <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
          <p className="footerLinks__mini-boxes-texts text-center font-bold text-base tracking-tighter-[-2%] text-[#2F2F34]">
            So'ng
          </p>
          <h3 className="footerLinks__mini-boxes-titles text-center font-black text-base tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]">
            "Zoom"da uchrashuv rejalashtiramiz
          </h3>
        </div>
        <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
          <p className="footerLinks__mini-boxes-texts text-center font-bold text-base tracking-tighter-[-2%] text-[#2F2F34]">
            Keyin
          </p>
          <h3 className="footerLinks__mini-boxes-titles text-center font-black text-base tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]">
            Biz "zoom"da siz bilan uchrashamiz
          </h3>
        </div>
        <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
          <p className="footerLinks__mini-boxes-texts text-center font-bold text-base tracking-tighter-[-2%] text-[#2F2F34]">
            Natija
          </p>
          <h3 className="footerLinks__mini-boxes-titles text-center font-black text-base tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]">
            Biz bilan ishonchli shartnoma tuzasiz!
          </h3>
        </div>
      </div>
    </div>
  );
}
