import React from 'react';
import Map from '../components/map'
import { toggleInfo, updateCoords } from '../actions'
import { changeZoom } from '../actions/zoom'
import { connect } from 'react-redux'
import {fetchWeather} from '../actions/fetchWeather'

const baseUrl = "https://geoweather-server.herokuapp.com/fetchWeather"

const mapStateToProps = state => {
  return {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_UQmA1pxzACCkeQd1MS8R0WK2TJKmQeM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`}} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    mapZoom: state.mapZoom
  }
}

const mapDispatchToProps = dispatch => {
  const refs = {
      map: undefined,
  }

  return {
    updateCoords: (lat, lng) => {
      dispatch(updateCoords(lat, lng))
      dispatch(toggleInfo(true))
      dispatch(fetchWeather(baseUrl, lat, lng))
    },
    onMapMounted: (ref) => {
        refs.map = ref
    },
    onZoomChanged: () => {
      dispatch(changeZoom(refs.map.getZoom()))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
