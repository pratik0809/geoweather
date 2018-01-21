import { fetchWeather } from './fetchWeather';
import { updateCoords, toggleInfo } from './index'
import { changeZoom } from './zoom'

const geolocate = () => {
  return (dispatch) => {
      const baseUrl = "https://geoweather-server.herokuapp.com/fetchWeather"
      const success = (pos) => {
        const {latitude, longitude} = pos.coords
        dispatch(geoLocationIsLoading(false));
        dispatch(updateCoords(latitude, longitude))
        dispatch(changeZoom(15))
        dispatch(toggleInfo(true))
        dispatch(fetchWeather(baseUrl, latitude, longitude))
      };

      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        dispatch(geoLocationHasErrored(true)) //Error getting position
      };

      const options = {
        enableHighAccuracy: false,
        timeout: Infinity,
        maximumAge: 60000
      }

      dispatch(geoLocationIsLoading(true));

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          success, //Success getting position
          error,
          options
        )
      }

      else {
          alert("Geolocation is not supported by this browser.");
      }

  };
}

const geoLocationHasErrored = (bool) => {
  return {
    type: 'ERROR_GEO_LOCATION',
    hasErrored: bool
  };
}

const geoLocationIsLoading = (bool) => {
  return {
    type: 'LOADING_GEO_LOCATION',
    isLoading: bool
  };
}

export default geolocate;
