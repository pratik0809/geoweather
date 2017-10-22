import React, { Component } from 'react';
import Map from '../components/map'
import { connect } from 'react-redux'
import { updateCoords, toggleInfo } from '../actions'


class MapContainer extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocation = () => {
    const success = (pos) => {
      this.setState({
        isInfoShown: true,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      })
    };
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
  }

  moveMarker = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    this.setState({
      lat,
      lng
    });
    fetch(`http://localhost:3030/fetchWeather`)
    .then((response) => response.json())
    .then((responseJson) => {
      const kelvin = responseJson.main.temp;
      const fahrenheit = (kelvin * (9/5) - 459.67).toFixed(2);
      const celsius = (kelvin - 273).toFixed(2);
      console.log(`Current weather: ${responseJson.weather[0].main} in ${responseJson.name}`);
      console.log(`The temperature in F is: ${ fahrenheit } F`);
      console.log(`The temperature in C is: ${ celsius } C`);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <div>
      <Map
        lat={this.state.lat}
        lng={this.state.lng}
        isInfoShown={this.state.isInfoShown}
        toggleInfo={this.toggleInfo}
        moveMarker={this.moveMarker}
      />
      </div>
    )
  }
}

export default MapContainer
