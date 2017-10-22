import React, { Component } from 'react'
import { InfoWindow } from "react-google-maps"

class InfoWindowComponent extends Component {
  render() {
    const isLoading = this.props.weatherStatus.loading;
    const hasErrored = this.props.weatherStatus.error;

    let contents = null;
      if (isLoading) {
        contents =  <p>Loading...</p>
      }
      else if (hasErrored) {
        contents = <p>Sorry! There was an error loading the weather</p>
      }
      else {
        contents = (
          <div>
             <div id="icon">
               <img src="" />
             </div>
             <div>
               Temperature: { this.props.weatherStatus.success.tempc } °C
               <br />
               Humidity: { this.props.weatherStatus.success.humidity } %
             </div>
           </div>
        )
      }

    return (
      <div>
        {this.props.isInfoShown &&
          <InfoWindow onCloseClick={() => this.props.toggleInfo()}>
            {contents}
          </InfoWindow>
        }
      </div>
    )
  }
}

export default InfoWindowComponent
