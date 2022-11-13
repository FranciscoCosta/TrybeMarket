import React ,{useContext} from 'react'
import { Context } from "../../Context/Context";
import './DisplayItems.css'

function DisplayItems() {
    const { productsList, isLoading } = useContext(Context);
  return (
    <div className='DisplayItems__container'>
        {!isLoading && productsList.map((item,index)=>(
            <div className='DiplayItems__item-container'>
                <img src={item.thumbnail} alt={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default DisplayItems