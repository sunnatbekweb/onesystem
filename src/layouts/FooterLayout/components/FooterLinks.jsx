import React from "react"
import './FooterLinks.css'
export default function FooterLinks() {
    return (
        <div className="footerLinks w-full">
            <div className="footerLinks__box w-full flex flex-col justify-center items-center gap-[24px] xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
                <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
                    <p className="footerLinks__mini-boxes-texts text-center font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                        Write us
                    </p>
                    <a className="footerLinks__mini-boxes-email text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]" href="mailto:hello@roar.com">
                        hello@roar.com
                    </a>
                </div>
                <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
                    <p className="footerLinks__mini-boxes-texts text-center font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                        Then
                    </p>
                    <h3 className="footerLinks__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]">
                        We will schedule the meet
                    </h3>
                </div>
                <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
                    <p className="footerLinks__mini-boxes-texts text-center font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                        After
                    </p>
                    <h3 className="footerLinks__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]">
                        We will meet in the zoom
                    </h3>
                </div>
                <div className="footerLinks__mini-boxes flex flex-col justify-center items-center gap-[20px]">
                    <p className="footerLinks__mini-boxes-texts text-center font-bold text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34]">
                        Next
                    </p>
                    <h3 className="footerLinks__mini-boxes-titles text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2F2F34] uppercase w-[248px]">
                        You will receive a confir  mation email
                    </h3>
                </div>
            </div>
        </div>
    )
}