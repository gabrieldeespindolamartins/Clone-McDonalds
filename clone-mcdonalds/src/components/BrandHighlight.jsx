import React from 'react'

const BrandHighlight = () => {
  return (
    <section className='lg:flex-row-reverse lg:max-h-123 flex flex-col w-full mt-20'>
        <figure className='lg:w-[39%]'>
            <img src="bigmc.jpg" className='h-full w-full object-cover'/>
        </figure>
      <aside className='flex flex-col p-8 lg:w-[61%] lg:px-26 lg:py-14'>
        <h2 className='text-[32px] font-extrabold leading-9 lg:text-[40px] lg:leading-13.5 py-4'>McDonalds's Brasil</h2>
      </aside>
    </section>
  )
}

export default BrandHighlight
