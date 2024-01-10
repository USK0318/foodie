import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import {Footer} from './components/Footer';
import Cart from './pages/Cart';
import Offers from './pages/Offers';
import Help from './pages/Help';
import Search from './pages/Search';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div style={{ marginBottom: "-4%" }}><Header /></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
