import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./FeedbackSection.css";
import axios from "axios";
export default function FeedbackSection() {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/feedback/`)
      .then((response) => setBackendData(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(backendData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const prevButton = document.querySelector(".button-prev");
      const nextButton = document.querySelector(".button-next");
      if (prevButton && nextButton) {
        prevButton.classList.add("swiper-button-prev");
        nextButton.classList.add("swiper-button-next");
      }
    }, 100);
  }, []);
  return (
    <div>
      <section
        className="feedback overflow-x-hidden  mt-[75px] md:mt-[90px]"
        id="feedback"
      >
        <div className="container feedback__container w-full flex flex-col justify-center items-center gap-y-[35px] px-[16px] md:px-[36px] lg:px-[48px] md:gap-y-[70px] xl:flex xl:flex-row xl:justify-between xl:items-center">
          <div className="feedback__left-box flex flex-col justify-center items-center xl:flex xl:flex-col xl:justify-center xl:items-start">
            <h2
              className="feedback__left-title   font-black w-full uppercase text-center text-2xl leading-[32px] text-[#111D15] mb-3 md:text-[32px] md:leading-[38px] md:w-[556px] md:mb-4 xl:text-start xl:text-[44px] xl:leading-[53px] xl:w-[525px]"
              data-aos="fade-right"
            >
              Ularning biz bilan bo'lgan tajribasi haqida fikr-mulohazalar
            </h2>
            <p
              className="feedback__left-text w-full font-black text-center text-base leading-[26px] text-[#8D8D8F] mb-4 md:mb-8 md:w-[486px] xl:text-start"
              data-aos="fade-right"
            >
              Ularning biz bilan bo'lgan tajribasi haqida fikr-mulohazalar
            </p>
            <div
              className="feedback__left-buttons flex flex-row justify-center items-center gap-x-3"
              data-aos="fade-right"
            >
              <button className="button-prev min-w-[56px] h-[56px] grid place-content-center bg-[#2f2f34] rounded-lg">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="button-next min-w-[56px] h-[56px] grid place-content-center bg-[#2f2f34] rounded-lg">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div
            className="w-full md:w-[700px] xl:w-[600px] rounded-[20px]"
            data-aos="zoom-in"
          >
            <Swiper
              className="feedback__swiper"
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              spaceBetween={16}
              modules={[Navigation]}
            >
              {backendData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="feedback__swiper-mini-boxes flex flex-col justify-center items-start rounded-[20px] px-[20px] py-[20px] cursor-grab md:flex md:flex-row md:justify-between md:items-center md:gap-[24px]">
                    <img
                      className="feedback__swiper-image object-top object-cover mb-6 w-[100px] h-[100px] rounded-[50%] md:mb-0 md:w-[170px] md:h-[244px] md:rounded-[10px]"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="feedback__swiper-text-box flex flex-col justify-center items-start md:flex md:flex-col md:justify-center md:items-start">
                      <h5 className="feedback__swiper-title font-extrabold text-[18px] leading-[20px] opacity-70 mb-1.5 text-[#111D15] md:text-[20px] md:leading-[20px]">
                        {item.name}
                      </h5>
                      <p className="feedback__swiper-text italic font-semibold text-[16px] leading-[24px] text-[#666666] md:w-[366px] mb-1.5">
                        {item.position}
                      </p>
                      <q className="feedback__swiper-comment font-bold opacity-50 text-[16px] leading-[24px] text-[#666666] xl:w-[310px]">
                        {item.message}
                      </q>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
