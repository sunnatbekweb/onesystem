import React from "react";
import "./ServicesPage.css";
import CryptoSection from "./ServicesSections/CryptoSection";
import ServicesSection from "./ServicesSections/ServicesSection";
import ProjectSection from "./ServicesSections/ProjectSection";
import PartnersSection from "./ServicesSections/PartnersSection";
export default function ServicesPage() {
  return (
    <div className="Services-page">
      <CryptoSection />
      <ServicesSection />
      <ProjectSection />
      <PartnersSection />
    </div>
  );
}
