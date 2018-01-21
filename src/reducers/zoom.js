export default function zoomChange(mapZoom = 12, action) {
  switch(action.type) {
    case "ZOOM_CHANGED":
      return action.zoomScale

    case "ZOOM_IN":
      return mapZoom + 1

    case "ZOOM_OUT":
      return mapZoom - 1

    default:
      return mapZoom
    }
}
