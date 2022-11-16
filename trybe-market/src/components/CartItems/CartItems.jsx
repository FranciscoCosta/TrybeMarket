import React, { useEffect, useState,useContext } from "react";
import "./CartItems.css";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
function CartItems() {
  const [cartItemsAdded, setcartItemsAdded] = useState([]);
  const {handleTotalCart} = useContext(Context);
  const [totalValue, settotalValue] = useState(0)
  useEffect(() => {
    handleCartItems();
    handleTotalValue();
  }, [handleTotalCart]);

  const handleCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setcartItemsAdded(cart);
    
  };
  const handleRemoveItem=({target : {value}})=>{
    const local = JSON.parse(localStorage.getItem("cartItems"));
    const result = local.filter((item)=> item.id !== value)
    console.log(result)
    localStorage.setItem('cartItems', JSON.stringify(result));
    handleTotalCart();
  } 



 const handleTotalValue = () => {
  if(cartItemsAdded.length !== 0){
  const priceTotal =  cartItemsAdded.map((item)=>item.price * item.quantity).reduce((acc,curr)=>acc+curr)
  settotalValue(parseFloat(priceTotal).toFixed(2))
  }
 }

 const handleIncrement=({target : {value}})=>{
  const updateItemQuantity = cartItemsAdded.map((item)=>{
    if(item.id === value && item.quantity <item.available_quantity){
      item['quantity'] += 1
      return item
    }else{
      return item
    }
  })
  setcartItemsAdded(updateItemQuantity);
  localStorage.setItem('cartItems', JSON.stringify(updateItemQuantity));
  handleTotalValue();
  handleTotalCart();
}

const handleDecrement=({target : {value}})=>{
  const updateItemQuantity = cartItemsAdded.map((item)=>{
    if(item.id === value && item.quantity >1){
      item['quantity'] -= 1
      return item
    }else{
      return item
    }
  })
  setcartItemsAdded(updateItemQuantity);
  localStorage.setItem('cartItems', JSON.stringify(updateItemQuantity));
  handleTotalValue();
  handleTotalCart();
}

  const handleRemoveAll=()=>{
    localStorage.setItem('cartItems', JSON.stringify([]));
    handleTotalValue();
    handleTotalCart();
  }

  return (
    <div className="CartItems">
      {cartItemsAdded.length > 0 ? (
        <div className="CartItems__container">
          <div className="CartItems__right">
            <button
            className="CartItems__removeAllbtn CartItems-btn"
            onClick={handleRemoveAll}
            >
              Limpar Carrinho
            </button>
            <h4 className="CartItems__total">Total : R$ {totalValue}</h4>
            <Link to={"/payment"}>
            <button type="button" className="CartItems__finish-btn CartItems-btn">
              Finalizar compra
            </button>

            </Link>
          </div>
          <div className="CartItems__left">
            {cartItemsAdded.map((item) => (
              <div className="CartItem__item-card" key={item.id}>
                <div className="ProductDetails__quantity remove-btn">
                <button type="button"
                value={item.id}
                onClick={handleRemoveItem}
                className="CartItems__remove-btn">
                  X
                </button>
                </div>
                <div className="CartItems__img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <h4 className="CartItems__title">{item.title}</h4>
                <div className="CartItems__buttons">

                
                <div className="ProductDetails__quantity">
                  <button
                  onClick={handleDecrement}
                  value={item.id}
                  type="button">-</button>
                </div>
                <input
                  min="1"
                  className="ProductDetails__quantity-input"
                  type="number"
                  value={item.quantity}
                ></input>
                <div className="ProductDetails__quantity">
                  <button
                  onClick={handleIncrement}
                  value={item.id}
                  type="button">+</button>
                </div>
                </div>
                <div className="CartItems__details">
                <h4 className="CartItems__info">Preço:<span> R${item.price}</span></h4>
                <h4 className="CartItems__info">Unidades: <span>{item.quantity}</span></h4>
                <h4 className="CartItems__info">Total: <span> R${parseFloat((item.price*item.quantity)).toFixed(2)}</span></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
      : <p>Não possui items no carrinho </p>}
    </div>
  );
}

export default CartItems;
