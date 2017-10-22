// Actions
export const UPDATE_COORDS = 'UPDATE_COORDS'
export const TOGGLE_INFO = 'TOGGLE_INFO'

const updateCoords = (lat, lng) => {
  // console.log(lat, lng)
  // fetch(`http://localhost:3030/fetchWeather?latitude=${lat}&longitude=${lng}`)
  // .then((weatherdeets) => {
  //   return {
  //     type: UPDATE_COORDS,
  //     payload: {
  //       lat,
  //       lng,
  //       weatherdeets
  //     }
  //   }
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

    return {
      type: UPDATE_COORDS,
      coordinates: {
        lat,
        lng
      }
    }
}

const toggleInfo = (bool) => {
  return {
    type: TOGGLE_INFO,
    bool
  }
}

export { updateCoords, toggleInfo }
