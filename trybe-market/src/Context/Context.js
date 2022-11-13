import React, { createContext, useState, useMemo} from 'react';

export const Context = createContext();
function Provider({ children }) {

  const [category, setcategory] = useState([])
  const [productsList, setproductsList] = useState([])
  const [isLoading, setisLoading] = useState(true)

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
      }),
      [category,fetchCategory,productsList,isLoading],
    );

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
export default Provider;