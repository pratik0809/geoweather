export const ZOOM_CHANGED = 'ZOOM_CHANGED'
export const ZOOM_IN = 'ZOOM_IN'
export const ZOOM_OUT = 'ZOOM_OUT'

const changeZoom = (zoomScale) => {
  return {
    type: ZOOM_CHANGED,
    zoomScale
  }
}

const zoomIn = () => {
  return {
    type: ZOOM_IN
  }
}

const zoomOut = () => {
  return {
    type: ZOOM_OUT
  }
}

export { changeZoom, zoomIn, zoomOut }
