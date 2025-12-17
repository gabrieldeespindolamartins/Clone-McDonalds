import React from 'react'
import OrderOption from './OrderOption'


const HeroSection = () => {
  return (
    <section className="relative bg-[url('background.png')] h-138 bg-cover bg-center color text-white ">

      <div className='z-0 absolute inset-0 bg-linear-to-r from-[#1C1C1C]/90  to-transparent'></div>

      <div className='relative z-10 pt-11 p-17'>

          <div className='flex justify-between'>
            <div className='flex items-center justify-between h-12 w-26'>
              <div className='flex items-center justify-center h-12 w-12'>
                <img src="aba-lateral.png" className='h-5.5 w-7 cursor-pointer' tabIndex={0}/>
              </div>

              <div className='flex items-center justify-center h-12 w-12 '>
                <img src="logo.png" className='h-8 w-9 cursor-pointer'tabIndex={0}/>
              </div>
            </div>

            <button 
            className='bg-[#FFBC0D] border-[#C08B00] border rounded h-10 w-38.25  hover:bg-[#FFCA40] text-black text-[0.8rem] cursor-pointer'
            tabIndex={0}
            >
              Entrar
            </button>

          </div>

          <div className='flex p-12 pt-14 flex-col'>

            <div className='flex text-[1.1rem] font-medium gap-12.5'>
                <a tabIndex={0}>Cardapio</a>
                <a tabIndex={0}>Lançamentos</a>
                <a tabIndex={0}>McDia Feliz</a>
            </div>

            <div className='text-[2.6rem] font-extrabold pt-18'>
              <h1>Como você quer seu pedido hoje?</h1>
            </div>
 
            <div className='text-black flex font-extrabold text-[0.8rem] gap-2 pt-4'>

              <OrderOption icon='/peca-e-retire.svg' text={"Peça e Retire"}/>
              <OrderOption icon='/mcdelivery.svg' text={"McDelivery"}/>

            </div>

          </div>

        </div>

    </section>
  )
}

export default HeroSection
