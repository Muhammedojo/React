import React, { Component } from 'react'
import './App.css';
import Home from './component/home'
import Nav from './component/Nav'

function App() {
  return (
    
    <div className="container">
      <Nav />
      <Home/>
    </div>
  );
}

export default App;
