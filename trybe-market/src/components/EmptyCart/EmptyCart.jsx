import React from 'react'
import './EmptyCart.css'
import { FaSadCry} from "@react-icons/all-files/fa/FaSadCry";

function EmptyCart() {
  return (
    <div className='EmptyCart'>
        <div className='EmptyCart__container'>
            <h1 className='EmptyCart__title'>Não possui itens no seu carrinho <FaSadCry size={50}/>.</h1>
        </div>

    </div>
  )
}

export default EmptyCart