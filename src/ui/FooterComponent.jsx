import React from "react";
import "./FooterComponent.css";
export default function FooterComponent() {
  return (
    <div>
      <div className="footerComponent w-full bg-[#EAEAEA] pt-[91px] pb-[120px] xl:pt-[55px] xl:pb-[79px]">
        <div
          className="container footerComponent__container w-full flex flex-col justify-center items-center gap-[40px] px-[16px] md:px-[36px] lg:px-[48px] xl:flex xl:flex-row xl:justify-center xl:items-start xl:gap-[124px]"
          data-aos="flip-down"
        >
          <div className="footerComponent__mini-boxes flex flex-col justify-center items-center gap-[4px] lg:gap-[20px]">
            <p className="footerComponent__mini-boxes-texts w-full text-center font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
              Bizga yozing
            </p>
            <a
              className="footerComponent__mini-boxes-email text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[228px] lg:w-full"
              href="https://t.me/Onesystem_Admin"
            >
              "Onesystem Admin" ustiga bosing
            </a>
          </div>
          <div className="footerComponent__mini-boxes flex flex-col justify-center items-center gap-[4px] lg:gap-[20px]">
            <p className="footerComponent__mini-boxes-texts w-full text-center font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
              So'ng
            </p>
            <h3 className="footerComponent__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[228px] lg:w-full">
              "Zoom"da uchrashuv rejalashtiramiz
            </h3>
          </div>
          <div className="footerComponent__mini-boxes flex flex-col justify-center items-center gap-[4px] lg:gap-[20px]">
            <p className="footerComponent__mini-boxes-texts w-full text-center font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
              Natija
            </p>
            <h3 className="footerComponent__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[228px] lg:w-full">
              Biz bilan ishonchli shartnoma tuzasiz!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
