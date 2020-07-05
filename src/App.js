import React, { Component } from 'react'
import './App.css';
import Home from './component/home'
import Nav from './component/Nav'
import Footer from './component/Footer';

function App() {
  return (
     <div className="container">
        <Nav />
        <Home/>
        <Footer />
      </div>   
  );
}

export default App;
