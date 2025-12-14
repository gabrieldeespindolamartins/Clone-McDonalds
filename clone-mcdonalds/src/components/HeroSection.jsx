import React from 'react'


const HeroSection = () => {
  return (
    <section className="bg-[url('background.png')] h-138 bg-cover bg-center  ">
      <div className='flex justify-between pt-11 p-17'>
        <div className='flex items-center'>
            <img src="aba-lateral.png" className='h-5'/>
            <img src="logo.png" className='h-8 ml-6'/>
        </div>
        <button className='bg-[#FFBC0D] border-[#C08B00] border rounded h-10 w-38.5 hover:bg-[#FFCA40]'>Entrar</button>
      </div>

      <div>
        <div>
            <h2>Cardapio</h2>
            <h2>Lançamentos</h2>
            <h2>McDia Feliz</h2>
        </div>

      </div>
      
    </section>
  )
}

export default HeroSection
