import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/LOGO.png";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { Context } from "../../Context/Context";

function Header() {
  const { category, fetchCategory,handleCategory,handleSearch } = useContext(Context);
  const [serachBar, setserachBar] = useState(false);
  const [searchValue, setsearchValue] = useState('');

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSearchValue = (event) =>{
    const { value } = event.target;
    setsearchValue(value)
  }
  const handlesearchBar = () => {
    setserachBar(!serachBar);
    console.log(category);
  };
  const handlesearchCall = () =>{
    handleSearch(searchValue)
  }

  return (
    <div className="Header">
      <div className="Header__container-logo">
        <img src={logo} alt="TrybeMarket logo" />
      </div>
      <div className="Header__central">
        <div className="Header__category-dropdown">
          <button className="Header__category-btn">Categorias</button>
          <div className="Header__category-list">
            {category.map((cat) => (
              <button
              onClick={()=>handleCategory(cat.id)}
              key={`category-${cat.id}`}>{cat.name}</button>
            ))}
          </div>
        </div>

        <div
          style={{
            border: !serachBar ? "none" : "4px solid #0033a0",
            background: !serachBar ? "none" : "rgba(255, 255, 255, 0.4)",
          }}
          className="Header__search"
        >
          <AiOutlineSearch
            size={45}
            onClick={handlesearchBar}
            style={{
              border: serachBar ? "none" : "2px solid #0033a0",
              background: serachBar ? "none" : "rgba(255, 255, 255, 0.4)",
            }}
          />
          {serachBar && (
            <>
            <input
              type="search"
              className="Header__input-search"
              name="search"
              onChange={handleSearchValue}
              />
              <AiOutlineSearch 
              className="Header__input-search-btn"
              size={40}
              style= {{border: "none", background: "none"}}
              onClick={handlesearchCall}
              />
            </>
          )}
        </div>
      </div>
      <div className="Header__account">
        <AiOutlineShoppingCart size={30} />
      </div>
    </div>
  );
}
export default Header;