import React from 'react'
import Header from '../../components/Header/Header'
import CartItems from '../../components/CartItems/CartItems';

function ShoppingCart() {
  return (
    <div className='ShoppingCart'>
      <Header/>
      <CartItems/>
    </div>
  )
}

export default ShoppingCart;