// Actions
export const UPDATE_COORDS = 'UPDATE_COORDS'
export const TOGGLE_INFO = 'TOGGLE_INFO'

const updateCoords = (lat, lng) => {
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
