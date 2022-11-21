import React,{useState,useEffect,useContext} from 'react'
import AddReview from '../AddReview/AddReview';
import { Rating } from 'react-simple-star-rating';
import './DisplayReviews.css'
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";
import { Context } from '../../Context/Context';


function DisplayReviews(id,test) {

  const [showReviews, setshowReviews] = useState(false);
  const [itemsReviews, setitemsReviews] = useState([]);
  const {update, setupdate} = useContext(Context);
useEffect(() => {
  getLocalReviews();

}, [update])

const handleShowReview=()=>{
  setshowReviews(!showReviews)
}

const getLocalReviews=()=>{
  const localReview =  JSON.parse(localStorage.getItem("ItemsReviews")) || [];
  const reviewItem = localReview.filter((item)=>item.id === id.id)
  setitemsReviews(reviewItem);

}
  return (
    <div className='DisplayReviews'>
      {!showReviews ?
      <h1
      onClick={handleShowReview}
      className="DisplayRiviews-title"
      >
        Clique para ver as avaliações deste produto <AiOutlineArrowDown color='#0033a0'/></h1> 
          :
          <div className='DisplayReviews__container-all'>
          <h1
          onClick={handleShowReview}
          className="DisplayRiviews-title"
          >
            Clique esconder as avaliações deste produto <AiOutlineArrowUp color='#0033a0'/>
            </h1>
            {(itemsReviews.length>0) && <Rating readonly initialValue={Math.round(itemsReviews.map((item)=>item.rating).reduce((acc,curr)=>acc+curr)/itemsReviews.length)}/>}
            
            {itemsReviews.map((item)=>(
              <div className='DisplayReview__container'>
                <div className='DiplayReview-top'>
                <Rating readonly initialValue={item.rating}/>
                <p className='DisplayReview__date'>{item.dataReview}</p>

                </div>
                <p>{item.rateText}</p>
              </div>
            ))}
          </div>
          }

        <AddReview id={id}/>
    </div>
  ) 
}

export default DisplayReviews;