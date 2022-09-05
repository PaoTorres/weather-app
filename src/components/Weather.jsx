import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [weather, setWeather]= useState({});
    const [isFahrenON, setIsFahrenON]= useState(false);
       
    useEffect (()=>{
       
        navigator.geolocation.getCurrentPosition(success);
        function success(pos) {
            const crd = pos.coords;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=e998e6e82d69e0d4c603704a55ad7578` )
                 .then(res=>setWeather(res.data))
          }
    }, []);

   const temp= isFahrenON? `${Math.floor((weather.main?.temp-273.15)*1.8+32)} °F` : `${Math.floor(weather.main?.temp-273.15)} °C`; 

    return (
        <div>
            <h1>{weather.name}, {weather.sys?.country}</h1>
            <h2>Description: {weather.weather?.[0].description}</h2> 
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
            <h2>Humidity: {weather.main?.humidity} %</h2>
            <h2>Pressure: {weather.main?.pressure}  hPa</h2>
            <h2>Wind Speed:  {weather.wind?.speed} m/s </h2>
            <h2>Temperature: {temp} </h2>
            <button onClick={()=>setIsFahrenON(!isFahrenON)}>Change {isFahrenON? '°C ': '°F ' } </button>
        </div>
    );
};

export default Weather;