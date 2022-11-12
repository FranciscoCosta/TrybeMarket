import React, { useState, useEffect, useContext } from "react";
import "./Carrousel.css";
import { Context } from "../../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Carrousel.css";

function Carrousel() {
  const { handleStart, productsList, isLoading } = useContext(Context);
  useEffect(() => {
    handleStart();
    if (!isLoading) {
      console.log(productsList, "aqui");
    }
  }, [isLoading]);

  return (
    <div>
      {!isLoading && (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {productsList.map((item) => (
              <SwiperSlide className="test">
                <div className="Carrousel__container-item">
                <h1 className="Carrousel__item-title">{item.title}</h1>
                <img
                  className="Carrousel__item-img"
                  src={item.thumbnail}
                  alt={item.id}
                  />
              </div>
                  </SwiperSlide>
          ))}
          {/* {productsList.map((item)=>(
            console.log(item)
        ))} */}
        </Swiper>
      )}
    </div>
  );
}

export default Carrousel;
