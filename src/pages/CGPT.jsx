import React from 'react'
import CGPTBackground from '../components/backgrounds/CGPTBackground'
import CGPTSection from '../components/sections/CGPTSection'

import ChatBox from '../components/ChatBox/ChatBox'

import RowFeatureCard from '../components/cards/RowFeatureCard'

const CGPT = () => {
    return (
        <CGPTBackground>
            <CGPTSection>
                <ChatBox />
                <div className='feature-container'>
                    <div className='feature-card-container'>
                        <RowFeatureCard title="22,000+ Datasets" description="Access a vast collection of diverse, high-quality datasets from various industries." direction='left' />
                    </div>
                </div>
            </CGPTSection>
        </CGPTBackground>
    )
}

export default CGPT