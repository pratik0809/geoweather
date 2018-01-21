export default function geolocate(geolocationStatus = {}, action) {
  switch(action.type) {
    case "LOADING_GEO_LOCATION":
      return {...geolocationStatus,
        loading: action.isLoading
      }

    case "ERROR_GEO_LOCATION":
      return {...geolocationStatus,
        error: action.hasErrored
      }

    default:
      return geolocationStatus
  }
}
