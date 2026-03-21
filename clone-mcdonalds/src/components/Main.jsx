import React from 'react'
import Carrosel from './Carrosel.jsx'
import BrandHighlight from './BrandHighlight.jsx'
import MarketingCards from './MarketingCards.jsx'
import Information from './Information.jsx'
import AppImage from './AppImage.jsx'
import Faq from './Faq.jsx'

export default function Main() {
  return (
    <main>
      <Carrosel/>
      <BrandHighlight/>
      <MarketingCards/>
      <Information/>
      <AppImage/>
      <Faq/>
    </main>
  )
}
