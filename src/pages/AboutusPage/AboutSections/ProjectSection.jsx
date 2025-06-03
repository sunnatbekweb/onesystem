import React from "react";
import './ProjectSection.css';
export default function ProjectSection() {
    const data = [
        {
            text: 'Our team consists of experienced professionals who have worked in the cryptocurrency market for years. With expertise in blockchain, trading, security, and fintech, we stay ahead of industry trends to deliver top-tier solutions.'
        },
        {
            text: 'We are driven by innovation and integrity, believing in the power of blockchain to transform the future. Constantly adapting to market changes, we provide secure, transparent, and efficient strategies for our clients.'
        },
        {
            text: 'Collaboration is key to our success. By combining diverse skills and a shared passion for crypto, we create solutions that make digital assets more accessible and secure.'
        },
    ];
    return (
        <section className="project bg-[#2F2F34] pt-[127px] pb-[121px] xl:pt-0 xl:pb-[137px] overflow-x-hidden">
            <div className="container project__container w-full flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
                <hr className="project__hr hidden border-none outline-none w-full h-[2px] bg-[#ffffff] opacity-10 xl:mt-[156px] xl:block" />
                <h2 className="project__title w-full text-start font-black text-[56px] leading-[48px] tracking-tighter-[-2%] text-white uppercase mb-[127px] lg:w-[992px] xl:pt-[56px] xl:text-[120px] xl:leading-[100px]">
                    Our team is turning your project into a reality
                </h2>
                <div className="project__bottom-box flex flex-col justify-center items-center gap-6 md:gap-8">
                    {data.map((item, index) => (
                        <div className="project__bottom-mini-box" key={index}>
                            <p className="project__bottom-box-texts w-full font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-white text-center xl:w-[371px] uppercase">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}