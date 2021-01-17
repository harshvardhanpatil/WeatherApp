import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Weather from './helpers/Weather'

const API_KEY="30d7b5ed541660ae2d9b2d85ce89a704"

const WeatherLocation = (props) => {
    let result = null;
    useEffect(() => {
        
    })

    const handleClick = (e) => {
        const weather = new Weather();
        result = weather.getCurrentLocation()
        console.log(result);
    }
    


    


 
 
 
return (
    <div onLoad={handleClick(null)}>
        <h1>
            Hi
        </h1>
        {JSON.stringify(result)}
        {/* <button onClick={getCurrentLocation}>Click me</button>         */}
    </div>
)
}

export default WeatherLocation;