import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { GoPackage } from "@react-icons/all-files/go/GoPackage";
import "./ProductDetailsCard.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";

function ProductDetailsCard() {
  const params = useParams();
  const [inputQuantity, setinputQuantity] = useState(1);
  const {
    fetchItem,
    itemDetails,
    setisLoading,
    isLoading,
    cartItemQuantity,
    setcartItemQuantity,
    handleTotalCart,
  } = useContext(Context);

  useEffect(() => {
    fetchItem(params.id);
    setisLoading(false);
  }, [cartItemQuantity, setcartItemQuantity]);

  const handleIncrement = () => {
    if (!inputQuantity < itemDetails.available_quantity) {
      setinputQuantity(inputQuantity + 1);
    }
  };
  const handleDecrement = () => {
    if (inputQuantity > 1) {
      setinputQuantity(inputQuantity - 1);
    }
  };
  const handleAdditem = () => {
    const local = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (local.length > 0) {
      if (local.find((x) => x.id === itemDetails.id)) {
        const newStorage = local.map((item) => {
          if (itemDetails.id === item.id) {
            item.quantity = inputQuantity;
            return item;
          } else {
            return item;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(newStorage));
        handleTotalCart();
      } else {
        const newItem = itemDetails;
        newItem["quantity"] = inputQuantity;
        localStorage.setItem("cartItems", JSON.stringify([...local, newItem]));
        handleTotalCart();
      }
    } else {
      const newItem = itemDetails;
      newItem["quantity"] = inputQuantity;
      localStorage.setItem("cartItems", JSON.stringify([newItem]));
      handleTotalCart();
    }
  };

  return (
    <div className="ProductDetails">
      {itemDetails.length !== 0 ? (
        <div className="ProductDetails__container">
          <h1 className="ProductDetails__title">{itemDetails.title}</h1>
          <div className="ProductDetails__container-down">
            <div className="ProductDetails__container-left">
              <div className="ProductDetails__container-img">
                <img src={itemDetails.thumbnail} alt={itemDetails.title} />
              </div>
              {itemDetails.shipping.free_shipping && (
                <div className="DisplayItems__left-container">
                <div className="DisplayItems__free-shiping">
                  <GoPackage size={30} />
                  <p>Frete Grátis</p>
                  </div>
                  <div className="DisplayItems__share">
                  
                  <FacebookShareButton
                      url={window.location.href}
                      quote="Olha est produto aqui ...."
                      hashtag="#Recipes..."
                    >
                      <FacebookIcon size={40} round />
                    </FacebookShareButton>
                  <LinkedinShareButton
                      url={window.location.href}
                      quote="Olha est produto aqui ...."
                      hashtag="#Recipes..."
                    >
                      <LinkedinIcon size={40} round />
                    </LinkedinShareButton>
                    <WhatsappShareButton
                      url={window.location.href}
                      quote="Olha est produto aqui ...."
                      hashtag="#Recipes..."
                    >
                      <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                  </div>
                  </div>
              )}
            </div>
            <div className="ProductDetails__container-right">
              {itemDetails.original_price && (
                <p className="ProductDetails__original-price">
                  <span>R$ {itemDetails.original_price}</span>
                </p>
              )}

              <p className="ProductDetails__price">
                <span>R$ {itemDetails.price}</span>
              </p>
              {itemDetails.original_price && (
                <p className="ProductDetails__discount">
                  Desconto de:
                  <span>
                    {parseFloat(
                      100 -
                        (itemDetails.price * 100) / itemDetails.original_price
                    ).toFixed(2)}
                    %
                  </span>
                </p>
              )}
              <p className="ProductDetails__aviable-quantity">
                Quantidades Disponíveis:
                <span>{itemDetails.available_quantity}</span>
              </p>
              <p className="ProductDetails__waranty">
                <span>{itemDetails.warranty}</span>
              </p>
              {itemDetails.tags.length !== 0 &&
                itemDetails.tags
                  .filter((tag) => tag === "offer_off_the_day")
                  .map((t) => <p>{t}</p>)}
            </div>
          </div>
          <div className="ProductDetails__container-quantity">
            <div className="ProductDetails__quanity-values">
              <div className="ProductDetails__quantity">
                <button type="button" onClick={handleDecrement}>
                  -
                </button>
              </div>
              <input
                min="1"
                max={itemDetails.available_quantity}
                value={inputQuantity}
                className="ProductDetails__quantity-input"
                type="number"
              ></input>
              <div className="ProductDetails__quantity">
                <button type="button" onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
            <button
              className="ProductDetails__quantity-cart-btn"
              onClick={handleAdditem}
              type="button"
            >
              Adicionar ao carinho
            </button>
          </div>
        </div>
      ) : (
        <p> is loading</p>
      )}
    </div>
  );
}

export default ProductDetailsCard;
