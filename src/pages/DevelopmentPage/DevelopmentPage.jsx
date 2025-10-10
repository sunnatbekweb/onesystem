import React from 'react'
import './DevelopmentPage.css'
import IndustrySection from './DevelopmentSections/IndustrySection'
import FooterComponent from '../../ui/FooterComponent'
export default function DevelopmentPage() {
    return (
        <div className="Development-page">
            <IndustrySection />
            <FooterComponent />
        </div>
    )
}