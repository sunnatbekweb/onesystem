import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./HeaderNavbar.css";
export default function HeaderNavbar() {
  const links = [
    {
      path: "aboutus",
      text: "HAQIMIZDA",
    },
    {
      path: "services",
      text: "XIZMATLAR",
    },
    {
      path: "portfolio",
      text: "PORTFOLIO",
    },
    {
      path: "contactus",
      text: "CONTACT US",
    },
  ];
  const location = useLocation();
  const activeIndex = links.findIndex(
    (link) => link.path === location.pathname
  );
  return (
    <div>
      <nav className="headerNavbar__nav w-full lg:hidden">
        <ul className="headerNavbar__list flex flex-col justify-center items-start gap-2.5">
          {links.map((link, index) => (
            <li className="headerNavbar__lists" key={index}>
              <NavLink
                className={`headerNavbar__links ${
                  activeIndex === index ? "active" : "text-[#2f2f34] opacity-50"
                }`}
                to={link.path}
              >
                <p className="headerNavbar__links-text text-start font-bold text-[20px] leading-[20px]">
                  {link.text}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="headerNavbar__nav hidden lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-x-[56px] lg:w-[278px]">
        <ul className="headerNavbar__list lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-y-[12px]">
          <li className="headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center">
            <NavLink
              className={`headerNavbar__links ${
                location.pathname === "/aboutus"
                  ? "active"
                  : "text-[#2f2f34] opacity-50"
              }`}
              to={"/aboutus"}
            >
              <p className="headerNavbar__links-text lg:font-bold lg:text-[20px] lg:leading-[20px]">
                Haqimizda
              </p>
            </NavLink>
          </li>
          <li className="headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center">
            <NavLink
              className={`headerNavbar__links ${
                location.pathname === "/services"
                  ? "active"
                  : "text-[#2f2f34] opacity-50"
              }`}
              to={"/services"}
            >
              <p className="headerNavbar__links-text lg:font-bold lg:text-[20px] lg:leading-[20px]">
                Xizmatlar
              </p>
            </NavLink>
          </li>
        </ul>
        <ul className="headerNavbar__list lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-y-[12px]">
          <li className="headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center">
            <NavLink
              className={`headerNavbar__links ${
                location.pathname === "/portfolio"
                  ? "active"
                  : "text-[#2f2f34] opacity-50"
              }`}
              to={"/portfolio"}
            >
              <p className="headerNavbar__links-text lg:font-bold lg:text-[20px] lg:leading-[20px]">
                Portfolio
              </p>
            </NavLink>
          </li>
          <li className="headerNavbar__lists lg:flex lg:flex-col lg:justify-center lg:items-center">
            <NavLink
              className={`headerNavbar__links ${
                location.pathname === "/contactus"
                  ? "active"
                  : "text-[#2f2f34] opacity-50"
              }`}
              to={"/contactus"}
            >
              <p className="headerNavbar__links-text lg:font-bold lg:text-[20px] lg:leading-[20px]">
                Contact us
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
