import React from "react";
import "./FooterButton.css";
import { Link } from "react-router-dom";
export default function FooterButton() {
  return (
    <div className="footerButton mt-[78px]">
      <Link to="/contactus">
        <button className="footerButton__button">
          Bog'lanish
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Link>
    </div>
  );
}
