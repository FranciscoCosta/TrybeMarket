import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import './Payment.css'

function Payment() {
  return (
    <div className='Payment'>
      <Header  central/>
      <PaymentCard />
      <Footer />
    </div>
  )
}

export default Payment;