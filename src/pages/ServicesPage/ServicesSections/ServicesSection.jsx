import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./ServicesSection.css";
export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);
  const data = [
    {
      direction: "Veb-sayt",
      position:
        "ERP / CRM / porfolio / online magazin / Blog / lms / va hokazo...",
    },
    {
      direction: "Mobil ilova",
      position: "start up / lms / o'quv markaz / online magazin / va hokazo...",
    },
    {
      direction: "veb dizayn",
      position:
        "ERP / CRM / porfolio / online magazin / Blog / lms / va hokazo...",
    },
    {
      direction: "ux/ui dizayn",
      position:
        "ERP / CRM / porfolio / online magazin / Blog / lms / va hokazo...",
    },
    {
      direction: "branding dizayn",
      position: "klinika / online magazin / biznes / va hokazo...",
    },
    {
      direction: "grafik dizayn",
      position: "banner / post / va hokazo...",
    },
    {
      direction: "logo dizayn",
      position:
        "ERP / CRM / porfolio / online magazin / Blog / lms / va hokazo...",
    },
    {
      direction: "telegram bot",
      position:
        "ERP / CRM / porfolio / online magazin / Blog / open budjet / va hokazo...",
    },
  ];
  return (
    <div>
      <section className="services bg-[#EAEAEA] pt-[55px] pb-[198px] lg:pb-[328px] lg:pt-[64px] overflow-x-hidden">
        <div className="container services__container flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
          <h5
            className="services__title font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#8D8D8F] uppercase"
            data-aos="fade-right"
          >
            Bizning xizmarlarimiz
          </h5>
          <hr className="services__hr w-full h-[2px] border-none outline-none bg-[#D7D7D8] mt-[24px] mb-[99px] lg:mb-[280px]" />
          <div className="services__main-box flex flex-col justify-center items-center gap-[40px] lg:gap-[120px]">
            {data.map((item, index) => (
              <div
                className="services__mini-box flex flex-col justify-center items-center gap-3 lg:gap-3.5"
                key={index}
                data-aos="zoom-in-up"
              >
                <h2 className="services__bottom-title text-center font-black text-[40px] leading-[32px] tracking-tighter-[-2%] uppercase lg:text-[88px] lg:leading-[70px]">
                  {item.direction}
                </h2>
                <p className="services__bottom-text text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#8D8D8F] uppercase">
                  {item.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
