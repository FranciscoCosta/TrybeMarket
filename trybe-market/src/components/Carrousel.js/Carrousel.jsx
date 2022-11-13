import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";
import "./Carrousel.css";

function Carrousel() {
  const { handleStart, productsList, isLoading } = useContext(Context);
  useEffect(() => {
    handleStart();
    if (!isLoading) {
      const value = productsList.filter(
        (product) =>
          product.original_price !== null &&
          product.original_price !== product.price
      );
      console.log(value, "aqui");
    }
  }, [isLoading]);

  return (
    <div className="Carrousel">
      {!isLoading && (
        <div className="Carrousel__container">
          {productsList
            .filter(
              (product) =>
                product.original_price !== null &&
                product.original_price > product.price
            )
            .map((item) => (
              <div className="Carrousel__container-item">
                <div className="Carrousel__item-up">
                  <h1 className="Carrousel__item-title">{item.title}</h1>
                </div>
                <div className="Carrousel__item-down">
                  <img
                    className="Carrousel__item-img"
                    src={item.thumbnail}
                    alt={item.id}
                  />
                  <div className="Carrousel__prices">

                    <h4 className="item__price-title">De : <span className="price__old">{item.original_price}R$</span> </h4>
                    <h4 className="item__price-title">Por : <span className="price__actual">{item.price}R$</span> </h4>

                    <h4 className="item__price-title">Economia de :</h4>
                    <span className="price__actual discount">{parseFloat(100-(item.price*100/item.original_price)).toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Carrousel;
