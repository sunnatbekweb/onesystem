import React from "react"
import './TopWallpaper.css'
export default function TopWallpaper({ text }) {
    return (
        <div className="topWallpaper__box flex flex-row flex-wrap justify-center items-center text-center bg-[#EAEAEA]" >
            <h1 className="topWallpaper__title text-start w-full font-black text-[120px] leading-[88px] text-[#2F2F34] md:text-start lg:text-[280px] lg:text-center lg:leading-[205px]">{text}</h1>
        </div>
    )
}