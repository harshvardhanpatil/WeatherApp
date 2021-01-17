import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Weather from './Weather'
import Form from './Form'
import Titles from './Titles'


const API_KEY="30d7b5ed541660ae2d9b2d85ce89a704"
let temp=null
function LocationWeather(){

    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null);
    const [result,setResult]=useState("");
    const getWeather = async () => {
        console.log("called 3")
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
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
            sunrise:data.sys.sunrise,
            sunset:data.sys.sunset,
            visibility:data.visibility,
            
            error: ""
          });   
        } else {
          setResult(null)
        }
      }

    useEffect(async()=>
    {
        console.log("called")
        if (navigator.geolocation) {
         await navigator.geolocation.getCurrentPosition(showPosition)
        } else { 
        console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position) {
            console.log("called 2")
            setlat( position.coords.latitude )
            setlon( position.coords.longitude)
            console.log(lat,lon)
        }

        if(lat && lon )
        {
            getWeather()
            
        }
          
    },[lat,lon]);
    
    


    var date=new Date()
    function covertUnixTime(n)
    {
        
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(n * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

        return formattedTime;

    }
    

    return(
        <div className="container">
            <div className="row">
                
                <div className="col-xs-7 form-container">
                <Weather 
                temperature={result.temperature} 
                humidity={result.humidity}
                city={result.city}
                country={result.country}
                description={result.description}
                icon={result.icon}
                error={result.error}
                />
                </div>

                <div className="col-xs-5 form-container">
                  
                    <div className="weather__info">
                    {	
                        <p className="weather__key"> Visibility:
                            <span className="weather__value"> {result.visibility}</span>
                        </p> 
                    }
                    {	
                        <p className="weather__key"> Sunrise: 
                            <span className="weather__value"> {covertUnixTime(result.sunrise)}</span>
                        </p> 
                    }
                    {	
                        <p className="weather__key"> Sunset: 
                            <span className="weather__value"> {covertUnixTime(result.sunset)}</span>
                        </p> 
                    }
                    {	
                        <p className="weather__key"> Time: 
                            <span className="weather__value"> {date.toLocaleString()}</span>
                        </p> 
                    }
                    
                    </div>

                
                </div>

            </div>
        </div>
    
    )
}
export default LocationWeather;