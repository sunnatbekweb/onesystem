import React from 'react'
import './AboutusPage.css'
import CryptoSection from './AboutSections/CryptoSection'
import ServicesSection from './AboutSections/ServicesSection'
import TeamSection from '../../ui/TeamSection'
import ProjectSection from './AboutSections/ProjectSection'
import PartnersSection from './AboutSections/PartnersSection'
export default function AboutusPage() {
    return (
        <div className="Aboutus-page">
            <CryptoSection />
            <ServicesSection />
            <TeamSection />
            <ProjectSection />
            <PartnersSection />
        </div>
    )
}