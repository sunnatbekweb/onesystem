import React from 'react'
import './HomePage.css'
import HeroSection from './HomeSection/HeroSection'
import SpecializeSection from './HomeSection/SpecializeSection'
import SliderSection from './HomeSection/SliderSection'
import SecondSliderSection from './HomeSection/SecondSliderSection'
import TeamSection from '../../ui/TeamSection'
import LinksSection from './HomeSection/LinksSection'
import FakeFooterSection from './HomeSection/FakeFooterSection'
import RoarSection from './HomeSection/RoarSection'
export default function HomePage() {
    return (
        <div className="Home-page">
            <HeroSection />
            <SpecializeSection />
            <SliderSection />
            <SecondSliderSection />
            <TeamSection />
            <LinksSection />
            <FakeFooterSection />
            <RoarSection />
        </div>
    )
}