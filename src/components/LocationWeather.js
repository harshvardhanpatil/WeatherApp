import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

const API_KEY="30d7b5ed541660ae2d9b2d85ce89a704"
function LocationWeather(){
    let flag=false;

    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null);
    const [result,setResult]=useState(null);
    const getWeather = async () => {
        
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            const data = await api_call.json();
            console.log(data)
            if (data) {
            setResult({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon:data.weather[0].icon,
                error: ""
            });
            
            
        }
      }

    const getLocation=()=>{
        if(!flag){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition)//.then(value=>console.log(value));
                } else { 
                console.log("Geolocation is not supported by this browser.");
                }

        }
        
    }

    function showPosition(position) {

        setlat( position.coords.latitude.toFixed(6) )
        setlon( position.coords.longitude.toFixed(6))
        console.log(lat,lon)
        if(lat && lon )
        {
            flag=true;
            getWeather()
            
        }
    }

    

    


          
    
    
    



    return(
        <div> 
            {lat} {lon} {JSON.stringify(result)}
            <button onClick={getLocation()}>Dab mala </button>
        </div>
        
        
        
    )
}
export default LocationWeather;