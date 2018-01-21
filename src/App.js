import React, { Component } from 'react';
import './styles/App.css';
import MapContainer from './containers'
import Options from './containers/Options'

class App extends Component {
  render() {
    return (
       <div className="App">
          <h1 className="App-header">GeoWeather</h1>
          <Options />
          <MapContainer />
       </div>
    );
  }
}

export default App;
