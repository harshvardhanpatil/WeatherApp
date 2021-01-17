import React from 'react'
import {Link} from 'react-router-dom'
function Home(){

    return(
        <div className="row">
            
            <div className="col-xs-4 card-container">
                <Link to="/CityWeather">
                <h1 className="card-title">Check City Weather</h1>
		        <h3 className="card-detail">Find out temperature, conditions and more...</h3>
                </Link>
            </div>
            <div className="col-xs-4 card-container1">
                <Link to="/LocationWeather">
                <h1 className="card-title">Check Weather from current location</h1>
		        <h3 className="card-detail">Find out temperature, conditions and more...</h3>
                </Link>
            </div>
            <div className="col-xs-4 card-container2">
                <Link to="/Dashboard">
                <h1 className="card-title">Dashboard</h1>
		        <h3 className="card-detail">Find out temperature, conditions and more...</h3>
                </Link>
            </div>
        </div>
        
    )
}
export default Home;