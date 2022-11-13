import React ,{useContext} from 'react'
import { Context } from "../../Context/Context";
import './DisplayItems.css'

function DisplayItems() {
    const { productsList, isLoading } = useContext(Context);
  return (
    <div className='DisplayItems__container'>
        {!isLoading && productsList.map((item,index)=>(
            <div className='DiplayItems__item-container'>
              <h2 className='DisplayItems__item-title'>{item.title}</h2>
                <img src={item.thumbnail} alt={item.id}/>
                <h4>Preço: {item.price}</h4>
                <p>Unidades disponíveis: {item.available_quantity}</p>
                {item.shipping.free_shipping && (
                <p>Frete Grátis</p>)}
                {(item.original_price !== null && item.original_price !== item.price) && (
                  <p>Desconto de :{parseFloat(100-(item.price*100/item.original_price)).toFixed(2)}%</p>
                )}
                <button>
                  Adicionar ao Carinho
                </button>
            </div>
        ))}
    </div>
  )
}

export default DisplayItems