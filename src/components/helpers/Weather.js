import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';


class Weather
{
    constructor()
    {
        this.lat = null;
        this.long = null;
        this.result = {};
        this.flag = false;
        this.API_KEY="30d7b5ed541660ae2d9b2d85ce89a704";
    }
    


    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.API_KEY}`);
        const data = await api_call.json();
        console.log(data)
        if (data) {
            this.result =  {
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon:data.weather[0].icon,
                error: ""}
            
            return this.result;
            }
        
        }

        getCurrentLocation = () => {
            if(!this.flag)
            {
               if(navigator.geolocation)
                   navigator.geolocation.getCurrentPosition((position) => {
                    this.lat =  position.coords.latitude;
                    this.long= position.coords.longitude;
                    console.log(this.lat,this.long);
                    if( this.lat && this.long)
                    {
                        this.flag = true;
                        this.getWeather();
                    }
                   });
               else  
                   console.log("GeoLocation is not supported");
            }
            
        }
        
    
    }

export default Weather;