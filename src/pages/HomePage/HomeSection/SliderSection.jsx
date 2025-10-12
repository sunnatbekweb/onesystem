import React, { useEffect, useRef, useState } from "react";
import "./SliderSection.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import axios from "axios";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
export default function SliderSection() {
  const [backendData, setBackendData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const imageRefs = useRef([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/explore/`)
      .then((response) => setBackendData(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (backendData.length === 0) return;
    const ctx = gsap.context(() => {
      gsap.to(imageRefs.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "400 top top",
          end: "+=1500, 0",
          scrub: 1.5,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.floor(progress * (backendData.length - 1));
            setCurrentIndex(newIndex);
          },
        },
      });
    }, sliderRef);
    return () => ctx.revert();
  }, [backendData]);
  return (
    <section
      ref={sliderRef}
      className="slider pb-[120px] xl:pt-[226px] xl:pb-[227px] overflow-x-hidden hidden xl:block"
    >
      <div className="container slider__container flex flex-col justify-center items-center gap-6 px-[16px] md:px-[36px] md:gap-[121px] lg:px-[48px] xl:gap-[71px]">
        <div className="slider__top-box pt-[340px] flex flex-col justify-center items-center xl:pt-[0px]">
          <h2 className="slider__top-box-title text-[40px] leading-[32px] font-black uppercase text-[#2F2F34] text-center xl:text-[88px] xl:leading-[70px]">
            Explore our <span className="block">expertise in</span>
          </h2>
        </div>
        {backendData.length > 0 && (
          <div className="slider__main-box w-full flex flex-col justify-center items-center gap-8">
            <h3 className="slider__main-title w-[227px] text-center font-black text-[32px] xl:text-[56px] xl:leading-[56px] xl:w-[478px] uppercase">
              {backendData[currentIndex]?.explore_name?.name}
            </h3>
            <Link to={backendData[currentIndex]?.url}>
              <div className="slider__mini-box flex flex-col justify-center items-center md:flex-row md:gap-[31px] xl:translate-x-[100px]">
                <img
                  ref={(el) => (imageRefs.current[currentIndex] = el)}
                  className="slider__mini-box-image w-[277px] h-[353px] object-cover rounded-[139px] transition-all duration-500 xl:w-[337px] xl:h-[453px] xl:rounded-[239px]"
                  src={backendData[currentIndex]?.image}
                  alt="slide"
                />
                <p className="slider__mini-box-text hidden md:block md:w-[152px] font-bold text-[20px] leading-[20px] text-[#2F2F34]">
                  {backendData[currentIndex]?.text}
                </p>
              </div>
            </Link>
          </div>
        )}
        <div className="slider__thumb-images mt-6 flex justify-center gap-4 flex-wrap">
          {backendData.map((item, index) => (
            <div>
              <img
                key={item?.id}
                src={item?.image}
                onClick={() => setCurrentIndex(index)}
                alt={`thumb-${item?.id}`}
                className={`w-[40px] h-[40px] rounded-full object-cover cursor-pointer transition-all duration-300 border-2 md:w-[56px] md:h-[56px] ${
                  index === currentIndex
                    ? "border-white opacity-100 scale-110"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
