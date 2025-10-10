import React from 'react'
import './ContactusPage.css'
import DiscussSection from './ContactusSections/DiscussSection'
import FormSection from './ContactusSections/FormSection'
export default function ContactusPage() {
    return (
        <div className="Contactus-page">
            <DiscussSection />
            <FormSection />
        </div>
    )
}