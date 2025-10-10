import React, { useEffect, useState } from 'react'
import './NotFoundSection.css'
import bitcoin__icon from '../assets/icons/bitcoin__icon.svg'
import ethereum__icon from "../assets/icons/ethereum__icon.svg"
import { Link } from 'react-router-dom'
export default function NotFoundSection() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [_isMobile, setIsMobile] = useState(window.innerHeight <= 1024);
    const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY)
    }
    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 1024)
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', checkScreenSize)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', checkScreenSize)
        }
    }, [])
    return (
        <div>
            <section className='notFound relative overflow-hidden'>
                <div className="container notFound__container min-h-screen flex flex-col justify-center items-center gap-[60px] px-[16px] md:px-[36px] md:gap-[70px] lg:gap-[140px] lg:px-[48px] xl:gap-[60px]">
                    <div className='notFound__top-box flex flex-row justify-center items-center gap-x-[15px] md:gap-[25px]'>
                        <img className="notFound__bottle-image blur-[3px] absolute object-contain w-[100px] h-[100px] right-2 top-2 md:w-[200px] md:h-[200px] md:right-5 md:top-5 rotate-30" style={{ transform: `translateX(${(mouseX - window.innerWidth / -2) * -0.02}px) translateY(${(mouseY - window.innerHeight / -2) * -0.02}px)`, transition: "transform 0.1s linear", }} src={bitcoin__icon} alt="bottle__image" />
                        <p className="notFound__number-text font-extrabold text-[120px] leading-[90px] md:text-[200px] md:leading-[150px] lg:text-[300px] lg:leading-[240px]">4</p>
                        <img className="notFound__middle-image object-contain w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px]" style={{ transform: `translateX(${(mouseX - window.innerWidth / 2) * 0.01}px) translateY(${(mouseY - window.innerHeight / 2) * 0.01}px)`, transition: "transform 0.1s linear", }} src={bitcoin__icon} alt="favicon__icon " />
                        <p className="notFound__number-text font-extrabold text-[120px] leading-[90px] md:text-[200px] md:leading-[150px] lg:text-[300px] lg:leading-[240px]">4</p>
                        <img className="notFound__bottle-image blur-[3px] absolute object-contain w-[90px] h-[90px] left-2 bottom-2 md:w-[140px] md:h-[140px] md:left-6 md:bottom-5 rotate-[-30deg]" style={{ transform: `translateX(${(mouseX - window.innerWidth / -2) * -0.02}px) translateY(${(mouseY - window.innerHeight / -2) * -0.02}px)`, transition: "transform 0.1s linear", }} src={ethereum__icon} alt="bottle__image" />
                    </div>
                    <div className="notFound__bottom-box flex flex-col justify-center items-center gap-[40px]">
                        <p className="notFound__bottom-text text-[24px] leading-[32px] text-white lg:text-[32px] lg:leading-[38px] font-black">Can't find the page?!</p>
                        <Link to='/'>
                            <button className="notFound__bottom-button">
                                Back to main
                                <span></span><span></span><span></span><span></span><span></span>
                                <i className="notFound__bottom-icon fa-solid fa-house fa-beat-fade fa-xs ml-2"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}