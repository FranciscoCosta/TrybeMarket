import React from 'react'
import Carrousel from '../../components/Carrousel.js/Carrousel'
import DisplayItems from '../../components/DisplayItems/DisplayItems'
import Header from '../../components/Header/Header'
import './Homepage.css'

function Homepage() {
  return (
    <div>
      <Header/>
      <section className='Homepage__main'>
      <h1 className='Carrousel__promotions-title'>COMPRE AGORA PROMOÇÕES NO TRYBEMARKET 💛</h1>
      <Carrousel />
      <DisplayItems />
      </section>
    </div>
  )
}

export default Homepage