import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "./SecondSliderSection.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SecondSliderSection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/explore/`)
      .then((response) => setBackendData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="secondSlider pt-[120px] pb-[133px] md:pt-[226px] md:pb-[227px] xl:hidden">
      <div className="container secondSlider__container flex flex-col justify-center items-center gap-6 px-[16px] md:px-[36px] lg:px-[48px] md:gap-[71px]">
        <div
          className="secondSlider__top flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <h2 className="secondSlider__title text-[40px] leading-[32px] tracking-tighter-[-2%] font-black uppercase text-[#2F2F34] text-center">
            Explore our{" "}
            <span className="secondSlider__title-span block">expertise in</span>
          </h2>
        </div>
        {backendData.length > 0 && (
          <div
            className="secondSlider__main-box w-full flex flex-col justify-center items-center gap-8 md:flex md:flex-col md:justify-center md:items-center md:gap-[47px]"
            key={backendData[currentIndex]?.id}
          >
            <h3
              className="secondSlider__main-title w-[227px] text-center font-black text-[32px] leading-[28px] tracking-tighter-[-2%] uppercase"
              data-aos="fade-up"
            >
              {backendData[currentIndex]?.explore_name.name}
            </h3>
            <Link to={backendData[currentIndex]?.url}>
              <div
                className="secondSlider__mini-box flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-[31px] lg:translate-x-[90px]"
                data-aos="fade-up"
              >
                <img
                  className="secondSlider__mini-box-title w-[277px] h-[353px] object-cover rounded-[139px] transition-all duration-500 md:w-[478px] md:h-[609px] md:rounded-[254px]"
                  src={backendData[currentIndex]?.image}
                  alt="slide"
                  data-aos="fade-up"
                />
                <p
                  className="secondSlider__mini-box-text hidden md:block md:text-start md:w-[152px] md:font-bold md:text-[20px] md:leading-[20px] md:tracking-tighter-[-2%] md:text-[#2F2F34]"
                  data-aos="fade-up"
                >
                  {backendData[currentIndex]?.text}
                </p>
              </div>
            </Link>
          </div>
        )}
        <div className="secondSlider__thumb-images mt-6 flex justify-center gap-4 flex-wrap">
          {backendData.map((item, index) => (
            <img
              key={item?.id}
              src={item?.image}
              onClick={() => setCurrentIndex(index)}
              alt={`thumb-${index}`}
              className={`w-[40px] h-[40px] rounded-full object-cover cursor-pointer transition-all duration-300 border-2 md:w-[56px] md:h-[56px] ${
                index === currentIndex
                  ? "border-white opacity-100 scale-110"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
