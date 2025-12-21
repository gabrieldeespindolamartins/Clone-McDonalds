import React from 'react'
import { SwiperSlide } from 'swiper/react'

const CardComponent = ({src , text}) => {
  return (
    <a className='inline-block hover:scale-110 transition-transform ease-out'>
        <div className='flex flex-col items-center w-26 p-2    max-w-26'>
          <img src={src} className='my-2 h-auto w-10.5 '/>
          <p className='text-[0.85rem] text-center min-h-8'>{text}</p>
        </div>
    </a>
   
  )
}

export default CardComponent
