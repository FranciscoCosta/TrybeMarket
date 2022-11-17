import React from 'react'
import Header from '../../components/Header/Header'
import CartItems from '../../components/CartItems/CartItems';
import Footer from '../../components/Footer/Footer';
import './ShoppingCart.css'

function ShoppingCart() {
  return (
    <div className='ShoppingCart'>
      <Header/>
      <CartItems/>
      <Footer />
    </div>
  )
}

export default ShoppingCart;