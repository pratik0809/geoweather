import React, { Component } from 'react';
import './styles/App.css';
import MapContainer from './containers'

class App extends Component {
  render() {
    return (
       <div className="App">
          <h1 className="App-header">GeoWeather</h1>
          <MapContainer />
       </div>
    );
  }
}

export default App;
