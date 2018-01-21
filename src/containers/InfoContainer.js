import { toggleInfo } from '../actions'
import { connect } from 'react-redux'
import InfoWindowComponent from "../components/InfoWindow"

const mapStateToProps = state => {
  return {
    weatherStatus: state.weatherStatus,
    isInfoShown: state.isInfoShown
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleInfo: () => dispatch(toggleInfo())
  }
}

const InfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoWindowComponent)

export default InfoContainer
