const initialState = {
  coordinates: {
    lat: undefined,
    lng: undefined
  },
  isInfoShown: false,
  mapZoom: 12,
  weatherStatus: {
    loading: false,
    error: false,
    success: {
      "tempf": 0,
      "tempc": 0,
      "temp": 0,
      "pressure": 0,
      "humidity": 0,
      "temp_min": 0,
      "temp_max": 0
    }
  }
}

export function geoWeather(state = initialState, action) {
  switch(action.type) {
    case "ZOOM_CHANGED":
      return {...state,
        mapZoom: action.zoomScale
      }

    case "ZOOM_IN":
      return {...state,
        mapZoom: state.mapZoom + 1
      }

    case "ZOOM_OUT":
      return {...state,
        mapZoom: state.mapZoom - 1
      }

    case "UPDATE_COORDS":
    //You can also enable the object spread operator proposal to write { ...state, ...newState } instead.
      return Object.assign({}, state, {
        coordinates: {
          lat: action.coordinates.lat,
          lng: action.coordinates.lng
        }
      })

    case "TOGGLE_INFO":
      if(action.bool) {
        return Object.assign({}, state, {
          isInfoShown: action.bool
        })
      }
      return Object.assign({}, state, {
        isInfoShown: !state.isInfoShown
      })

    case "LOADING_WEATHER":
      return {...state,
        weatherStatus: {
          ...state.weatherStatus,
          loading: action.isLoading
        }
      }

    case "ERROR_WEATHER":
      return Object.assign({}, state, {
        weatherStatus: {
          ...state.weatherStatus,
          error: action.hasErrored
        }
    })

    case "SUCCESS_WEATHER":
      return Object.assign({}, state, {
        weatherStatus: {
          ...state.weatherStatus,
          success: action.weatherdeets
        }
    })

    default:
      return state
  }
}
