import React from "react"
import './HeaderLogo.css'
import { Link } from "react-router-dom"
import mini__logo from '../../../assets/icons/mini__logo.svg'
export default function HeaderLogo() {
    return (
        <div>
            <Link to={'/'}>
                <img className="headerLogo w-[128px] h-[37px] active:opacity-50 duration-200" src={mini__logo} alt="mini__logo" />
            </Link>
        </div>
    )
}