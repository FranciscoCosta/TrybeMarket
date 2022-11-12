import React, { createContext} from 'react';

export const Context = createContext();
function Provider({ children }) {
  const context ="Hello"
  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
export default Provider;