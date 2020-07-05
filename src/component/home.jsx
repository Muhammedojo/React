import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import job7 from '../job7.jpg';
function Home() {
    
    return (
        <Fragment>
        <div>
            <h1><i>Welcome!!!</i></h1>
        </div>
            <div className="container-fluid">
                <img src={job7} alt="image" style={{ width: "100%", height: "500px" }}/>
            </div>
        </Fragment>	
    );
}

export default Home

