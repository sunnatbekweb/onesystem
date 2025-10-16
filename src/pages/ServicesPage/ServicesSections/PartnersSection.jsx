import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./PartnersSection.css";
import aba from "../../../assets/icons/aba.svg";
import hafta24 from "../../../assets/icons/hafta24.svg";
import procleaning from "../../../assets/icons/procleaning.svg";
import Marquee from "react-fast-marquee";
export default function PartnersSection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);
  const images = [
    { image: aba, title: "aba__logo", linkSite: "https://abacarriers.com/" },
    {
      image: hafta24,
      title: "hafta24__logo",
      linkSite: "https://www.hafta24.uz/",
    },
    {
      image: procleaning,
      title: "procleaning__logo",
      linkSite: "https://www.procleaning.uz/",
    },
  ];
  return (
    <section className="partners pt-[90px] pb-[90px] bg-[#EAEAEA] xl:pt-[54px] overflow-hidden z-50 overflow-x-hidden">
      <div className="container partners__container pb-[90px] flex flex-col justify-center items-start gap-[53px] px-[16px] md:px-[36px] lg:px-[48px] xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[80px]">
        <div className="partners__top-box w-full flex flex-col justify-center items-start">
          <h5
            className="partners__title uppercase font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#8D8D8F] opacity-85"
            data-aos="fade-right"
          >
            hamkorlarimiz
          </h5>
          <hr className="partners__hr border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 mt-[24px] mb-[53px] xl:mb-[160px]" />
          <h2
            className="partners__text font-black text-[56px] leading-[48px] tracking-tighter-[-2%] text-[#8D8D8F] uppercase xl:text-[120px] xl:leading-[100px] xl:w-full 2xl:w-[1313px]"
            data-aos="fade-right"
          >
            Bizning ajoyib hamkorligimiz tufayli bizni kim tavsiya qiladi
          </h2>
        </div>
      </div>
      <hr className="mb-[30px] border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 md:mb-[50px]" />
      <Marquee
        delay={0}
        direction="left"
        speed={50}
        loop={0}
        autoFill
        pauseOnHover
        right
      >
        {images.map((item, index) => (
          <a href={item.linkSite} target="_blank" key={index}>
            <img
              className="partners__logo-images object-contain w-[100px] h-[100px] md:w-[250px] md:h-[250px] cursor-pointer mx-[30px] duration-300 md:mx-[70px]"
              src={item.image}
              alt={item.title}
              style={{
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(1000%")}
            />
          </a>
        ))}
      </Marquee>
      <hr className="mt-[30px] border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 md:mt-[50px]" />
    </section>
  );
}
