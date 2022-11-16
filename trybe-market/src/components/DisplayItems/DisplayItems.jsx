import React, { useContext} from "react";
import { Context } from "../../Context/Context";
import "./DisplayItems.css";
import { GoPackage } from "@react-icons/all-files/go/GoPackage";
import { useNavigate } from "react-router-dom";

function DisplayItems() {
  const { productsList, isLoading,handleTotalCart } = useContext(Context);
  const navigate = useNavigate();
  const handleAddCart = (item) => {
    const newItem = item
    newItem['quantity'] = 1;
    handleLocalStorage(newItem);
    handleTotalCart();
  }

  const handleLocalStorage=(value)=> {
    const oldCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    if(oldCart.length === 0){
      localStorage.setItem('cartItems', JSON.stringify([value]));
    }else{
      const filterValue = oldCart.filter((item)=>
      item.id !== value.id)
      localStorage.setItem('cartItems', JSON.stringify([...filterValue, value]));
    }
  }
  return (
    <div className="DisplayItems__container">
      {!isLoading &&
        productsList.map((item, index) => (
          <div className="DiplayItems__item-container">
            <h2
            onClick={()=> navigate(`/productDetails/${item.id}`)}
            className="DisplayItems__item-title">{item.title}</h2>
            <div 
            onClick={()=> navigate(`/productDetails/${item.id}`)}
            className="DisplayItems__container-img">
              <img src={item.thumbnail} alt={item.id} />
            </div>
            {(item.original_price) && <h3
            className="DisplayItems__old-price"
            >R$ {item.original_price}</h3>}
            <h4 className="DisplayItems__price">R$ {item.price}</h4>
            <p className="DisplayItems__Quantity-text">
              Unidades disponíveis:{" "}
              <span className="DisplayItems__item-quantitys">
                {item.available_quantity}
              </span>
              .
            </p>
            {item.shipping.free_shipping && (
              <div className="DisplayItems__free-shiping">
                <GoPackage size={30} />
                <p>Frete Grátis</p>
              </div>
            )}
            {item.original_price !== null &&
              item.original_price !== item.price && (
                <p className="DisplayItems__Discount-text">
                  Desconto de :
                  <span>
                    {parseFloat(
                      100 - (item.price * 100) / item.original_price
                    ).toFixed(2)}
                    %
                  </span>
                </p>
              )}
            <button
              type="button"
              className="DisplayItems__add-cart-btn"
              onClick={() => handleAddCart(item)}
            >
              Adicionar ao Carinho
            </button>
          </div>
        ))}
    </div>
  );
}

export default DisplayItems;
