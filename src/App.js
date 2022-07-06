import logo from './logo_transparent.png';
import './App.css';
import React from 'react';
import Clear from './icons/cloudy-sun.svg';
import Clouds from './icons/cloudy.svg';
import Rain from './icons/rainy.svg';
import Snow from './icons/snowy.svg';
import Storm from './icons/storm.svg';
import Sun from './icons/sun.svg';
import Thunder from './icons/thunder.svg';
import Wind from './icons/windy.svg';
import Days from './Days';
function App() {

    const [weather, setWeather] = React.useState(null);

      React.useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=45.764043&lon=-4.835659&cnt=56&appid=5ee66d8e7c438e117b39c33950c96735')
          .then(results => results.json())
          .then(data => {setWeather(data)});
          
      }, []);
    const [day, setDay] = React.useState(0);
     function updateDay(number) {
        setDay(number * 8);
        let day = document.getElementById(number);
        day.className = "day Active";
        for(let i = 0; i < 7; i++){
            if(i !== number){
                let day = document.getElementById(i);
                day.className = "day";
            }
        }
     } 

      function getWeatherIcon(name){
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
           
        }
    }
   
  return (

    <div className="App">
   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id="root">
         {weather ?(
        <div className="row">
        <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">
                    <div id="weather" className="card-content white-text">
                    <span className="card-title">{weather.city.name === "" ? "Lyon" : weather.city.name }</span>
                                <p><img src={getWeatherIcon(weather.list[day].weather[0].main)}/></p>
                                <span className="temperature">{Math.round(weather.list[day].main.temp - 273.15)}°C</span>
                                <div className="wind">Vent {Math.round(weather.list[day].wind.speed)}km/h ({weather.list[day].wind.deg}°)</div>
                    </div>
                        <Days updateDay={updateDay} />
                </div>
            </div>
        </div>
        ):"loading"
        
        
    }
    </div>
    
</div>
  );
}


export default App;
