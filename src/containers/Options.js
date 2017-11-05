import { connect } from 'react-redux'
import AppOptions from "../components/AppOptions"
import { zoomIn, zoomOut, changeZoom } from "../actions/zoom"
import { updateCoords, toggleInfo } from "../actions"
import { fetchWeather } from "../actions/fetchWeather"

const baseUrl = "https://geoweather-server.herokuapp.com/fetchWeather"

const getUserLocation = (dispatch) => {
  const success = (pos) => {
    const {latitude, longitude} = pos.coords
    dispatch(updateCoords(latitude, longitude))
    dispatch(toggleInfo(true))
    dispatch(fetchWeather(baseUrl, latitude, longitude))
    // updateCoords: (lat, lng) => {
    //   dispatch(updateCoords(lat, lng))
    //   dispatch(toggleInfo(true))
    //   dispatch(fetchWeather(baseUrl, lat, lng))
    // }
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

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    zoomIn: () => dispatch(zoomIn()),
    zoomOut: () => dispatch(zoomOut()),
    getUserLocation: () => getUserLocation(dispatch)
  }
}

const Options = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppOptions)

export default Options
