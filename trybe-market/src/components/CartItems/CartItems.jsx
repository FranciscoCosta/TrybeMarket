import React, { useEffect, useState } from "react";
import "./CartItems.css";

function CartItems() {
  const [cartItemsAdded, setcartItemsAdded] = useState([]);
  useEffect(() => {
    handleCartItems();
  }, []);

  const handleCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setcartItemsAdded(cart);
  };
  const handleRemoveItem=(event)=>{
    console.log(event)
  }

  return (
    <div className="CartItems">
      {cartItemsAdded.length > 0 && (
        <div className="CartItems__container">
          <div className="CartItems__right">
            <h4 className="CartItems__total">Total :</h4>
            <button type="button" className="CartItems__finish-btn">
              Finalizar compra
            </button>
          </div>
          <div className="CartItems__left">
            {cartItemsAdded.map((item) => (
              <div className="CartItem__item-card" key={item.id}>
                <div className="ProductDetails__quantity ">
                <button type="button"
                value={item.id}
                onClick={handleRemoveItem}
                className="CartItems__remove-btn">
                  X
                </button>
                </div>
                <div className="CartItems__img">
                  <img src={item.thumbnail} alt={item.tile} />
                </div>
                <h4 className="CartItems__title">{item.title}</h4>

                <div className="ProductDetails__quantity">
                  <button type="button">-</button>
                </div>
                <input
                  min="1"
                  className="ProductDetails__quantity-input"
                  type="number"
                ></input>
                <div className="ProductDetails__quantity">
                  <button type="button">+</button>
                </div>
                <h4 className="CartItems__price">Preço: </h4>
                <h4 className="CartItems__unities">Unidades:</h4>
                <h4 className="CartItems__price-total">Total: </h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItems;
