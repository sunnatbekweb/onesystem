import React from "react";
import "./LinksSection.css";
import ChevronIcon from "../../../assets/icons/ChevronIcon";
import InstagramIcon from "../../../assets/icons/InstagramIcon";
import TelegramIcon from "../../../assets/icons/TelegramIcon";
export default function LinksSection() {
  const data = [
    {
      icon: <InstagramIcon />,
      texts: "Videolarimizni ko'rish uchun instagram sahifamizga qo'shiling",
      secondIcon: <ChevronIcon />,
      link: "https://www.instagram.com/onesystem.uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: <TelegramIcon />,
      texts: "Bizning yangiliklar va sharhlarimizni telegram kanalimizda o'qing",
      secondIcon: <ChevronIcon />,
      link: "https://t.me/OneSystem_uz",
    },
  ];
  return (
    <div>
      <section className="links bg-[#2F2F34] pt-[104px] pb-[41px] xl:pt-[84px] xl:pb-[137px]">
        <div className="container links__container w-full px-[16px] flex flex-col justify-center items-start md:px-[36px] lg:px-[48px]">
          <h4 className="links__title text-white font-black text-[20.04px] leading-[16.03px] tracking-tighter-[-2%] uppercase">
            Qiziqarli havolalar
          </h4>
          <hr className="links__hr border-none outline-none w-full bg-[#444448] h-[2px] mt-[24px]" />
          <div className="links__bottom-box w-full flex flex-col justify-start items-start">
            {data.map((item, index) => (
              <div
                className="links__bottom-mini-boxes w-full flex flex-row justify-start items-start gap-4 border-b-2 border-[#444448] py-[24px] text-white duration-100 active:text-[#CF734A] md:gap-7"
                key={index}
              >
                <a
                  className="links__icons inline-block object-cover align-middle"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <div>
                   {item.icon}
                 </div>
                </a>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <p className="links__bottom-texts font-black text-base md:text-xl tracking-tighter-[-2%] uppercase">
                    {item.texts}
                  </p>
                </a>
                <a
                  className="links__icons-second hidden md:block md:object-cover md:align-middle"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.secondIcon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
