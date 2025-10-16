import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./CryptoSection.css";
import crypto__image from "../../../assets/images/crypto__image.jpg";
import mini__crypto__image from "../../../assets/images/mini__crypto-image.jpg";
export default function CryptoSection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);
  const lines = [
    "Dunyoda texnologiyalar bir",
    "zumda o‘zgaradi. Biz esa",
    "bu jarayonda siz bilan birga",
    "yuramiz. G‘oyangizni real",
    "mahsulotga aylantirib,",
    "biznesingizni raqamli",
    "bosqichga olib chiqamiz.",
  ];
  return (
    <div>
      <section className="crypto bg-[#EAEAEA] pt-[214px] md:pt-[214px] lg:pt-[130px] xl:pt-[130px] overflow-x-hidden">
        <div className="container crypto__container flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
          <hr className="crypto__hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
          <h2 className="crypto__title pt-[108px] text-center w-full font-black text-[32px] uppercase tracking-tighter-[-2%] leading-[28px] text-[#2F2F34] lg:pt-[116px] lg:text-[56px] lg:leading-[56px] xl:w-[962px]">
            {lines.map((line, index) => (
              <span
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="crypto__line inline-block transition-all"
              >
                {line}
              </span>
            ))}
          </h2>
          <img
            className="crypto__image hidden md:object-contain md:block md:mt-[106px]"
            src={crypto__image}
            alt="crypto__image"
            data-aos="flip-up"
          />
        </div>
        <img
          className="crypto__image object-cover block mt-[68px] md:hidden"
          src={mini__crypto__image}
          alt="mini__crypto-image"
          data-aos="flip-up"
        />
      </section>
    </div>
  );
}
