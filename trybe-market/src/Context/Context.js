import React, { createContext, useState, useMemo, useEffect} from 'react';

export const Context = createContext();
function Provider({ children }) {

  const [category, setcategory] = useState([])
  const [productsList, setproductsList] = useState([])
  const [copyproductList, setcopyproductList] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [cartItemQuantity, setcartItemQuantity] = useState(0);
  const [itemDetails, setitemDetails] = useState([])

  // true-disable-next-line react-hooks/exhaustive-deps
  const fetchCategory = async() => {
      const  url = `https://api.mercadolibre.com/sites/MLB/categories`
      const result = await fetchApi(url);
      setcategory(result)
    }
  const handleStart = async() => {
    const url =  `https://api.mercadolibre.com/sites/MLB/search?category=MLB1648`
    const result = await fetchApi(url);
    const {results} = result
    setproductsList(results);
    setcopyproductList(results)
    setisLoading(false);
  }
    const fetchApi = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      return response.ok && Promise.resolve(json);
    };

    const handleCategory = async(category)=> {
      const url = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`
      const result = await fetchApi(url);
      const {results} = result
      setproductsList(results);
      setcopyproductList(results);
    }

    const handleSearch = async(query) => {
      const url = ` https://api.mercadolibre.com/sites/MLB/search?q=${query}`
      const result = await fetchApi(url);
      const {results} = result
      setproductsList(results);
      setcopyproductList(results);
    }
    const handleTotalCart = () =>{
      const oldCart = JSON.parse(localStorage.getItem('cartItems')) || [];
      if(oldCart.length === 0){
        setcartItemQuantity(0);
      }else{
        const itemQuantitys = oldCart.map((item) => item.quantity);
        const sum = itemQuantitys.reduce((accumulator, curr) => accumulator + curr);
        setcartItemQuantity(sum)
      }
    }

    const fetchItem =async(id)=>{
      setisLoading(true)
      console.log(id)
      const url = ` https://api.mercadolibre.com/items/${id}`
      const result = await fetchApi(url);
      setitemDetails(result)
      console.log(result);
    }

    const context = useMemo(
      () => ({
    fetchCategory,
    category,
    setproductsList,
    productsList,
    handleStart,
    isLoading,
    handleCategory,
    handleSearch,
    cartItemQuantity,
    setcartItemQuantity,
    handleTotalCart,
    setcopyproductList,
    copyproductList,
    itemDetails,
    fetchItem,
    setisLoading,
      }),
      [category,fetchCategory,productsList,isLoading,cartItemQuantity,copyproductList,itemDetails],
    );

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
export default Provider;