import React, { Component }  from 'react'
import '../styles/App.css';
import Loader from 'halogen/ClipLoader'

class AppOptions extends Component {
  render() {
    const { geolocationStatus, getUserLocation, preferredTemp, changePreferTemp, zoomIn, zoomOut } = this.props;

    const isLoading = geolocationStatus.loading;
    const hasErrored = geolocationStatus.error;

    let geoButton = null;
      if (hasErrored) {
        geoButton = <button onClick={getUserLocation}>:(</button>
      }
      else if(isLoading) {
        geoButton = <button><Loader color="white" size="14px" /></button>
      }
      else {
        geoButton = <button id="findMe"onClick={getUserLocation}>📍</button>
      }
    return (
      <div className="options">
        <div className="App-options">
          <button className={`tmp ${preferredTemp === '°C' ? "preferred" : ""}`} onClick={(e) => changePreferTemp(e.target.textContent)}>°C</button>
          <button className={`tmp ${preferredTemp === '°F' ? "preferred" : ""}`} onClick={(e) => changePreferTemp(e.target.textContent)}>°F</button>
        </div>
        <div className="App-options-footer">
          <button id="zoomIn" onClick={zoomIn}>+</button>
          <button id="zoomOut"onClick={zoomOut}>-</button>
          {geoButton}
        </div>
      </div>
    )
  }
}

export default AppOptions
