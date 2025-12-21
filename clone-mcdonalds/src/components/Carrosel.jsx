import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import CardComponent from './CardComponent'

const cards = [
  {
    src: '/lancamentos.png',
    text: 'Lançamentos'
  },
  {
    src: '/brabos-mequi.png',
    text: 'Novos Brabos do Méqui'
  },
  {
    src: '/carne-bovina.png',
    text: 'Sanduíches de Carne Bovina'
  },
  {
    src: '/tasty.png',
    text: 'Família Tasty'
  },
  {
    src: '/frango.png',
    text: 'Sanduíches de Frango'
  },
  {
    src: '/mq-1000.png',
    text: 'Méqui 1000'
  },
  {
    src: '/acompanhamentos.png',
    text: 'Acompanhamentos'
  },
  {
    src: '/sobremesas.png',
    text: 'Sobremesas'
  },
  {
    src: '/bebidas-frias.png',
    text: 'Bebidas Frias'
  },
  {
    src: '/cafe.png',
    text: 'Café da Manhã'
  },
  {
    src: '/bebidas-quentes.png',
    text: 'Bebidas Quentes'
  },
  {
    src: '/box.png',
    text: 'Méqui Box'
  },
  {
    src: '/mc-cafe.png',
    text: 'McCafé'
  },
  {
    src: '/mc-oferta.png',
    text: 'McOferta'
  },
  {
    src: '/mc-feliz.png',
    text: 'McLanche Feliz'
  },
]

const Carrosel = () => {
  return (
    <div className='mx-auto my-4 w-full md:w-[85%]'>
      <Swiper 
        slidesPerView="auto"
        spaceBetween={16}
      >
        {cards.map((card, index) =>(
          <SwiperSlide key={index} className='max-w-26'>
            <CardComponent  src={card.src} text={card.text}/>
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  )
}

export default Carrosel
