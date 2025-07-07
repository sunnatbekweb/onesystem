import React, { useEffect, useState } from "react";
import "./TeamSection.css";
import ChevronIcon from "../assets/icons/ChevronIcon.jsx";
import axios from "axios";
export default function TeamSection() {
  const title = [
    {
      titles: "position",
    },
    {
      titles: "Name",
    },
    {
      titles: "Networking",
    },
  ];
  const [backendData, setbackendData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/team/`)
      .then((response) => setbackendData(response.data))
      .catch((error) => console.log(error));
  }, []);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e, id) => {
    setHoveredUser(id);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    let animationFrame;
    const smoothFollow = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.1,
        y: prev.y + (cursorPos.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(smoothFollow);
    };
    smoothFollow();
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos]);
  return (
    <div>
      <section className="team bg-[#2F2F34] pt-[48px] md:pt-[100px] overflow-x-hidden">
        <div className="container team__container w-full flex flex-col justify-center items-start px-[16px] md:px-[36px] lg:px-[48px]">
          <h4 className="team__title font-black text-[24px] leading-[20px] mb-[44px] tracking-tighter-[-2%] text-white uppercase xl:mb-[24px] xl:opacity-50">
            Our team
          </h4>
          <hr className="team__hr hidden border-none outline-none w-full bg-[#ffffff] h-[2px] opacity-10 mb-[44px] lg:mb-[206px] lg:block" />
          <div className="w-[100%] hidden mb-[31px] xl:flex xl:flex-row xl:justify-between xl:items-start">
            {title.map((text, id) => (
              <div
                className="flex flex-row justify-between items-start"
                key={id}
              >
                <p className="font-black text-[21px] leading-[17px] tracking-tighter-[-2%] uppercase text-white">
                  {text.titles}
                </p>
              </div>
            ))}
          </div>
          {backendData.map((item) => (
            <div
              className="team__main-box w-full flex flex-col justify-center items-start xl:hidden"
              key={item.id}
            >
              <div className="team__position-box hidden">
                <p className="team__position-box-text">position</p>
                <p className="team__position-box-texts text-[16px] leading-[16px] text-white tracking-tighter-[-2%]">
                  {item.position}
                </p>
              </div>
              <div className="team__name-box w-full flex flex-row justify-between items-start">
                <p className="team__name-box-text hidden">Name</p>
                <p className="team__name-box-texts font-black text-[56px] leading-[56px] tracking-tighter-[-2%] text-white w-[289px] uppercase md:w-full">
                  {item.name}
                </p>
                <img
                  className="team__name-user-image object-top w-[46px] h-[46px] rounded-[50%] md:w-[66px] md:h-[66px]"
                  src={item.image}
                  alt="user__image"
                />
              </div>
              <div className="team__secondPosition-box mb-3 mt-[20px] md:mb-6 md:mt-[40px]">
                <p className="team__secondPosition-box-texts font-bold text-[16px] leading-[16px] tracking-tight-[-2%] text-white">
                  {item.name}
                </p>
              </div>
              <div className="team__networking-box w-full flex flex-row justify-center items-start">
                <p className="team__networking-box-text hidden">Networking</p>
                <div className="team__networking-mini-box flex flex-row justify-center items-center gap-8 mr-auto md:gap-[49px]">
                  {item.social_media?.map((social) => (
                    <a
                      key={social.id || `${item.id}-${social.social_name}`}
                      className="team__networking-box-link flex flex-row justify-center items-center gap-3 duration-100 active:text-[#CF734A]"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="team__networking-box-texts font-bold text-[16px] leading-[16px] tracking-tight-[-2%] text-white active:text-[#CF734A]">
                        {social.social_name}
                      </p>
                      <ChevronIcon />
                    </a>
                  ))}
                </div>
              </div>
              {item.id !== backendData[backendData.length - 1]?.id && (
                <hr className="team__hr border-none outline-none w-full bg-[#ffffff] h-[2px] opacity-10 my-[32px]" />
              )}
            </div>
          ))}
          {backendData.map((info) => (
            <div
              className="team__main-box hidden xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-start xl:border-y xl:pt-[17px] xl:pb-[32px] xl:border-[#444448]"
              key={info.id}
            >
              <div className="team__position-box xl:w-[15%] xl:flex xl:flex-col xl:justify-start xl:items-center">
                <p className="team__position-box-text xl:w-full xl:text-white xl:font-bold xl:text-[16px] xl:leading-[16px] xl:tracking-tighter-[-2%]">
                  {info.position}
                </p>
              </div>
              <div className="team__name-box xl:w-[33%] xl:flex xl:flex-col xl:justify-center xl:items-start">
                <p
                  className="team__name-box-texts xl:cursor-pointer xl:text-center xl:w-max xl:font-black xl:text-white xl:text-[56px] xl:leading-[56px] xl:tracking-tighter-[-2%] xl:uppercase"
                  onMouseMove={(e) => handleMouseMove(e, info.id)}
                  onMouseLeave={() => setHoveredUser(null)}
                >
                  {info.name}
                </p>
                {hoveredUser === info.id && (
                  <img
                    className="team__name-user-image xl:z-20 xl:absolute xl:object-cover xl:w-[292px] xl:h-[407px]"
                    src={info.image}
                    alt="user__image"
                    style={{
                      position: "fixed",
                      left: smoothPos.x + "px",
                      top: smoothPos.y + "px",
                      transform: "translate(-50%, -50%)",
                      opacity: 1,
                      visibility: "visible",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </div>
              <div className="team__networking-box xl:w-[33%] transition-all xl:flex xl:flex-row xl:justify-end xl:items-start xl:gap-x-[49px]">
                {info.social_media?.map((item) => (
                  <a
                    key={item.id || `${info.id}-${item.social_name}`}
                    className="team__networking-box-link xl:flex flex-row xl:justify-center xl:items-center xl:gap-3 xl:duration-100 active:text-[#CF734A]"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="team__networking-box-texts xl:font-bold xl:text-[16px] xl:leading-[16px] xl:tracking-tight-[-2%] xl:text-white xl:active:text-[#CF734A]">
                      {item.social_name}
                    </p>
                    <ChevronIcon />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
