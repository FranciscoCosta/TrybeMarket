import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Login, Homepage, Profile, Signup, Forgotpassword, ProductDetails, ShoppingCart, Payment, PageNotFound} from './Pages'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={ <Login/> } />
      <Route exact path="/home" element={ <Homepage/> } />
      <Route exact path='/signup' element = { <Signup/>} />
      <Route exact path='/productDetails/:id' element={ <ProductDetails />} />
      <Route exact path='/forgotpassword' element = { <Forgotpassword/>} />
      <Route exact path="/profile" element={ <Profile/> } />
      <Route exact path="/shoppingCart" element={ <ShoppingCart/> } />
      <Route exact path="/payment" element={ <Payment /> } />
      <Route path='*' element ={<PageNotFound/>} />

    </Routes>
    </div>
  );
}

export default App;
