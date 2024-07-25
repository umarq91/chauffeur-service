import React from 'react'
import HeroPage from './Hero'
import WhatWeOffer from './WhatWeOffer'
import HowThisWorks from './HowThisWorks'

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
        <HeroPage/>
        <div className='flex flex-col gap-8'>
    <HowThisWorks/>
    <hr className='my-3'/>
        <WhatWeOffer/>
        </div>
    </div>
  )
}

export default LandingPage