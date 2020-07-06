import 'bootstrap/dist/css/bootstrap.css';
import React, {Fragment,useEffect} from 'react';
import job7 from '../job7.jpg';
function Home() {
    // let initialValue= 0;
    const [count, setCount]= React.useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
       const handleDecrement = () => {
           setCount(count -1)
       }

    useEffect(()=>{
        console.log(count)
    },[count])
    return (
        <React.Fragment>
        <div>
            <h1><i>Welcome!!!</i></h1>
    <h1>Your count is {count}</h1>
                <button onClick={handleIncrement}className="badge badge-primary">Increment</button>
                <button onClick={handleDecrement}className="badge badge-primary">Decement</button>
        </div>
            <div className="container-fluid">

                <img src={job7} alt="image" style={{ width: "100%", height: "500px" }}/>
            </div>
        </React.Fragment>	
    );
}




export default Home

// import React, {Component,Fragment} from 'react'
// import job7 from '../job7.jpg';


// class Home extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         }
//         this.handleIncrement = this.handleIncrement.bind(this)
//     }
//     handleIncrement(){
//         this.setState({
//             count : this.state.count + 1
//         })
//     }
//     componentWillMount(){

//     }
//     render(){
//         return(
         
//             <Fragment>
//              <h1><i>Welcome!!!</i></h1>
//      <h1>Your count is {this.state.count}</h1>
//                  <button onClick={this.handleIncrement}>Increment</button>
//                  <button>Decement</button>
         
//              <div className="container-fluid">
//                  <img src={job7} alt="image" style={{ width: "100%", height: "500px" }}/>

//              </div>
//          </Fragment>
//         )
//     }
// }

// export default Home;
