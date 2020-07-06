import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './component/home'
import Nav from './component/Nav'
import Footer from './component/Footer'


function App() {
  return (
     <div className="container">
        <Nav hello={5}/>
        <Home/>
        <Footer/>
      </div>   
  );
}

export default App;
