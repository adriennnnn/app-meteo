import logo from './logo_transparent.png';
// import icon from './icons/sun.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
// import axios from 'axios';
import Sun from './icons/sun.svg';
import Clouds from './icons/cloudy.svg';
import Clear from './icons/cloudy-sun.svg';
import Rain from './icons/rainy.svg';
import Thunder from './icons/thunder.svg';
import Wind from './icons/windy.svg';
import Storm from './icons/storm.svg';
import Snow from './icons/snowy.svg';

function App() {

  const [positon, setPosition] = useState('');
  const latitude = 45.764043;
  const longitude = 4.835659;






  // function Weather() {
    const [weather, setWeather] = React.useState(null);

    React.useEffect(() => {
      async function getMeteo() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.764043&lon=4.835659&appid=72ce4ab1e1742d29625198574d17a0e8')
        const data = await response.json();
        setWeather(data)
        //  .then(response => response.json())
        //   .then(data => setWeather(data));

        console.log(data);
      }
      getMeteo()
    }, []);// <-- Have to pass in [] here!

    function getWeatherIcon(name) {
      switch(name){
        case name = "Cloudy":
                return Clouds;
            case name = "Clear":
                return Clear;
            case name =  "Rainy":
                return Rain;
            case name = "Snowy":
                return Snow;
            case name = "Stormy":
                return Storm;
            case name = "Sunny":
                return Sun;
            case name = "Thunderstorm":
                return Thunder;
            case name = "Windy":
                return Wind;
        default:
          return "coucou";
    }
  }


return (
  <div id="root">
   {weather ? (
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Lyon</span>

              <p><img src={getWeatherIcon(weather.weather[0].main)} /></p>
              <span className="temperature">
                {Math.round(weather.main.temp - 273.15)} °c
              </span>
              <div className="wind">
                Vent {weather.wind.speed} km/h
                ({weather.wind.deg}°)
              </div>
            </div>
            <div className="card-action">
              <a href="#"  >
                <p>jour 1</p>
                <p><img src={Sun} /></p>

              </a>
              <a href="#">
                <p>jour 2</p>
                <p><img src={Clear} /></p>


              </a>
              <a href="#">
                <p>jour 3</p>
                <p><img src={Storm} /></p>

              </a>
              <a href="#">
                <p>jour 4</p>
                <p><img src={Rain} /></p>

              </a>
              <a href="#">
                <p>jour 5</p>
                <p><img src={Wind} /></p>

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='looding-part'>
    </div>
  )}
  </div>
);
}

export default App;


