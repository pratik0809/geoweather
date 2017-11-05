import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, } from "react-google-maps"
import mapStyle from '../styles/mapStyle.json'
import MarkerContainer from '../containers/MarkerContainer'

const Map =
  withScriptjs(
    withGoogleMap(
      ((props) =>
        <GoogleMap
          zoom={props.mapZoom}
          clickableIcons={false}
          defaultCenter={{ lat: 41.8781136, lng: -87.62979819999998 }}
          onClick={(e) => props.updateCoords(e.latLng.lat(), e.latLng.lng())}
          options={{ disableDefaultUI: true, styles: mapStyle }}
          onZoomChanged={props.onZoomChanged}
          ref={props.onMapMounted}
        >
          <MarkerContainer />
        </GoogleMap>
      )
    )
  )

export default Map
