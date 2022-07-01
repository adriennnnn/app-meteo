import logo from './logo_transparent.png';
import './App.css';

function App() {
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
                          <p><img src="icons/sun.svg" /></p>
                          <span className="temperature">15°</span>
                          <div className="wind">Vent 1km/h (360°)</div>
                        </div>
                        <div className="card-action">
                          <a href="#" style="font-weight: bold;">Thursday</a>
                          <a href="#">Friday</a>
                          <a href="#">Saturday</a>
                          <a href="#">Sunday</a>
                          <a href="#">Monday</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


  );
}

export default App;
