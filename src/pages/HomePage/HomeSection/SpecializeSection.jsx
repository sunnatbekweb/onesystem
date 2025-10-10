import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./SpecializeSection.css";
export default function SpecializeSection() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: false,
    });
  }, []);
  const lines = [
    "Biz mijozlarimizning",
    "g‘oyalarini real",
    "loyihalarga aylantiramiz.",
    "2025-yil 1-yanvarda",
    "tashkil topgan",
    "guruhimiz shu",
    "vaqtgacha ko‘plab,",
    "veb-saytlar, mobil",
    "ilovalar va",
    "Telegram botlarni",
    "muvaffaqiyatli ishlab",
    "chiqqanmiz. Bizning",
    "maqsad — har bir",
    "loyiha orqali ",
    "mijozlarimizning",
    "ishonchini oqlash",
    "va ularning",
    "biznesini raqamli",
    "bosqichga olib",
    "chiqishdir!.",
  ];
  return (
    <section className="specialize">
      <div className="container specialize__container flex justify-center items-center bg-[#EAEAEA] pt-[210px] px-[16px] md:px-[36px] lg:px-[48px] xl:pt-[482px]">
        <h4 className="specialize__title font-black tracking-tighter-[120px] text-center text-[28px] leading-[34px] w-full uppercase xl:w-[1223px] xl:text-[88px] xl:leading-[70px]">
          {lines.map((line, index) => (
            <span
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="specialize__line inline-block transition-all"
            >
              {line + " "}
            </span>
          ))}
        </h4>
      </div>
    </section>
  );
}
