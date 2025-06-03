import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import './SpecializeSection.css';
export default function SpecializeSection() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: false,
    })
  }, []);
  const lines = [
    "we specialize in",
    "marketing crypto",
    "projects with",
    "tailored strategies,",
    "deep research, and",
    "expert execution Our",
    "experienced team",
    "turns your vision into",
    "reality through",
    "impactful websites",
    "and powerful",
    "campaigns",
  ];
  return (
    <section className="specialize">
      <div className="container specialize__container flex justify-center items-center bg-[#EAEAEA] pt-[210px] px-[16px] md:px-[36px] lg:px-[48px] xl:pt-[482px]">
        <h4 className="specialize__title font-black text-center text-[40px] leading-[32px] tracking-tighter-[-2%] w-full uppercase xl:w-[1223px] xl:text-[88px] xl:leading-[70px]">
          {lines.map((line, index) => (
            <span
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="specialize__line inline-block transition-all">
              {line}
            </span>
          ))}
        </h4>
      </div>
    </section>
  );
}