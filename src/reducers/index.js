import { combineReducers } from 'redux'
import zoomChange from './zoom'
import weatherChange from './weather'
import geolocate from './geolocation'
import toggleInfo from './toggleInfo'
import coordChange from './coordinates'

export const initialState = {
  coordinates: {
    lat: undefined,
    lng: undefined
  },
  geolocationStatus: {
    loading: false,
    error: false
  },
  isInfoShown: false,
  mapZoom: 12,
  weatherStatus: {
    loading: false,
    error: false,
    preferredTemp: "°F",
    success: {
      "tempf": 0,
      "tempc": 0,
      "area": undefined,
      "id": undefined,
      "main": undefined,
      "description": undefined,
      "icon": undefined
    }
  }
}

export const geoWeatherApp = combineReducers({
  mapZoom: zoomChange,
  weatherStatus: weatherChange,
  geolocationStatus: geolocate,
  isInfoShown: toggleInfo,
  coordinates: coordChange,
})



/* Instead of combineReducers:

function geoWeatherApp(state = initialState, action) {
  return {
    zoomChange: zoomChange(state.mapZoom, action),
    weatherChange: weatherChange(state.weatherStatus, action),
    toggleInfo: toggleInfo(state.isInfoShown, action),
    updateCoords: updateCoords(state.coordinates, action)
  }
}
*/
