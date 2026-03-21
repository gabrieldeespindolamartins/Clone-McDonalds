import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const cards = [
    {
    src: 'tastyturbo.png',
    alt: 'Tasty Turbo Bacon'
    },
    {
    src: 'baconranch.png',
    alt: 'Bacon Ranch'
    },
    {
    src: 'mccolosso.png',
    alt: 'McColosso OvoMaltine'
    }
]

const MarketingCards = () => {
  return (
    <div>
      <Swiper
        slidesPerView='3'
        spaceBetween={0}
      >
        {cards.map((card, index) =>(
            <SwiperSlide key={index} className='w-auto'>
                <img src={card.src} alt="card.alt" className='block aspect-auto' />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MarketingCards
