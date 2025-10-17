import React from "react";
import "./AboutusPage.css";
import IndustrySection from "./AboutusSections/IndustrySection";
import FeedbackSection from "./AboutusSections/FeedbackSection";
import FooterComponent from "../../ui/FooterComponent";
export default function AboutusPage() {
  return (
    <div className="Development-page">
      <IndustrySection />
      <FeedbackSection />
      <FooterComponent />
    </div>
  );
}
