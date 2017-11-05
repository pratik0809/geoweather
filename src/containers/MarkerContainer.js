import { toggleInfo } from '../actions'
import { connect } from 'react-redux'
import Marker from "../components/Marker"

const mapStateToProps = state => {
  return {
    lat: state.coordinates.lat,
    lng: state.coordinates.lng
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleInfo: () => dispatch(toggleInfo())
  }
}

const MarkerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Marker)

export default MarkerContainer
