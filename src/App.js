import logo from './logo_transparent.png';
import icon from './icons/sun.svg';
import './App.css';
import { useState } from 'react';
// import axios from 'axios';


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

  function weather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.764043&lon=4.835659&appid=72ce4ab1e1742d29625198574d17a0e8')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {

    });
  }

  window.onload = function() {
    weather( 6167865 );
  }

  // .then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     } else {
  //       return Promise.reject({ status: res.status, statusText: res.statusText });
  //     }
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log('Error, with message:', err.statusText));



  function callApi(latitude, longitude) {

  }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div id="root">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row">
          <div className="col s12 m6 push-m3">
            <div className="weather card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Lyon</span>
                <p><img src={icon} /></p>
                <span className="temperature">15°</span>
                <div className="wind">Vent
                 {/* {data.wind.speed} */}
                 km/h 
                 {/* ({data.wind.deg}°) */}
                 </div>
              </div>
              <div className="card-action">
                <a href="#" >
                  <p>Jeud</p>

                </a>
                <a href="#">
                  <p>Vendredi</p>


                </a>
                <a href="#">
                  <p>Samdi</p>


                </a>
                <a href="#">
                  <p>Dimanche</p>

                </a>
                <a href="#">
                  <p>Lundi</p>

                </a>
                <a href="#">
                  <p>Mardi</p>

                </a>
                <a href="#">
                  <p>mercredi</p>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;

