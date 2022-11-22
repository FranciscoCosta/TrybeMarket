import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/LOGO.png";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { GrLogout } from "@react-icons/all-files/gr/GrLogout";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


function Header({ central }) {
  const {
    category,
    fetchCategory,
    handleCategory,
    handleSearch,
    cartItemQuantity,
    handleTotalCart,
    setcartItemQuantity,
  } = useContext(Context);
  const [serachBar, setserachBar] = useState(false);
  const [searchValue, setsearchValue] = useState("");
  const [logIn, setlogIn] = useState(false);
  const [email, setemail] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategory();
    handleTotalCart();
    handleSession();
  }, [cartItemQuantity, setcartItemQuantity]);

  const handleSession = () => {
    const islogin = JSON.parse(localStorage.getItem("user")) || [];
    if (islogin !== []) {
      setlogIn(true);
      setemail(islogin.email)
    } else {
      setlogIn(false);
    }
  };
  const handleSearchValue = (event) => {
    const { value } = event.target;
    setsearchValue(value);
  };
  const handlesearchBar = () => {
    setserachBar(!serachBar);
    console.log(category);
  };
  const handlesearchCall = () => {
    handleSearch(searchValue);
  };


  const handleLogOut=()=>{
    localStorage.clear();
    const authU = getAuth();
              signOut(authU).then(() => {
                navigate("/")
              }).catch((error) => {
                console.log(error);
              });
              navigate("/")
            } 
  return (
    <div className="Header">
      {/* <div className="Header__mobile">
        <p>Aqui</p>
      </div> */}
      <div className="Header__container-logo">
        <Link to={"/home"}>
          {" "}
          <img src={logo} alt="TrybeMarket logo" />
        </Link>
      </div>
      {central && (
        <div className="Header__central">
          <div className="Header__category-dropdown">
            <button className="Header__category-btn">Categorias</button>
            <div className="Header__category-list">
              {category.map((cat) => (
                <button
                className="Header__category-btn-list"
                  onClick={() => handleCategory(cat.id)}
                  key={`category-${cat.id}`}
                >
                  {cat.name}
                </button>
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
            {!serachBar ? (
              <AiOutlineSearch
                size={45}
                onClick={handlesearchBar}
                style={{
                  border: serachBar ? "none" : "2px solid #0033a0",
                  background: serachBar ? "none" : "rgba(255, 255, 255, 0.4)",
                }}
              />
            ) : (
              <AiOutlineCloseCircle
                size={45}
                onClick={handlesearchBar}
                style={{
                  border: serachBar ? "none" : "2px solid #0033a0",
                  background: serachBar ? "none" : "rgba(255, 255, 255, 0.4)",
                  color: "#0033a0",
                }}
              />
            )}

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
                  style={{ border: "none", background: "none" }}
                  onClick={handlesearchCall}
                />
              </>
            )}
          </div>
        </div>
      )}

      <div className="Header__account">
      {logIn ? (
            <Link to={"/"} className="Header__link">
              <GrLogout
              size={30}
              onClick={handleLogOut}
              />
            </Link>

        ) : (
          <Link to={"/"} className="Header__link">
            <GrLogout  size={30}/>
          </Link>
        )}
        <Link to={"/profile"}>
          <AiOutlineUser size={40} />
        </Link>
        <Link to={"/shoppingcart" } >
          <AiOutlineShoppingCart size={40} />
        </Link>
        <div className="CartItem__quantity-display">
          <p>{cartItemQuantity}</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
