import React from 'react'
import Carrousel from '../../components/Carrousel.js/Carrousel'
import DisplayItems from '../../components/DisplayItems/DisplayItems'
import Filters from '../../components/Filters/Filters'
import Header from '../../components/Header/Header'
import './Homepage.css'

function Homepage() {
  return (
    <div>
      <Header/>
      <section className='Homepage__main'>
      <h1 className='Carrousel__promotions-title'>COMPRE AGORA PROMOÇÕES NO TRYBEMARKET 💛</h1>
      <Carrousel />
      <h1 className='DisplayItems__title'>Produtos relacionados:</h1>
      <Filters/>
      <DisplayItems />
      </section>
    </div>
  )
}

export default Homepage