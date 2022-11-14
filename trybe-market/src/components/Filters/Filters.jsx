import React from "react";
import {
  AiOutlineArrowDown,
} from "@react-icons/all-files/ai/AiOutlineArrowDown";
import {
    AiOutlineArrowUp,
  } from "@react-icons/all-files/ai/AiOutlineArrowUp";

import './Filters.css'


function Filters() {
  return (
    <div className="Filters__container">
      <div className="Filter__order-alphabetically">
        <h3>Ordem alfabética:</h3>
        <div className="filters__items">
          <label htmlFor="order-asc">
          <p>Ascedente</p>
            <AiOutlineArrowUp
              type="button"
              id="order-asc"
              name="order"
              value="ASC"
              // onChange={ handleSort }
            />
          </label>
          <label htmlFor="order-desc">
          <p>Descendente</p>
            <AiOutlineArrowDown
              type="button"
              id="order-desc"
              name="order"
              value="DESC"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
