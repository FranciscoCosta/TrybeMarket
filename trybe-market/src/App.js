import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Login, Homepage, Profile, Signup} from './Pages'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={ <Login/> } />
      <Route exact path="/home" element={ <Homepage/> } />
      <Route exact path='/signup' element = { <Signup/>} />
      <Route exact path="/profile" element={ <Profile/> } />
    </Routes>
    </div>
  );
}

export default App;
