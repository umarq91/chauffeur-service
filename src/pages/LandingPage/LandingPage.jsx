import React from 'react'
import HeroPage from './Hero'
import WhatWeOffer from './WhatWeOffer'
import HowThisWorks from './HowThisWorks'

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
        <HeroPage/>
        <div className=''>
    <HowThisWorks/>
        <WhatWeOffer/>
        </div>
    </div>
  )
}

export default LandingPage