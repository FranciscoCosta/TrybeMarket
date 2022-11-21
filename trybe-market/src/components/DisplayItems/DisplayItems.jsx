import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import "./DisplayItems.css";
import { GoPackage } from "@react-icons/all-files/go/GoPackage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import Loading from "../Loading/Loading";

function DisplayItems() {
  const { productsList, isLoading, handleTotalCart } = useContext(Context);
  const [localfav, setlocalfav] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handlFavStart();
  }, []);
  const handleAddCart = (item) => {
    const newItem = item;
    newItem["quantity"] = 1;
    handleLocalStorage(newItem);
    handleTotalCart();
  };

  const handlFavStart=()=>{
    const oldFav = JSON.parse(localStorage.getItem("Favorites")) || [];
    setlocalfav(oldFav);
  }

  const handleLocalStorage = (value) => {
    const oldCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (oldCart.length === 0) {
      localStorage.setItem("cartItems", JSON.stringify([value]));
    } else {
      const filterValue = oldCart.filter((item) => item.id !== value.id);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...filterValue, value])
      );
    }
  };

  const handleFavorite = (id, title, price, img) => {
    const oldFav = JSON.parse(localStorage.getItem("Favorites")) || [];
    const fav = {
      id,
      title,
      price,
      img,
    };
    const newArray = [...oldFav,fav];
    console.log(newArray,"Novo array")
    localStorage.setItem("Favorites",JSON.stringify(newArray));
    setlocalfav(newArray);
    console.log(localfav)
  };

  const removeFavorite = (id) => {
    const oldFav = JSON.parse(localStorage.getItem("Favorites")) || [];
    const newFav = oldFav.filter((fav) => fav.id !== id);
    localStorage.setItem("Favorites", JSON.stringify(newFav));
    setlocalfav(newFav);
  };
  return (
    <div className="DisplayItems__container">
      {!isLoading && productsList.length > 0 ?
        productsList.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            whileHover={{ translateY: "-10px" }}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.25 }}
            className="DiplayItems__item-container"
            >
            {localfav.length === 0 ?             
            <div className="Displayitem__fav">
            <AiOutlineHeart
                  onClick={() =>
                    handleFavorite(
                      item.id,
                      item.title,
                      item.price,
                      item.thumbnail
                    )
                  }
                  size={40}
                />
                </div> :
            localfav.find((fav) => item.id === fav.id) ? (
              <div className="Displayitem__fav-true">
                <AiFillHeart
                  onClick={() =>
                    removeFavorite(item.id)
                  }
                  size={40}
                />
              </div>
            ) : (
              <div className="Displayitem__fav">
                <AiOutlineHeart
                  onClick={() => handleFavorite(
                    item.id,
                    item.title,
                    item.price,
                    item.thumbnail
                  )}
                  size={40}
                />
              </div>
            )}

            <h2
              onClick={() => navigate(`/productDetails/${item.id}`)}
              className="DisplayItems__item-title"
            >
              {item.title}
            </h2>
            <div
              onClick={() => navigate(`/productDetails/${item.id}`)}
              className="DisplayItems__container-img"
            >
              <img src={item.thumbnail} alt={item.id} />
            </div>
            {item.original_price && (
              <h3 className="DisplayItems__old-price">
                R$ {item.original_price}
              </h3>
            )}
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
          </motion.div>
        )):
        <Loading/>
        }
    </div>
  );
}

export default DisplayItems;
