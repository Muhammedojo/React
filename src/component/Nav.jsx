import React from 'react'
import '../App.css'
function Nav() {
    return (
        <div>
            <header className="header-section">
                <div className="container">
                    <div className="row" style={{ background: "black" }}>

                        <a href="#" className="site-btn m-3">Home</a>
                        <a href="#" className="site-btn m-3">About Us</a>
                        <a href="#" className="site-btn m-3">Services</a>
                        <a href="#" className="site-btn m-3">Contact Us</a>
                        <a href="#" className="site-btn m-3">Clients</a>
                        <a href="#" className="site-btn m-3">Portfolio</a>

                    </div>

                </div>

            </header>
        </div>
    )
}

export default Nav
