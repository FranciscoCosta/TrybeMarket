import React, { createContext, useState, useMemo} from 'react';

export const Context = createContext();
function Provider({ children }) {

  const [category, setcategory] = useState([])
  const [productsList, setproductsList] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCategory = async() => {
      const  url = `https://api.mercadolibre.com/sites/MLB/categories`
      const result = await fetchApi(url);
      setcategory(result)
    }
  const handleStart = async() => {
    const url =  `https://api.mercadolibre.com/sites/MLB/search?category=$MLB1648`
    const result = await fetchApi(url);
    setproductsList(result)
  }
    const fetchApi = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      return response.ok && Promise.resolve(json);
    };

    const context = useMemo(
      () => ({
    fetchCategory,
    category,
    setproductsList,
    productsList

      }),
      [category,fetchCategory,productsList],
    );

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
export default Provider;