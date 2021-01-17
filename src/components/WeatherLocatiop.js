import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

const API_KEY="30d7b5ed541660ae2d9b2d85ce89a704"

const WeatherLocation = (props) => {
 const [state,setState] = useState({
     lat : null,
     long : null,
     flag : false,
     result : null
 });


 const {lat,long,flag,result} = state

 const getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data)
    if (data) {
        setState({...state,result: {
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon:data.weather[0].icon,
            error: ""}})
    }
    return;

}
 const getCurrentLocation = () => {
     if(!flag)
     {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                setState({...state,lat: position.coords.latitude,long: position.coords.longitude});
                console.log(lat,long);
                if( lat && long)
                {
                    setState({...state,flag:true});
                    getWeather();
                }
            });
        else  
            console.log("GeoLocation is not supported");
     }
     return;
 }

 

return (
    <div>
        
        <h1>
            {lat} {long}
        </h1>
        {JSON.stringify(result)}
        <button onClick={getCurrentLocation}>Click me</button>        
    </div>
)
}

export default WeatherLocation;