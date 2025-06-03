import React from "react"
import './FooterCopy.css'
export default function FooterCopy() {
    return (
        <div className="footer__copy-box flex flex-col justify-center items-center gap-8 xl:gap-12">
            <p className="footer__copy-text text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase xl:text-[32px] xl:leading-[32px]">
                &copy; 2025 roar&trade;
            </p>
            <div className="footer__copy-logo-box flex flex-row justify-center items-center">
                <p className="footer__developing-text text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase">Developed by:&nbsp;&nbsp;</p>
                <a className="footer__copy-logo-link" href="https://www.onesystem.uz" target="_blank" rel="noopener noreferrer">
                    <p className="footer__copy-logo-text text-center font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-[#2f2f34] uppercase active:text-white duration-200 xl:hover:text-white xl:duration-300">
                        OneSystem
                    </p>
                </a>
            </div>
        </div>
    )
}