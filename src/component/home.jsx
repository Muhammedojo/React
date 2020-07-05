import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function Home() {
    
    return (
        <Fragment>
        <div>
            <h1><i>Welcome!!!</i></h1>
            <span>How can we be of service </span>
        </div>
        <div className="social-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="social-link-warp">
                            <div className="social-links" style={{backgroun:"blue"}}>
                                <a href=""><i className="fa fa-pinterest"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                                <a href=""><i className="fa fa-instagram"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                            </div>
                            <h2 className="hidden-md hidden-sm">My Social Profiles</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>	
    );
}

export default Home

