import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./IndustrySection.css";
export default function IndustrySection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);
  const lines = [
    "RAQAMLI DUNYO TEZ O‘ZGARADI.",
    "G‘OYALAR MAHSULOTGA AYLANADI,",
    "LEKIN ISHONCHLI TIZIM",
    "QURISH VA ISHONCH",
    "QOZONISH UCHUN VIZION,",
    "ISTE’DOD VA VAQT KERAK.",
  ];
  const data = [
    {
      texts: `Bizning jamoamiz — o‘z ishiga fidoyi dasturchilar, dizaynerlar, va strateglardan iborat. Har bir a’zo o‘z sohasida yuqori malakaga ega bo‘lib, birgalikda mazmunli va samarali raqamli mahsulotlar kash qilamiz. Biz veb-saytlar, mobil ilovalar va Telegram botlar ishlab chiqishda foydalanuvchilarning ehtiyojlarini chuqur tahlil qilamiz, shunda har bir loyiha nafaqat texnik jihatdan puxta, balki biznes nuqtai nazaridan ham foydali bo‘ladi. Har bir loyiha — bu biz uchun yangi tajriba, yangi imkoniyat.`,
    },
    {
      texts: `"OneSystem IT Group" 2025-yil yanvar oyida tashkil topgan. Dastlab kichik jamoa sifatida yo‘l boshlaganmiz, bugungi kunda esa biz turli yo‘nalishlarda faoliyat yuritayotgan, o‘sishga intiluvchi va doimiy ravishda yangilik izlaydigan jamoaga aylandik. Bizning asosiy maqsadimiz — O‘zbekiston IT sohasida yangi bosqichni boshlash, zamonaviy, xavfsiz va kengaytiriladigan texnologiyalar orqali bizneslarni raqamlashtirish va ularning muvaffaqiyatiga hissa qo‘shishdir.`,
    },
    {
      texts: `Biz uchun hamkorlik — muvaffaqiyat kaliti. Har bir loyiha biz uchun mijoz bilan hamkorlikda o‘sish, yangi fikrlarni birgalikda sinovdan o‘tkazish jarayonidir. Ijod va texnik mahoratni birlashtirib, biz foydalanuvchilarni ilhomlantiradigan, brendlarni esa oldinga siljitadigan yechimlar yaratamiz. Bizning qadriyatlarimiz — sifat, ishonch va yangilik.`,
    },
  ];
  return (
    <div>
      <section className="industry bg-[#EAEAEA] pt-[214px] md:pt-[214px] lg:pt-[130px] xl:pt-[130px]">
        <div className="container industry__container flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
          <hr className="industry__hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
          <h2
            className="industry__title text-[#2F2F34] pt-[66px] mb-[115px] font-black w-full text-[32px] leading-[28px] tracking-tighter-[-2%] uppercase text-center lg:pt-[116px] xl:text-[56px] xl:leading-[56px] xl:w-[941px] xl:mb-[94px]"
            data-aos="fade-up"
          >
            {lines.map((line, index) => (
              <span
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="industry__line inline-block transition-all"
              >
                {line}
              </span>
            ))}
          </h2>
          <div className="industry__bottom-box w-full mb-[79px] flex flex-col justify-center items-center gap-6 md:gap-8 xl:mb-[116px] xl:w-[746px] xl:flex xl:flex-row xl:flex-wrap xl:justify-start xl:items-start">
            {data.map((item, index) => (
              <div
                className="industry__bottom-mini-boxes  flex flex-col justify-center items-center xl:flex xl:flex-row xl:flex-wrap xl:justify-center xl:items-center"
                key={index}
              >
                <p
                  className="industry__bottom-mini-boxes-texts text-start font-bold text-[16px] leading-[16px] tracking-tighter-[-2%] text-[#8D8D8F] w-[226px] lg:w-[353px]"
                  data-aos="fade-up"
                >
                  {item.texts}
                </p>
              </div>
            ))}
          </div>
          <hr className="industry__hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
        </div>
      </section>
    </div>
  );
}
