import React from 'react'
import '../App.css'
function Nav() {
    return (
        <div>
            <header className="header-section">
                <div className="container">
                    <div className="row" style={{ background: "black", color: "white"}}>
                       
                        <a href="#" className="site-btn m-3" style={{ background: "black", color: "white" }}>Home</a>
                        <a href="#" className="site-btn m-3" style={{ background: "black", color: "white" }}>About Us</a>
                        <a href="#" className="site-btn m-3" style={{ background: "black", color: "white" }}>Services</a>
                        <a href="#" className="site-btn m-3" style={{ background: "black", color: "white" }}>Contact Us</a>
                        <a href="#" className="site-btn m-3" style={{ background: "black", color: "white" }}>Clients</a>
                        <a href="#" className="site-btn m-3" style={{ background: "black", color: "white" }}>Portfolio</a>
                        
                        </div>

                </div>

            </header>
        </div>
    )
}

export default Nav
