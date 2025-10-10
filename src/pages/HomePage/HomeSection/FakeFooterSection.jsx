import React from "react";
import "./FakeFooterSection.css";
import { Link } from "react-router-dom";
export default function FakeFooterSection() {
  return (
    <div>
      <section className="fakeFooter bg-[#FAC125] pt-[88px]">
        <div className="container fakeFooter__container w-full flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
          <h2 className="fakeFooter__title w-full font-black text-[80px] leading-[72px] tracking-tighter-[-2%] text-[#2F2F34] uppercase text-center mb-[269px] xl:text-[240px] xl:leading-[200px] xl:w-[1050px] xl:mb-[78px]">
            Time to start!
          </h2>
          <Link to="/contactus">
            <button className="fakeFooter__button">
              Let’s connect
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Link>
          <hr className="fakeFooter__hr border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 mt-[57px] mb-[48px] xl:mt-[78px] xl:mb-[51px]" />
          <div className="fakeFooter__box-links w-full">
            <div className="fakeFooter__main-box-links full flex flex-col justify-center items-center gap-[24px] xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
              <div className="fakeFooter__mini-boxes w-full flex flex-col justify-center items-center gap-[20px]">
                <p className="fakeFooter__mini-boxes-texts font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                  Bizga yozing
                </p>
                <a
                  className="fakeFooter__mini-boxes-emai text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase"
                  href="https://t.me/Onesystem_Admin"
                >
                  "Onesystem Admin" ustiga bosing
                </a>
              </div>
              <div className="fakeFooter__mini-boxes w-full flex flex-col justify-center items-center gap-[20px]">
                <p className="fakeFooter__mini-boxes-texts font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                  So'ng
                </p>
                <h3 className="fakeFooter__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase w-[248px]">
                  "Zoom"da uchrashuv rejalashtiramiz
                </h3>
              </div>
              <div className="fakeFooter__mini-boxes w-full flex flex-col justify-center items-center gap-[20px]">
                <p className="fakeFooter__mini-boxes-texts font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                  Keyin
                </p>
                <h3 className="fakeFooter__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase w-[248px]">
                  Biz "zoom"da siz bilan uchrashamiz
                </h3>
              </div>
              <div className="fakeFooter__mini-boxes w-full flex flex-col justify-center items-center gap-[20px]">
                <p className="fakeFooter__mini-boxes-texts font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                  Natija
                </p>
                <h3 className="fakeFooter__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase w-[248px]">
                  Biz bilan ishonchli shartnoma tuzasiz!
                </h3>
              </div>
            </div>
          </div>
          <hr className="fakeFooter__hr border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 mt-[48px] mb-[48px] xl:mt-[94px] xl:mb-[97px]" />
          <div className="fakeFooter__copy-box flex flex-col justify-center items-center gap-8 xl:gap-12">
            <p className="fakeFooter__copy-text text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase xl:text-[32px] xl:leading-[32px]">
              &copy; 2025 OneSystem IT Group&trade;
            </p>
          </div>
          <hr className="fakeFooter__hr border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 mt-[48px] xl:mt-[64px]" />
        </div>
      </section>
    </div>
  );
}
