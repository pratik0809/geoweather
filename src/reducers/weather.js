export default function weatherChange(weatherStatus = {}, action) {
  switch(action.type) {
    case "LOADING_WEATHER":
      return {...weatherStatus,
        loading: action.isLoading
      }

    case "ERROR_WEATHER":
      return {...weatherStatus,
        error: action.hasErrored
      }

    case "SUCCESS_WEATHER":
      return {...weatherStatus,
        success: action.weatherdeets
      }

    case "UPDATE_PREFER_TEMP":
      return {...weatherStatus,
        preferredTemp: action.preferredTemp
      }
    default:
      return weatherStatus
  }
}
