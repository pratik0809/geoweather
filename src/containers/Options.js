import { connect } from 'react-redux'
import AppOptions from "../components/AppOptions"
import { zoomIn, zoomOut } from "../actions/zoom"
import geolocate from '../actions/geolocation'
import { tempPref } from '../actions'

const mapStateToProps = state => {
  return {
    geolocationStatus: state.geolocationStatus,
    preferredTemp: state.weatherStatus.preferredTemp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    zoomIn: () => dispatch(zoomIn()),
    zoomOut: () => dispatch(zoomOut()),
    getUserLocation: () => dispatch(geolocate()),
    changePreferTemp: (preferredTemp) => dispatch(tempPref(preferredTemp))
  }
}

const Options = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppOptions)

export default Options
