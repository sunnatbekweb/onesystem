import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import './PartnersSection.css';
import solana__icon from '../../../assets/icons/solana__icon.svg';
import bynance__icon from '../../../assets/icons/bynance__icon.svg';
import polkadot__icon from '../../../assets/icons/polkadot__icon.svg';
import uniswap__icon from '../../../assets/icons/uniswap__icon.svg';
export default function PartnersSection() {
    useEffect(() => {
        AOS.init({
            duration: 350,
            once: false,
        })
    }, []);
    const names = [
        { icons: solana__icon, name: 'Solana' },
        { icons: bynance__icon, name: 'Bynance' },
        { icons: polkadot__icon, name: 'Polkadot' },
        { icons: uniswap__icon, name: 'Uniswap' },
    ];
    return (
        <section className="partners pt-[90px] pb-[90px] bg-[#EAEAEA] xl:pt-[54px] overflow-hidden z-50 overflow-x-hidden">
            <div className="container partners__container flex flex-col justify-center items-start gap-[53px] px-[16px] md:px-[36px] lg:px-[48px] xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[80px]">
                <div className="partners__top-box w-full flex flex-col justify-center items-start">
                    <h5
                        className="partners__title uppercase font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#8D8D8F] opacity-85"
                        data-aos="fade-right">
                        Partners
                    </h5>
                    <hr className="partners__hr border-none outline-none w-full h-[2px] bg-[#2F2F34] opacity-10 mt-[24px] mb-[53px] xl:mb-[160px]" />
                    <h2
                        className="partners__text font-black text-[56px] leading-[48px] tracking-tighter-[-2%] text-[#8D8D8F] uppercase xl:text-[120px] xl:leading-[100px] xl:w-full 2xl:w-[1313px]"
                        data-aos="fade-right">
                        Who recommends us due to our excellent collaboration
                    </h2>
                </div>
                <div
                    className="partners__bottom-box flex flex-col justify-center items-start gap-6 lg:gap-9"
                    data-aos="fade-left">
                    {names.map((item, index) => (
                        <div
                            className="partners__bottom-mini-box flex flex-row justify-start items-center gap-6 lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-[60px]"
                            key={index} >
                            <img
                                className="partners__bottom-box-icons object-contain w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]"
                                src={item.icons}
                                alt={item.name} />
                            <p className="partners__bottom-box-text font-black text-[32px] leading-[28px] tracking-tighter-[-2%] text-[#8D8D8F] uppercase xl:text-[120px] xl:leading-[100px]">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}