import React from 'react'
import './MarketingPage.css'
import StrategySection from './MarketingSections/StrategySection'
import FooterComponent from '../../ui/FooterComponent'
export default function MarketingPage() {
    return (
        <div className="Marketing-page">
            <StrategySection />
            <FooterComponent />
        </div>
    )
}