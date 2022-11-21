import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Loading from "../Loading/Loading";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Carrousel.css";
function Carrousel() {
  const { handleStart, isLoading, copyproductList } = useContext(Context);
  useEffect(() => {
    handleStart();
    if (!isLoading) {
      const value = copyproductList.filter(
        (product) =>
          product.original_price !== null &&
          product.original_price !== product.price
      );
    }
  }, [isLoading]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Carrousel" id="Carrousel">
      {!isLoading ? (
            <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            autoplay={{delay: 2000 }}
            spaceBetween={40} 
            slidesPerView={2}
            navigation
            scrollbar={{ draggable: true }}
          >
          {copyproductList.length > 0 ? copyproductList
            .filter(
              (product) =>
                product.original_price !== null &&
                product.original_price > product.price
            )
            .map((item) => (
              <SwiperSlide className="Carrousel__container-item" key={item.id}>
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
              </SwiperSlide>
            )): <div>
              <h3>Não temos produtos em promoção para a sua pesquisa.</h3>
              </div>}
        </Swiper>
      )
    : <Loading />}
    </div>
  );
}

export default Carrousel;
