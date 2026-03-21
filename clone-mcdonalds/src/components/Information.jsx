import React from 'react'

const cards = [
    {
      src: 'marketing1.jpg',
      text: 'Peça para entregar ou retire seu pedido no restaurante que preferir'
    },
     {
      src: 'marketing2.jpg',
      text: 'Registre-se e aproveite os benefícios e descontos!'
    },
     {
      src: 'marketing3.jpg',
      text: 'A experiência Méqui 100% pensada para você!    '
    },
    
]

const Information = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-6 px-14 mb-16'>
      {cards.map((cards, index) => (
        <div key={index} className='max-w-100 h-115 py-10 px-6'>
            <img src={cards.src} className='h-full w-full object-contain'/>
            <h2 className='justify-end font-extrabold text-[20px] text-[#292929] w-[90%]'>
              {cards.text}
            </h2>
        </div>
      ))}
    </div>
   
  )
}

export default Information
