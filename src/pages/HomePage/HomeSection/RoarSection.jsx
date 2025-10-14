import React, { useEffect, useRef, useState } from "react";
import "./RoarSection.css";
import footer__image from "../../../assets/images/footer__image.jpg";
import sofa from "../../../assets/images/sofa.jpg";
import three__mercedesbBenz from "../../../assets/images/three__mercedesbBenz.jpg";
import corridor from "../../../assets/images/corridor.jpg";
import newspaper from "../../../assets/images/newspaper.jpg";
import tennis__players from "../../../assets/images/tennis__players.jpg";
import cars from "../../../assets/images/cars.jpg";
import newspaperman from "../../../assets/images/newspaperman.jpg";
import water from "../../../assets/images/water.jpg";
import birds from "../../../assets/images/birds.jpg";
export default function RoarSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const titleRef = useRef(null);
  const data = [
    { images: sofa },
    { images: three__mercedesbBenz },
    { images: corridor },
    { images: newspaper },
    { images: tennis__players },
    { images: cars },
    { images: newspaperman },
    { images: water },
    { images: birds },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const title = titleRef.current;
      if (title) {
        const rect = title.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <section className="roar relative bg-[#FAC125] pt-[20px]">
        <h2
          ref={titleRef}
          className={`roar__title sticky top-[40%] pb-[48px] text-center w-full font-black text-[56px] leading-[48px] tracking-tighter-[-2%] uppercase md:pb-0 md:mt-[159px] xl:text-[120px] xl:leading-[100px] transition-all duration-500 ${
            isScrolled ? "text-white" : "text-[#2F2F34]"
          }`}
        >
          Biz yangilik <br /> yaratamiz
        </h2>
        <img
          className="roar__more-images w-full hidden md:block"
          src={footer__image}
          alt="footer__image"
        />
        <div className="roar__bottom-box flex flex-col justify-center items-center bg-[#FAC125] md:hidden">
          {data.map((item, index) => (
            <div
              className="roar__box-image flex flex-col justify-center items-center"
              key={index}
            >
              <img
                className="roar__images w-full rounded-[48px]"
                src={item.images}
                alt="images"
              />
            </div>
          ))}
        </div>
        <div className="roar__last-box w-full h-[100vh] bg-[#2F2F34] md:hidden"></div>
      </section>
    </div>
  );
}
