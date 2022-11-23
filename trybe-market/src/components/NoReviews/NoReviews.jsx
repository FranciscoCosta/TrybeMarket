import React from 'react'
import AddReview from '../AddReview/AddReview';
import './NoReviews.css'
function NoReviews(id ) {

  return (
    <div className='NoReviews'>
        {console.log(id)}
        <h1 className='NoReviews__title'>Este produto ainda não tem avaliações</h1>
        <AddReview id={id}/>
    </div>
  )
}

export default NoReviews;