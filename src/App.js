import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Products from './pages/Products';
import Users from './pages/Users';
import Provider from './pages/Provider';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/customers' element={<Customer/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/providers' element={<Provider/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
