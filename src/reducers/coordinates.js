export default function coordChange(coordinates = {}, action) {
  switch(action.type) {
    case "UPDATE_COORDS":
      return {...coordinates,
        lat: action.coordinates.lat,
        lng: action.coordinates.lng
      }

    default:
      return coordinates
  }
}
