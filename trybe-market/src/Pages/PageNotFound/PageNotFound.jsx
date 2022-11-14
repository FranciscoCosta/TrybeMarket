import React from 'react'
import NOTFOUND from '../../Assets/404.jpg'
import './PageNotFound.css'
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='PageNotFound'>
      <div className='PageNotFound__container'>
        <div className='PageNotFound__img-container'>
          <img src={NOTFOUND} alt='PageNotFound 404'/>
        </div>
        <button
        type='button'
        className='PageNotFound__home-btn'
        onClick={()=> navigate("/home")}
        >
          Home
        </button>
      </div>
    </div>
  )
}

export default PageNotFound;