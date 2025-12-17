import React from 'react'

const OrderOption = ({ icon, text }) => (
    <div className='bg-white flex p-2.5 px-4.5  rounded-lg gap-2 cursor-pointer items-center hover:scale-105' tabIndex={0}>
        <img src={icon} className='h-5 w-5'/>
        <p>{text}</p>
    </div>
)


export default OrderOption
