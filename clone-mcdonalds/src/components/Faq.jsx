import React from 'react'
const text = [
    {
        q: 'Quais meios de pagamento o Méqui aceita?',
        a: 'Você pode realizar sua compra com cartões de débito e crédito, Mastercard ou Visa.'
    },
    {
        q: 'Como posso cancelar o meu pedido?',
        a: 'Se ainda não foi preparado, você pode cancelar o seu pedido rapidamente desde o botão “Cancelar pedido” que está na tela de confirmação. Caso contrário, você deve entrar em contato com o CallCenter {teléfono}'
    },
    {
        q: 'Status do meu pedido',
        a: 'No Menú, Meus Pedidos, selecionando a opção Pedidos em Curso, você pode acompanhar em tempo real o estado do pedido, ou também clicar no link que está no e-mail de confirmação do pedido recebido.'
    },
    {
        q: 'O meu pedido não chegou como esperado',
        a: 'Sentimos muito por essa situação. Sugerimos que você entre em contato conosco, através do CallCenter {teléfono}'
    },
    {
        q: 'Meu cartão foi rejeitado',
        a: 'Se o seu cartão de débito foi rejeitado, verifique primeiro com o seu banco emissor se ele precisa ser habilitado para compras em eCommerce ou compras pela internet no seu home banking.'
    },
    {
        q: 'Confirmação da compra?',
        a: 'Você irá receber uma confirmação de compra por e-mail com os dados da transação, e poderá confirmar através de nosso App junto ao número do pedido. Caso não receba a confirmação entre em contato através do CallCenter {teléfono}'
    },
    
    
]
const Faq = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col justify-center items-center '>
        <h2 className='font-extrabold text-[40px] text-[#292929]'>
            Como podemos te ajudar?
        </h2>
        <div className='flex flex-row justify-between w-200 h-10 items-center'>
            <p className='p-8'>
                Quais meios de pagamento o Méqui aceita?
            </p>
            <img src="arrowDown.svg"/>
        </div>
      </div>
    </div>
  )
}

export default Faq
