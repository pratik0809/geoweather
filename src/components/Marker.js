import React from 'react'
import { Marker } from "react-google-maps"
import  InfoContainer from "../containers/InfoContainer"

const MarkerComponent = ({ toggleInfo, lat, lng }) => (
  <Marker
    position={{ lat, lng }}
    onClick={() => toggleInfo()}
  >
    <InfoContainer />
  </Marker>
)
export default MarkerComponent
