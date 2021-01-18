import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react';

const Card=({name,condition,humidity,icon})=>{
    console.log("Props",name,condition,humidity,icon)

    return(
        <div className="col-xs-4">
            <div className="cards">
            <div className="row">
                <div className="col-xs-4">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>

                </div>
                <div className="col-xs-8">
                    <p className="weather-key-card">City: 
                        <span className="weather-value-card"> {name}</span>
                    </p>
                    <p className="weather-key-card">Conditions: 
                        <span className="weather-value-card"> {condition}</span>
                    </p>
                    <p className="weather-key-card">Humidity: 
                        <span className="weather-value-card"> {humidity}</span>
                    </p>
                    
                    
                </div>

            </div>
            </div>
        </div>
    )

}

export default Card;