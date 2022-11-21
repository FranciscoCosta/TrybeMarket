import React from 'react'
import AddReview from '../AddReview/AddReview';

function NoReviews(id ) {

  return (
    <div className='NoReviews'>
        {console.log(id)}
        <h1>Este produto ainda não tem avaliações</h1>
        <AddReview id={id}/>
    </div>
  )
}

export default NoReviews;