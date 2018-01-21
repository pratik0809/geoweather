const updateCoords = (lat, lng) => {
    return {
      type: 'UPDATE_COORDS',
      coordinates: {
        lat,
        lng
      }
    }
}

const toggleInfo = (bool) => {
  return {
    type: 'TOGGLE_INFO',
    bool
  }
}

const tempPref = (preferredTemp) => {
  return {
    type: 'UPDATE_PREFER_TEMP',
    preferredTemp
  }
}


export { updateCoords, toggleInfo, tempPref }
