import React,{useState,useEffect} from "react";
import './index.css';

import WeatherCard from '../components/weatherCard'

export default () => {
    const [weather,setWeather] = useState({
        name: '',
        icon: '',
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        description: '',
    });
    const [coords,setCoords] = useState({
        latitude: 0,
        longitude: 0
    });

    const appid = "e360dd8d358384a112f93ffce1622817";

    navigator.geolocation.getCurrentPosition(function succes(position) {
        setCoords(() => {
            coords.latitude = position.coords.latitude;
            coords.longitude = position.coords.longitude;
        })
    },function error(error) {
        alert('The Application need to know your location.')
        //location.reload();
    });

    useEffect(() =>{
        const requestWeather = new Request(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${appid}`,{
		    method: 'GET'
	    });

	    fetch(requestWeather)
		.then((response) => {
			return response.json();
		}).then((json) => {
			setWeather(() => {
                weather.name = json.name;
                weather.icon = json.weather[0].icon;
                weather.description = json.weather[0].description;
                weather.temp = json.main.temp;
                weather.temp_max = json.main.temp_max;
                weather.temp_min = json.main.temp_min;
            })
		})

    },[coords]);

    return(
        <div>
            <WeatherCard 
                name = {weather.name}
                icon = {weather.icon}
                description = {weather.description}
                temp = {weather.temp}
                temp_max = {weather.temp_max}
                temp_min = {weather.temp_min}
            />
        </div>
    )
}