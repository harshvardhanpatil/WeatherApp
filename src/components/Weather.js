import React from "react";

const Weather = props => (
	<div className="weather__info">
	{	
		props.icon && <p className="weather__key"> 
			<span className="weather__value"><img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}></img> </span>
		</p> 
	 }
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country } <img src={`https://www.countryflags.io/${props.country}/flat/64.png`}></img></span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;