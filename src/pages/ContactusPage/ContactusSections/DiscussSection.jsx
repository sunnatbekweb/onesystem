import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react"
import './DiscussSection.css'
export default function DiscussSection() {
    useEffect(() => {
        AOS.init({
            duration: 350,
            once: false,
        })
    }, []);
    const lines = [
        "Ready to discuss",
        "your project?",
        "Get in touch, and let’s turn",
        "your ideas into reality.",
    ];
    return (
        <div>
            <section className="discuss bg-[#EAEAEA] pt-[214px] md:pt-[214px] lg:pt-[130px] xl:pt-[130px]">
                <div className="container discuss__container flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
                    <hr className="discuss__hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
                    <h2 className="discuss__title w-full text-center mt-[66px] font-black text-[32px] leading-[28px] tracking-tighter-[-2%] text-[#2F2F34] uppercase xl:mt-[116px] xl:w-[962px] xl:text-[56px] xl:leading-[56px]">
                        {lines.map((line, index) => (
                            <span
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="industry__line inline-block transition-all">
                                {line}
                            </span>
                        ))}
                    </h2>
                </div>
            </section>
        </div>
    )
}