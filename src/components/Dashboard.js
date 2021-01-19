import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react';
import Barchart from './Barchart'
import Card from './Card'

const API_KEY="30d7b5ed541660ae2d9b2d85ce89a704"
const Dashboard=({props})=>{

    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null);
    const [result,setResult]=useState(null);
    const getWeather = async () => {
        console.log("called 3")
        //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const api_call =await  fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=10&appid=${API_KEY}&units=metric`)
        console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        const data = await api_call.json();
        console.log(data)
        if (data) {
            setResult({
                one:data
              });  
        } 
        console.log("result",result)
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

    function print()
    {
        window.print();
    }

    return(
        <div> 
            <div id="click" className="float-button" onClick={print}><div className="my-float">Print</div></div> 
            <div className="dashboard-t">
                <h4 className="dashboard-title-main">DASHBOARD</h4>
            </div>
            <div className="dashboard-t">
                <h4 className="dashboard-title">Temperature Forcast</h4>
            </div>
            
            {result!=null && <Barchart chartdata={result.one.list}></Barchart>}

            <div className="dashboard-t">
                <h4 className="dashboard-title">Weather Reports</h4>
            </div>
            <div className="row">

            {result&& result.one.list.map((d)=>{
            return <Card name={d.name} condition={d.weather[0].description} humidity={d.main.humidity} icon={d.weather[0].icon}></Card> })}
            
                {/* <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}

            </div>
            

        </div>
        
    )
}
export default Dashboard;