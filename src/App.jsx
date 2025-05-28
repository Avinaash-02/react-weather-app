import React,{useState}from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data,setData]=useState({});
  const [location,setLocation]=useState('')


const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=abf0c70d74317a72515cf3fe36f83434&units=metric`;

const searchLoc = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
      setLocation('');
    });
  }
};
  return (
    <div className="app">
      <div>
  <input
    type="text"
    value={location}
    onChange={(event) => setLocation(event.target.value)}
    placeholder="Enter the location"
    onKeyDown={searchLoc}
    style={{
      zIndex: 9999,
      position: "relative",
      padding: "10px",
      fontSize: "16px",
    }}
  />
</div>

<div className="container">
  <div className="top"></div>

  <div className="location">
    {data.name && <p>{data.name}</p>}
  </div>

  {data.main && (
    <>
      <div className="temp">
        <h1>{data.main.temp}°C</h1>
        <p style={{ color: "white", fontWeight: "normal" }}>Exact Climate</p>
      </div>

      <div className="description">
        {data.weather && <p>{data.weather[0].main}</p>}
      </div>

      <div className="bottom">
        <div className="feels">
          <p>{data.main.feels_like}°C</p>
          <p style={{ color: "rgba(163, 163, 163, 0.5)" }}>Feels Like!</p>
        </div>

        <div className="humidity">
          <p>{data.main.humidity}%</p>
          <p style={{ color: "rgba(163, 163, 163, 0.5)" }}>Humidity</p>
        </div>

        <div className="wind" style={{ color: 'rgb(255, 255, 255)', fontSize: '25px' }}>
          <p>{data.wind.speed} MPH</p>
          <p style={{ color: "rgba(163, 163, 163, 0.5)" }}>Wind Speed</p>
        </div>
      </div>
    </>
  )}
</div>

    </div>
  );
}

export default App;
