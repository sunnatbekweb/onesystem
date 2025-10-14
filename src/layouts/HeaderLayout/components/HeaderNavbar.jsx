import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './HeaderNavbar.css'
export default function HeaderNavbar() {
    const links = [
        {
            path: "aboutus",
            text: 'Biz haqimizda',
        },
        {
            path: "development",
            text: 'Development',
        },
        {
            path: "projects",
            text: 'Loyihalarimiz',
        },
        {
            path: "contactus",
            text: 'Bog\'lanish',
        },
    ]
    const location = useLocation();
    const activeIndex = links.findIndex(
        (link) => link.path === location.pathname
    )
    return (
        <div>
            <nav className="headerNavbar__nav w-full lg:hidden">
                <ul className="headerNavbar__list flex flex-col justify-center items-start gap-2.5">
                    {links.map((link, index) => (
                        <li className="headerNavbar__lists" key={index} >
                            <NavLink className={`headerNavbar__links ${activeIndex === index ? 'active' : 'text-[#2f2f34] opacity-50'}`} to={link.path}>
                                <p className='headerNavbar__links-text text-start font-bold text-lg'>
                                    {link.text}
                                </p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className='headerNavbar__nav hidden lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-x-[56px]'>
                <ul className='headerNavbar__list lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-y-[12px]'>
                    <li className='headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center'>
                        <NavLink className={`headerNavbar__links ${location.pathname === "/aboutus" ? 'active' : 'text-[#2f2f34] opacity-50'}`} to={'/aboutus'}>
                            <p className='headerNavbar__links-text lg:font-bold lg:text-lg'>Biz haqimizda</p>
                        </NavLink>

                    </li>
                    <li className='headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center'>
                        <NavLink className={`headerNavbar__links ${location.pathname === "/development" ? 'active' : 'text-[#2f2f34] opacity-50'}`} to={'/development'}>
                            <p className='headerNavbar__links-text lg:font-bold lg:text-lg'>Development</p>
                        </NavLink>
                    </li>
                </ul>
                <ul className='headerNavbar__list lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-y-[12px]'>
                    <li className='headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center'>
                        <NavLink className={`headerNavbar__links ${location.pathname === "/projects" ? 'active' : 'text-[#2f2f34] opacity-50'}`} to={'/projects'}>
                            <p className='headerNavbar__links-text lg:font-bold lg:text-lg'>Loyihalarimiz</p>
                        </NavLink>

                    </li>
                    <li className='headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center'>
                        <NavLink className={`headerNavbar__links ${location.pathname === "/contactus" ? 'active' : 'text-[#2f2f34] opacity-50'}`} to={'/contactus'}>
                            <p className='headerNavbar__links-text lg:font-bold lg:text-lg'>Bog'lanish</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}