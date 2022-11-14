import React ,{useContext,useEffect,useState} from "react";
import {
  AiOutlineArrowDown,
} from "@react-icons/all-files/ai/AiOutlineArrowDown";
import {
    AiOutlineArrowUp,
  } from "@react-icons/all-files/ai/AiOutlineArrowUp";

import './Filters.css'
import { Context } from "../../Context/Context";


function Filters() {
    const [sortAlpha, setSortAlpha] = useState('');
    const [freeShipingFilter, setfreeShipingFilter] = useState(true);
    const { productsList,setproductsList , copyproductList} = useContext(Context);

      const handleSortAlpha = ({target}) => {
        if (target.id === "ASC") {
            const arraysort = productsList.sort((a, b) => a.title.localeCompare(b.title))
            setproductsList([...arraysort]);
          }
          if (target.id=== "DESC") {
            const arraysort = productsList.sort((a, b) => b.title.localeCompare(a.title))
              setproductsList([...arraysort]);
            }
      };

      const handleSortNum = ({target}) => {
        if (target.id === "ASC") {
            const arraysort = productsList.sort((a, b) => a.price - b.price);
            setproductsList([...arraysort]);
          }
          if (target.id=== "DESC") {
            const arraysort = productsList.sort((a, b) => b.price -a.price)
              setproductsList([...arraysort]);
            }
      };

      const handleFreeShiping =() => {
        console.log("aqui")
          if(freeShipingFilter){
            const filterShiping = productsList.filter((item)=> item.shipping.free_shipping )
            setproductsList(filterShiping)
            setfreeShipingFilter(!freeShipingFilter);
          }else{
            setproductsList(copyproductList)
              setfreeShipingFilter(!freeShipingFilter);
          }

      }
  return (
    <div className="Filters__container">
      <div className="Filter__order-alphabetically">
        <h3>Ordem alfabética:</h3>
        <div className="filters__items">
          <label htmlFor="order-asc">
            <AiOutlineArrowUp
            size={30}
              type="button"
              id="ASC"
              onClick={ handleSortAlpha }
            />
          </label>
          <label htmlFor="order-desc">
            <AiOutlineArrowDown
            size={30}
              type="button"
              id="DESC"
              onClick={handleSortAlpha}
            />
          </label>
        </div>
      </div>
      <div className="Filter__order-price">
        <h3>Ordem de preço:</h3>
        <div className="filters__items">
          <label htmlFor="order-asc">
            <AiOutlineArrowUp
            size={30}
              type="button"
              id="ASC"
              onClick={ handleSortNum }
            />
          </label>
          <label htmlFor="order-desc">
            <AiOutlineArrowDown
            size={30}
              type="button"
              id="DESC"
              onClick={handleSortNum}
            />
          </label>
        </div>
      </div>
      <div className="Filter__free-shiping">
        <h3>Frete Grátis :</h3>
        <input 
        type="checkbox"
        size={30}
        id="free-shiping"
        name="free-shiping"
        onClick={handleFreeShiping}
        ></input>
      </div>
    </div>
  );
}

export default Filters;
