import logo from './logo_transparent.png';
// import icon from './icons/sun.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
// import axios from 'axios';
import sun from './icons/sun.svg';
import cloudy from './icons/cloudy.svg';
import Clear from './icons/cloudy-sun.svg';
import rain from './icons/rainy.svg';
import Thunder from './icons/thunder.svg';
import windy from './icons/windy.svg';
import storm from './icons/storm.svg';
import snowy from './icons/snowy.svg';

function App() {

  const [positon, setPosition] = useState('');
  const latitude = 45.764043;
  const longitude = 4.835659;
  // const url ="https://api.openweathermap.org/data/2.5/weather?lat=45.764043&lon=4.835659&appid=72ce4ab1e1742d29625198574d17a0e8";

  // const exect = (event) => {
  //   if (event.key === 'Enter') {
  //       axios.get(url).then((response) => {
  //         setData(response.data)
  //         console.log(response.data)
  //     })
  //     setLocation('')
  //   }
  // }


  // const [data, setData] = useState( () =>{
  //   fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.764043&lon=4.835659&appid=72ce4ab1e1742d29625198574d17a0e8')
  //   .then(data =>{
  //     console.log(data)
  //   })
  // })



  // function weather() {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.764043&lon=4.835659&appid=72ce4ab1e1742d29625198574d17a0e8')
  //   .then(function(resp) { return resp.json() })
  //   .then(function(data => setWeather ) {
  //     console.log(data);
  //   })
  //   .catch(function() {

  //   });
  // }

  // window.onload = function() {
  //   weather( 6167865 );
  // }






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
        case name ="Clear":
            return "sun";
        case name ="Clouds":
            return "cloudy";
        case name ="Mist":
            return "cloudy";
        case name ="Snow":
            return "snowy";
        case name ="Rain":
            return "Rain";
        case name ="Drizzle":
            return "cloudy";
        case name ="Thunderstorm":
            return "Thunder";
        case name ="Clear":
            return "sun";
        default:
          return "mistake";
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
              
              <p><img src={sun} /></p>
              <span className="temperature">
                {Math.round(weather.main.temp - 273.15)} °c
              </span>
              <div className="wind">
                Vent {weather.wind.speed} km/h
                ({weather.wind.deg}°)
              </div>
            </div>
            <div className="card-action">
              <a href="#" >
                <p>jour 1</p>
                <p><img src={sun} /></p>

              </a>
              <a href="#">
                <p>jour 2</p>
                <p><img src={sun} /></p>


              </a>
              <a href="#">
                <p>jour 3</p>
                <p><img src={sun} /></p>

              </a>
              <a href="#">
                <p>jour 4</p>
                <p><img src={sun} /></p>

              </a>
              <a href="#">
                <p>jour 5</p>
                <p><img src={sun} /></p>

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : "loading"}
  </div>
);
}

export default App;


