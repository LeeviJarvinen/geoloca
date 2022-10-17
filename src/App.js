import './App.css';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [latitude, setlatitude] = useState(0)
  const [longitude, setlongitude] = useState(0)
  const [isloading, setisloading] = useState(true)

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      setlatitude(position.coords.latitude)
      setlongitude(position.coords.longitude)
      setisloading(false)
    },(error) => {
      console.log(error)
      alert("Paikannus epäonnistui!")
    })
  }else {
    alert("Selaimesi ei tue paikannusta!")
  }
}, [])
  if (isloading) {
    return <p>Ladataan sijainti...</p>
  }else {
  return (
    <div>
      <p>
        Position:&nbsp;
        {latitude.toFixed(3)},
        {longitude.toFixed(3)}
      </p>
      <Weather lat={latitude} lng={longitude} />
    </div>
  );
  }
}

export default App;
