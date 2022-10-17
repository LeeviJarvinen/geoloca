import axios from 'axios';
import React, { useEffect, useState } from 'react'


const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = ''

export default function Weather({lat, lng}) {
    const [temp, settemp] = useState(0)
    const [speed, setspeed] = useState(0)
    const [direction, setdirection] = useState(0)
    const [description, setdescription] = useState('')
    const [icon, seticon] = useState('')
    
    useEffect(() => {
      const address = API_URL +
      'lat='+lat+'&lon='+lng+'&units=metric'+'&appid='+API_KEY;

      console.log(address);

      axios.get(address)
      .then((response)=> {
        console.log(response.data);
        settemp(response.data.main.temp);
        setspeed(response.data.wind.speed);
        setdirection(response.data.wind.speed);
        setdescription(response.data.weather[0].description);
        seticon(ICON_URL + response.data.weather[0].icon + '@2x.png');
        console.log(ICON_URL + response.data.weather[0].icon + '@2x.png');
      }).catch(error =>{
        alert(error);
      });
    }, [])
    

  return (
      <>
          <h3>Weather on your location</h3>
          <p>{temp} C&#176;</p>
          <p>{speed} m/s {direction} degrees</p>
          <p>{description}</p>
          <img src={icon} alt=""/>
      </>
  )
}
