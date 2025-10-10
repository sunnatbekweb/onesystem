import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react"
import './StrategySection.css'
export default function StrategySection() {
    useEffect(() => {
        AOS.init({
            duration: 350,
            once: false,
        })
    }, []);
    const lines = [
        "Strategies that make your",
        "project stand out We",
        "analyze audiences, craft",
        "strong brands, and launch",
        "impactful campaigns to",
        "ensure your project",
        "captures attention and",
        "gains traction.",
    ];
    const data = [
        {
            texts: 'Our team consists of experienced professionals who have worked in the cryptocurrency market for years. With expertise in blockchain, trading, security, and fintech, we stay ahead of industry trends to deliver top-tier solutions.',
        },
        {
            texts: 'Collaboration is key to our success. By combining diverse skills and a shared passion for crypto, we create solutions that make digital assets more accessible and secure.',
        },
        {
            texts: 'We are driven by innovation and integrity, believing in the power of blockchain to transform the future.Constantly adapting to market changes, we provide secure, transparent, and efficient strategies for our clients.',
        },
    ]
    return (
        <div>
            <section className="strategy bg-[#EAEAEA] pt-[214px] md:pt-[214px] lg:pt-[130px] xl:pt-[130px]">
                <div className="container strategy__container flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
                    <hr className="strategy__hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
                    <h2 className="strategy__title text-[#2F2F34] font-black pt-[66px] w-full text-[32px] leading-[28px] tracking-tighter-[-2%] uppercase text-center mb-[59px] xl:text-[56px] xl:leading-[56px] xl:w-[958px] xl:mb-[38px] xl:pt-[116px]">
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
                    <div className="strategy__bottom-box w-full mb-[79px] flex flex-col justify-center items-center gap-6 md:gap-8 xl:mb-[116px] xl:w-[746px] xl:flex xl:flex-row xl:flex-wrap xl:justify-start xl:items-start">
                        {data.map((item, index) => (
                            <div className="strategy__bottom-mini-boxes flex flex-col justify-center items-center xl:flex xl:flex-row xl:flex-wrap xl:justify-center xl:items-center" key={index}>
                                <p
                                    className="strategy__bottom-mini-boxes-texts text-start font-bold text-[16px] leading-[16px] tracking-tighter-[-2%] text-[#8D8D8F] w-[226px] lg:w-[353px]"
                                    data-aos="fade-up">
                                    {item.texts}
                                </p>
                            </div>
                        ))}
                    </div>
                    <hr className="strategy__hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
                </div>
            </section>
        </div>
    )
}