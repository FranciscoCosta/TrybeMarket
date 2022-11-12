import React from 'react'
import Carrousel from '../../components/Carrousel.js/Carrousel'
import Header from '../../components/Header/Header'
import './Homepage.css'

function Homepage() {
  return (
    <div>
      <Header/>
      <section className='Homepage__main'>
      <Carrousel />

      </section>
    </div>
  )
}

export default Homepage