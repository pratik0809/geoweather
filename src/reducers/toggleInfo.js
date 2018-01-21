export default function toggleInfo(isInfoShown = false, action) {
  switch(action.type) {
    case "TOGGLE_INFO":
      return action.bool ? action.bool : !isInfoShown

    default:
      return isInfoShown
  }
}
