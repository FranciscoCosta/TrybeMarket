import React,{useState,useEffect,useContext} from 'react'
import { Rating } from 'react-simple-star-rating';
import { Context } from '../../Context/Context';
import './AddReview.css'

function AddReview({id: {id}}) {
    const [addReview, setaddReview] = useState(true);
    const [rating, setRating] = useState(0);
    const [rateText, setRateText] = useState('');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const {update, setupdate} = useContext(Context);
    const handleRating=(n)=>{
        setRating(n)
    }
    useEffect(() => {
    }, [addReview])
    

    const handleRateText = ({ target }) => {
        console.log(isBtnDisabled)
        const MINIMAL_LENGTH = 3;
        const { value } = target;
        setRateText(value);
        if (value.length > MINIMAL_LENGTH && rating > 0) {
          setIsBtnDisabled(false);
        }
      };
    
    const handleStartReview=()=>{
        setaddReview(!addReview)
    }

    const sendReview=()=>{
      const Dataformat = new Date();
      const year = Dataformat.getFullYear();
      const month = Dataformat.getMonth();
      const day = Dataformat.getDate();

      const dataReview = `${day}/${month}/${year}`
        const itemReview = {
            id,
            rateText,
            rating,
            dataReview,
        };
        const oldLocal = JSON.parse(localStorage.getItem("ItemsReviews")) || []
        localStorage.setItem('ItemsReviews', JSON.stringify([...oldLocal, itemReview]));
        setaddReview(!addReview);
        setupdate(!update);
    }
  return (
    <div className='AddReview'>
        {console.log(addReview)}
        {addReview ?
        
        <button
        onClick={handleStartReview}
        className='AddReview-btn'>
            Adicionar Avaliação
        </button> :
            <div className='AddReview__container'>
                <Rating onClick={handleRating}/>
                <textarea
                    className="AddReview__textarea"
                    id="rateInputText"
                    type="text"
                    maxLength="200"
                    rows="5"
                    cols="25"
                    placeholder="Type your review"
                    style={ { resize: 'none' } }
                    onChange={ handleRateText }
                  />
                <button
                onClick={sendReview}
                disabled={ isBtnDisabled }
                className='AddReview__sumbit'>
                    Enviar
                </button>

                  
            </div>
            
            }
    </div>
  )
}

export default AddReview;