import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./HeroSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/projects/`)
      .then((response) => setBackendData(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(backendData)
  return (
    <div>
      <section className="hero pt-[277px]">
        <div className="container hero__container flex flex-col justify-start items-start gap-[30px] px-[16px] md:px-[36px] lg:px-[48px] xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[80px]">
          <hr className="hero__hr hidden w-full h-[2px] bg-[#2F2F34] opacity-10 border-none outline-none lg:block lg:translate-y-[-155px]" />
          <h2
            className="hero__title w-full font-black text-4xl tracking-tighter-[-2%] text-[#2F2F34] uppercase lg:text-center xl:text-[120px] xl:leading-[100px]"
            data-aos="flip-left"
          >
            Biz raqamli{" "}
            <span className="hero__title-span block">
              yechimlarni taklif qilamiz
            </span>
          </h2>
          <p
            className="hero__text w-[164px] font-black text-base tracking-tighter-[-2%] text-[#2F2F34] uppercase lg:w-full lg:text-center"
            data-aos="flip-left"
          >
            Har qanday murakkablikda
          </p>
        </div>
        <div
          className="hero__bottom cursor-grab w-full relative top-[87px] xl:top-[346px]"
          data-aos="zoom-in-up"
        >
          <Swiper
            className="hero__swiper-box"
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={14}
            centeredSlides={true}
          >
            {backendData?.map((item) => (
              <SwiperSlide
                className="hero__swiperSlide flex flex-col justify-center items-center"
                key={item?.id}
              >
                <video
                  key={item?.id}
                  className="w-full object-cover top-0 h-[640px] left-0 rounded-[48px] xl:h-[693px] xl:rounded-[601px]"
                  src={item?.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="hero__swiperSlide-card w-full flex flex-col justify-center items-center absolute top-[132px] xl:top-[180px]">
                  <div className="hero__swiperSlide-mini-card flex flex-col justify-center items-center">
                    <img
                      className="hero__swiperSlide-icon mb-[112px]"
                      src={item?.icon}
                      alt="icon"
                    />
                    <h2 className="hero__swiperSlide-title font-black text-center text-4xl tracking-tighter-[-2%] uppercase text-white mb-[19px] xl:text-[120px] xl:leading-[100px0] xl:tracking-tighter-[-2%] xl:mb-[34px]">
                      {item?.title}
                    </h2>
                  </div>
                  <p className="hero__swiperSlide-text font-black text-center text-base tracking-tighter-[-2%] uppercase text-[#EAEAEA]">
                    {item?.sub_title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
