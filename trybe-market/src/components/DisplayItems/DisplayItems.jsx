import React ,{useContext} from 'react'
import { Context } from "../../Context/Context";
import './DisplayItems.css'
import { GoPackage } from "@react-icons/all-files/go/GoPackage";

function DisplayItems() { 
    const { productsList, isLoading } = useContext(Context);
  return (
    <div className='DisplayItems__container'>
        {!isLoading && productsList.map((item,index)=>(
            <div className='DiplayItems__item-container'>
              <h2 className='DisplayItems__item-title'>{item.title}</h2>
              <div className='DisplayItems__container-img'>
                <img src={item.thumbnail} alt={item.id}/>
              </div>
                <h4 className='DisplayItems__price'>{item.price} R$</h4>
                <p className='DisplayItems__Quantity-text'>Unidades disponíveis: <span className='DisplayItems__item-quantitys'>{item.available_quantity}</span>.</p>
                {item.shipping.free_shipping && (
                  <div className='DisplayItems__free-shiping'>
                    <GoPackage size={30}/>
                    <p>Frete Grátis</p>
                  </div>
                  )}
                {(item.original_price !== null && item.original_price !== item.price) && (
                  <p className='DisplayItems__Discount-text'>Desconto de :<span>{parseFloat(100-(item.price*100/item.original_price)).toFixed(2)}%</span></p>
                )}
                <button
                type='button'
                className='DisplayItems__add-cart-btn'
                >
                  Adicionar ao Carinho
                </button>
            </div>
        ))}
    </div>
  )
}

export default DisplayItems