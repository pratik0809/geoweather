// Actions
export const ERROR_WEATHER = 'ERROR_WEATHER'
export const LOADING_WEATHER = 'LOADING_WEATHER'
export const SUCCESS_WEATHER = 'SUCCESS_WEATHER'

const weatherHasErrored = (bool) => {
  return {
    type: ERROR_WEATHER,
    hasErrored: bool
  };
}

const weatherIsLoading = (bool) => {
  return {
    type: LOADING_WEATHER,
    isLoading: bool
  };
}

const weatherSuccess = (weatherdeets) => {
  return {
    type: SUCCESS_WEATHER,
    weatherdeets
  };
}

export const fetchWeather = (baseUrl, lat, lng) => {
  return (dispatch) => {
    dispatch(weatherIsLoading(true));
    fetch(`${baseUrl}?latitude=${lat}&longitude=${lng}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(weatherIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((weatherdeets) => {
        dispatch(weatherSuccess(weatherdeets))
      })
      .catch(() => {
        dispatch(weatherHasErrored(true))
      })

  };
}
